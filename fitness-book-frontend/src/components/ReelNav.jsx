import Wrapper from '../assets/wrappers/reelNav'
import { TiSocialInstagramCircular } from 'react-icons/ti'
import { GiHotMeal } from 'react-icons/gi'
import { MdOutlineSportsGymnastics } from 'react-icons/md'
import { IoFootsteps } from 'react-icons/io5'
import { useState } from 'react'

const ReelNav = ({ setReelSec }) => {
  return (
    <Wrapper>
      <div className="reelNav">
        <ul>
          <li>
            <button onClick={() => setReelSec('media')}>
              <TiSocialInstagramCircular />
            </button>
          </li>
          <li>
            <button onClick={() => setReelSec('meal')}>
              <GiHotMeal />
            </button>
          </li>
          <li>
            <button onClick={() => setReelSec('fitness')}>
              <MdOutlineSportsGymnastics />
            </button>
          </li>
          <li>
            <button onClick={() => setReelSec('stats')}>
              <IoFootsteps />
            </button>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
export default ReelNav
