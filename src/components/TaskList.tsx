import React from 'react'
import TaskCard from './TaskCard'

interface ITask {
  title: string
  duration: string
  icon: React.ReactNode
}

const TaskList = ({ list }: { list: ITask[] }) => {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight mb-5">Daily Tasks</h2>
      <div className="flex flex-col gap-4">
        {list.map((task, index) => (
          <TaskCard {...task} key={index} />
        ))}
      </div>
    </section>
  )
}

export default TaskList
