import styled from 'styled-components'

const Wrapper = styled.div`
  .page {
    position: relative;

    /* display: flex; */
  }
  .reel {
    position: relative;
    margin-left: 20vw;
    margin-bottom: 5vh;
    /* background: blue; */
  }

  .post {
    margin-bottom: 5vh;
    /* background: blue; */
  }

  .reelSection {
    position: absolute;
    left: 25vh;
    /* width: 100%; */
    top: 8vh;
  }

  .sideNav {
    position: fixed;
    left: -1.5vw;
    /* width: 20vw; */
    height: 100%;
    /* background: blue; */
    display: flex;
    justify-content: center;
    border-right-style: solid;
  }

  .reelNav {
    position: fixed;
    top: 0vh;
    /* left: 48vw; */

    background: white;
    width: 50.5vw;
  }
`

export default Wrapper
