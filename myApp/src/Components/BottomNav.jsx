import './BottomNav.css'

const menus = [
  {
    id: 'home',
    label: 'Home',
    icon: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
  },
  {
    id: 'about',
    label: 'About',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>
  },
  {
    id: 'member',
    label: 'Member',
    icon: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" /></>
  }
]

function BottomNav({ active, onNavigate }) {
  return (
    <nav className="bottom-nav">
      {menus.map((menu) => (
        <button
          key={menu.id}
          className={`bottom-nav-item ${active === menu.id ? 'active' : ''}`}
          onClick={() => onNavigate(menu.id)}
          aria-current={active === menu.id ? 'page' : undefined}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menu.icon}
          </svg>
          <span>{menu.label}</span>
        </button>
      ))}
    </nav>
  );
}
export default BottomNav;
