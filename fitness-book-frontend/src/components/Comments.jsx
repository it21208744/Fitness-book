import { Modal } from 'antd'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import Wrapper from '../assets/wrappers/planInfo'
import CommentElement from './CommentElement'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CommentsModal = NiceModal.create(() => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const modal = useModal()

  const fetchComments = async () => {
    try {
      const response = await axios.get('/api/v1/comments')
      setComments(response.data)
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  const handleAddComment = async (e) => {
    e.preventDefault()

    if (!newComment.trim()) {
      console.warn('Please enter a comment.')
      return
    }

    try {
      const formData = new FormData()
      formData.append('comment', newComment)

      const response = await axios.post('/api/v1/comments', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      setComments([...comments, response.data])
      setNewComment('')
      modal.remove
    } catch (error) {
      console.error('Error adding comment:', error)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const handleCommentChange = (e) => {
    setNewComment(e.target.value)
  }

  return (
    <Wrapper>
      <Modal
        title="Comments"
        footer={null}
        open={modal.visible}
        onOk={modal.hide}
        onCancel={modal.hide}
        afterClose={modal.remove}
      >
        {comments.map((comment) => (
          <>
            <CommentElement
              key={comment.id}
              comment={comment.comment}
              id={comment.id}
            />
          </>
        ))}

        <form onSubmit={handleAddComment}>
          <input
            type="text"
            style={{ width: '30vw' }}
            onChange={handleCommentChange}
            value={newComment}
            placeholder="Enter your comment"
          />
          <button type="submit">SUBMIT</button>
        </form>
      </Modal>
    </Wrapper>
  )
})

export default CommentsModal
