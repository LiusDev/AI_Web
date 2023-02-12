import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='w-full fixed top-0 left-0 right-0 border-b border-neutral-600 bg flex items-center justify-center z-50'>
            <div className='container flex items-center justify-between py-2 mx-5 lg:mx-10'>
                <div>
                    <Link href="">
                        {/* TODO: change logo */ }
                        <Image width={ 48 } height={ 48 } src="/logo.png" alt="logo" className='rounded-full' />
                    </Link>
                </div>
                <ul className='hidden md:flex w-1/2 lg:w-1/3 items-center justify-between'>
                    <li>
                        <Link href="/" className='text-lg font-semibold fill-color-hover transition-all'>Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className='text-lg font-semibold fill-color-hover transition-all'>About</Link>
                    </li>
                    <li>
                        <Link href="#departments" className='text-lg font-semibold fill-color-hover transition-all'>Departments</Link>
                    </li>
                    <li>
                        <Link href="/blog" className='text-lg font-semibold fill-color-hover transition-all'>Blog</Link>
                    </li>
                </ul>
                <div>
                    <Link href="/login" className='text-lg font-semibold fill-color-hover transition-all'>Login</Link>
                </div>
            </div>
        </header>
    )
}

export default Header