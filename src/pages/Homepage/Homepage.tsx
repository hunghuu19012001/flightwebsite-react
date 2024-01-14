import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import Searchbar from './Searchbar'

const Homepage = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <div><Navbar/></div>

            <div className='flex justify-center  '>
                <img  className=' ' src="\src\assets\images\banner-home.png" alt="" />
            </div>
            <div><Searchbar/></div>
        </div>



        <div><Footer/></div>
    </div>
  )
}

export default Homepage