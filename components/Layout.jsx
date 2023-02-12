import React from 'react'
import { Header, Footer, Hero, Intro, Department, ParticleBg } from '.'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='mt-16 overflow-hidden'>
                <Hero />
                <Intro />
                <Department />
            </main>
            <Footer />
        </>
    )
}

export default Layout