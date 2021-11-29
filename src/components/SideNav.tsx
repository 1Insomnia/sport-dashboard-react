import React, { useState } from 'react'
import cn from 'classnames'

import {
  FiHome,
  FiAirplay,
  FiGrid,
  FiMessageCircle,
  FiSettings,
  FiLogOut
} from 'react-icons/fi'

import SideNavToggle from './SideNavToggle'
import NavItem from './NavItem'

const SideNav = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={cn('h-full bg-accents-3 text-accents-2 py-10')}>
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="mb-10">
            <SideNavToggle isActive={isActive} setIsActive={setIsActive} />
          </div>
          <div>
            <NavItem
              text="Home"
              icon={<FiHome className="w-4 h-4" />}
              isActive={isActive}
            />
            <NavItem
              text="Dashboard"
              icon={<FiAirplay className="w-4 h-4" />}
              isActive={isActive}
            />
            <NavItem
              text="Category"
              icon={<FiGrid className="w-4 h-4" />}
              isActive={isActive}
            />
            <NavItem
              text="Chat"
              icon={<FiMessageCircle className="w-4 h-4" />}
              isActive={isActive}
            />
            <NavItem
              text="Settings"
              icon={<FiSettings className="w-4 h-4" />}
              isActive={isActive}
            />
          </div>
        </div>
        <div>
          <NavItem
            text="Logout"
            icon={<FiLogOut className="w-4 h-4" />}
            isActive={isActive}
          />
        </div>
      </div>
    </div>
  )
}

export default SideNav
