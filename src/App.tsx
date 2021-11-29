import Main from './components/Main'
import SideNav from './components/SideNav'

import { FiHeart, FiDribbble, FiWind } from 'react-icons/fi'
import TaskList from './components/TaskList'

interface ITask {
  title: string
  duration: string
  icon: React.ReactNode
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

const App = () => {
  return (
    <div className="h-screen flex">
      <SideNav />
      <Main>
        <TaskList list={list} />
      </Main>
    </div>
  )
}

export default App
