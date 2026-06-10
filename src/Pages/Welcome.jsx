import React from 'react'
import '../Styles/Tea/Welcome.css'
import { FaMapPin } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate();

    const navigateToMenu = () =>{
        navigate('/menu-page')
    }
  return (
    <div className='welcome-container'  data-aos='zoom-out'>

        <div className="welcome-btn">
          <button onClick={navigateToMenu}>
            DISCOVER OUR MENU
          </button>

          <div className="opening-hours">
            <div className="hours-item">
                <div className="day">Every Day</div>
                <div className="time">9:00 AM - 8:00 PM</div>
            </div>
          </div>

          <div className="location">
            <FaMapPin className='loc-icon'/>
            <p>
                18 Camden Passage, Islington, London N1 8EA, United Kingdom
            </p>
          </div>

          {/* <p>Created by Luminous.id</p> */}
        </div>

    </div>
  )
}

export default Welcome