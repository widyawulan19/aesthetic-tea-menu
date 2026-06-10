import React from 'react'
import '../Styles/About.css'
import img from '../Assets/maps.svg'
import { FaMapPin } from "react-icons/fa6";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-box">

        {/* ABOUT */}
        <div className="section-title">
          <h3>🍃 About Tea & Tarts</h3>
        </div>

        <div className="about-desc">
          <p>
            Tea & Tarts is a cozy tea house dedicated to bringing people
            together through handcrafted tea blends, comforting pastries,
            and relaxing moments. From classic black teas to unique herbal
            infusions, every cup is carefully selected to create a warm and
            memorable experience.
          </p>
        </div>

        {/* OPENING HOURS */}
        <div className="section-title">
          <h3>Opening Hours</h3>
        </div>

        <div className="opening-card">
          <h4>Every Day</h4>
          <p>9:00 AM — 8:00 PM</p>
        </div>

        {/* LOCATION */}
        <div className="section-title">
          <h3>Visit Us</h3>
        </div>

        <div className="about-loc">
          <FaMapPin className="about-icon" />

          <p>
            18 Camden Passage,
            Islington, London N1 8EA,
            United Kingdom
          </p>
        </div>

        {/* MAP */}
        <div className="about-img">
          <img src={img} alt="maps image" />
        </div>

      </div>
    </div>
  )
}

export default AboutPage