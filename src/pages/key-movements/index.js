import React from 'react'
import Axios from 'axios'
import Layout from '../../components/layout'
import ReactLoading from 'react-loading';
import _ from 'lodash';
import Name from '../../components/name';

export default class Movements extends React.Component {
    constructor(props) {
        super(props)
        this.state = { movements: [] }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        Axios.get('https://api.stocknp.com/key-movements').then(({ data }) => this.setState({ movements: data }))
    }

    render() {
        let rows = this.state.movements;
        let keys = Object.keys(rows.length > 0 ? rows[0] : []).filter(k => !['sn', 'number'].includes(k));
        let group = _.values(_.groupBy(rows, 'code'))

        return <Layout title="Key movements on current floorsheet">
            {group.length === 0 && <div style={{ height: '20px' }}><ReactLoading type="bubbles" color="#1f9d55" width={'100px'} /></div>}
            {group.length > 0 && <div className="p-2">
                <table>
                <thead>
                    {keys.map((k,i) => <th className={i === 0 ? "text-gray-700 font-semibold antialiased p-0" : "text-gray-700 font-semibold antialiased text-right p-0"} key={k}>{_.capitalize(k)}</th>)}
                </thead>
                <tbody>
                    {group.map((rows, index) => {
                        let length = rows.length;
                        rows = rows.splice(0,5)
                        return rows.map((row, index) => <tr title={"Total: "+length} className={(rows.length - 1)=== index ? 'border-b-2 border-orange-600' : ''} key={row.sn}>
                            {keys.map((k,i) => <td className={i === 0 ? "p-1" : "p-1 text-right"} key={k}>{i === 0 ? <Name code={row[k]}/> : parseInt(row[k] || 0).toLocaleString()}</td>)}
                        </tr>)
                    })}
                </tbody>
            </table>
            </div>}
        </Layout>
    }
}
