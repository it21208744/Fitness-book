import Wrapper from '../assets/wrappers/statsPost'
import userImg from '../assets/images/sampleuser.svg'
import postImg from '../assets/images/cu3.webp'
import { GrLike } from 'react-icons/gr'
import { FaRegCommentAlt } from 'react-icons/fa'
import NiceModal from '@ebay/nice-modal-react'
import Comments from './Comments'
import PostMenu from '../components/PostMenu'
import { useState } from 'react'
import cbum from '../assets/images/cbumPost.png'
const StatsPostTemplate = ({
  id,
  name,
  email,
  age,
  date,
  activityType,
  distance,
  noOfPushups,
  weight,
  discription,
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

        <div className="postDesc" style={{ textAlign: 'center' }}>
          <h2>HOW I STARTED WITH EXCERCISE</h2>
        </div>

        <div className="postImgContainer">
          <img
            src={postImg}
            alt=""
            className="postImg"
            style={{ height: '120px' }}
          />
        </div>
        <br></br>

        <div className="postDesc2">
          <h1></h1>
          <h4>
            Name: <span className="name">{name}</span>
          </h4>
          <h4>
            Email: <span className="email">{email}</span>
          </h4>
          <h4>
            Age: <span className="age">{age}</span>
          </h4>
          <h4>
            Date: <span className="date">{date}</span>
          </h4>
          <h4>
            Activity Type: <span className="activityType">{activityType}</span>
          </h4>
          <h4>
            Distance: <span className="distance">{distance}</span>
          </h4>
          <h4>
            No Of Pushups: <span className="noOfPushups">{noOfPushups}</span>
          </h4>
          <h4>
            Weight: <span className="weight">{weight}</span>
          </h4>
          <h4>
            My Achievement: <span className="discription">{discription}</span>
          </h4>
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
export default StatsPostTemplate
