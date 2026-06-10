import React, { useState } from 'react'
import '../Styles/ListMenu.css'
import teaMenu from '../Data/TeaMenu.json';
import { IoIosArrowBack } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

import { useNavigate } from 'react-router-dom';
import AboutPage from './AboutPage';

import cat1 from '../Assets/cat1.png'
import cat2 from '../Assets/cat2.svg'
import cat3 from '../Assets/cat3.svg'
import cat4 from '../Assets/cat4.svg'
import cat5 from '../Assets/cat5.svg'
import cat6 from '../Assets/cat6.svg'



import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";


function ListMenu() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("menu");

    const categoryPic ={
        "Black Tea":cat1,
        "Green Tea":cat2,
        "Herbal Tea": cat3,
        "Specialty Tea":cat4,
        "Tea Latte":cat5,
        "Coffee":cat6
    }


    const navigateToWelcome = () =>{
        navigate('/')
    }

    const navigateToCategory = (category) =>{
        navigate(`/menu-list/${category}`)
    }

  return (
    <div className='list-container'>
        
        <div className="lm-content">
            <div className="lm-des">
                <h3>
                    Discover Your Perfect Tea
                </h3>
                <p>
                    Explore handcrafted tea selections curated for every mood — from bold black tea to calming herbal infusions.
                </p>
            </div>
            
            <div className="lm-category">
                {teaMenu.map((item, index) =>(
                    <div className="list-card" key={index} >
                        <div className="list-img" onClick={() => navigateToCategory(item.category)}>
                            <img src={categoryPic[item.category]} alt={item.category} />
                        </div>
                        <h4>{item.category}</h4>
                    </div>
                ))}
            </div>
            
        </div>

              
    </div>
  )
}

export default ListMenu