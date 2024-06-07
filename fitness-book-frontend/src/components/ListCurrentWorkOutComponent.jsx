import React, { useEffect, useState } from 'react'
import {
  deleteCurrentWorkOut,
  listCurrentWorkOuts,
} from '../services/CurrentWorkOutService'
import { useNavigate } from 'react-router-dom'

// import img from '../assets/add3.jpg'

import img from '../assets/add7.jpeg'
const ListCurrentWorkOutComponent = () => {
  const [currentWorkOuts, setCurrentWorkOuts] = useState([])

  const [deleteConfirmation, setDeleteConfirmation] = useState(null)
  const [workoutToDelete, setWorkoutToDelete] = useState(null)

  const navigator = useNavigate()

  useEffect(() => {
    getAllCurrentWorkOuts()
  }, [])

  function getAllCurrentWorkOuts() {
    listCurrentWorkOuts()
      .then((response) => {
        setCurrentWorkOuts(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function addNewCurrentWorkOut() {
    navigator('../add-currentWorkOut')
  }

  function updateCurrentWorkOut(id) {
    navigator(`../edit-currentWorkOut/${id}`)
  }

  function removeCurrentWorkOut(id) {
    console.log(id)

    deleteCurrentWorkOut(id)
      .then((response) => {
        getAllCurrentWorkOuts()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function removeCurrentWorkOut(id) {
  setWorkoutToDelete(id);
  setDeleteConfirmation(true);
}


  function handleDeleteConfirmed() {
    deleteCurrentWorkOut(workoutToDelete)
      .then((response) => {
        getAllCurrentWorkOuts()
      })
      .catch((error) => {
        console.error(error)
      })
    setDeleteConfirmation(false)
  }

  function handleCancelDelete() {
    setWorkoutToDelete(null)
    setDeleteConfirmation(false)
  }

  const buttonStyle = {
    backgroundColor: '#414654',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '12px',
    width: '190px',
    height: '40px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  }
  const buttonStyle2 = {
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
  const lableStyle1 = {
    color: '#fff',
    fontSize: '30px',
    marginTop: '30px',
    display: 'flex',
  justifyContent: 'center',
 
  }
  const lableStyle2 = {
    color: '#fff',
    fontSize: '15px',
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


  const buttonStyleDelete = {
    backgroundColor: '#D10000',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '12px',
    width: '100px',
    height: '30px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    marginTop: '10px',
  };
  
  const buttonStyleCancel = {
    backgroundColor: '#007bff',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '12px',
    width: '100px',
    height: '30px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const tableContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.8)', // Shadow effect
    height: '400px', // Example height
    width: '1400px',
    margin: '0 auto', // Center horizontally
  
  };
  
  const tableStyle = {
    backgroundColor: 'transparent',
    borderCollapse: 'collapse',
    color: 'white',
    // Add any other styles you want for your transparent table
  };

  

  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      <br></br> <br></br> <br></br>
      <h2 className="text-center" style={lableStyle1}>
        My CurrentWorkOut Plans
      </h2>
      <button
        className="btn btn-primary mb-2"
        style={buttonStyle}
        onClick={addNewCurrentWorkOut}
      >
        Add CurrentWorkOut
      </button> <br></br><br></br>
      <div style={tableContainerStyle}>
      <table className="table table-striped table-borderd"  style={tableStyle} >
        <thead>
          <tr>
            {/* <th style={lableStyle2}>ID</th> */}
            <th style={lableStyle2}>Name</th>
            <th style={lableStyle2}>Email</th>
            <th style={lableStyle2}>Age</th>
            <th style={lableStyle2}>Date</th>
            <th style={lableStyle2}>Activity Type</th>
            <th style={lableStyle2}>Distance</th>
            <th style={lableStyle2}>NoOfPushups</th>
            <th style={lableStyle2}>Weight</th>
            <th style={lableStyle2}>Discription</th>
            <th style={lableStyle2}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentWorkOuts.map((currentWorkOut) => (
            <tr key={currentWorkOut.id}>
              {/* <td style={lableStyle2}>{currentWorkOut.id}</td> */}
              <td style={lableStyle2}>{currentWorkOut.name}</td>
              <td style={lableStyle2}>{currentWorkOut.email}</td>
              <td style={lableStyle2}>{currentWorkOut.age}</td>
              <td style={lableStyle2}>{currentWorkOut.date}</td>
              <td style={lableStyle2}>{currentWorkOut.activityType}</td>
              <td style={lableStyle2}>{currentWorkOut.distance}</td>
              <td style={lableStyle2}>{currentWorkOut.noOfPushups}</td>
              <td style={lableStyle2}>{currentWorkOut.weight}</td>
              <td style={lableStyle2}>{currentWorkOut.discription}</td>

              <td>
                <button
                  className="btn btn-info"
                  style={buttonStyle2}
                  onClick={() => updateCurrentWorkOut(currentWorkOut.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeCurrentWorkOut(currentWorkOut.id)}
                  style={buttonStyle4}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table></div>

      {deleteConfirmation && (
        <div className="delete-confirmation"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: 'black',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 3px 30px rgba(0, 0, 0, 0.1)',
          width: '300px',
          height: '110px',
          position: 'fixed',
          top: '10%',
          left: '80%',
          transform: 'translate(-50%, -50%)',
        }}>
          <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>
            Are you sure you want to delete this workout?
          </p>
          <button className="delete" style={buttonStyleDelete}  onClick={handleDeleteConfirmed}>
            Delete
          </button>
          <button className="cancel"  style={buttonStyleCancel} onClick={handleCancelDelete}>
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

export default ListCurrentWorkOutComponent
