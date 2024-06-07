import StatsPostTemplate from './StatsPostTemplate'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { listCurrentWorkOuts } from '../services/CurrentWorkOutService'

const FitnessPost = ({ userEmail, fromProfile }) => {
  const [posts, setPosts] = useState([])
  const getPostsWithEmail = async () => {
    await listCurrentWorkOuts().then((data) => setPosts(data.data))

    // setPosts(posts.data)
  }

  useEffect(() => {
    try {
      getPostsWithEmail()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {console.log(post)}
          <StatsPostTemplate
            id={post.id}
            name={post.name}
            email={post.email}
            age={post.age}
            date={post.date}
            activityType={post.activityType}
            distance={post.distance}
            noOfPushups={post.noOfPushups}
            weight={post.weight}
            discription={post.discription}
            fromProfile={fromProfile}
          />
        </div>
      ))}
    </div>
  )
}
export default FitnessPost
