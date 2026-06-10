import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Components/Navbar.css'
import imglogo from '../Assets/logotea.svg'

// icons 
import { IoAlertCircleOutline } from "react-icons/io5";
import { GiTeapot } from "react-icons/gi";


function Navbar() {
    const navigate = useNavigate();

        const navigateToWelcome = () =>{
        navigate('/')
    }

    const navigateToAbout = () =>{
        navigate('/about-page')
    }

  return (
    <div className="mp-nav">
        <GiTeapot
            size={30}
            className='mp-icon'
            onClick={navigateToWelcome}
        />
         <div className="mp-img">
            <img src={imglogo} alt="logo image" />
         </div>
        <IoAlertCircleOutline 
            className='mp-icon-about'
            onClick={navigateToAbout}
        />
    </div>
  )
}

export default Navbar