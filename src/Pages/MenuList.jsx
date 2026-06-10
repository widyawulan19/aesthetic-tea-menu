import React from 'react'
import '../Styles/Tea/MenuList.css'

import { GiTeapot } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";

import teaMenu from '../Data/TeaMenu.json';

import cat1 from '../Assets/cat1.png'
import cat2 from '../Assets/cat2.svg'
import cat3 from '../Assets/cat3.svg'
import cat4 from '../Assets/cat4.svg'
import cat5 from '../Assets/cat5.svg'
import cat6 from '../Assets/cat6.svg'

import MenuNavbar from '../Components/MenuNavbar';

function MenuList({
    selectedCategory,
    setSelectedCategory
}) {

    const categoryPic = {
        "Black Tea": cat1,
        "Green Tea": cat2,
        "Herbal Tea": cat3,
        "Specialty Tea": cat4,
        "Tea Latte": cat5,
        "Coffee": cat6
    };

    // Tampilkan list category dulu
    if (!selectedCategory) {
        return (
            <div className="list-container">

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
                        {teaMenu.map((item, index) => (
                            <div
                                className="list-card"
                                key={index}
                                onClick={() =>
                                    setSelectedCategory(item.category)
                                }
                            >
                                <div className="list-img">
                                    <img
                                        src={categoryPic[item.category]}
                                        alt={item.category}
                                    />
                                </div>

                                <h4>{item.category}</h4>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        )
    }

    const currentCategory = teaMenu.find(
        item => item.category === selectedCategory
    );

    if (!currentCategory) {
        return <p>Menu tidak ditemukan...</p>;
    }

    return (
        <div className='menu-list-container'>

            {/* <MenuNavbar /> */}

            <div className='menu-list-box'>

                {/* BADGE CATEGORY */}
                <div className="ml-badge">
                    <div className="ml-icon" onClick={() => setSelectedCategory(null)}>
                        <IoIosArrowBack/>
                    </div>
                    <h2>{currentCategory.category}</h2>

                    <div className="ml-img">
                        <img
                            src={categoryPic[currentCategory.category]}
                            alt={currentCategory.category}
                        />
                    </div>
                </div>

                {/* PRICE */}
                <div className="price-box">
                    {currentCategory.price.map((itm, idx) => (
                        <div className="size-price" key={idx}>
                            <div className="price-tag">
                                {itm.size} :
                            </div>

                            <div className="price">
                                {itm.priceSize}
                            </div>
                        </div>
                    ))}
                </div>

                {/* MENU */}
                <div className="menu-box">
                    {currentCategory.items.map((menu, index) => (
                        <div className="ml-box" key={index}>

                            <div className="menu-title">

                                <h4
                                    className={
                                        menu.tags === "popular"
                                            ? "popular-title"
                                            : ""
                                    }
                                >
                                    {menu.name}
                                </h4>

                                {menu.tags === "popular" && (
                                    <GiTeapot className="popular-icon" />
                                )}

                            </div>

                            <p>{menu.description}</p>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default MenuList;