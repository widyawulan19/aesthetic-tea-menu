import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Components/Navbar.css'
import imglogo from '../Assets/logotea.svg'

// icons 
import { IoIosArrowBack } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";


function MenuNavbar() {
    const navigate = useNavigate();

        const backToCategory = () =>{
        navigate('/menu-page')
    }

    const navigateToAbout = () =>{
        navigate('/about-page')
    }

  return (
    <div className="mp-nav">
        <IoIosArrowBack 
            className='mp-icon'
            onClick={backToCategory}
        />
         <div className="mp-img">
            <img src={imglogo} alt="logo image" />
         </div>
        <IoAlertCircleOutline 
            className='mp-icon'
            onClick={navigateToAbout}
        />
    </div>
  )
}

export default MenuNavbar