import React from 'react'
import Layout from '../../components/layout'
import Content from '../../components/content'
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'
import Modal from 'react-responsive-modal'
 
// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000
})
const fetcher = axios.create({
    adapter: cache.adapter
})
const url ='https://api.stocknp.com/companies';

export default class Charts extends React.Component{
    state={ code:'', companies: [], focus: '' }

    constructor(props){
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        fetcher.get(url).then(response=>this.setState(response.data))
    }

    render(){
        const {focus} = this.state;
        return <Layout enableChat={false} title="Chart">
            <Content>
                <input placeholder="e.g PRVU" className="border w-full px-2" value={this.state.code} onChange={event=>this.setState({code: event.target.value})}/>
            </Content>
            <div className="flex border-b cursor-pointer flex-wrap justify-between">
                <span>Name</span>
                <span>Price</span>
            </div>
            {this.state.companies.filter(e=>e.latest_share_price).map(company=><div onClick={()=>this.setState({focus:company})} key={company.name} title={company.name} className="flex border-b cursor-pointer flex-wrap justify-between">
                <span>{company.name} ({company.code})</span>
                <span>{company.latest_share_price}</span>
            </div>)}
            {focus && <Modal classNames={{modal: 'w-full h-full max-w-xl'}} onClose={()=>this.setState({focus: ''})} open={true}>
                <h3 className="w-full mb-1">
                    {focus.name} ({focus.code})
                </h3>
                <div className="w-full border-t">
                    <span>Dividend History</span>    
                </div> 
            </Modal>}
        </Layout>
    }
}
