import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4">
      <div className='mt-48 p-8 col-span-2'>
        <h1 className='text-[64px] font-extrabold text-gray-800 leading-none'>Explore a new World.</h1>
        <h3 className='text-[18px] text-gray-400 mt-10'>No matter where in the world you want to go, we can help you get there</h3>
        <button className='text-indigo-700 rounded-full bg-white px-6 p-2 outline outline-offset-2 outline-1 mt-10'>Explore Now</button>
        <div className='flex space-x-2 mt-52'>          
        <Image src="/trekker.jpeg" alt="trekker logo" width={50} height={50} />
          <div>
            <h3 className='text-md font-semibold'>1000 + Hiking</h3>
            <p className='text-[10px] text-gray-700 w-[200px]'>More than 1000 tourists and trekkers use our facilities wihtin a month</p>
          </div>
        </div>
      </div>
      <div className='mt-20 col-span-2'>
        <Image src="/banner.png" alt="banner image" width={800} height={800} />
      </div>
    </div>
  )
}

export default Home