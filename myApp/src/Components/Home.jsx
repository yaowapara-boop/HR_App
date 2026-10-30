import Header from './Header'
import Login from './Login'
import Dashboard from './Dashboard'
import './Home.css'

const shortcuts = [
  { id: 'member', icon: '👥', title: 'ข้อมูลพนักงาน', desc: 'ดูรายชื่อและตำแหน่ง' },
  { id: 'about', icon: '🏢', title: 'เกี่ยวกับเรา', desc: 'รู้จัก YaowapaDev' }
]

function Home({ data, user, onLogin, onLogout, onNavigate }) {
  return (
    <div className="page">
      <Header
        title="HR Management Application"
        subtitle={user ? `สวัสดี คุณ${user.name} 👋` : 'บริหารงานบุคคลได้ง่าย ในมือคุณ'}
      />

      <main className="page-body">
        {user ? (
          <>
            <div className="app-card welcome-card">
              <div className="welcome-avatar">{user.name.charAt(0).toUpperCase()}</div>
              <div>
                <h2 className="welcome-name">{user.name}</h2>
                <p className="welcome-status">เข้าสู่ระบบแล้ว</p>
              </div>
            </div>

            <Dashboard employees={data} />

            <h3 className="section-title">เมนูลัด</h3>
            <div className="shortcut-grid">
              {shortcuts.map((item) => (
                <button key={item.id} className="app-card shortcut" onClick={() => onNavigate(item.id)}>
                  <span className="shortcut-icon">{item.icon}</span>
                  <strong>{item.title}</strong>
                  <span className="shortcut-desc">{item.desc}</span>
                </button>
              ))}
            </div>

            <button className="app-btn app-btn-ghost" onClick={onLogout}>ออกจากระบบ</button>
          </>
        ) : (
          <Login onLogin={onLogin} />
        )}
      </main>
    </div>
  );
}
export default Home;
