import _ from 'lodash';
import React from 'react';
import Axios from 'axios';
import ReactImageMagnify from 'react-image-magnify';

export default class News extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			news:[],
			index:'announcements'
		}

		this.componentDidMount = this.componentDidMount.bind(this)

	}

	componentDidMount(){

		const newsUrl = 'https://api.stocknp.com/news/' + this.props.code + '.json';

        Axios.get(newsUrl).then(response => {
            this.setState({ news: response.data.data });
		});
		
	}

	render(){

		const news = _.groupBy(this.state.news, e=>e.type);

		return <div className="relative">
			<ul className="p-0 m-0">
			{Object.keys(news).map((e)=><li key={e} onClick={()=>this.setState({index:e})} className={"cursor-pointer inline p-2  font-sans mx-2 font-semibold tracking-wide " + (this.state.index === e ? 'bg-blue-700 text-blue-100' : 'bg-blue-100 text-blue-700 hover:bg-blue hover:text-blue-100')}>{_.capitalize(e)}</li>)}
			</ul>
			<div className="mt-2 px-2">
                <ul className="ml-4">
                {news[this.state.index]  && news[this.state.index].map(news=>{
                        return <li className={(news.text.indexOf('net profit') > -1 ? 'bg-blue-100 p-1 ' : (news.text.indexOf('net loss') > -1 ? 'bg-red-100 p-1 ' : ''))} key={news.id}>
							<a onClick={(event)=>(news.description && event.preventDefault()) || this.setState({popup: news.description})} className={"font-semibold " + (news.text.indexOf('net profit') > -1 ? 'text-blue-500' : (news.text.indexOf('net loss') > -1 ? 'text-red-500' : ''))} target="_blank" rel="noopener noreferrer" href={news.href}>{news.text}
							<span className="text-gray-500 font-normal"> - {news.date}</span>
							</a>
						</li>
				})}
				</ul>
			</div>
			{this.state.popup && <div className="absolute top-0 z-50 w-full">
				<a class="bg-red-300 text-red-400 absolute top-0 right-0 mt-2 mr-2 w-6 h-6 text-center cursor-pointer rounded-full hover:bg-red-500 hover:text-white" onClick={()=>this.setState({popup: null})}>X</a>
				<img src={this.state.popup} className="w-full"/>
			</div>}	
		</div>

	}
	
}