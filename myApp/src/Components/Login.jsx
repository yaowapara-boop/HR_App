import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !password) {
      setError('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน')
      return
    }
    if (password.length < 4) {
      setError('รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร')
      return
    }
    setError('')
    setLoading(true)
    // Demo only: no backend yet, any valid input logs in
    setTimeout(() => {
      setLoading(false)
      onLogin({ name: username.trim() })
    }, 700)
  }

  return (
    <form className="card login" onSubmit={handleSubmit} noValidate>
      <div className="login-head">
        <h2>เข้าสู่ระบบ</h2>
        <p>ยินดีต้อนรับกลับมา กรุณาเข้าสู่ระบบเพื่อใช้งาน</p>
      </div>

      <label className="field">
        <span className="field-label">ชื่อผู้ใช้</span>
        <input
          type="text"
          placeholder="กรอกชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
      </label>

      <label className="field">
        <span className="field-label">รหัสผ่าน</span>
        <div className="field-password">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="กรอกรหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="field-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'ซ่อน' : 'แสดง'}
          </button>
        </div>
      </label>

      <div className="login-row">
        <label className="remember">
          <input type="checkbox" />
          <span>จดจำฉันไว้</span>
        </label>
        <a href="#" className="login-link" onClick={(e) => e.preventDefault()}>ลืมรหัสผ่าน?</a>
      </div>

      {error && <p className="login-error">{error}</p>}

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
      </button>
    </form>
  );
}
export default Login;
