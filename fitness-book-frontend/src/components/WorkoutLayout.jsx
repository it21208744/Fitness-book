import { Outlet } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
Outlet

const WorkoutLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}
export default WorkoutLayout
