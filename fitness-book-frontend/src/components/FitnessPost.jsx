import axios from 'axios'
import FitnessPlanPostTemp from './FitnessPostTemplate'
import { useState, useEffect } from 'react'
import { listWorkout } from '../services/WorkoutService'

const FitnessPlanPost = ({ userEmail, fromProfile }) => {
  const [posts, setPosts] = useState([])
  const getPostsWithEmail = async () => {
    const posts = await axios.get('/api/v1/getMealplansByEmail', {
      headers: {
        userEmail: 'nethmi21k@gmail.com',
      },
    })

    setPosts(posts.data)
  }

  const getPosts = async () => {
    const posts = await axios.get('/api/v1/mealplans')

    setPosts(posts.data)
  }
  useEffect(() => {
    try {
      listWorkout().then((workouts) => setPosts(workouts.data))
    } catch (error) {}
  }, [])

  return (
    <div>
      {console.log(posts)}
      {posts.map((post) => (
        <div key={post.id}>
          <FitnessPlanPostTemp
            id={post.id}
            title={post.title}
            description={post.description}
            frequency={post.frequency}
            type={post.type}
            tmg={post.tmg}
            exerciseName={post.exerciseName}
            sets={post.sets}
            reps={post.reps}
            userEmail={post.userEmail}
            rest={post.rest}
            fromProfile={fromProfile}
          />
        </div>
      ))}
    </div>
  )
}
export default FitnessPlanPost
