import styled from 'styled-components'

const Wrapper = styled.div`
  .mealPlan {
    border-style: double;
    border-radius: 10px;
    margin: 5vw;
    padding: 2vw;
    transition: transform 0.3s ease;
    cursor: pointer;
    position: relative;

    &:hover {
      transform: scale(1.05);
    }
  }

  .mealPlan img {
    width: 8vw;
    height: auto;
    margin-bottom: 10px;
    position: absolute;
    top: 22vh;
    right: 1vw;
  }

  .mealPlan button {
    margin-left: 10px;
  }

  .addPlanBtn {
    position: fixed;
    bottom: 5vh;
    right: 10vw;
    width: 10vw;
    background: blue;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 0 0 rgba(0, 0, 255, 0.7);

    &:hover {
      box-shadow: 0 0 20px 10px rgba(0, 0, 255, 0.7);
    }
  }
`

export default Wrapper
