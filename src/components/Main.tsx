import React, { ReactNode } from 'react'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-accents-1 text-accents-3 w-full overflow-auto">
      <div className="py-10">{children}</div>
    </div>
  )
}

export default Main
