import userImg from '../assets/images/sampleuser.svg'
import cbum from '../assets/images/cbum.png'
import Wrapper from '../assets/wrappers/userProfile'
import FitnessPostTemp from '../components/FitnessPostTemplate'
import PostTemplate from '../components/PostTemplate'
import { useEffect, useState } from 'react'
import ImageComponent from '../components/ImageComponent'
import ReelNav from '../components/ReelNav'
import axios from 'axios'
import MediaPost from '../components/MediaPost'
import MealPlanPost from '../components/MealPlanPost'
import FitnessPost from '../components/FitnessPost'
import StatsPost from '../components/StatsPost'
import { Button, Popconfirm } from 'antd'
import { RiLogoutBoxRFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const [reelSec, setReelSec] = useState('media')

  const getUser = async () => {
    try {
      // const user = await axios.post('/api/v1/user', {
      //   email: 'chamodansajeewana@gmail.com',
      // })
      const storedJsonString = localStorage.getItem('user')
      const retrievedObject = JSON.parse(storedJsonString)
      console.log(retrievedObject)
      setUser(retrievedObject)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const signout = () => {
    navigate('../../login')
  }

  return (
    <Wrapper>
      <div className="cover">
        <img
          src={`data:image/png;base64,${user?.image}`}
          alt="userImage"
          className="userImage"
        />

        <Popconfirm
          title="LOGOUT"
          description="Are you sure you want to logout?"
          okText="Yes"
          cancelText="No"
          onConfirm={signout}
        >
          <Button
            danger
            size="small"
            style={{ position: 'absolute', top: '30vh', left: '70vw' }}
          >
            <span>
              LOGOUT
              <RiLogoutBoxRFill />
            </span>
          </Button>
        </Popconfirm>
      </div>
      <div className="contents">
        <h1>{user?.name}</h1>
        <div className="follow">
          <button className="followBtn">Follow +</button>
          <p className="noOfFollowers">5 followers</p>
        </div>
        <div className="reel">
          <div className="reelNav">
            <ReelNav setReelSec={setReelSec} />
          </div>
          {reelSec === 'media' && <MediaPost fromProfile="true" />}
          {reelSec === 'meal' && (
            <MealPlanPost userEmail="hehe@gmail.com" fromProfile="true" />
          )}
          {reelSec === 'fitness' && <FitnessPost fromProfile="true" />}
          {reelSec === 'stats' && <StatsPost fromProfile="true" />}
        </div>
      </div>
    </Wrapper>
  )
}
export default Profile
