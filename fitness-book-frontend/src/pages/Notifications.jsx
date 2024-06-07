import axios from 'axios'
import { useState } from 'react'
import { createAddMealJson } from '../utils/addMealJsonCreate'
import { Divider } from 'antd'
import Wrapper from '../assets/wrappers/notifications'

import HeaderComponent from '../components/HeaderComponent'

const Notifications = () => {
  return (
    <Wrapper>
      <HeaderComponent />
      <div className="notificationPanel">
        <Divider orientation="left" plain>
          Chamodan Sajeewana
        </Divider>
        <p>Liked Your Post</p>
        <Divider />

        <Divider orientation="left" plain>
          Chamodan Sajeewana
        </Divider>
        <p>Liked Your Post</p>
        <Divider />

        <Divider orientation="left" plain>
          Chamodan Sajeewana
        </Divider>
        <p>Liked Your Post</p>
        <Divider />

        <Divider orientation="left" plain>
          Chamodan Sajeewana
        </Divider>
        <p>Liked Your Post</p>
        <Divider />

        <Divider orientation="left" plain>
          Chamodan Sajeewana
        </Divider>
        <p>Liked Your Post</p>
        <Divider />
      </div>
    </Wrapper>
  )
}
export default Notifications
