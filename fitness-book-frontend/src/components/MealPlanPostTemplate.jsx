import Wrapper from '../assets/wrappers/mealPlanPost'
import userImg from '../assets/images/sampleuser.svg'
import postImg from '../assets/images/samplePostPhoto.png'
import beef from '../assets/images/beef.png'
import NiceModal from '@ebay/nice-modal-react'
import Comments from './Comments'
import { GrLike } from 'react-icons/gr'
import { FaRegCommentAlt } from 'react-icons/fa'
import PostMenu from '../components/PostMenu'
import { useState } from 'react' // Import useState
import cbum from '../assets/images/cbum.png'

const MealPlanPostTemp = ({
  id,
  imageData,
  instructions,
  nutritions,
  planName,
  recipes,
  userEmail,
  category,
  fromProfile,
}) => {
  const [isLiked, setIsLiked] = useState(false) // Add state variable

  const showComments = () => {
    NiceModal.show(Comments)
  }

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
          <h3 className="mealName">{planName}</h3>
          <h4 className="mealType">{category}</h4>
          <p className="recipes">Recipes</p>
          <ul>
            <li>{recipes}</li>
            {/* <li>Milk</li> */}
          </ul>

          <p className="nutritious">Nutritious</p>
          <ul>
            <li>{nutritions}</li>
            {/* <li>Protein</li> */}
          </ul>
          <p className="howToMake">{instructions}</p>
        </div>

        <div className="postImgContainer">
          <img
            src={`data:image/png;base64,${imageData}`}
            alt=""
            className="postImg"
          />
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
