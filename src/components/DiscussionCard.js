import React from 'react'
import { CommentIcon, LikeIcon, ShareIcon, UserIcon, ViewIcon } from './Icons'
import Image from 'next/image'

const DiscussionCard = ({name,sector,Description,time,comments,likes,views}) => {
  return (
    <div className='flex flex-col gap-5 bg-white text-black border border-gray-200 shadow-md p-5 rounded-md'>
        <div className='flex flex-row justify-between'>
            <div className="flex flex-row gap-3">
                <div className='relative w-8 h-8 rounded-full bg-yellow-200'>
                    <Image src="/userimage.jpg" layout='fill' alt="user" />
                </div>
                <div className='font-semibold flex justify-center items-center'>{name}</div>
                <div className="bg-[#16557ab8] flex items-center justify-center rounded-xl px-5 text-[0.9rem] text-white">{sector}</div>
            </div>
            <div className='text-blue-900'>{time} min ago</div>
        </div>
        <div className='flex flex-row flex-wrap pl-8 font-medium'>{Description}</div>
        <div className='flex flex-row justify-evenly vsm:justify-between'>
            <div className='flex flex-row gap-1 justify-center items-center font-semibold'>
                <LikeIcon className='w-5 h-5'/>
                {likes/1000}K
            </div>
            <div className='flex flex-row gap-1 justify-center items-center font-semibold'>
                <ViewIcon className='w-7 h-7'/>
                {views/1000}K
            </div>
            <div className='flex flex-row gap-1 justify-center items-center font-semibold'>
                <CommentIcon className=' w-6 h-6'/>
                {comments/1000}K Comments
            </div>
            <div className='flex flex-row gap-1 justify-center items-center font-semibold'>
                <ShareIcon className='w-6 h-6'/>
                Share
            </div>
        </div>
    </div>
  )
}

export default DiscussionCard