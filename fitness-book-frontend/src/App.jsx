import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ErrorPage, LandingPage, Register } from './pages'
import Login from './components/Login'
import HomeLayout from './pages/HomeLayout'
import Profile from './pages/Profile'
import Reel from './components/Reel'
import AllMealPlans from './pages/mealPlan/AllMealPlans'
import AddMealPlan from './pages/mealPlan/AddMealPlan'
import Notifications from './pages/Notifications'
import DashWorkout from './components/DashWokout'
import WorkoutComponent from './components/WorkoutComponent'
import ListWorkoutComponent from './components/ListWorkoutComponent'
import WorkoutLayout from './components/WorkoutLayout'
import CurrentWorkoutLayout from './components/CurrentWorkoutLayout'
import DashCurrentWorkout from './components/DashCurrentWorkout'
import CurrentWorkOutComponent from './components/CurrentWorkOutComponent'
import ListCurrentWorkOutComponent from './components/ListCurrentWorkOutComponent'
import KasunHome from './components/HomeLayout'
import PostList from './components/PostList'
import UpdatePost from './components/UpdatePost'
import HomePage from './components/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'homeLayout',
        element: <HomeLayout />,
        children: [
          { index: true, element: <Reel /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
      { path: 'addMealplan', element: <AllMealPlans /> },
      {
        path: 'workoutplan',
        element: <WorkoutLayout />,
        children: [
          { index: true, element: <DashWorkout /> },
          { path: 'workoutplan', element: <DashWorkout /> },
          { path: 'add-workout', element: <WorkoutComponent /> },
          { path: 'workout', element: <ListWorkoutComponent /> },
          { path: 'edit-workout/:id', element: <WorkoutComponent /> },
        ],
      },
      //---------------Jinadari--------------------------------------------------
      {
        path: 'progress',
        element: <CurrentWorkoutLayout />,
        children: [
          { index: true, element: <DashCurrentWorkout /> },
          { path: 'workoutplan', element: <DashCurrentWorkout /> },
          { path: 'add-currentWorkOut', element: <CurrentWorkOutComponent /> },
          { path: 'currentworkOuts', element: <ListCurrentWorkOutComponent /> },
          {
            path: 'edit-currentWorkOut/:id',
            element: <CurrentWorkOutComponent />,
          },
        ],
      },
      //----------------------------------------------------------------------------------
      {
        path: 'media',
        element: <KasunHome />,
        children: [
          { index: true, element: <PostList /> },
          { path: 'postList', element: <PostList /> },
          { path: 'update/:id', element: <UpdatePost /> },
          { path: 'currentworkOuts', element: <ListCurrentWorkOutComponent /> },
          {
            path: 'edit-currentWorkOut/:id',
            element: <CurrentWorkOutComponent />,
          },
        ],
      },
      //-----------------------------------------------------------------------------------
      { path: 'progress', element: <h1>progress</h1> },

      { path: 'allMeal', element: <AllMealPlans /> },
      { path: 'notifications', element: <Notifications /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
