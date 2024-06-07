import { Modal } from 'antd'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Wrapper from '../assets/wrappers/planInfo'
import UpdatePlan from './updatePlan'

export default NiceModal.create(({ id, onPlanUpdated }) => {
  const [planInfo, setPlanInfo] = useState({})
  const modal = useModal()

  useEffect(() => {
    getPlanInfo()
  }, [])

  const getPlanInfo = async () => {
    try {
      const planInfoTemp = await axios.get(`/api/v1/mealplans/${id}`)
      setPlanInfo(planInfoTemp.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePlanUpdated = () => {
    getPlanInfo()
    if (typeof onPlanUpdated === 'function') {
      onPlanUpdated()
    }
  }

  return (
    <Wrapper>
      <Modal
        title={planInfo?.planName}
        onOk={() => modal.hide()}
        open={modal.visible}
        onCancel={() => modal.hide()}
        afterClose={() => modal.remove()}
      >
        <h1>{planInfo?.planName}</h1>
        <h3>{planInfo?.category}</h3>
        <h2>Recipes</h2>
        <ul>
          {planInfo?.recipes?.split(',').map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>
          })}
        </ul>
        <h3>How to Make</h3>
        <p>{planInfo?.instructions}</p>
        <h3>Nutrition</h3>
        <ul>
          {planInfo?.nutritions?.split(',').map((nutrition, index) => {
            return <li key={index}>{nutrition}</li>
          })}
        </ul>
        <button
          onClick={() => {
            NiceModal.show(UpdatePlan, {
              id: planInfo?.id,
              onPlanUpdated: handlePlanUpdated,
            })
          }}
        >
          Update
        </button>
      </Modal>
    </Wrapper>
  )
})
