import React from 'react'
import '../Styles/Welcome.css'
import { useNavigate } from 'react-router-dom'

function WelcomePage() {
  const navigate = useNavigate();
  
  const navigateToMenu = () =>{
    navigate('/menu-page')
  }

  return (
    <div className='welcome-container'>

        <div className="welcome-btn">
          <button onClick={navigateToMenu}>
            DISCOVER OUR MENU
          </button>
          <p>Created by Luminous.id</p>
        </div>

    </div>
  )
}

export default WelcomePage