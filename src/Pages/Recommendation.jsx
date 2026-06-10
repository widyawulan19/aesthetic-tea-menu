import React from 'react'
import '../Styles/Tea/Recommendation.css'
import teaMenu from '../Data/TeaMenu.json'

import { FaFire } from "react-icons/fa";
import { TbCloverFilled } from "react-icons/tb";
import { BsLeafFill } from "react-icons/bs";

import img1 from '../Assets/Recommendation/darjeeling.svg'
import img2 from '../Assets/Recommendation/Ceylon.svg'
import img3 from '../Assets/Recommendation/bancha.svg'
import img4 from '../Assets/Recommendation/Mint_Tea.svg'
import img5 from '../Assets/cat4.svg'
import img6 from '../Assets/Recommendation/early_grey.svg'
import img7 from '../Assets/Recommendation/rooibos_vanilla.svg'
import img8 from '../Assets/Recommendation/vanillagrape.svg'
import img9 from '../Assets/Recommendation/africa.svg'




function Recommendation() {

  // Flatten semua item menu
  const allMenus = teaMenu.flatMap(menu => menu.items)

  // Ambil chef favorite (1 item)
  const chefPick = allMenus.find(item =>
    item.menuPicks?.includes("master's pick")
  )

  // Ambil guest favorites (bisa banyak)
  const guestPicks = allMenus.filter(item =>
    item.menuPicks?.includes("guest")
  )

  //Ambil more chef fav
  const morePick = allMenus.filter(item => 
    item.menuPicks?.includes("more")
  )

  // Mapping gambar berdasarkan title
  const menuImages = {
    "Darjeeling": img1,
    "Ceylon & India":img2,
    "Bancha":img3,
    "Moroccan Mint":img4,
    "Lemon Herbal":img5,
    "Earl Grey": img6,
    "Rooibos":img7,
    "White Vanilla Grapefruit":img8,
    "African Chai":img9
  }

  return (
    <div className='sp-container'>
      <div className="sp-content">

      {/* CHEF FAVORITE */}
      <div className="chef-pick">

        <div className="chef-badge">
          <p>
            🍃 Tea Master's Pick
          </p>
        </div>

        {chefPick && (
          <div className="chef-card">

            <h4>{chefPick.name}</h4>

            <p>{chefPick.description}</p>

            {/* <span>{chefPick.price}</span> */}

            <div className="pic-img">
              <img
                src={menuImages[chefPick.name]}
                alt={chefPick.name}
              />
            </div>

          </div>
        )}

      </div>

      {/* GUEST FAVORITES */}
      <div className="guest-pick">

        <div className="guest-badge">
          <p>
            <BsLeafFill />
            Loved by Our Guests
          </p>
        </div>

        <div className="guest-wrapper">

          {guestPicks.map((item, index) => (

            <div
              className="guest-box"
              key={index}
            >

              <div className="guest-pic">
                <img
                  src={menuImages[item.name]}
                  alt={item.name}
                />
              </div>

              <div className="guest-desc">

                <h4>{item.name}</h4>

                <p>{item.description}</p>

                {/* <span>{item.price}</span> */}

              </div>

            </div>

          ))}

        </div>
      </div>

      {/* CHEFT FAVORITES */}
      <div className="guest-pick">

        <div className="mc-badge">
          <p>
            <BsLeafFill />
            More chef Recommendations
          </p>
        </div>

        <div className="guest-wrapper">

          {morePick.map((item, index) => (

            <div
              className="guest-box"
              key={index}
            >

              <div className="guest-pic">
                <img
                  src={menuImages[item.name]}
                  alt={item.name}
                />
              </div>

              <div className="guest-desc">

                <h4>{item.name}</h4>

                <p>{item.description}</p>

                {/* <span>{item.price}</span> */}

              </div>

            </div>

          ))}

        </div>
      </div>
      </div>

    </div>
  )
}

export default Recommendation