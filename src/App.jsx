import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Chart from './components/Chart'
import ChartComponent from './components/ChartComponent'
import TrendingCoins from './components/TrendingCoins'
import GetStarted from './components/GetStarted'
import InfoTab from './components/InfoTab'
import Performance from './components/Performance'
import Sentiments from './components/Sentiments'
import About from './components/About'
import YouMayAlsoLike from './components/YouMayAlsoLike'

function App() {

  return (
    <>
    <NavBar/>
    <div className="flex bg-[#EFF2F5] p-[1rem] lg:p-[3rem] gap-[1rem] flex-col md:flex-row">
      <div className="bg-[#EFF2F5] h-auto md:w-[70%]">
        <div className="mt-[0rem]" >
          <ChartComponent/>
          <InfoTab/>
          <Performance/>
          <Sentiments/>
          <About/>
          
        </div>
      </div>
      <div className="mt-[1rem] flex flex-col gap-4">
        <GetStarted/>
        <TrendingCoins/>
      </div>
    </div>
    <YouMayAlsoLike/>
    </>
  )
}

export default App
