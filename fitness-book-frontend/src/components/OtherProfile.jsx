import { Modal } from 'antd'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import userImg from '../assets/images/sampleuser.svg'
import cbum from '../assets/images/cbum.png'
import Wrapper from '../assets/wrappers/OtherProfile'
import FitnessPostTemp from './FitnessPostTemplate'
import PostTemplate from './PostTemplate'
export default NiceModal.create(() => {
  const modal = useModal()

  return (
    <Modal
      width={1000}
      footer={null}
      onOk={() => modal.hide()}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
    >
      <Wrapper>
        <div className="cover">
          <img src={cbum} alt="userImage" className="userImage" />
        </div>
        <div className="contents">
          <h1>Christopher Adam Bumstead</h1>
          <div className="follow">
            <button className="followBtn">Follow +</button>
            <p className="noOfFollowers">5 followers</p>
          </div>
          <PostTemplate />
        </div>
      </Wrapper>
    </Modal>
  )
})
