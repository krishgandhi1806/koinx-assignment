import React, { useEffect, useState } from 'react'
import axios from "axios";

function TrendingCoins() {

    const [coins, setCoins]= useState([]);

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/search/trending").then(res=> {setCoins(res.data.coins.slice(0,3))
        // console.log(res.data.coins.slice(0,3))
      });
    },[])

    // if(coins==[]){
    //   return (
    //     "Loading!"
    //   )
    // }

  return (
    <div className="bg-white p-4 flex flex-col gap-4 rounded-lg">
      <div className="font-semibold text-[1.3rem]" >Trending Coins (24H)</div>
      {
        coins.length>0?coins.map((coin)=>{
          return(
            <div key={coin.item.id} className="flex gap-4">
              <img className="w-[2rem]" src={coin.item.small} alt="" />
              {coin.item.name}
            </div>
          )
        }):"Loading!"
      }
    </div>
  )
}

export default TrendingCoins
