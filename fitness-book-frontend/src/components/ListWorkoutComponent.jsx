import React, { useEffect, useState } from 'react'
import { deleteWorkout, listWorkout } from '../services/WorkoutService'
import { useNavigate } from 'react-router-dom'

import img from '../assets/333.jpg'
const ListWorkoutComponent = () => {
  const [workout, setWorkout] = useState([])
  const navigator = useNavigate()

  useEffect(() => {
    getAllWorkout()
  }, [])

  function getAllWorkout() {
    listWorkout()
      .then((response) => {
        console.log(response)
        setWorkout(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function addNewWorkout() {
    navigator('/add-workout')
  }

  function updateWorkout(id) {
    navigator(`../edit-workout/${id}`)
  }

  function removeWorkout(id) {
    console.log(id)
    deleteWorkout(id)
      .then((response) => {
        getAllWorkout()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const lableStyle1 = {
    color: '#414654',
    fontSize: '30px',
    marginTop: '30px',
    marginLeft:'650px'
  }
  const lableStyle2 = {
    color: '#414654',
    fontSize: '15px',
    border: "1px solid"
  }
  const imagestyle = {
    width: '100vw',
    height: '35vh',
  }
  const buttonStyle4 = {
    backgroundColor: '#D10000',
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
    marginTop: '10px',
  }

  const buttonStyle3 = {
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
  // style={{
  //   background: `url(${img})`,
  //   backgroundRepeat:"no-repeat",
  //   backgroundSize:"cover",
  //   width: '250vw',
  //   height: '100vh'

  // }}
  //<button className='btn btn-primary mb-2' style={buttonStyle} onClick={addNewWorkout}>Add Workout</button>
  // style={{backgroundColor: '#ececec',width: '100vw',
  //     height: '60vh',}}
  return (
    <>
      <div>
        <img style={imagestyle} src={img} alt="An example image" />
        <h2 className="text-center" style={lableStyle1}>
          My Workout Plans
        </h2>
      </div>
      <br></br>
      <div className="container">
        <table style={{width: "90%",
  borderCollapse: "collapse", marginLeft:"70px"}}>
          <thead>
            <tr>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Title</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Description</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Frequency</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Type</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Targeted muscle group</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Exercise Name</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Sets</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Reps</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Rest</th>
              <th style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>Customize Options</th>
            </tr>
          </thead>
          <tbody>
            {workout.map((workoout) => (
              <tr key={workoout.id}>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.title}</td>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.description}</td>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.frequency}</td>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.type}</td>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.tmg}</td>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.exerciseName}</td>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.sets}</td>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.reps}</td>
                <td style={{border: "1px solid #dddddd",padding: "8px",textAlign: "left"}}>{workoout.rest}</td>

                <td>
                  <button
                    className="btn btn-info"
                    style={buttonStyle3}
                    onClick={() => updateWorkout(workoout.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    style={buttonStyle4}
                    onClick={() => removeWorkout(workoout.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListWorkoutComponent
