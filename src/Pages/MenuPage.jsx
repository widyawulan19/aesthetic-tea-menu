import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import '../Styles/MenuPage.css'
import SpecialistPage from './SpecialistPage';
import AboutPage from './AboutPage';
import ListMenu from './ListMenu';

import { IoIosArrowBack } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";

import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function MenuPage() {
    const [activeTab, setActiveTab] = useState("menu");
    const navigate = useNavigate();

    const navigateToWelcome = () =>{
        navigate('/')
    }

    const navigateToAbout = () =>{
        navigate('/about-page')
    }


  return (
    <div className="mp-container">
        <div className="mp-nav">
            <IoIosArrowBack 
                className='mp-icon'
                onClick={navigateToWelcome}
            />
             <p>
                SAPHARI'S RESTO <br />
                <span>Breakfast & Brunch Experience</span>
             </p>
            <IoAlertCircleOutline 
                className='mp-icon'
                onClick={navigateToAbout}
            />
        </div>

        <div className="mp-content">
             <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{
                    opacity:0,
                    y:20
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                exit={{
                    opacity:0,
                    y:-20
                }}
                transition={{
                    duration:.25
                }}
            >
                {activeTab === "menu" && <ListMenu/>}
                {activeTab === "specials" && <SpecialistPage />}
                {activeTab === "about" && <AboutPage />}
            </motion.div>
        </AnimatePresence>
        </div>

        <div className="nav-bottom">
            <button
                className={activeTab === "menu" ? "active" : ""}
                onClick={() => setActiveTab("menu")}
            >
                <BiSolidFoodMenu/>
                {/* <span>MENU</span> */}
                {/* {activeTab == "menu" && (
                    <span>MENU</span>
                )} */}
            </button>

            <button
                className={activeTab === "specials" ? "active" : ""}
                onClick={() => setActiveTab("specials")}
            >
                <FaStar/>
                {/* <span>SPECIAL</span> */}
            </button>

            <button
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
            >
                <FaHouseCircleExclamation/>
                {/* <span>ABOUT</span> */}
            </button>
        </div>

    </div>
  )
}

export default MenuPage