import { useState } from 'react'
import './ThemeToggle.css'

// index.html sets data-theme before React loads, so read it from there
const getTheme = () => document.documentElement.dataset.theme || 'light'

function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme)

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    document.documentElement.dataset.bsTheme = next // Bootstrap's own dark mode
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage blocked (private mode) — theme still applies for this visit
    }
    setTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'เปลี่ยนเป็น Light Mode' : 'เปลี่ยนเป็น Dark Mode'}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        )}
      </svg>
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
export default ThemeToggle;
