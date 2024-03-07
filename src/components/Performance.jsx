import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Performance() {

    const [data, setData]= useState("");

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true" , {}, {
            "Content-Type": "application/json"
        }).then((res)=> setData(res.data));
        // setData(result.data);
    }, [])
    
    if(data===""){
        return(
            "Loading!"
        )
    }
    else{

  return (
    <div className="bg-white rounded-lg p-6 mt-4 flex gap-8 flex-col">
        {/* {console.log(data)} */}
        <div className="text-[1.3rem] font-semibold">Performance</div>
        <div className="flex justify-between gap-2 items-center">
            <div className="flex flex-col">
                <span className="whitespace-nowrap text-xs">Today's Low</span>
                <span className="text-sm">46,930.22</span>
            </div>
            <div className="h-1 w-[6rem] lg:w-[35rem] rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            <div className="flex flex-col text-right ">
                <span className="whitespace-nowrap text-xs">Today's High</span>
                <span className="text-sm">49,343.83</span>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col ">
                <span className="whitespace-nowrap text-xs">52W Low</span>
                <span className="text-sm">16,930.22</span>
            </div>
            <div className="h-1 w-[6rem] lg:w-[35rem] rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            <div className="flex flex-col text-right">
                <span className="whitespace-nowrap text-xs">52w High</span>
                <span className="text-sm">49,743.83</span>
            </div>
        </div>
        <div>
            <div>Fundamentals</div>
            <div className="flex justify-between flex-col lg:flex-row whitespace-nowrap gap-4 lg:gap-0 mt-4">
                <div className="flex flex-col gap-4"> 
                    <div className="flex justify-between gap-[5rem] text-[.65rem] lg:text-[.75rem] border-b-2 pb-3 pr-2 lg:gap-[12rem]">
                        <span className="text-[#768396]">Bitcoin Price</span>
                        <span className="font-semibold">${data.bitcoin.usd.toLocaleString("en-US")}</span>
                    </div>
                    <div className="flex justify-between gap-[2rem] text-[0.65rem] lg:text-[.75rem] border-b-2 pb-3 pr-2">
                        <span className="text-[#768396]">24h Low / 24h High</span>
                        <span className="font-semibold">$16,382.07 / $16,874.12</span>
                    </div>
                    <div className="flex justify-between gap-[3rem] text-[.65rem] lg:text-[.75rem] border-b-2 pb-3 pr-2">
                        <span className="text-[#768396]">7d Low / 7d High</span>
                        <span className="font-semibold">$16,382.07 / $16,874.12</span>
                    </div>
                    <div className="flex justify-between gap-[4rem] text-[.65rem] lg:text-[.75rem] border-b-2 pb-3 pr-2">
                        <span className="text-[#768396]">Trading Volume</span>
                        <span className="font-semibold">${data.bitcoin.usd_24h_vol.toLocaleString("en-US")}</span>
                    </div>
                    <div className="flex justify-between gap-[5rem] text-[.65rem] lg:text-[.75rem] border-b-2 pb-3 pr-2">
                        <span className="text-[#768396]">Market Cap Rank</span>
                        <span className="font-semibold">#1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4"> 
                    <div className="flex justify-between gap-[4.5rem] text-[.65rem] lg:text-[.75rem] border-b-2 pb-3 pr-2 lg:gap-[10rem]">
                        <span className="text-[#768396]">Market Cap</span>
                        <span className="font-semibold">${data.bitcoin.usd_market_cap.toLocaleString("en-US")}</span>
                    </div>
                    <div className="flex justify-between gap-[5rem] text-[.65rem] lg:text-[.75rem] border-b-2 pb-3 pr-2">
                        <span className="text-[#768396]">Market Cap Dominance</span>
                        <span className="font-semibold">38.343%</span>
                    </div>
                    <div className="flex justify-between gap-[5rem] text-[.65rem] lg:text-[.75rem] border-b-2 pb-3 pr-2">
                        <span className="text-[#768396]">Volume / Market Cap</span>
                        <span className="font-semibold">0.0718</span>
                    </div>
                    <div className="flex justify-between gap-[3rem] text-[.65rem] lg:text-[.75rem] border-b-2 pr-2 pb-1 pt-2 mt-[-1rem] items-center">
                        <span className="text-[#768396]">All-Time High</span>
                        <div className="flex flex-col text-right p-[-1rem]">
                            <span className="font-semibold">$69,044.77 <span className="text-red-500">-75.6%</span></span>
                            <span className="text-[.6rem]">Nov 10, 2021 (about 1 year)</span>
                        </div>
                    </div>
                    <div className="flex justify-between gap-[3rem] text-[.65rem] lg:text-[.75rem] border-b-2 mt-[-1rem] pb-1 pt-2 pr-2 items-center">
                        <span className="text-[#768396]">All-Time Low</span>
                        <div className="flex flex-col text-right">
                            <span className="font-semibold">$67.81 <span className="text-green-500">24729.1%</span></span>
                            <span className="text-[.6rem]">Jul 06, 2013 (over 9 years)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}
}

export default Performance
