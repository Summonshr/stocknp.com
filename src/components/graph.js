import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend
} from 'recharts';
import Axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

const dates = {
    l7d: {from: moment().subtract(7,'d').format('YYYY-MM-DD'), to: moment().format('YYYY-MM-dd')},
    mtd: {from: moment().startOf('month').format('YYYY-MM-DD'), to: moment().format('YYYY-MM-dd')},
    l3d: {from: moment().subtract(30,'d').format('YYYY-MM-DD'), to: moment().format('YYYY-MM-dd')},
    l6m: {from: moment().subtract(6,'months').format('YYYY-MM-DD'), to: moment().format('YYYY-MM-dd')},
    ytd: {from: moment().startOf('year').format('YYYY-MM-DD'), to: moment().format('YYYY-MM-dd')},
    l1y: {from: moment().subtract(1,'year').format('YYYY-MM-DD'), to: moment().format('YYYY-MM-dd')},
    atm: {from: '', to: ''},
}
export default class Graph extends React.Component {
    state = { histories: [], ...dates.ytd, selected: 'ytd' };

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {

        const { code } = this.props;

        const historyUrl = 'https://api.stocknp.com/history/' + code + '.json';

        Axios.get(historyUrl).then(response => {
            this.setState({ histories: response.data.histories.filter(h => (h.closing_price > 0)).map(h => ({ Price: h.closing_price, name: h.date })) });
        });

    }

    render() {
        let { histories } = this.state;
        if(this.state.from && this.state.to){
            histories = histories.filter(h => {
                return (new Date(h.name)).getTime() > (new Date(this.state.from)).getTime();
            });
        }
        
        return <div className="mb-8 w-full px-4">
            <div className="w-full mb-4 flex justify-end">
                <select name="select_date" onChange={event=>{
                    this.setState(dates[event.target.value]);
                    this.setState({selected: event.target.value})
                }} value={this.state.selected} className="border p-1 float-right block" id="">
                    <option value="l7d">Last 7 days</option>
                    <option value="mtd">Month to day</option>
                    <option value="l3d">Last 30 days</option>
                    <option value="l6m">Last 6 months</option>
                    <option value="ytd">Year to Day</option>
                    <option value="l1y">Last year</option>
                    <option value="atm">All time</option>
                </select>
            </div>
            <div className="w-full">
                {this.state.histories.length > 0 &&
                    <LineChart
                        width={750}
                        height={300}
                        data={histories}
                    >
                        <YAxis domain={[(_.minBy(histories,'Price') || {Price: 0}).Price - 20, (_.maxBy(histories,'Price') || {Price: 0}).Price + 20]} />
                        <XAxis dataKey="name"/>
                        <Legend verticalAlign="top" height={36} />
                        <Tooltip />
                        <Line dot={false} type="monotone" dataKey="Price" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                }
            </div>
        </div>
    }
}