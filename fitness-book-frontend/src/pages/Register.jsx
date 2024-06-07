import React, { useState } from 'react'
import axios from 'axios'
import img from '../assets/picc.jpeg'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    const userData = new FormData()
    userData.append('name', formData.name)
    userData.append('email', formData.email)
    userData.append('password', formData.password)
    userData.append('image', formData.image)

    try {
      const response = await axios.post('/register', userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(response.data)
    } catch (error) {
      console.error('Registration failed:', error)
    }
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
    LineHeight: '26px',
  }
  const lableStyle = {
    color: '#414654',
    fontWeight: '600',
    fontSize: '18px',
  }
  const cardstyle = {
    overflow: 'hidden',
    boxShadow: '0 2px 20px ',
    borderRadius: '$radius',
    transition: 'transform 200ms ease-in',
    padding: '30px',
    backdropFilter: 'blur(5px)',
    background:
      'linear-gradient(rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
    width: '500px',
    marginLeft: '400px',
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
        padding: 0, // Remove any padding that could cause gaps
        margin: 0,
      }}
    >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={cardstyle}>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={lableStyle}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label style={lableStyle}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label style={lableStyle}>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label style={lableStyle}>Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
