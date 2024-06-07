import React, { useEffect, useState } from 'react'
import img from '../assets/current1.webp'

import { useNavigate } from 'react-router-dom'
const DashCurrentWorkout = () => {
  const navigator = useNavigate()
  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Ensures text aligns with image's top
    justifyContent: 'flex-start',
    backgroundColor: '#ececec',
    width: '100vw',
    height: '100vh',
  }

  const imagestyle = {
    width: '50%', // Image is larger
    height: '80%',
    marginTop: '100px',
    marginLeft: '50px',
  }

  const textStyle = {
    color: '#414654',
    textAlign: 'left',
    paddingLeft: '10px', // Ensures some gap between image and text
    paddingTop: '200px', // Adjust this to control the text's position
    width: '40%', // Fits alongside the image
    marginLeft: '100px',
  }

  const buttonStyle = {
    backgroundColor: '#FFFFF0',
    color: '#414654',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '14px',
    width: '200px',
    height: '36px',
    border: '2px solid #414654',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  }

  const buttonStyle2 = {
    backgroundColor: '#414654',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '14px',
    width: '200px',
    height: '36px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  }
  function addNewWorkout() {
    navigator('./add-currentWorkOut')
  }
  function listWorkout() {
    navigator('./currentworkOuts')
  }
  return (
    <div style={containerStyle}>
      <img style={imagestyle} src={img} alt="An example image" />
      <div style={textStyle}>
        <h1>Discover your strength and achieve your goals with us!</h1>
        <p>achieve your fitness goals with expert guidance and support .</p>
        <br></br>
        <button style={buttonStyle2} onClick={addNewWorkout}>
          Add CurrentWorkout
        </button>
        <button style={buttonStyle} onClick={listWorkout}>
          See My CurrentPlans
        </button>
      </div>
    </div>
  )
}

export default DashCurrentWorkout
