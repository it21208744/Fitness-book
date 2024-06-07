import styled from 'styled-components'

const Wrapper = styled.div`
  width: 65vw;
  position: absolute;
  left: 20vw;

  .userImage {
    position: relative;
    top: 5vw;
    width: 10vw;
  }

  .contents {
    position: relative;
    top: 5vw;
  }

  .follow {
    display: flex; /* Use flexbox */
    align-items: center; /* Align items vertically */
    margin-bottom: 5vh;
  }

  .followBtn {
    display: inline-block;
    padding: 10px 20px;
    margin-right: 2vw;
    border: none;
    border-radius: 20px;
    background-color: #4caf50; /* Green */
    color: white;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .followBtn:hover {
    background-color: #45a049; /* Darker shade of green on hover */
  }

  .noOfFollowers {
    font-size: 16px; /* Adjust font size as needed */
    color: #555; /* Adjust text color as needed */
    margin-bottom: 5px; /* Add margin bottom for spacing */
  }

  .cover {
    background: black;
    width: 75vw;
  }

  .posts {
    position: relative;
    left: 12vw;
  }

  .reelNav {
    position: relative;
  }

  .reel {
    position: relative;
    left: -4vw;
  }
`

export default Wrapper
