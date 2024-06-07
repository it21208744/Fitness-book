import styled from 'styled-components'

const Wrapper = styled.div`
  .navBar {
    /* background: pink; */
    margin-right: 1vw;
  }

  span {
    position: relative;
    top: 1.5vh;
    font-size: 2vw;
  }

  .navBar ul {
    list-style: none;
  }

  .navBar ul li a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 1vw;
    padding-bottom: 1.5vh;

    padding-left: 1vw;
    padding-right: 1vw;
    border-radius: 10px;

    margin-bottom: -2vh;

    display: inline-block; /* Make each element a block-level element */
    width: 15vw; /* Adjust width as needed */

    transition: background-color 0s; /* Smooth transition for hover effect */
  }

  .navBar ul li a:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Darker color on hover */
  }

  .navBar ul li {
    /* border-top-style: solid; */

    padding-bottom: 2vh;
  }

  img {
    width: 1vw;
  }
`

export default Wrapper
