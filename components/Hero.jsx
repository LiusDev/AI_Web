import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from './'

const Hero = () => {
    return (
        <section className='bg container mx-5 md:mx-auto relative flex items-center justify-evenly py-12'>
            <div className='w-1/2 lg:w-1/3 flex flex-col items-center justify-center relative'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-normal md:leading-normal lg:leading-normal'>FPTU AI CLUB Artificial Intelligence Researchers</h1>
                <Image src="/particle.png" alt="particle" width={ 384 } height={ 384 } className='absolute -top-1/2 -right-1/4' />
                <Image src="/particle.png" alt="particle" width={ 512 } height={ 512 } className='absolute top-1/4 -left-1/2' />
            </div>
            <div className='w-1/2 lg:w-1/3 relative'>
                <Image src="/particle.png" alt="particle" width={ 1080 } height={ 1080 } className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
                <Image src="/AI.png" alt="AI Image" width={ 512 } height={ 512 } className="mix-blend-screen" />
            </div>
        </section>
    )
}

export default Hero