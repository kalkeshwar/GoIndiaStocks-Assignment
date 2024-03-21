"use client"

import React,{useState} from "react";
import DiscussionCard from "@/components/DiscussionCard";
import SideBar from "@/components/SideBar";
import { marketStories, discussionData } from "@/data/SampleData";
import MarketStoryCard from "@/components/MarketStoryCard";
import { ArrowIcon, LeftArrowIcon } from "@/components/Icons";

export default function Home() {
  const [open,setIsOpen] = useState(false)
  const [marketShow, setMarketShow] =  useState(true)
  const [discussionShow, setDiscussionShow] =  useState(false)

  const handleOpenSideBar = ()=>{
    setIsOpen((prev)=>!prev)
  }

  const handlemarketDisplay = ()=>{
    setMarketShow(true)
    setDiscussionShow(false)
  }

  const handlediscussionDisplay =()=>{
    setDiscussionShow(true)
    setMarketShow(false)
  }

  return (
    <div className="w-[100vw] vsm:relative bg-white lg:static h-screen flex flex-row gap-5 lg:pr-5 vsm:p-2 justify-between">
      <div className={`lg:w-[30%] vsm:w-[89%] vsm:absolute lg:static vsm:top-0 vsm:left-0 vsm:z-20 h-[100vh] ${open?"flex":"hidden"} `}>
        <SideBar/>
      </div>
      <div className={`w-8 vsm:absolute lg:static h-screen flex flex-row justify-center items-center ${open?"lg:-ml-5 vsm:left-[89%]":""} ` }>
        <div className={`bg-[#0c4a6ee1] text-white w-full h-[5rem] cursor-pointer z-20`} onClick={handleOpenSideBar}>
          {open?<LeftArrowIcon className='w-full h-full'/>:<ArrowIcon className='w-full h-full'/>}
          
        </div>
      </div>
      <div className={`lg:flex flex-col w-[60%] gap-2 pt-1 vsm:hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200`}>
        <div className="bg-gray-200 w-[15rem] rounded-sm flex justify-center items-center text-red-500 uppercase text-xl" onClick={handlediscussionDisplay}>discussion forum</div>
        <div className="flex flex-col gap-10 w-full">
          {
            discussionData.map((item,id)=>(
              <DiscussionCard key={id} name={item.name} sector={item.sector} Description={item.Description} time={item.time} likes={item.likes} comments={item.comments} views={item.views}/>
            ))
          }
        </div>
      </div>
      <div className="lg:flex flex-col gap-5 w-[25%] pt-1 vsm:hidden overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div className=" flex uppercase w-[13rem] justify-center items-center bg-gray-200 text-red-500 text-xl" onClick={handlemarketDisplay}>market stories</div>
        <div className="flex flex-col w-full gap-5">
          {
            marketStories.map((item,index)=>(
              <MarketStoryCard key={index} title={item.title} description={item.description}/>
            ))
          }
        </div>
      </div>
      <div className="w-full flex-col vsm:flex lg:hidden">
        <div className="flex flex-row">
          <div className={` ${discussionShow?"bg-[#0b1026eb]":"bg-[#0C4A6E]"} text-white uppercase w-[50%] p-2`} onClick={handlediscussionDisplay}>discussion forum</div>
          <div className={` ${marketShow?"bg-[#020617]":"bg-[#0C4A6E]"} text-white uppercase w-[50%] p-2`} onClick={handlemarketDisplay}>market stories</div>
        </div>
        <div>
          <div className="w-full flex flex-col gap-5 pt-1">
            {
              marketShow && (
                <div className="flex flex-col w-full gap-5">
                  {
                    marketStories.map((item,index)=>(
                      <MarketStoryCard key={index} title={item.title} description={item.description}/>
                    ))
                  }
                </div>
              )
            }
            {
              discussionShow &&
              (<div className="flex flex-col gap-10 w-full">
                {
                  discussionData.map((item,id)=>(
                    <DiscussionCard key={id} name={item.name} sector={item.sector} Description={item.Description} time={item.time} likes={item.likes} comments={item.comments} views={item.views}/>
                  ))
                }
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
