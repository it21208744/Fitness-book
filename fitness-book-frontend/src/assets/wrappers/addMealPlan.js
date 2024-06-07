import styled from 'styled-components'
import img from '../images/blueMeal.jpg'

const Wrapper = styled.div`
  color: white;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .page {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .headerNav {
    width: 100%;
  }

  form {
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 10px;
  }

  input[type='text'],
  select,
  textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 2px solid #a8b7bb;
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
    box-sizing: border-box;
    outline: none;
  }

  .formContainer {
    width: 50%;
    max-width: 600px;
    margin-top: 20px;
  }

  .formTitle {
    font-size: 30px;
    margin-bottom: 20px;
  }

  label {
    color: #414654;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .btnSave {
    background-color: #414654;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    width: 130px;
    height: 36px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #414654; /* Green */
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049; /* Darker shade of green on hover */
  }
`

export default Wrapper
