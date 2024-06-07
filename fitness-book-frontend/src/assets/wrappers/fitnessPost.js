import styled from 'styled-components'

const Wrapper = styled.div`
  .postHeader {
    padding-top: 1vh;
    padding-left: 1vw;
    display: flex;
  }

  .postType {
    opacity: 0.5;
  }

  .userImg {
    width: 3vw;
    padding-right: 1vw;
  }

  .name {
    padding-right: 1vw;
  }

  .postDesc {
    padding-left: 1vw;
    border-bottom: 2px solid #e9ecef;
    margin-bottom: 20px;
  }

  .postImgContainer {
    display: flex;
    justify-content: center;
  }

  .postImg {
    width: 40vw;

    justify-content: center;
  }

  .post {
    border: 2px solid #e9ecef; /* Border style */
    border-radius: 15px; /* Rounded corners */
    width: 50vw;
    background-color: #ffffff; /* Background color */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Box shadow for depth */
    margin-bottom: 20px; /* Margin bottom for spacing */
  }

  .postFooter {
    padding-top: 1vw;
    padding-bottom: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .likeBtn {
    flex: 1;
    margin: 0 5px;
    padding: 5px;
    font-size: 1.5vw;
    background-color: white;
    border: none;
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }

  .likeBtn:hover {
    background-color: #e6e6e6;
  }

  .commentBtn {
    flex: 1;
    margin: 0 5px;
    padding: 5px;
    font-size: 1.5vw;
    background-color: white;
    border: none;
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }

  .commentBtn:hover {
    background-color: #e6e6e6;
  }

  .likeBtn {
    /* Default styles for the button */
    background-color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer; /* Indicate interactivity */
  }

  .likeBtn.liked {
    /* Styles for the liked state */
    background-color: blue; /* Change to your desired color */
    color: #fff; /* Adjust text color for better contrast */
  }
`

export default Wrapper
