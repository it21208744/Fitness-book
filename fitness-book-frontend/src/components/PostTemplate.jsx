import Wrapper from '../assets/wrappers/postTemplate'
import userImg from '../assets/images/sampleuser.svg'
import cbum from '../assets/images/cbum.png'
import cbumPost from '../assets/images/cbumPost.png'
import postImg from '../assets/images/samplePostPhoto.png'
import { GrLike } from 'react-icons/gr'
import { FaRegCommentAlt } from 'react-icons/fa'
import OtherProfile from './OtherProfile'
import NiceModal from '@ebay/nice-modal-react'
import { BiBorderRadius } from 'react-icons/bi'
import { useState } from 'react'
import Comments from './Comments'

const PostTemplate = ({
  id,
  imageData,
  videoData,
  description,
  fromProfile,
}) => {
  const showProfile = () => {
    NiceModal.show(OtherProfile)
  }

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
        {fromProfile ? (
          <></>
        ) : (
          <div className="postHeader" onClick={showProfile}>
            <img src={cbum} alt="userimg" className="userImg" style={{}} />
            <p className="name">kasun udayantha</p>
          </div>
        )}

        <div className="postDesc">
          <p>{description}</p>
        </div>

        <div className="postImgContainer">
          {' '}
          {imageData != null ? (
            <div className="postImgContainer">
              <img
                src={`data:image/png;base64,${imageData}`}
                alt=""
                className="postImg"
              />
            </div>
          ) : (
            <></>
          )}
          {videoData != null ? (
            <video controls className="postVideo" style={{ width: '40vw' }}>
              <source
                src={`data:video/mp4;base64,${videoData}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <></>
          )}
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
export default PostTemplate
