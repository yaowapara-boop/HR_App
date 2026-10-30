import logo from '../assets/logo.svg'
import ThemeToggle from './ThemeToggle'
import './Header.css'

function Header({ title, subtitle, children }) {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <div className="app-header-top">
          <div className="brand">
            <img src={logo} alt="YaowapaDev logo" className="brand-logo" />
            <span className="brand-name">YaowapaDev</span>
          </div>
          <ThemeToggle />
        </div>

        <h1 className="app-header-title">{title}</h1>
        {subtitle && <p className="app-header-subtitle">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}
export default Header;
