import Image from 'next/image'
import React from 'react'
import { FaMapMarkedAlt, FaEnvelope, FaUserTie, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg border-t border-neutral-600 px-4 py-8 md:px-12 lg:px-16 relative bottom-0 left-0 right-0'>
            <div className='flex flex-col md:flex-row md:space-x-16 justify-center md:items-center items-start'>
                <a href="https://www.facebook.com/aiclub.fptu" target="_blank" rel="noreferrer" className='mb-3 md:mb-0'>
                    <Image width={ 128 } height={ 128 } src="/logo.png" alt="logo" className='aspect-square rounded-full object-cover h-32' />
                </a>
                <div className='flex flex-col space-y-4 mb-3 md:mb-0'>
                    <div className='flex items-center space-x-3'>
                        <FaMapMarkedAlt className='w-6 h-6 fill-color' />
                        <a href="https://goo.gl/maps/AYC7XBBsCnfwXKQj9" target="_blank" rel="noreferrer" className='max-w-xs fill-color-hover transition-all'>Đại học FPT, Khu Công nghệ cao Hòa Lạc, KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam.</a>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <FaEnvelope className='w-6 h-6 fill-color' />
                        <a href='mailto:fptuaiclub@gmail.com' className='max-w-xs fill-color-hover transition-all'>fptuaiclub@gmail.com</a>
                    </div>
                </div>
                <div className='flex flex-col space-y-3 mb-3 md:mb-0'>
                    <div className='flex items-center space-x-3'>
                        <FaUserTie className='w-6 h-6 fill-color' />
                        <a href="https://www.facebook.com/phucle2605" target="_blank" rel="noreferrer" className='fill-color-hover transition-all'>
                            <div>
                                <p>Chủ nhiệm:</p>
                                <p className='font-semibold'>Lê Hoàng Phúc</p>
                            </div>
                        </a>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <FaEnvelope className='w-6 h-6 fill-color' />
                        <a href="mailto:phucabc@abc.com" className='fill-color-hover transition-all'>phucabc@abc.com</a>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <FaPhoneAlt className='w-6 h-6 fill-color' />
                        <a href="tel:0987654321" className='fill-color-hover transition-all'>0987 654 321</a>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 mb-3 md:mb-0'>
                    <div className='flex items-center space-x-3'>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faiclub.fptu&tabs&width=280&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="280" height="130" style={ { border: "none", overflow: "hidden" } } allowFullScreen={ true } allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer