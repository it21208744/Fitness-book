import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function PostList() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({
    description: '',
    video: null,
    image: null,
  })
  
  const [loading, setLoading] = useState(true) // State variable for loading status
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts')
        setPosts(response.data)
        setLoading(false) // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  const handleDeletePost = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
    try {
      await axios.delete(`/api/post/${id}`)
      setPosts(posts.filter((post) => post.id !== id))
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }
}

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setNewPost((prevState) => ({
      ...prevState,
      [name]: files[0],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('description', newPost.description)
      formData.append('video', newPost.video)
      formData.append('image', newPost.image)

      const response = await axios.post('/api/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      setPosts([...posts, response.data])
      setNewPost({
        description: '',
        video: null,
        image: null,
      })
      setSuccessMessage('Post added successfully!')
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('')
      }, 3000)
    } catch (error) {
      console.error('Error creating post:', error)
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
    // LineHeight: '26px',
  }

  const labelStyle = {
    color: '#414654',
    fontWeight: '600',
    fontSize: '18px',
  }

  const cardstyle = {
    overflow: 'hidden',
    boxShadow: '0 2px 20px ',
    borderRadius: '10px',
    transition: 'transform 200ms ease-in',
    padding: '30px',
    backdropFilter: 'blur(5px)',
    background:
      'linear-gradient(rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
    width: '500px',
    marginLeft: '160px',
  }

  return (
    <div
      style={{
        display: 'flex',
        backgroundImage:
          'url("https://mediastore.hkct.edu.hk/programmes/ApL/Sports/FT_ApL_Exercise+and+Fitness+Coaching.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '120vh',
      }}
    >
      <div style={{ flex: 1 }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={cardstyle}>
          <h2>Create New Post</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label style={labelStyle}>Description:</label>
              <input
                type="text"
                name="description"
                value={newPost.description}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Image:</label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Video:</label>
              <input
                type="file"
                name="video"
                onChange={handleFileChange}
                style={inputStyle}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              style={buttonStyle}
            >
              Submit
            </button>
            <button style={buttonStyle}><Link to="/homeLayout"  >
              Back
            </Link></button>
            
          </form>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', maxHeight: '80vh' }}>
        <br />
        <br />
        <br />
        <br />
        {loading ? ( // Display loading spinner if loading is true
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <div style={cardstyle}>
                {/* Render image if imageData exists */}
                {post.imageData && (
                  <img
                    src={`data:image/png;base64,${post.imageData}`}
                    alt={post.description}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '50%',
                      objectFit: 'cover',
                    }}
                  />
                )}
                {/* Render video if videoData exists */}
                {post.videoData && (
                  <video
                    controls
                    style={{
                      maxWidth: '100%',
                      maxHeight: '50%',
                      objectFit: 'cover',
                    }}
                  >
                    <source
                      src={`data:video/mp4;base64,${post.videoData}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div>
                  <h5>{post.description}</h5>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    style={{
                      textDecoration: 'none',
                      color: '#fff',
                      backgroundColor: '#770e0e',
                      padding: '5px 14px',
                      borderRadius: '4px',
                      marginRight: '20px',
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`./update/${post.id}`}
                    style={{
                      textDecoration: 'none',
                      color: '#fff',
                      backgroundColor: '#114680',
                      padding: '8px 16px',
                      borderRadius: '4px',
                    }}
                  >
                    Update
                  </Link>
                </div>
              </div>
              <br />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default PostList
