import React, { useState } from 'react'

function InfoTab() {
  return (
    <div>
      <ul className="flex font-medium overflow-hidden">
        <li className="text-blue-700 border-blue-700 p-2 border-b-2">Overview</li>
        <li className="p-2 border-b-2">Fundamentals</li>
        <li className="p-2 border-b-2 whitespace-nowrap">News Insights</li>
        <li className="p-2 border-b-2">Sentiments</li>
        <li className="p-2 border-b-2">Team</li>
        <li className="p-2 border-b-2">Technicals</li>
        <li className="p-2 border-b-2">Tokenomics</li>
      </ul>
    </div>
  )
}

export default InfoTab
