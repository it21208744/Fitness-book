import React, { useState } from 'react'
import axios from 'axios'
import img from '../assets/picc.jpeg'
import { useNavigate } from 'react-router-dom' // Use useNavigate instead of Navigate

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const navigate = useNavigate() // Get useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/v1/user', formData)
      console.log('Login successful:', response.data)
      const jsonString = JSON.stringify(response.data)
      localStorage.setItem('user', jsonString)
      navigate('/homeLayout') // Use navigate with path
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  // Combine label and input styles for cleaner code
  const inputGroupStyle = {
    marginBottom: '10px',
  }

  const labelStyle = {
    color: '#414654',
    fontWeight: '600',
    fontSize: '14px',
    display: 'inline-block',
    marginRight: '10px',
  }

  const inputStyle = {
    display: 'block',
    width: '100%',
    height: '36px',
    borderWidth: '0 0 2px 0',
    borderColor: '#A8B7BB',
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '26px',
  }

  const buttonStyle = {
    backgroundColor: '#414654',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '16px',
    width: '130px',
    height: '36px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  const cardStyle = {
    overflow: 'hidden',
    boxShadow: '0 2px 20px ',
    borderRadius: '$radius', // Assuming you have a defined radius variable
    transition: 'transform 200ms ease-in',
    padding: '30px',
    backdropFilter: 'blur(5px)',
    background:
      'linear-gradient(rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
    width: '500px',
    marginLeft: 'auto',
    marginRight: 'auto', // Center the card horizontally
  }

  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0,
      }}
    >
      <div style={cardStyle}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email:</label>
            <input
              style={inputStyle}
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password:</label>
            <input
              style={inputStyle}
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
