import cn from 'classnames'

interface INavItem {
  text: string
  icon: React.ReactNode
  isActive: boolean
}

const NavItem = ({ text, icon, isActive }: INavItem) => (
  <div className="flex items-center gap-4 py-5 transition-colors duration-100 ease-in hover:bg-accents-7 hover:text-accents-1 px-5 md:px-10">
    <div>{icon}</div>
    <a
      href="/"
      className={cn(
        isActive ? 'block' : 'hidden',
        'text-sm text-accents-2 font-medium capitalize '
      )}
    >
      {text}
    </a>
  </div>
)

export default NavItem
