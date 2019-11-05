import React from 'react';
import Axios from 'axios';
import _ from 'lodash';

export default class Dividend extends React.Component {
    state = {
        dividends: []
    };

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        const dividendUrl = 'https://api.stocknp.com/dividends/' + this.props.code + '.json';
        Axios.get(dividendUrl).then(response => {
            this.setState({ dividends: response.data });
        });
    }
    render() {
        let results = _.groupBy(_.sortBy(this.state.dividends, 'distribution_date').reverse(), 'distribution_date')
        return <div className="hover:bg-green-100 bg-green-100 p-2 transition hover:shadow hover:pb-1 mb-8">
            <legend className="font-bold px-2">Dividend History</legend>
            <table className="font-thin text-gray-700">
                <thead>
                    <tr>
                        <th className="p-2">Year</th>
                        <th className="p-2">Bonus</th>
                        <th className="p-2">Cash</th>
                        <th className="p-2">Right</th>
                    </tr>
                </thead>
                <tbody className='text-gray-900'>
                    {_.map(results, (tr, d) => <tr key={d}>
                        <td className="p-2">{d.replace('(', '').replace(')','').replace('FY: ','')}</td>
                        <td className="p-2">{(_.find(tr, { type: 'bonus' }) || {dividend: 0}).dividend}%</td>
                        <td className="p-2">{(_.find(tr, { type: 'cash' }) || {dividend: 0}).dividend}%</td>
                        <td className="p-2">{(_.find(tr, { type: 'right' }) || {dividend: 0}).dividend}%</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}