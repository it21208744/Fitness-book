import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import {
  createCurrentWorkOut,
  getCurrentWorkOut,
  updateCurrentWorkOut,
} from '../services/CurrentWorkOutService'

import img from '../assets/add7.jpeg'

const CurrentWorkOutComponent = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [date, setDate] = useState('')
  const [activityType, setActivityType] = useState('')
  const [distance, setDistance] = useState('')
  const [noOfPushups, setNoOfPushups] = useState('')
  const [weight, setWeight] = useState('')
  const [discription, setDiscription] = useState('')

  const { id } = useParams()
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: '',
    date: '',
    activityType: '',
    distance: '',
    noOfPushups: '',
    weight: '',
    discription: '',
  })

  const navigator = useNavigate()

  useEffect(() => {
    if (id) {
      getCurrentWorkOut(id)
        .then((response) => {
          setName(response.data.name)
          setEmail(response.data.email)
          setAge(response.data.age)
          setDate(response.data.date)
          setActivityType(response.data.activityType)
          setDistance(response.data.distance)
          setNoOfPushups(response.data.noOfPushups)
          setWeight(response.data.weight)
          setDiscription(response.data.discription)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [id])

  function saveOrUpdateCurrentWorkOut(e) {
    e.preventDefault()

    if (validateForm()) {
      const currentWorkOut = {
        name,
        email,
        age,
        date,
        activityType,
        distance,
        noOfPushups,
        weight,
        discription,
      }
      console.log(currentWorkOut)

      if (id) {
        updateCurrentWorkOut(id, currentWorkOut)
          .then((response) => {
            console.log(response.data)
            navigator('../currentworkOuts')
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        createCurrentWorkOut(currentWorkOut)
          .then((response) => {
            console.log(response.data)
            navigator('../currentworkOuts')
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

    if (name) {
      errorsCopy.name = ''
    } else {
      errorsCopy.name = 'Name is required'
      valid = false
    }

    if (email) {
      errorsCopy.email = ''
    } else {
      errorsCopy.email = 'Email is required'
      valid = false
    }
    if (age) {
      errorsCopy.age = ''
    } else {
      errorsCopy.age = 'Age is required'
      valid = false
    }
    if (date) {
      errorsCopy.date = ''
    } else {
      errorsCopy.date = 'Date is required'
      valid = false
    }
    if (activityType) {
      errorsCopy.activityType = ''
    } else {
      errorsCopy.activityType = 'ActivityType is required'
      valid = false
    }
    if (distance) {
      errorsCopy.distance = ''
    } else {
      errorsCopy.distance = 'Distance is required'
      valid = false
    }
    if (noOfPushups) {
      errorsCopy.noOfPushups = ''
    } else {
      errorsCopy.noOfPushups = 'NoOfPushupsis required'
      valid = false
    }
    if (weight) {
      errorsCopy.weight = ''
    } else {
      errorsCopy.weight = 'Weight is required'
      valid = false
    }
    if (discription) {
      errorsCopy.discription = ''
    } else {
      errorsCopy.discription = 'Discription is required'
      valid = false
    }

    setErrors(errorsCopy)

    return valid
  }

  const lableStyle1 = {
    color: '#fff',
    fontSize: '30px',
    marginTop: '30px',
    display: 'flex',
  justifyContent: 'center',
  }

  function pageTitle() {
    if (id) {
      return (
        <h2 className="text-center" style={lableStyle1}>
          Update Current WorkOuts Status
        </h2>
      )
    } else {
      return (
        <h2 className="text-center" style={lableStyle1}>
          Add Current WorkOuts Status
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
    fontSize: '15px',
  }
  const lableStyle3 = {
    color: '#414654',
    fontWeight: '600',
    fontSize: '20px',
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

  return (
    <div
      //style={backg}
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '130vh',
      }}
    >
      <br />
      <br />
      <div>
        <div>
          {pageTitle()}
          <div>
            <form>
              <div style={cardstyle}>
                <div>
                  <label style={lableStyle3}>User Information:</label>{' '}
                </div>
                <div>
                  <label style={lableStyle}>Name</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    className={`form-control ${
                      errors.name ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setName(e.target.value)}
                  ></input>

                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Email</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    className={`form-control ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>

                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Age</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter Age"
                    name="age"
                    value={age}
                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                    onChange={(e) => setAge(e.target.value)}
                  ></input>

                  {errors.age && (
                    <div className="invalid-feedback">{errors.age}</div>
                  )}
                </div>
                <br></br> <br></br>
                <div>
                  <label style={lableStyle3}>Workout Metrics:</label>{' '}
                </div>
                <div>
                  <label style={lableStyle}>Date</label>
                  <input
                    style={inputStyle}
                    type="date"
                    placeholder="Enter Date"
                    name="date"
                    value={date}
                    className={`form-control ${
                      errors.date ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setDate(e.target.value)}
                  ></input>

                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>ActivityType</label>
                  <select
                    style={inputStyle}
                    name="activityType"
                    value={activityType}
                    className={`form-control ${
                      errors.activityType ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setActivityType(e.target.value)}
                  >
                    <option value="" disabled>
                      Select an activity type
                    </option>
                    <option value="Running">Running</option>
                    <option value="Weightlifting">Weightlifting</option>
                    <option value="Pushups">Pushups</option>
                  </select>

                  {errors.activityType && (
                    <div className="invalid-feedback">
                      {errors.activityType}
                    </div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Distance</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter Distance"
                    name="distance"
                    value={distance}
                    className={`form-control ${
                      errors.distance ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setDistance(e.target.value)}
                  ></input>

                  {errors.distance && (
                    <div className="invalid-feedback">{errors.distance}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>No OfPushups</label>
                  <input
                    style={inputStyle}
                    type="number"
                    placeholder="Enter noOfPushups"
                    name="noOfPushups"
                    value={noOfPushups}
                    className={`form-control ${
                      errors.noOfPushups ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setNoOfPushups(e.target.value)}
                  ></input>

                  {errors.noOfPushups && (
                    <div className="invalid-feedback">{errors.noOfPushups}</div>
                  )}
                </div>
                <div>
                  <label style={lableStyle}>Weight</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter Weight"
                    name="weight"
                    value={weight}
                    className={`form-control ${
                      errors.weight ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setWeight(e.target.value)}
                  ></input>

                  {errors.weight && (
                    <div className="invalid-feedback">{errors.weight}</div>
                  )}
                </div>
                <br></br> <br></br>
                <div>
                  <label style={lableStyle3}>Description of Achievement:</label>{' '}
                </div>
                <div>
                  <label style={lableStyle}>Discription</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Enter Discription"
                    name="discription"
                    value={discription}
                    className={`form-control ${
                      errors.discription ? 'is-invalid' : ''
                    }`}
                    onChange={(e) => setDiscription(e.target.value)}
                  ></input>

                  {errors.discription && (
                    <div className="invalid-feedback">{errors.discription}</div>
                  )}
                </div>
                <br />
                <button
                  className="btn btn-success"
                  style={buttonStyle}
                  onClick={saveOrUpdateCurrentWorkOut}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWorkOutComponent
