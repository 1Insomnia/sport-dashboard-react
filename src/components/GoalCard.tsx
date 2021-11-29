interface IGoal {
  title: string
  content: string
}

const GoalCard = ({ title, content }: IGoal) => {
  return (
    <div className="">
      <h2 className="font-bold tracking-tightm mb-4 text-xl">Today's Goal</h2>
      <div className="bg-accents-3 p-4 max-w-400 rounded-md mb-10 shadow-md">
        <h4 className="text-accents-2 text-sm">{title}</h4>
        <p className="font-bold text-accents-1">{content}</p>
      </div>
    </div>
  )
}

export default GoalCard
