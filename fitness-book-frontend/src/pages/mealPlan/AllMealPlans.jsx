import axios from 'axios'
import { useState, useEffect } from 'react'
import Wrapper from '../../assets/wrappers/mealPlan'
import NiceModal from '@ebay/nice-modal-react'
import PlanInfo from '../../components/PlanInfo'
import UpdatePlan from '../../components/updatePlan'
import AddPlan from '../../components/AddPlan'
import img from '../../assets/images/undraw_barbecue_3x93.svg'
import HeaderComponent from '../../components/HeaderComponent'

const AllMealPlans = () => {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/v1/mealplans')
      setPlans(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deletePlan = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this meal plan?'
    )
    if (confirmDelete) {
      try {
        // console.log(id)
        await axios.delete(`/api/v1/mealplans/${id}`)
        console.log(`deleted`)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const showPlanInfoModal = (id) => {
    NiceModal.show(PlanInfo, { id: id, onPlanUpdated: fetchData })
  }

  const showAddPlanModal = () => {
    NiceModal.show(AddPlan, { onPlanAdded: fetchData })
  }

  const showUpdatePlanModal = (id) => {
    NiceModal.show(UpdatePlan, { id: id, onPlanUpdated: fetchData })
  }

  return (
    <Wrapper>
      <HeaderComponent />
      {plans.map((plan) => {
        return (
          <div key={plan.id} className="mealPlan">
            <h1>{plan.planName}</h1>
            <h3>{plan.category}</h3>
            <img src={img} alt="Meal Plan" />
            <button
              type="button"
              onClick={() => {
                showPlanInfoModal(plan.id)
              }}
            >
              View the plan
            </button>
            <button
              type="button"
              onClick={() => {
                deletePlan(plan.id)
              }}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => {
                showUpdatePlanModal(plan.id)
              }}
            >
              Update
            </button>
          </div>
        )
      })}
      <button type="button" className="addPlanBtn" onClick={showAddPlanModal}>
        Add a plan
      </button>
    </Wrapper>
  )
}

export default AllMealPlans
