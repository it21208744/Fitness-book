import { Outlet } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'

const CurrentWorkoutLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}
export default CurrentWorkoutLayout
