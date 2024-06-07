import React from 'react'
import HeaderForHome from './HeaderForHome'

function HomePage() {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  }

  const headingStyle = {
    fontSize: '3em',
    marginBottom: '30px',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
    animation: 'fadeIn 1.5s ease-in-out',
  }

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  }

  const animateOnHover = {
    transform: 'scale(1.05)',
  }

  return (
    <>
      <HeaderForHome />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Welcome to Fitness Book!</h1>
        <div>
          <img
            src="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80"
            alt="Fitness Book"
            style={{ ...imageStyle, ...animateOnHover }}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage
