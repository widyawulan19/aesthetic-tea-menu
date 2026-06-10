import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import '../Styles/MenuPage.css'
import AboutPage from './AboutPage';
import ListMenu from './ListMenu';
import imglogo from '../Assets/logotea.svg'

import { IoIosArrowBack } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";

import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import NavigasiBottom from '../Components/NavigasiBottom';
import Recommendation from './Recommendation';
import MenuList from './MenuList';


function MenuPage() {
    const [activeTab, setActiveTab] = useState("menu");
    const [selectedCategory, setSelectedCategory] = useState(null);


  return (
    <div className="mp-container">
        <Navbar/>

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
                    {/* {activeTab === "menu" && <ListMenu/>} */}
                    {activeTab === "menu" && (
                        <MenuList
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    )}
                    {activeTab === "recommendation" && <Recommendation />}
                    {activeTab === "about" && <AboutPage />}
                </motion.div>
            </AnimatePresence>
        </div>

        <NavigasiBottom
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />

    </div>
  )
}

export default MenuPage