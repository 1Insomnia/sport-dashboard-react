import { FiHeart, FiDribbble, FiWind } from 'react-icons/fi'

// Components
// Layout
import Main from './components/Main'
import SideNav from './components/SideNav'
// Molecules
import TaskList from './components/TaskList'
import Profile from './components/Profile'

interface ITask {
  title: string
  duration: string
  icon: React.ReactNode
}

interface IProfile {
  image: string
  name: string
  weight: number
  height: number
  age: number
}

const list: ITask[] = [
  {
    title: 'Cardio',
    duration: '20',
    icon: <FiHeart className="w-8 h-8" />
  },
  {
    title: 'Basketball',
    duration: '60',
    icon: <FiDribbble className="w-8 h-8" />
  },
  {
    title: 'Kitesurf',
    duration: '120',
    icon: <FiWind className="w-8 h-8" />
  }
]

const profile: IProfile = {
  image:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  name: 'John Doe',
  weight: 120,
  height: 186,
  age: 25
}

const App = () => {
  return (
    <div className="h-screen flex">
      <SideNav />
      <Main>
        <Profile {...profile} />
        <TaskList list={list} />
      </Main>
    </div>
  )
}

export default App
