import Image from 'next/image'
import React from 'react'

const MarketStoryCard = ({title,description}) => {
  return (
    <div className='flex flex-col gap-2 border border-gray-200 shadow-md p-1 rounded-lg cursor-pointer'>
      <div className='relative w-full h-[10rem]'>
        <Image src="/cloud-sunset-sunrise-mountain-preview.jpg" layout="fill" alt="sunset Image"/>
      </div>
      <div className="flex flex-col gap-3 p-2">
        <div className='flex font-semibold'>{title}</div>
        <div className='flex flex-wrap flex-row font-medium'>{description}</div>
      </div>
    </div>
  )
}

export default MarketStoryCard