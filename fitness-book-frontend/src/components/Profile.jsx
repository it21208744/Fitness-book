import React from 'react'
import img from '../assets/picc.jpeg'

const EditProfile = () => {
  const buttonStyle = {
    backgroundColor: '#414654',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '16px',
    width: '150px',
    height: '36px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '60px',
    marginLeft: '1000px',
  }

  const labelStyle = {
    color: '#fff',
    fontSize: '20px',
    marginTop: '20px',
    marginLeft: '1000px',
  }

  const inputStyle = {
    width: '30%',
    height: '36px',
    borderRadius: '5px',
    borderWidth: '0 0 2px 0',
    borderColor: '#A8B7BB',
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '26px',
    marginLeft: '1000px',
  }

  return (
    <>
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
        <br />
        <br />
        <div>
          <div style={{ position: 'relative', left: '-15vw' }}>
            <h1 style={{ ...labelStyle, fontSize: '35px', marginTop: '50px' }}>
              Edit Profile
            </h1>
            <div>
              <label style={labelStyle}>First Name</label>
              <input style={inputStyle} type="text" name="firstName" />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input style={inputStyle} type="text" name="lastName" />
            </div>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input style={inputStyle} type="text" name="email" />
            </div>
            <div>
              <label style={labelStyle}>Password</label>
              <input style={inputStyle} type="password" name="password" />
            </div>
            <button style={buttonStyle}>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
