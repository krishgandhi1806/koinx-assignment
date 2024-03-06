import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Chart from './components/Chart'
import ChartComponent from './components/ChartComponent'

function App() {

  return (
    <div className="bg-[#EFF2F5] h-auto">
    <NavBar/>
    <div className="ml-[3rem] mr-[3rem] mt-[1rem]" >
      <ChartComponent/>
    </div>
    {/* <Chart/> */}
    </div>
  )
}

export default App
