import React from "react";
import { DisscussionIcon, EventIcon, Market2Icon, MarketStoryIcon, NewsIcon, NotificationIcon, SectorIcon, SentimentIcon, UserIcon, WatchListIcon } from "./Icons";

const SideBar = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#0C4A6E] text-white">
      <div className="relative flex flex-row gap-20 justify-between items-center px-10 py-8">
        <div className="flex flex-row gap-5  justify-center items-center">
          <UserIcon className="w-10 h-10 " />
          <div className="text-xl font-semibold"> Hello, User</div>
        </div>
        <div className="">
          <NotificationIcon className="w-10 h-10" />
        </div>
        <div className="w-[98%] h-1 absolute bottom-0 right-1 bg-gray-500"></div>
      </div>
      <div className="flex flex-col gap-3 items-start mt-5">
        <div className="flex flex-row gap-3 cursor-pointer hover:bg-[#020617] items-center w-full px-10">
          <DisscussionIcon className="w-10 h-10 " />
          <div className="text-xl font-medium"> Discussion Forum</div>
        </div>
        <div className="flex flex-row gap-3  cursor-pointer hover:bg-[#020617] items-center w-full px-10">
          <MarketStoryIcon className="w-10 h-10 " />
          <div className="text-xl font-medium"> Market Stories</div>
        </div>
        <div className="flex flex-row gap-3  cursor-pointer hover:bg-[#020617] items-center w-full px-10">
          <SentimentIcon className="w-10 h-10 " />
          <div className="text-xl font-medium"> Sentiments</div>
        </div>
        <div className="flex flex-row gap-3 cursor-pointer hover:bg-[#020617] items-center w-full px-10">
          <Market2Icon className="w-10 h-10 " />
          <div className="text-xl font-medium">Market</div>
        </div>
        <div className="flex flex-row gap-3 cursor-pointer hover:bg-[#020617] items-center w-full px-10">
          <SectorIcon className="w-10 h-10 " />
          <div className="text-xl font-medium">Sector</div>
        </div>
        <div className="flex flex-row gap-3 cursor-pointer hover:bg-[#020617] items-center w-full px-10">
          <WatchListIcon className="w-10 h-10 " />
          <div className="text-xl font-medium"> Watchlist</div>
        </div>
        <div className="flex flex-row gap-3 cursor-pointer hover:bg-[#020617]  items-center w-full px-10">
          <EventIcon className="w-10 h-10 " />
          <div className="text-xl font-medium">Event</div>
        </div>
        <div className="flex flex-row gap-3 items-center cursor-pointer hover:bg-[#020617] w-full px-10">
          <NewsIcon className="w-10 h-10 " />
          <div className="text-xl font-medium">News / Interview</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
