import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'

const Main = () => {
    return (
        <>
            <div className='w-4/5 mx-auto font-poppins'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Main