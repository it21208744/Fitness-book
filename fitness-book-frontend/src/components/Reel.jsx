import Wrapper from '../assets/wrappers/reel'
import ReelNav from '../components/ReelNav'
import MediaPost from './MediaPost'
import { useState } from 'react'
import MealPlanPost from './MealPlanPost'
import StatsPost from './StatsPost'
import FitnessPost from './FitnessPost'
const Reel = () => {
  const [reelSec, setReelSec] = useState('media')

  return (
    <Wrapper>
      <div className="reelSection">
        <div className="reel">
          <div className="reelNav">
            <ReelNav setReelSec={setReelSec} />
          </div>
          {reelSec === 'media' && <MediaPost />}
          {reelSec === 'meal' && <MealPlanPost />}
          {reelSec === 'fitness' && <FitnessPost />}
          {reelSec === 'stats' && <StatsPost />}
        </div>
      </div>
    </Wrapper>
  )
}
export default Reel
