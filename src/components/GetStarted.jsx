import React from 'react'
import imgUrl from "../assets/getStartedimg.png"

function GetStarted() {
  return (
    <div className=" bg-[#0052FE] flex flex-col items-center rounded-xl p-7 text-white">
      <div className="text-white font-bold lg:text-[1.3rem] text-[1rem] flex flex-col justify-center items-center">
        <div>Get Started with KoinX</div>
        <div>for FREE</div>
      </div>
      <div className="text-center text-[.8rem] mt-3 leading-5">
        With our range of features that you can equip for free, Koinx allows you to be more educated and aware of your tax reports.
      </div>
      <img src={imgUrl} className="h-[14rem] mt-[-1rem]" alt="" />
      <button className=" bg-white h-[.5rem] p-[1.2rem] flex justify-center items-center rounded-md text-black font-semibold hover:text-[#5d5757] transition text-sm">Get Started for FREE &#8594;</button>
    </div>
  )
}

export default GetStarted
