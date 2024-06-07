import React, { useEffect, useState } from 'react'
import img from '../assets/women.jpg'
import { useNavigate } from 'react-router-dom'
const DashWorkout = () => {
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
    height: 'auto',
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
    letterSpacing: '2px',
    fontSize: '16px',
    width: '170px',
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
    letterSpacing: '2px',
    fontSize: '16px',
    width: '160px',
    height: '36px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  }
  function addNewWorkout() {
    navigator('./add-workout')
  }
  function listWorkout() {
    navigator('./workout')
  }
  return (
    <div style={containerStyle}>
      <img style={imagestyle} src={img} alt="An example image" />
      <div style={textStyle}>
        <h1>Enhance your fitness journey with us</h1>
        <p>this is for reach your fitness goals with the best guidenes .</p>
        <br></br>
        <button style={buttonStyle2} onClick={addNewWorkout}>
          Add Workout
        </button>
        <button style={buttonStyle} onClick={listWorkout}>
          See My Plans
        </button>
      </div>
    </div>
  )
}

export default DashWorkout
