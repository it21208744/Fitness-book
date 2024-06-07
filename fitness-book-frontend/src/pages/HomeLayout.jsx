import Wrapper from '../assets/wrappers/homeLayout.js'
import Reel from '../components/Reel'
import { Outlet } from 'react-router-dom'
import NavBarSide from '../components/NavBarSide'

const HomeLayout = () => {
  return (
    <Wrapper>
      <div className="page">
        <div className="sideNav">
          <NavBarSide />
        </div>

        {/* <Reel /> */}
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default HomeLayout
