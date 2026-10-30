import { useState } from 'react'
import './App.css'
import BottomNav from './Components/BottomNav'
import Home from './Components/Home'
import About from './Components/About'
import PersonList from './Components/Personlist'
import employees from './data/employees'

function App() {
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(null)
  // Employee state shared by the Member page and the Home dashboard
  const [data, setData] = useState(employees)

  const navigate = (id) => {
    setPage(id)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app">
      {page === 'home' && (
        <Home data={data} user={user} onLogin={setUser} onLogout={() => setUser(null)} onNavigate={navigate} />
      )}
      {page === 'about' && <About />}
      {page === 'member' && <PersonList data={data} setData={setData} />}
      <BottomNav active={page} onNavigate={navigate} />
    </div>
  )
}
export default App
