import axios from 'axios'
import PostTemplate from '../components/PostTemplate'
import { useState, useEffect } from 'react'
import { Affix } from 'antd'
const MediaPost = ({ fromProfile }) => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    try {
      const posts = await axios.get('/api/posts')

      setPosts(posts.data)
      console.log(posts.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {console.log(post)}

          <PostTemplate
            id={post.id}
            description={post.description}
            videoData={post.videoData}
            imageData={post.imageData}
            fromProfile={fromProfile}
          />
        </div>
      ))}
    </div>
  )
}
export default MediaPost
