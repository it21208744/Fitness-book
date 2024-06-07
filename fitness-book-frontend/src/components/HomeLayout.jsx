import { Outlet } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'

const HomeLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}
export default HomeLayout
