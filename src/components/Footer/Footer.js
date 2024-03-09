import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-bluish-purple mt-20'>

      <div className='flex lg:flex-row flex-col pt-10 pb-10'>

        <div className='lg:w-1/2 flex flex-col mx-10'>
          <img src='/images/logo.png' alt='logo' className='w-60' />
          <p className='text-white mt-4 text-[10px] md:text-[12px] lg:text-[14px] font-inter md:mr-60'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>



        <div className='sm:flex-row text-[10px] md:text-[12px] lg:text-[14px] flex flex-col lg:w-1/2 lg:ml-20 md:ml-10 sm:mt-14 lg:mt-0 mr-10 sm:ml-10 ml-10 mt-10'>

          <div className='lg:w-1/2 sm:w-1/2 text-white font-inter'>
            <h1 className='text-xl'>Our Technologies</h1>
            <p className='mt-4'>ReactJS</p>
            <p>Gatsby</p>
            <p>NextJS</p>
            <p>NodeJS</p>
            <p>GraphQL</p>
            <p>Latavel</p>
          </div>

          <div className='lg:w-1/2 sm:w-1/2 text-white font-inter mt-10 sm:mt-0'>
            <h1 className='text-xl'>Our Services</h1>
            <p className='mt-4'>Social media Marketing</p>
            <p>Web & Mobile App Development</p>
            <p>Data & Analytics</p>
            <p>Google Marketing solutions</p>
            <p>Search Engine Optimization</p>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='flex flex-row text-[10px] md:text-[12px] lg:text-[14px] text-center justify-center font-inter text-white border-t-2 lg:w-[800px] md:w-[600px] w-[300px] mx-auto pb-4'>
          <p className='mx-2 mt-2'>Privacy Policy</p>
          <p className='mx-2  mt-2'>|</p>
          <p className='mx-2  mt-2'>Terms & Conditions</p>
        </div>
      </div>

    </div>
  )
}

export default Footer