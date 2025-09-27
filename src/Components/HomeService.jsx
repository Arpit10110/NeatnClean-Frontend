import React from 'react'
import Cards from './Cards'

const HomeService = () => {
  return (
   <>
   
   <div className='flex justify-center'>
<div className='flex flex-col items-center justify-center gap-2  text-center'>
    <h1 className='text-3xl font-bold'>Our Cleaning Serices</h1>
    <p className=' text-[#C1C1C1]'>Whether it's quick or a deep clean transformation,our expert touch</p>
    <p className='text-[#C1C1C1]'>leaves your home or office shining.</p>
</div>



   </div>

   <Cards/>
   </>
  )
}

export default HomeService
