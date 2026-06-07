import React, { useState } from 'react'
import '../Styles/ListMenu.css'
import restaurantMenu from '../Data/MenuRestaurant.json'
import { IoIosArrowBack } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

import img1 from '../Assets/menu1.svg'
import img2 from '../Assets/menu2.svg'
import { useNavigate } from 'react-router-dom';
import SpecialistPage from './SpecialistPage';
import AboutPage from './AboutPage';

import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";


function ListMenu() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("menu");


    const categoryPic ={
        "BREAKFAST":img1,
        "BEVERAGES":img2
    }

    const categoryBg = {
        "BREAKFAST":"#703027",
        "BEVERAGES":"#484244"
    }

    const navigateToWelcome = () =>{
        navigate('/')
    }

  return (
    <div className='list-container'>
        
        <div className="lm-content">
            {restaurantMenu.map((menu,index) =>(
                <div className="lm-main" key={index}>
                    <div 
                        className="lm-badge" 
                        style={{
                            backgroundColor:categoryBg[menu.category],
                            // border:`1px solid categoryBg[menu.category]`
                        }}
                    >
                        <h4>{menu.category}</h4>
                        <div className="badge-img">
                            <img src={categoryPic[menu.category]} alt={menu.category} />
                        </div>
                    </div>
                    {menu.items.map((item,idx) =>(
                        <div className="lm-list" key={idx}>
                            <div className="price">
                                <p>
                                    {item.price}
                                </p>
                            </div>

                            <div className="lm-desc">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>

              
    </div>
  )
}

export default ListMenu