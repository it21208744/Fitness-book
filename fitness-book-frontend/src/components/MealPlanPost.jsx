import axios from 'axios'
import MealPlanPostTemp from './MealPlanPostTemplate'
import { useState, useEffect } from 'react'

const MealPlanPost = ({ userEmail, fromProfile }) => {
  const [posts, setPosts] = useState([])
  const getPostsWithEmail = async () => {
    const posts = await axios.get('/api/v1/getMealplansByEmail', {
      headers: {
        userEmail: 'chamod@gmail.com',
      },
    })

    setPosts(posts.data)
  }

  const getPosts = async () => {
    const posts = await axios.get('/api/v1/mealplans')

    setPosts(posts.data)
  }
  useEffect(() => {
    if (userEmail) {
      getPostsWithEmail()
    } else {
      getPosts()
    }
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <MealPlanPostTemp
            id={post.id}
            imageData={post.imageData}
            instructions={post.instructions}
            nutritions={post.nutritions}
            planName={post.planName}
            recipes={post.recipes}
            userEmail={post.userEmail}
            category={post.category}
            fromProfile={fromProfile}
          />
        </div>
      ))}
    </div>
  )
}
export default MealPlanPost
