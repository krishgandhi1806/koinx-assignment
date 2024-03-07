import React from 'react'
import Chart from './Chart'
import GetStarted from './GetStarted'

function ChartComponent() {
  return (
    <>
    <div className="mb-2" >CryptoCurrency &gt;&gt; <span className="font-semibold">Bitcoin</span></div>
    <div className="w-auto flex flex-col md:flex-row justify-between">
      <div className="h-[35rem] w-auto md:w-[50rem] md:h-[40rem]">
        <Chart/>
      </div>
      <div className="hidden md:flex">
      {/* <GetStarted /> */}
      </div>
    </div>
    </>
  )
}

export default ChartComponent
