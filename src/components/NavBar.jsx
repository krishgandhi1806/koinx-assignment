import React from 'react'

function NavBar() {
  return (
    <div className="drop-shadow-sm">
      <nav className="h-[5rem] bg-white flex md:justify-between pl-[2rem] md:pl-[3rem] md:pr-[3rem]">
        <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="" />
        <div className="hidden md:flex  gap-7 items-center justify-center font-medium cursor-pointer">
        <span>Crypto taxes</span>
        <span>Free Tools</span>
        <span>Resource Center</span>
        <button className=" bg-[#266BEA] h-[2rem] p-[1.2rem] flex justify-center items-center rounded-md text-white hover:text-[#323131] transition">Get Started</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
