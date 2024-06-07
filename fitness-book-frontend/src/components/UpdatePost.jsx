import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//update function
function UpdatePost() {
  const { id } = useParams()

  const [updatedDescription, setUpdatedDescription] = useState('')
  const [updatedImage, setUpdatedImage] = useState(null)

  const handleDescriptionChange = (e) => {
    setUpdatedDescription(e.target.value)
  }

  const handleImageChange = (e) => {
    setUpdatedImage(e.target.files[0])
  }
  //handle strin
  const handleUpdatePost = async () => {
    try {
      const formData = new FormData()
      formData.append('description', updatedDescription)
      formData.append('image', updatedImage)

      await axios.put(`/api/post/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      //redirct to wall
      window.location.href = '/media'
    } catch (error) {
      console.error('Error updating post:', error)
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
    width: '800px',
    marginLeft: '360px',
  }
  const backg = {
    backgroundColor: '#FFFFF0',
  }

  return (
    <div
      style={{
        backgroundImage:
          'url("https://mediastore.hkct.edu.hk/programmes/ApL/Sports/FT_ApL_Exercise+and+Fitness+Coaching.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '120vh',
      }}
    >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={cardstyle}>
        <p>Post ID: {id}</p>

        <h1>update</h1>
        <div>
          <div>
            <label style={lableStyle}>Description:</label>
            <input
              type="text"
              value={updatedDescription}
              onChange={handleDescriptionChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={lableStyle}>Image:</label>
            <input
              type="file"
              onChange={handleImageChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={lableStyle}>Video:</label>
            <input
              type="file"
              onChange={handleImageChange}
              style={inputStyle}
            />
          </div>
          <button type="button" onClick={handleUpdatePost} style={buttonStyle}>
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdatePost
