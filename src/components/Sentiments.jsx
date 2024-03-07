import React from 'react'
import Slider from "react-slick";
import sentiment_1 from "../assets/sentiment_1.png"
import sentiment_2 from "../assets/sentiment_2.png"

function CustomSlides({image, bgcol, index}){

    const colors={
        blue: "bg-[#E8F4FD]",
        green: "bg-[#EBF9F4]" 
    }

    return(
        <div index={index} className={`flex ${colors[bgcol]} items-start justify-center rounded-xl ml-[1rem] text-black p-4 pl-0`}>
            <div className="">
                <img className="w-[20rem] h-[4rem] lg:w-[12rem] lg:h-[5rem]" src={image} alt="News" />
            </div>
            <div className="flex items-center gap-2 flex-col text-xs">
                <div className="font-semibold text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, atque animi cumque 
                </div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facilis excepturi nobis iste beatae rem autem mollitia nostrum dolor ea inventore illum laborum, odio voluptate placeat sunt cupiditate aliquam vel
            </div>
        </div>
    )
}



function Sentiments() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%"
      };

  return (
    <div className="slider-container">
        <div className="bg-white p-4 mt-[1rem] rounded-lg flex flex-col gap-4">
            <div className="text-[1.3rem] font-semibold">Sentiments</div>
            <div className="font-semibold text-gray-500">Key Events</div>
            <Slider {...settings}>
                <CustomSlides image={sentiment_2} bgcol={"blue"} index={1}/>
                <CustomSlides image={sentiment_1} bgcol={"green"} index={2}/>
            </Slider>
            <div className="font-semibold text-gray-500">Analyst Estimates</div>
            <div className="flex lg:gap-[2rem] gap-4 items-center justify-start">
                <div className="w-[4rem] h-[4rem] rounded-full inline-flex items-center justify-center lg:w-[8rem] lg:h-[8rem] bg-[#EBF9F4] text-[#0FBA83] lg:text-[2rem] font-semibold">76%</div>
                <div className="flex gap-4 flex-col text-gray-500">
                    <div className="flex justify-start items-center">
                        <div className="inline-block pr-4">Buy</div>
                        <div className="lg:w-[20rem] h-[.3rem] w-[4rem]  rounded-lg inline-block bg-[#0FBA83]"></div>
                        <div className="inline-block pl-4">76%</div>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="inline-block pr-3">Hold</div>
                        <div className="lg:w-[2rem] h-[.3rem] w-[1rem] rounded-lg inline-block bg-[#C7C8CE]"></div>
                        <div className="inline-block pl-4">8%</div>
                    </div>
                    <div className="flex  justify-start  items-center">
                        <div className="inline-block pr-4">Sell</div>
                        <div className="lg:w-[20rem] h-[.3rem] w-[2.5rem] rounded-lg inline-block bg-[#F7324C]"></div>
                        <div className="inline-block pl-4">16%</div>
                    </div>
                </div>
            </div>
        </div>  

    </div>
  )
}

export default Sentiments
