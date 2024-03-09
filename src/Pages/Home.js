import React from 'react'
import Consultation from '../components/Consultation'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <>
            {/* Header Image */}
            <div className='relative flex flex-col sm:h-screen w-full'>
                <img src='/images/cover.png' className='sm:h-fit min-w-full h-auto absolute z-0' alt='cover' />
                <div className='relative z-10 items-center justify-center mx-auto sm:top-48 xl:top-80 top-32 xs:mt-[36px] mt-[50px] lg:mt-28  xl:mt-14 bg-gradient-to-r lg:ml-20   from-green-400 to-cyan-500 font-inter text-white p-4 sm:w-full sm:mt-44 lg:w-[630px] h-auto pb-24 '>
                    <h1 className='md:text-[36px] text-[30px] font-inter font-bold sm:text-[40px] ml-4 sm:leading-[1.1] xl:leading-[1.3]'>We Crash Your Competitors, Goals, And Sales Records - Without The B.S</h1>
                    <div className='absolute z-10 mt-4 font-semibold ml-4'>
                        <Consultation />
                    </div>
                </div>
            </div>


            {/* Web & Mobile */}
            <div className='w-full flex md:flex-row flex-col items-center font-inter lg:mt-20 md:mt-20 mt-40 sm:mt-0 xl:mt-32 '>
                <div className='md:w-5/12 flex flex-row'>
                    <img src='/images/computer.png' alt='computer' className='lg:ml-40 md:ml-10 w-48 md:w-auto' />
                </div>

                <div className='md:w-7/12 '>
                    <div className='flex flex-col sm:text-left lg:mr-20 xl:mr-32 md:mr-10 text-center md:ml-14'>
                        <h1 className='text-purple-700 lg:text-[27px] text-[22px] font-inter text-center md:text-left font-semibold mx-10 md:mx-0'>Web & Mobile App Development</h1>
                        <p className='text-gray-800 mt-6 mx-4 md:mx-0 text-center md:text-left xl:text-lg lg:text-sm'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                        <p className='md:item-left text-[12px] font-semibold md:block hidden items-center sm:justify-start justify-center md:mr-auto mt-4 bg-orange-500 w-32 text-center text-white p-2 rounded-md'>LEARN MORE</p>
                        <p className='md:item-left text-[10px] font-semibold items-center block md:hidden sm:justify-start justify-center md:mr-auto mx-auto mt-4 bg-orange-500 w-[100px] text-center text-white p-2 rounded-md'>LEARN MORE</p>
                    </div>
                </div>
            </div>





            {/* Digital Strategy  */}
            {/* Desktop Response */}
            <div className='w-full md:flex hidden md:flex-row flex-col items-center font-inter lg:mt-10 md:mt-10 mt-10 sm:-mt-32 xl:mt-20 '>
                <div className='md:w-7/12'>
                    <div className='flex flex-col text-left lg:ml-40 md:ml-20 sm:mt-0'>
                        <h1 className='text-purple-700 lg:text-[27px] text-[22px] font-inter font-semibold text-center md:text-left'>Digital Strategy Consulting</h1>
                        <p className='text-gray-800 mt-6 text-center md:text-left mx-10 md:mx-0 xl:text-lg lg:text-sm'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        <p className='md:item-left text-[12px] md:block hidden  items-center sm:justify-start mt-4 bg-orange-500 w-32 text-center text-white p-2 rounded-md font-semibold'>LEARN MORE</p>
                    </div>
                </div>
                <div className='md:w-5/12 flex flex-row'>
                    <img src='/images/correct.png' alt='computer' className='lg:mr-20 md:mr-10 lg:ml-32' />
                </div>
            </div>

            {/* Digital Strategy  */}
            {/* Mobile Response */}
            <div className='w-full  flex md:hidden flex-col items-center font-inter mt-20'>
                <div className='md:w-1/2 flex flex-row'>
                    <img src='/images/correct.png' alt='computer' className='lg:ml-40 md:ml-20 w-48' />
                </div>

                <div className='md:w-1/2'>
                    <div className='flex flex-col sm:text-left md:mr-10 text-center'>
                        <h1 className='text-purple-700 text-[27px] font-inter text-center md:text-left mx-4 font-semibold'>Digital Strategy Consulting</h1>
                        <p className='text-gray-800 mt-2 mx-10 md:mx-0 text-center md:text-left'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        <p className='md:item-left text-[10px] items-center block md:hidden sm:justify-start w-[100px] justify-center md:mr-auto mx-auto mt-4 bg-orange-500 text-center text-white p-2 rounded-md'>LEARN MORE</p>
                    </div>
                </div>
            </div>

            <Footer />


        </>
    )
}

export default Home