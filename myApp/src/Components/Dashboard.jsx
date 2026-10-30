import { useState } from 'react'
import employees from '../data/employees'
import './Dashboard.css'

function Dashboard() {
  const total = employees.length
  const ages = employees.map((e) => e.age)
  const avgAge = (ages.reduce((sum, age) => sum + age, 0) / total).toFixed(1)

  // Count employees per department, largest first
  const departments = Object.entries(
    employees.reduce((acc, e) => {
      acc[e.position] = (acc[e.position] || 0) + 1
      return acc
    }, {})
  )
    .map(([name, count]) => ({ name, count, percent: Math.round((count / total) * 100) }))
    .sort((a, b) => b.count - a.count)
  const maxCount = departments[0]?.count || 1

  const ageGroups = [
    { label: 'ต่ำกว่า 26', count: ages.filter((a) => a < 26).length },
    { label: '26 – 30', count: ages.filter((a) => a >= 26 && a <= 30).length },
    { label: '31 ขึ้นไป', count: ages.filter((a) => a > 30).length }
  ]

  const stats = [
    { label: 'พนักงานทั้งหมด', value: total, unit: 'คน', icon: '👥' },
    { label: 'จำนวนแผนก', value: departments.length, unit: 'แผนก', icon: '🏢' },
    { label: 'อายุเฉลี่ย', value: avgAge, unit: 'ปี', icon: '📈' },
    { label: 'ช่วงอายุ', value: `${Math.min(...ages)}–${Math.max(...ages)}`, unit: 'ปี', icon: '🎂' }
  ]

  const [updatedAt] = useState(() =>
    new Date().toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' })
  )

  return (
    <section className="dashboard">
      <div className="dashboard-head">
        <h3 className="section-title">Dashboard รายงานระบบ</h3>
        <span className="system-status">
          <span className="system-status-dot" aria-hidden="true"></span>
          ระบบทำงานปกติ
        </span>
      </div>

      <div className="stat-grid">
        {stats.map((item) => (
          <div key={item.label} className="card stat-tile">
            <span className="stat-icon">{item.icon}</span>
            <span className="stat-label">{item.label}</span>
            <strong className="stat-value">
              {item.value} <small>{item.unit}</small>
            </strong>
          </div>
        ))}
      </div>

      <div className="dashboard-charts">
        <div className="card chart-card">
          <h4 className="chart-title">พนักงานแยกตามแผนก</h4>
          <ul className="bar-list">
            {departments.map((d) => (
              <li key={d.name} className="bar-row" title={`${d.name}: ${d.count} คน (${d.percent}%)`}>
                <span className="bar-label">{d.name}</span>
                <span className="bar-track">
                  <span className="bar-fill" style={{ width: `${(d.count / maxCount) * 100}%` }}></span>
                </span>
                <span className="bar-value">{d.count} คน · {d.percent}%</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card chart-card">
          <h4 className="chart-title">พนักงานแยกตามช่วงอายุ</h4>
          <div className="column-chart">
            {ageGroups.map((g) => (
              <div key={g.label} className="column" title={`อายุ ${g.label}: ${g.count} คน`}>
                <span className="column-value">{g.count}</span>
                <span className="column-track">
                  <span className="column-fill" style={{ height: `${(g.count / total) * 100}%` }}></span>
                </span>
                <span className="column-label">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="dashboard-updated">อัปเดตล่าสุด {updatedAt}</p>
    </section>
  );
}
export default Dashboard;
