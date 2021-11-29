import { FiMoreHorizontal } from 'react-icons/fi'

interface ITask {
  title: string
  duration: string
  icon: React.ReactNode
}

const TaskCard = ({ title, duration, icon }: ITask) => {
  return (
    <div className="relative p-4 shadow-md bg-accents-1 rounded max-w-300">
      <button className="absolute top-2 right-2">
        <FiMoreHorizontal className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-4">
        <div>{icon}</div>
        <div>
          <p className="font-semibold tracking-tight leading-none">{title}</p>
          <p className="text-accents-5 text-sm">{duration} minutes</p>
        </div>
      </div>
    </div>
  )
}

export default TaskCard