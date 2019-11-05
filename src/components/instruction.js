import React from 'react'

export default ({ children }) => (
  <div className="font-sans px-2">
    <span className="text-xs md:text-base text-gray-500 mr-2">Strategy:</span>
    <b className="px-2 text-sm lg:text-lg bg-green-300 transition hover:bg-green-800 hover:text-green-900 text-green-700 font-sans fond-bold">{children}</b>
  </div>
)