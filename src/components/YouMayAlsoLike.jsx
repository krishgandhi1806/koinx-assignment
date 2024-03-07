import React , {useState, useEffect} from 'react'
import axios from "axios";
import Slider from "react-slick";


function Card({coindata}){
    return(
        <div className="flex flex-col m-1 bg-white p-4 rounded-lg flex-wrap shrink gap-2 border-[0.1rem]">
            <div className="flex  gap-2 items-center justify-start">
                <img className="rounded-lg w-[1rem] h-[1rem]" src={coindata.item.thumb} alt="" />
                <div>{coindata.item.symbol}</div>
            </div>
            <div>{coindata.item.data.price}</div>
            <img src={coindata.item.data.sparkline} alt="Sparkline" />
        </div>
    )
}

function YouMayAlsoLike() {

    const [coins, setCoins]= useState([]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: window.innerWidth < 768 ? 2 : 5,
        slidesToScroll: window.innerWidth < 768 ? 2 : 5 ,
        centerMode: false,
        centerPadding: "25%",
      };

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/search/trending").then(res=> {setCoins(res.data.coins)
        // console.log(res.data.coins.slice(0,3))
      });
    },[])

    return (
        <div className="flex-wrap slider-container mt-[3rem] m-8">
            <div className="font-semibold mb-4">You May Also Like</div>
            <Slider {...settings}>
            {
                coins.map((coin, index)=>{
                    return(
                        <div key={index}>
                        <Card coindata={coin}/>
                        </div>
                    )
                })
            }
            </Slider>
            {/* Customizing Slider arrows */}
            <style jsx="true">{`
                .slick-prev:before {
                    /* color: red; // Change arrow color here
                    background-color: yellow */
                    left: -20px

                }

                .slick-next:before {
                    /* color: green; // Change arrow color here */
                    /* right: -25px; */
                }
                .slick-next {
                    /* color: green; // Change arrow color here */
                    right: -6px;
                    top: 80px;
                    filter: drop-shadow(.1px .05px .05px grey);
                }
                .slick-prev {
                    /* color: green; // Change arrow color here */
                    left: -7px;
                    top: 80px;
                    filter: drop-shadow(.1px .05px .05px grey);
                    z-index: 4
                }
            `}</style>
        </div>
    )
}

export default YouMayAlsoLike
