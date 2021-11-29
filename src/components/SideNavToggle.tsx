import React from 'react'
import cn from 'classnames'
import { FiMenu } from 'react-icons/fi'

interface ISideNavToggle {
  isActive: boolean
  setIsActive: React.Dispatch<ISideNavToggle['isActive']>
}

const SideNavToggle = ({ isActive, setIsActive }: ISideNavToggle) => {
  return (
    <button
      className={cn(
        isActive ? 'rotate-180' : '',
        'transition ease-in duration-300 transform px-5 block md:px-10'
      )}
      onClick={() => setIsActive(!isActive)}
    >
      <FiMenu className="h-4 w-4" />
    </button>
  )
}

export default SideNavToggle
