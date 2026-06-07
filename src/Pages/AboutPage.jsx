import React from 'react'
import '../Styles/About.css'
import img from '../Assets/maps.svg'
import { FaMapPin } from "react-icons/fa6";

function AboutPage() {
  return (
    <div className='about-container'>
      <div className="about-box">
        <h1>ABOUT SAPHARI</h1>
        <div className="about-img">
          <img src={img} alt="maps image" />
        </div>

        <div className="about-loc">
          <FaMapPin className='about-icon'/>
          <p>42 Floral Street, Covent Garden, London WC2E 9DA, United Kingdom</p>
        </div>

        <div className="about-desc">
          <p>
            Welcome to Saphari’s Resto — a modern breakfast & brunch destination in the heart of London.
            At Saphari’s, we believe breakfast should feel warm, comforting, and beautifully crafted. Our menu blends classic brunch favorites with a modern café experience — from creamy pasta, buttery quiche, and crispy toast to artisan coffee, refreshing smoothies, and signature drinks.
          </p>
        </div>

        <div className="about-oh">
          <h3>OPENING HOURS</h3>
          <div className="opening-hours">
              <div className="hours-item">
                  <p className="day">Monday – Friday</p>
                  <p className="time">8:00 AM — 9:00 PM</p>
              </div>

              <div className="hours-item">
                  <p className="day">Saturday – Sunday</p>
                  <p className="time">8:00 AM — 10:00 PM</p>
              </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default AboutPage