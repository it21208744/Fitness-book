import styled from 'styled-components'

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #ff7e5f, #feb47b);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  h1 {
    color: #fff;
    margin-bottom: 10px;
  }

  h3 {
    color: #fff;
    margin-bottom: 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
    color: #fff;
  }

  p {
    color: #f7f7f7;
    line-height: 1.5;
  }

  button {
    background-color: #fff;
    color: #007bff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d9e4ff;
    }
  }
`

export default Wrapper
