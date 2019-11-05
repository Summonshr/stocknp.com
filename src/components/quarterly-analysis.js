import React from 'react'
import Layout from './layout'
import _ from 'lodash';
import Instruction from './instruction'
import SeeMore from './see-more';
import Name from './name'
import axios from 'axios'
export default class QA extends React.Component {
    constructor(props) {
        super(props);
        this.state = { banks: [], order: 'asc', sort: 'name', search: '', names: {}, ltps: {} };

        this.setSort = this.setSort.bind(this);
        this.getBanks = this.getBanks.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.getPE = this.getPE.bind(this);
    }

    componentDidUpdate() {
        const { order, sort } = this.state;
        localStorage.setItem('quarterly-analysis', JSON.stringify({ order, sort }))
    }

    componentDidMount() {
        axios.get('https://json.stocknp.com/report.json').then(response => {
            let content = JSON.parse(localStorage.getItem('quarterly-analysis'))
            if (!content) {
                content = {};
            }
            this.setState({
                banks: response.data.filter(d => this.props.type === '' || d.type === this.props.type),
                ...content
            });
        });
    }

    getLTP(bank) {
        return this.state.ltps[bank.name.toUpperCase()] || bank.price;
    }

    setSort(sort) {
        this.setState({ sort, order: sort !== this.state.sort ? 'asc' : (this.state.order === 'asc' ? 'desc' : 'asc') });
    }

    getBanks() {
        let results = this.state.banks.filter(bank => Boolean(bank.earning_per_share)).map(bank => {
            bank.pe_ratio = this.getPE(bank);
            return bank;
        })

        results = _.orderBy(results, this.state.sort, this.state.order);

        return results;
    }

    getPE(bank) {

        return bank.closing_price / bank.earning_per_share;
    }

    isWorthInvestment(bank) {

        const pe = this.getPE(bank);

        if (pe < 6) {
            return 'bg-green-400 text-green-700';
        }

        if (pe < 10) {
            return 'bg-green-300 text-green-700';
        }

        if (pe < 15) {
            return 'bg-green-100 text-green-700';
        }

        if (pe < 30) {
            return 'bg-red-100 text-red-700';
        }

        if (pe < 40) {
            return 'bg-red-300 text-red-700';
        }

        return 'bg-red-800 text-red-100';
    }

    render() {
        const banks = this.getBanks();

        return <Layout title={'Quarterly analysis (' + this.props.title + ')'}>
            <table className="mb-0">
                <thead>
                    <tr className="border-b bg-gray-300">
                        <td className="p-1 text-sm pointer" onClick={() => this.setSort('code')}>{this.props.title || 'Bank'}</td>
                        <td className="p-1 text-sm pointer text-right font-sans" onClick={() => this.setSort('current_quarter')}><span title="In Millions">75/76</span></td>
                        <td className="p-1 text-sm hidden sm:table-cell pointer text-right font-sans" onClick={() => this.setSort('previous_quarter')}><span title="Previous Quarter (In Millions)">PQ</span></td>
                        <td className="p-1 text-sm hidden sm:table-cell pointer text-right font-sans" onClick={() => this.setSort('previous_year')}><span title="In Millions">74/75</span></td>
                        <td className="p-1 text-sm pointer text-right font-sans" onClick={() => this.setSort('earning_per_share')} title="Earning per share (Higher the better)">EPS <span className="sm:inline hidden text-xs text-gray-500">(Rs.)</span></td>
                        <td className="p-1 text-sm pointer text-right font-sans" onClick={() => this.setSort('closing_price')}>Price</td>
                        <td className="p-1 text-sm pointer text-right font-sans" onClick={() => this.setSort('pe_ratio')} title="Price per EPS (Lower the better)">P/E</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        banks.map(bank => <tr key={bank.code} className={this.isWorthInvestment(bank) + ' text-sm sm:text-base'}>
                            <td className="p-1 sm:p-2 uppercase" title={bank.name}><Name code={bank.code} /></td>
                            <td className="p-1 sm:p-2 text-right">{bank.current_quarter}</td>
                            <td className="p-1 sm:p-2 hidden sm:table-cell text-right">{bank.previous_quarter}</td>
                            <td className="p-1 sm:p-2 hidden sm:table-cell text-right">{bank.previous_year}</td>
                            <td className="p-1 sm:p-2 text-right">{bank.earning_per_share.toFixed(2)}</td>
                            <td className="p-1 sm:p-2 text-right"><span className="p-1 sm:p-2 hidden md:inline">Rs. </span>{bank.closing_price}</td>
                            <td className="p-1 sm:p-2 text-right">{bank.pe_ratio.toFixed(2)}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Instruction>Hold the stocks that shows green signal. </Instruction>
            {this.props.links && <SeeMore links={this.props.links} />}
        </Layout>;
    }
}
