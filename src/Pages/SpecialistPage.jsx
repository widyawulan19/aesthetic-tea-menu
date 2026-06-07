import React from 'react'
import '../Styles/Special.css'
import restaurantMenu from '../Data/MenuRestaurant.json'

import { FaFire } from "react-icons/fa";
import { TbCloverFilled } from "react-icons/tb";

import img1 from '../Assets/pic9.svg'
import img2 from '../Assets/pic8.svg'
import img3 from '../Assets/menu3.svg'
import img4 from '../Assets/pic12.svg'
import img5 from '../Assets/pic11.svg'
import img6 from '../Assets/pic10.svg'

function SpecialistPage() {

  // Flatten semua item menu
  const allMenus = restaurantMenu.flatMap(menu => menu.items)

  // Ambil chef favorite (1 item)
  const chefPick = allMenus.find(item =>
    item.tags?.includes("chef")
  )

  // Ambil guest favorites (bisa banyak)
  const guestPicks = allMenus.filter(item =>
    item.tags?.includes("guest")
  )

  //Ambil more chef fav
  const morePick = allMenus.filter(item => 
    item.tags?.includes("more")
  )

  // Mapping gambar berdasarkan title
  const menuImages = {
    "Dish Bacon Leek Quiche": img1,
    "Crispy Egg Toast": img2,
    "Macchiato": img3 ,
    "Avocado Croissant": img4,
    "Arabica Coffee": img5,
    "Smoothies": img6
  }

  return (
    <div className='sp-container'>
      <div className="sp-content">

      {/* CHEF FAVORITE */}
      <div className="chef-pick">

        <div className="chef-badge">
          <p>
            <FaFire />
            CHEF'S MENU PICK
          </p>
        </div>

        {chefPick && (
          <div className="chef-card">

            <h4>{chefPick.title}</h4>

            <p>{chefPick.desc}</p>

            <span>{chefPick.price}</span>

            <div className="pic-img">
              <img
                src={menuImages[chefPick.title]}
                alt={chefPick.title}
              />
            </div>

          </div>
        )}

      </div>

      {/* GUEST FAVORITES */}
      <div className="guest-pick">

        <div className="guest-badge">
          <p>
            <TbCloverFilled />
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
                  src={menuImages[item.title]}
                  alt={item.title}
                />
              </div>

              <div className="guest-desc">

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

                <span>{item.price}</span>

              </div>

            </div>

          ))}

        </div>
      </div>

      {/* CHEFT FAVORITES */}
      <div className="guest-pick">

        <div className="mc-badge">
          <p>
            <TbCloverFilled />
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
                  src={menuImages[item.title]}
                  alt={item.title}
                />
              </div>

              <div className="guest-desc">

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

                <span>{item.price}</span>

              </div>

            </div>

          ))}

        </div>
      </div>
      </div>

    </div>
  )
}

export default SpecialistPage