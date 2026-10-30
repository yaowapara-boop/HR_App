import { useState } from 'react'
import './App.css'
import BottomNav from './Components/BottomNav'
import Home from './Components/Home'
import About from './Components/About'
import PersonList from './Components/Personlist'

function App() {
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(null)

  const navigate = (id) => {
    setPage(id)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app">
      {page === 'home' && (
        <Home user={user} onLogin={setUser} onLogout={() => setUser(null)} onNavigate={navigate} />
      )}
      {page === 'about' && <About />}
      {page === 'member' && <PersonList />}
      <BottomNav active={page} onNavigate={navigate} />
    </div>
  )
}
export default App
