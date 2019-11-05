import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome as home, faPrint as print, faSearch as search } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

export default class Title extends React.Component {

    state = {code: ""}

    render(){
        const { title, previous } = this.props
        return  (
            <div className="flex justify-between bg-green-500 text-green-100 p-2 items-baseline h-auto sm:overflow-hidden">
                <div className="flex items-baseline">
                    <Link to="/">
                        <FontAwesomeIcon className="text-green-100" icon={home} />
                    </Link>
                    <h3 className="pl-2 mb-0 pl-2 mb-0 text-sm sm:text-base font-normal leading-normal">
                        { previous && <span><Link  className="text-green-100" to={previous.link}>{previous.title} </Link>/ </span>}{ title }
                    </h3>
                </div>
                <div>
                    <div className="absolute px-2 pl-1">
                        <FontAwesomeIcon className=" text-green-500" icon={search} />
                    </div>
                    <input type="text" name="code" onKeyDown={event=>{
                        event.key === 'Enter' && (window.location.href = '/company/'+this.state.code)               
                    }} onChange={event=>this.setState({code: event.target.value})} className="mr-2 h-8 w-32 bg-green-700 border border-green-500 p-2 pl-6 text-white font-thin" placeholder="Search..."/>   
                    <span>
                        <FontAwesomeIcon title="Print this page" className="print-none cursor-pointer" onClick={() => global && global.print()} icon={print} />
                    </span>
                </div>
            </div>
        )
        
    }
}