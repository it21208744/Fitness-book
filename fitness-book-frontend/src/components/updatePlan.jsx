import { Modal } from 'antd'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { createAddMealJson } from '../utils/addMealJsonCreate'

export default NiceModal.create(({ id, onPlanUpdated }) => {
  const modal = useModal()
  const [planInfo, setPlanInfo] = useState({
    planName: '',
    category: '',
    instructions: '',
  })
  const [ingredients, setIngredients] = useState([])
  const [nutritions, setNutritions] = useState([])

  useEffect(() => {
    const getPlan = async () => {
      try {
        const planInfoTemp = await axios.get(`/api/v1/mealplans/${id}`)
        setPlanInfo(planInfoTemp.data)

        setIngredients(
          planInfoTemp.data.recipes ? planInfoTemp.data.recipes.split(',') : []
        )

        setNutritions(
          planInfoTemp.data.nutritions
            ? planInfoTemp.data.nutritions.split(',')
            : []
        )
      } catch (error) {
        console.log(error)
      }
    }

    getPlan()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let dataForm = {}
    const formData = new FormData(e.target)

    for (let [key, value] of formData.entries()) {
      dataForm[key] = value
    }
    const mealPlan = createAddMealJson(nutritions, ingredients, dataForm)
    await axios.put(`/api/v1/mealplans/${id}`, mealPlan)

    if (typeof onPlanUpdated === 'function') {
      onPlanUpdated()
    }

    modal.hide()
  }

  const handleCategoryChange = (event) => {
    setPlanInfo({ ...planInfo, category: event.target.value })
  }

  const addIngredient = () => {
    setIngredients([...ingredients, ''])
  }

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients]
    newIngredients.splice(index, 1)
    setIngredients(newIngredients)
  }

  const addNutritions = () => {
    setNutritions([...nutritions, ''])
  }

  const handleNutritionsChange = (index, value) => {
    const newNutritions = [...nutritions]
    newNutritions[index] = value
    setNutritions(newNutritions)
  }

  const removeNutritions = (index) => {
    const newNutritions = [...nutritions]
    newNutritions.splice(index, 1)
    setNutritions(newNutritions)
  }

  const handleInstructionChange = (event) => {
    setPlanInfo({ ...planInfo, instructions: event.target.value })
  }

  return (
    <div>
      <Modal
        title="Update Meal Plan"
        onOk={() => modal.hide()}
        open={modal.visible}
        onCancel={() => modal.hide()}
        afterClose={() => modal.remove()}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="planName">Meal plan name</label>
          <br />
          <input
            required
            type="text"
            id="planName"
            name="planName"
            value={planInfo.planName}
            onChange={(e) =>
              setPlanInfo({ ...planInfo, planName: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <select
            id="category"
            name="category"
            value={planInfo.category}
            onChange={handleCategoryChange}
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto</option>
            <option value="Paleo">Paleo</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="High Protein">High Protein</option>
            <option value="Flexitarian">Flexitarian</option>
            <option value="Low FODMAP">Low FODMAP</option>
            <option value="Anti-inflammatory">Anti-inflammatory</option>
          </select>
          <br />
          <br />
          <label htmlFor="Ingredient">Ingredient</label>
          <br />
          {ingredients?.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
              <button type="button" onClick={() => removeIngredient(index)}>
                -
              </button>
              <br />
            </div>
          ))}
          <button type="button" onClick={addIngredient}>
            +
          </button>
          <br />
          <br />
          <label htmlFor="nutritions">Nutritions</label>
          <br />
          {nutritions.map((nutrition, index) => (
            <div key={index}>
              <input
                type="text"
                value={nutrition}
                onChange={(e) => handleNutritionsChange(index, e.target.value)}
              />
              <button type="button" onClick={() => removeNutritions(index)}>
                -
              </button>
              <br />
            </div>
          ))}
          <button type="button" onClick={addNutritions}>
            +
          </button>
          <br />
          <br />
          <label htmlFor="instructions">Instructions</label>
          <br />
          <textarea
            required
            name="instructions"
            id="instructions"
            cols="60"
            rows="10"
            value={planInfo.instructions}
            onChange={handleInstructionChange}
            style={{ resize: 'none' }}
          ></textarea>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  )
})
