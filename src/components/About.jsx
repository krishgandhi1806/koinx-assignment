import React from 'react'

function About() {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg mt-4 p-6">
      <div className="text-[1.3rem] font-semibold">About Bitcoin</div>
      <div className="flex flex-col gap-2 border-b-[.1rem] pb-5">
        <div className="font-semibold text-[1rem]">What is Bitcoin?</div>
        <div>Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions.</div>
      </div>
    </div>
  )
}

export default About
