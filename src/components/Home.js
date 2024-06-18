import React, { useState } from 'react'
import logo from '../images/Capture.PNG'
import UpperNavbar from './UpperNavbar'
import School from './School'
import Students from './Students'



const Home = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleNavbarClick = (index) => {
        setActiveItem(index);
      };

    return (
        <div className=' bg-[#6754b3]'>
            <div className="leftside mx-10 flex flex-col justify-around  h-[100vh]">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="centerlogo flex">
                    <ul className='space-y-8 mx-6 text-white'>
                        <li className={`${activeItem===0?"font-extrabold":""} cursor-pointer`} onClick={() => handleNavbarClick(0)}>{activeItem === 0 ? '> ' : ''}<i className='fa-solid fa-user-plus'  ></i></li>
                        <li className={`${activeItem===1?"font-extrabold":""} cursor-pointer`} onClick={() => handleNavbarClick(1)}>{activeItem === 1 ? '> ' : ''}<i className='fa-solid fa-graduation-cap'></i></li>
                        <li className={`${activeItem===2?"font-extrabold":""} cursor-pointer`} onClick={() => handleNavbarClick(2)}>{activeItem === 2 ? '> ' : ''}<i className='fa-solid fa-chart-column'></i></li>
                        <li className={`${activeItem===3?"font-extrabold":""} cursor-pointer`} onClick={() => handleNavbarClick(3)}>{activeItem === 3 ? '> ' : ''}<i className='fa-solid fa-calendar-days'></i></li>
                        <li className={`${activeItem===4?"font-extrabold":""} cursor-pointer`} onClick={() => handleNavbarClick(4)}>{activeItem === 4 ? '> ' : ''}<i className='fa-solid fa-gear'></i></li>
                    </ul>
                </div>
                <div className="rightside flex mx-6 text-white ">
                <i className="fa-solid fa-right-from-bracket cursor-pointer"></i>
                </div>
            </div>
            <div className="rightside absolute top-10 left-48 h-[90vh] w-[85vw] bg-white rounded-xl">
                <UpperNavbar/>
                <hr />
                <School/>
                <Students/>
            </div>
        </div>
    )
}

export default Home
