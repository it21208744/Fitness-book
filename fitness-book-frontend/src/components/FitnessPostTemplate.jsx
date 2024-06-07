import Wrapper from '../assets/wrappers/mealPlanPost'
import userImg from '../assets/images/sampleuser.svg'
import postImg from '../assets/images/samplePostPhoto.png'
import work from '../assets/images/work.webp'
import NiceModal from '@ebay/nice-modal-react'
import Comments from './Comments'
import { GrLike } from 'react-icons/gr'
import { FaRegCommentAlt } from 'react-icons/fa'
import PostMenu from '../components/PostMenu'
import { useState } from 'react'
import cbum from '../assets/images/cbum.png'
const MealPlanPostTemp = ({
  id,
  title,
  description,
  frequency,
  type,
  tmg,
  exerciseName,
  sets,
  reps,
  rest,
  fromProfile,
}) => {
  const showComments = () => {
    NiceModal.show(Comments)
  }
  const [isLiked, setIsLiked] = useState(false) // Add state variable
  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }
  return (
    <Wrapper>
      <div className="post">
        <div className="menu" style={{ position: 'relative', left: '46.5vw' }}>
          <PostMenu id={id} />
        </div>

        {fromProfile ? (
          <></>
        ) : (
          <div className="postHeader">
            <img src={cbum} alt="userimg" className="userImg" style={{}} />
            <p className="name">kasun udayantha</p>
          </div>
        )}

        <div className="postDesc">
          <h1 className="mealName">{title}</h1>
          <h4 className="mealType">Type is {type}</h4>
          <p className="mealType">{description}</p>
          <h4 className="mealType">{exerciseName}</h4>
          <h4 className="mealType">{frequency}</h4>

          <h4 className="mealType">Targeted muscle group is {tmg}</h4>
          <h4 className="mealType">
            {sets} X {reps}
          </h4>
          {/* <h4 className="mealType">{reps}</h4> */}
          <h4 className="mealType">{rest} rest</h4>
        </div>

        <div className="postImgContainer">
          <img src={work} alt="" className="postImg" />
        </div>

        <div className="postFooter">
          <button
            className={`likeBtn ${isLiked ? 'liked' : ''}`} // Add class based on state
            onClick={handleLikeClick}
          >
            <GrLike />
          </button>
          <button className="commentBtn" onClick={showComments}>
            <FaRegCommentAlt />
          </button>
        </div>
        <div className="navBar"></div>
      </div>
    </Wrapper>
  )
}
export default MealPlanPostTemp
