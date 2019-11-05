import React from 'react'
import Warren from '../images/warren-buffet.jpg'
import quotes from './quotes'
import randomItem from 'random-item';


export default () => {
    const quote = randomItem(quotes);
    return <div className="pt-1 md:pt-0 md:pl-1 bg-orange shadow">
        <div className="border-l md:border-l-0 md:border-t border-r border-b print-none mb-4 bg-gray-100 p-2 flex flex-wrap justify-between">
            {quote.image && <div className="w-full md:w-1/4 text-center inline">
                <img src={quote.image || Warren} className="rounded-full object-cover w-32 h-32 mb-0 align-middle inline" alt="" />
            </div>}
            <div className={(quote.image && "md:w-3/4 ") + ("w-full flex flex-wrap flex-col justify-center p-2 text-center md:text-left")}>
                <span className="align-middle text-gray-900 leading-normal">
                    {quote.quote}
                </span>
                <span className="text-gray-500">- {quote.author}</span>
            </div>
        </div>
    </div>
}