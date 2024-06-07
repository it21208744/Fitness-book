import React, { useEffect, useState } from 'react'
import {
  createWorkout,
  getWorkout,
  updateWorkout,
} from '../services/WorkoutService'
import { useActionData, useNavigate, useParams } from 'react-router-dom'
import img from '../assets/t.webp'

const WorkoutComponent = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [frequency, setFrequency] = useState('')
  const [type, setType] = useState('')
  const [tmg, setTmg] = useState('')
  const [exerciseName, setExerciseName] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [rest, setRest] = useState('')
  const { id } = useParams()
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    frequency: '',
    type: '',
    tmg: '',
    exerciseName: '',
    sets: '',
    reps: '',
    rest: '',
  })

  const navigator = useNavigate()
  useEffect(() => {
    if (id) {
      getWorkout(id)
        .then((response) => {
          setTitle(response.data.title)
          setDescription(response.data.description)
          setFrequency(response.data.frequency)
          setType(response.data.type)
          setTmg(response.data.tmg)
          setExerciseName(response.data.exerciseName)
          setSets(response.data.sets)
          setReps(response.data.reps)
          setRest(response.data.rest)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [id])

  function saveOrUpdateWorkout(e) {
    e.preventDefault()

    if (validateForm()) {
      const workout = {
        title,
        description,
        frequency,
        type,
        tmg,
        exerciseName,
        sets,
        reps,
        rest,
      }
      console.log(workout)

      if (id) {
        updateWorkout(id, workout)
          .then((response) => {
            console.log(response.data)
            navigator('../workout')
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        createWorkout(workout)
          .then((response) => {
            console.log(response.data)
            navigator('../workout')
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }

  function validateForm() {
    let valid = true
    const errorsCopy = { ...errors }

    if (title.trim()) {
      errorsCopy.title = ''
    } else {
      errorsCopy.title = 'title is required'
      valid = false
    }
    if (description.trim()) {
      errorsCopy.description = ''
    } else {
      errorsCopy.description = 'description is required'
      valid = false
    }
    if (frequency.trim()) {
      errorsCopy.frequency = ''
    } else {
      errorsCopy.frequency = ' frequency is required'
      valid = false
    }
    if (type.trim()) {
      errorsCopy.type = ''
    } else {
      errorsCopy.type = 'type is required'
      valid = false
    }
    if (tmg.trim()) {
      errorsCopy.tmg = ''
    } else {
      errorsCopy.tmg = 'tmg is required'
      valid = false
    }
    if (exerciseName.trim()) {
      errorsCopy.exerciseName = ''
    } else {
      errorsCopy.exerciseName = 'exercise Name is required'
      valid = false
    }

    if (sets.trim()) {
      errorsCopy.sets = ''
    } else {
      errorsCopy.sets = 'sets is required'
      valid = false
    }

    if (reps.trim()) {
      errorsCopy.reps = ''
    } else {
      errorsCopy.reps = 'reps is required'
      valid = false
    }
    if (rest.trim()) {
      errorsCopy.rest = ''
    } else {
      errorsCopy.rest = 'rest is required'
      valid = false
    }

    setErrors(errorsCopy)
    return valid
  }

  const lableStyle1 = {
    color: '#fff',
    fontSize: '30px',
    marginTop: '30px',
    marginLeft:'650px'
  }
  function pageTitle() {
    if (id) {
      return (
        <h2 className="text-center" style={lableStyle1}>
          Update Workout Plan
        </h2>
      )
    } else {
      return (
        <h2 className="text-center" style={lableStyle1}>
          ADD WORKOUT PLAN
        </h2>
      )
    }
  }
  const buttonStyle = {
    backgroundColor: '#414654',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '16px',
    width: '130px',
    height: '36px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  }

  const inputStyle = {
    display: 'block',
    width: '100%',
    height: '36px',
    borderWidth: '0 0 2px 0',
    borderColor: '#A8B7BB',
    fontSize: '14px',
    fontWeight: '300',
    LineHeight: '26px',
  }
  const lableStyle = {
    color: '#414654',
    fontWeight: '600',
    fontSize: '18px',
  }
  const cardstyle = {
    overflow: 'hidden',
    boxShadow: '0 2px 20px ',
    borderRadius: '$radius',
    transition: 'transform 200ms ease-in',
    padding: '30px',
    backdropFilter: 'blur(5px)',
    background:
      'linear-gradient(rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))',
    width: '800px',
    marginLeft: '360px',
  }
  const backg = {
    backgroundColor: '#FFFFF0',
  }

  //#E49B0F
  return (
    <div
      //style={backg}
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '120vh',
      }}
    >
      <br />
      <br />
      <div>
        <div>
          {pageTitle()}
          <div>
            <br></br>

            <form>
              <div style={cardstyle}>
                <div>
                  <label style={lableStyle}>Title</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    value={title}
                    className={`form-control ${
                      errors.title ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setTitle(e.target.value)}
                    maxlength={50} // Maximum length of 50 characters
                  ></input>
                  {errors.title && (
                    <div className="invalid-feedback">{errors.title}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Description</label>
                  <textarea
                    style={inputStyle}
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    value={description}
                    // row="5"
                    className={`form-control ${
                      errors.description ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setDescription(e.target.value)}
                    maxlength={100} // Maximum length of 100 characters
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Frequency</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter frequency"
                    name="frequency"
                    value={frequency}
                    className={`form-control ${
                      errors.frequency ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setFrequency(e.target.value)}
                  ></input>
                  {errors.frequency && (
                    <div className="invalid-feedback">{errors.frequency}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Type</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter type"
                    name="type"
                    value={type}
                    className={`form-control ${
                      errors.type ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                  {errors.type && (
                    <div className="invalid-feedback">{errors.type}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Targeted muscle group</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter tmg"
                    name="tmg"
                    value={tmg}
                    className={`form-control ${errors.tmg ? 'is-invalid' : ''}`}
                    onChange={(e) => setTmg(e.target.value)}
                  ></input>
                  {errors.tmg && (
                    <div className="invalid-feedback">{errors.tmg}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Exercise name</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter exercise name"
                    name="exerciseName"
                    value={exerciseName}
                    className={`form-control ${
                      errors.exerciseName ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setExerciseName(e.target.value)}
                  ></input>
                  {errors.exerciseName && (
                    <div className="invalid-feedback">
                      {errors.exerciseName}
                    </div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Sets</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter sets"
                    name="sets"
                    value={sets}
                    className={`form-control ${
                      errors.sets ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setSets(e.target.value)}
                  ></input>
                  {errors.sets && (
                    <div className="invalid-feedback">{errors.sets}</div>
                  )}
                </div>

                <div>
                  <label style={lableStyle}>Reps</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter reps"
                    name="reps"
                    value={reps}
                    className={`form-control ${
                      errors.reps ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setReps(e.target.value)}
                  ></input>
                  {errors.reps && (
                    <div className="invalid-feedback">{errors.reps}</div>
                  )}
                </div>

                <div>
                  <label style={lableStyle}>Rest</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter rest"
                    name="rest"
                    value={rest}
                    className={`form-control ${
                      errors.rest ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setRest(e.target.value)}
                  ></input>
                  {errors.rest && (
                    <div className="invalid-feedback">{errors.rest}</div>
                  )}
                </div>
                <br></br>
                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateWorkout}
                  style={buttonStyle}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkoutComponent
