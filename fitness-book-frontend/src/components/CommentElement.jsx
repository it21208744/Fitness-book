import Wrapper from '../assets/wrappers/CommentElement'
import sampleUser from '../assets/images/sampleuser.svg'
import axios from 'axios'
import { Button, Popconfirm } from 'antd'
import { MdDeleteOutline } from 'react-icons/md'
import dino from '../assets/images/dino.png'
const CommentElement = ({ comment, id }) => {
  const deleteComment = async (id) => {
    axios.delete(`/api/v1/comments/${id}`)
  }

  return (
    <Wrapper>
      <div className="commentWrapper">
        <div className="user">
          <img className="userimg" src={dino} alt="userimage" />
          <p className="userName">Ramon Dino</p>
        </div>

        <p className="Comment">{comment}</p>
        <Popconfirm
          title="Delete the booking"
          description="Are you sure to delete this comment?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => {
            deleteComment(id)
          }}
        >
          <Button
            danger
            size="small"
            style={{ position: 'absolute', left: '30vw' }}
          >
            <MdDeleteOutline />
          </Button>
        </Popconfirm>
      </div>
    </Wrapper>
  )
}
export default CommentElement
