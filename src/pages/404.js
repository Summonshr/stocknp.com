import React from 'react';
import query from 'query-string';
import Layout from '../components/layout';
import News from '../components/news';
import Axios from 'axios';
import Dividend from '../components/dividend';
import Graph from '../components/graph';
import _ from 'lodash';
import ReactLoading from 'react-loading';

export default class Company extends React.Component {
    state = {
        dividends: [],
        company: {},
        history: [],
        code: ''
    };

    constructor(props){
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        const code = this.props.location.pathname.split('/')[2];
        this.setState({ code });
        const companyUrl = 'https://api.stocknp.com/company/' + code + '.json';
        Axios.get(companyUrl).then(response => {
            this.setState({ company: response.data.companies });
        });
    }
    render() {
        const { company } = this.state;
        const code = this.props.location.pathname.split('/')[2];
        return <Layout title={[company.name, company.code].join(' - ')}>
            {!company.code && <div style={{ height: '20px' }}><ReactLoading type="bubbles" color="#1f9d55" width={'100px'} /></div>}
            {company.code && <div>
                <div className="shadow mb-8 bg-gray-300">
                    <h3 className="w-full p-4 text-center text-green-500 border-b mb-2 flex flex-wrap justify-between"><span>Company Info</span><span><a href={"https://sharesansar.com/company/" + company.code} target="_blank" rel="noopener noreferrer" className="inline-block align-middle"><img className="h-6 mb-0 border-none w-6" src="https://contents.sharesansar.com/site/images/android-chrome-192x192.png" alt="" /></a><a href={"http://www.nepalipaisa.com/CompanyDetail.aspx/barun/?quote=" + company.code} target="_blank" rel="noopener noreferrer" className="p-2 align-middle inline-block"><img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/18813921_729308693933972_5907380640178527430_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm7-1.fna&oh=ed3f15f3f241db36ee161a0c3ee73c7d&oe=5D75B257" className="w-6 h-6 mb-0 border-none" alt="" /></a></span></h3>
                    <div className="flex flex-wrap justify-between">
                        <div className="w-1/2">
                            <ul className="list-reset m-0 p-4 pt-0">
                                {_.map(company.profile, (c, i) => <li key={i} className={"mb-0 leading-loose text-sm"}><span className="text-gray-700">{i}</span>: <span className="text-gray-900" dangerouslySetInnerHTML={{ __html: c }}></span></li>)}
                            </ul>
                        </div>
                        <div className="w-1/2 pr-4">
                            {company.report && <table className="w-auto float-right bg-teal-100 shadow">
                                    <tbody>
                                        <tr><td className="border p-1 text-center text-gray-700 bg-teal-100" colSpan="2">Performance</td></tr>
                                        <tr className="mb-0"><td className="text-gray-700 border text-sm m-0 p-1 pl-2">Earning per Share:</td><td className={"m-0 p-1 border pr-2 text-right  font-semibold text-lg " + (company.report.earning_per_share > 25 ? 'text-green-500' : 'text-red-700')}>{company.report.earning_per_share || 'N/A'}</td></tr>
                                        <tr className="mb-0"><td className="text-gray-700 border text-sm m-0 p-1 pl-2">Current Quarter:</td><td className="m-0 p-1 border pr-2 text-right text-gray-700 font-semibold text-lg">{company.report.current_quarter || 'N/A'}</td></tr>
                                        <tr className="mb-0"><td className="text-gray-700 border text-sm m-0 p-1 pl-2">Previous Quarter:</td><td className="m-0 p-1 border pr-2 text-right text-gray-700 font-semibold text-lg">{company.report.previous_quarter || 'N/A'}</td></tr>
                                        <tr className="mb-0"><td className="text-gray-700 border text-sm m-0 p-1 pl-2">Previous Year:</td><td className="m-0 p-1 border pr-2 text-right text-gray-700 font-semibold text-lg">{company.report.previous_year || 'N/A'}</td></tr>
                                    </tbody> 
                                </table>}
                        </div>

                    </div>
                </div>
                <Graph code={code} />
                <Dividend code={code} />
                <News code={code} />
            </div>}
        </Layout>
    }
}