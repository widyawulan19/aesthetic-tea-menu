import React, { useState } from 'react'
import '../Styles/Components/NavigasiBottom.css'

import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";

function NavigasiBottom({activeTab,setActiveTab}) {
  return (
     <div className="navigasi-bottom">
        <button
            className={activeTab === "menu" ? "active" : ""}
            onClick={() => setActiveTab("menu")}
        >
            <BiSolidFoodMenu/>
        </button>
        <button
            className={activeTab === "recommendation" ? "active" : ""}
            onClick={() => setActiveTab("recommendation")}
        >
            <FaStar/>
        </button>
        <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => setActiveTab("about")}
        >
            <FaHouseCircleExclamation/>
        </button>
    </div>
  )
}

export default NavigasiBottom