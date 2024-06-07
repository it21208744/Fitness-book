import { Modal } from 'antd'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import axios from 'axios'
import { useState } from 'react'
import { createAddMealJson } from '../utils/addMealJsonCreate'

export default NiceModal.create(({ onPlanAdded }) => {
  const modal = useModal()
  const [ingredients, setIngredients] = useState([])
  const [nutritions, setNutritions] = useState([])

  const addPlan = async (mealPlan) => {
    try {
      const planInfo = await axios.post('/api/v1/mealplans', mealPlan, {
        headers: {
          userEmail: 'chamod@gmail.com',
        },
      })
      console.log(planInfo)
      // Trigger the callback to fetch updated plans
      if (typeof onPlanAdded === 'function') {
        onPlanAdded()
      }
    } catch (error) {
      console.log(error)
    }
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

  const handleSubmit = (e) => {
    e.preventDefault()
    let dataForm = {}
    const formData = new FormData(e.target)

    for (let [key, value] of formData.entries()) {
      dataForm[key] = value
    }
    const mealPlan = createAddMealJson(nutritions, ingredients, dataForm)
    formData.append('category', mealPlan.category)
    formData.append('imageData', mealPlan.imageData)
    formData.append('instructions', mealPlan.instructions)
    formData.append('nutritions', mealPlan.nutritions)
    formData.append('planName', mealPlan.planName)
    formData.append('recipes', mealPlan.recipes)

    addPlan(formData)
  }

  const handleImage = (e) => {
    const image = e.target.files[0]
  }

  return (
    <div>
      <Modal
        title="Add a meal plan"
        onOk={() => modal.hide()}
        open={modal.visible}
        onCancel={() => modal.hide()}
        afterClose={() => modal.remove()}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="planName">Meal plan name</label>
          <br />
          <input required type="text" id="planName" name="planName" />
          <br />
          <br />

          <label htmlFor="category">Category</label>
          <br />
          <select id="category" name="category">
            <option value="vegetarian">vegetarian</option>
            <option value="vegan">vegan</option>
            <option value="keto">keto</option>
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
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  removeIngredient(index)
                }}
              >
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
              <button
                type="button"
                onClick={() => {
                  removeNutritions(index)
                }}
              >
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
          <label htmlFor="Instructions">How to make</label>
          <br />
          <textarea
            required
            name="instructions"
            id="instructions"
            cols="60"
            rows="10"
            style={{ resize: 'none' }}
          ></textarea>
          <br />
          <br />
          <label htmlFor="photos">Add images</label>
          <br />
          <input
            type="file"
            name="photos"
            id="photos"
            accept="image/*"
            onChange={handleImage}
          />

          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  )
})
