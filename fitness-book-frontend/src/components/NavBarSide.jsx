import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/navBarSide'
import { MdOutlineFitnessCenter } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { TfiLayoutMediaLeftAlt } from 'react-icons/tfi'
import { GiMeal } from 'react-icons/gi'
import { GiProgression } from 'react-icons/gi'
import { MdNotificationsActive } from 'react-icons/md'
import { useState } from 'react'
import { Drawer, Divider } from 'antd'
import { GrLike } from 'react-icons/gr'
import { BiComment } from 'react-icons/bi'
import userImg from '../assets/images/sampleuser.svg'
const NavBarSide = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <Wrapper>
      <div className="navBar">
        <ul>
          <li
            style={{
              padding: '0 15px',
              color: '#414654',
              fontWeight: '800',
              fontSize: '20px',
            }}
          >
            <p style={{ textDecoration: 'none', color: '#414654' }}>
              FITNESS BOOK
            </p>
          </li>
          <li>
            <Link to={''}>
              <span>
                <TfiLayoutMediaLeftAlt />
              </span>
              &nbsp; &nbsp;Reel
            </Link>
          </li>
          <li>
            <Link to={'profile'}>
              <span>
                <CgProfile />
              </span>
              &nbsp; &nbsp;Profile
            </Link>
          </li>
          <li>
            <Link to={'/workoutplan'}>
              <span>
                <MdOutlineFitnessCenter />
              </span>
              &nbsp; &nbsp;Share a workout plan
            </Link>
          </li>
          <li>
            <Link to={'/addMealplan'}>
              <span>
                <GiMeal />
              </span>
              &nbsp; &nbsp;Share a meal plan
            </Link>
          </li>
          <li>
            <Link to={'/progress'}>
              <span>
                <GiProgression />
              </span>
              &nbsp; &nbsp;Share your progress
            </Link>
          </li>

          <li>
            <Link to={'/media'}>
              <span>
                <GiProgression />
              </span>
              &nbsp; &nbsp;Share media
            </Link>
          </li>

          <li>
            <Link onClick={showDrawer}>
              <span>
                <MdNotificationsActive />
              </span>
              &nbsp; &nbsp;Notifications
            </Link>

            <Drawer title="Notifications" onClose={onClose} open={open}>
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={userImg}
                  alt=""
                  style={{ height: '2em', marginRight: '5px' }}
                />
                <span>&nbsp; &nbsp;Barry Liked Your Post</span>
              </p>
              <Divider />
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={userImg}
                  alt=""
                  style={{ height: '2em', marginRight: '5px' }}
                />
                <span>&nbsp; &nbsp;Lara Liked Your Post</span>
              </p>
              <Divider />
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={userImg}
                  alt=""
                  style={{ height: '2em', marginRight: '5px' }}
                />
                <span>
                  &nbsp; &nbsp;Griffin commented <b>looking good :)</b>
                </span>
              </p>
              <Divider />

              <p style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={userImg}
                  alt=""
                  style={{ height: '2em', marginRight: '5px' }}
                />
                <span>
                  &nbsp; &nbsp;Thomas commented<b> When is the bulk :0</b>
                </span>
              </p>
              <Divider />
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={userImg}
                  alt=""
                  style={{ height: '2em', marginRight: '5px' }}
                />
                <span>&nbsp; &nbsp;Peter liked your post</span>
              </p>
              <Divider />
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={userImg}
                  alt=""
                  style={{ height: '2em', marginRight: '5px' }}
                />
                <span>&nbsp; &nbsp;Bruce liked your post</span>
              </p>
              <Divider />
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={userImg}
                  alt=""
                  style={{ height: '2em', marginRight: '5px' }}
                />
                <span>
                  &nbsp; &nbsp;Alex commented{' '}
                  <b>How many calories does &nbsp;&nbsp;&nbsp;it contains?</b>
                </span>
              </p>
            </Drawer>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
export default NavBarSide
