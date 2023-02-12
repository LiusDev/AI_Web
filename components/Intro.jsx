import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className='relative mt-20'>
            <section id='about' className='container mx-auto px-5 flex items-center justify-center z-10 relative'>
                <div className='flex flex-col items-center justify-between'>
                    <h1 className='text-2xl md:text-4xl font-bold mb-6'>About FPTU AI Club</h1>
                    <p className='text-justify lg:max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio ab nostrum, minima excepturi ipsa, fuga odio consequatur esse beatae ut quisquam unde quod reprehenderit eum laborum et doloremque animi voluptate corporis dicta necessitatibus? Ipsa in commodi ut necessitatibus fuga cupiditate. Sit commodi, optio, impedit nostrum ut ratione cum accusamus minima amet magnam magni ipsa tempore quas eius minus at perspiciatis facere. Dignissimos ipsa, dolor numquam error beatae expedita quo quas pariatur? Sint, provident dignissimos voluptatem dolorum pariatur deleniti itaque labore aliquam accusamus fugiat cum quas reprehenderit ex placeat vel commodi tempora vero? Repellat, iste accusantium? Nobis deserunt iusto sit.</p>
                </div>
            </section>
            <Image src="/robot-hand.png" alt="robot hand" width={ 256 } height={ 256 } className='hidden md:block absolute -top-1/2 left-0' />
        </div>
    )
}

export default Intro