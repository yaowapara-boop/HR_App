import { useState } from 'react'
import dev from '../assets/dev.svg'
import marketing from '../assets/marketing.svg'
import sales from '../assets/sale.svg'
import Header from './Header'
import employees from '../data/employees'
import './Personlist.css'

const positionStyle = {
  "IT Dev": { image: dev, className: "badge-dev" },
  "Marketing": { image: marketing, className: "badge-marketing" },
  "Sales": { image: sales, className: "badge-sales" }
}

function PersonList() {
    const [data, setData] = useState(employees)
  return (
    <div className="page">
      <Header title="ข้อมูลพนักงาน" subtitle={`จำนวนพนักงานทั้งหมด ${data.length} คน`} />

      <main className="page-body">
        <div className="members-grid">
          {data.map((item) => {
            const style = positionStyle[item.position] || positionStyle["Sales"]
            return (
              <article key={item.id} className="card member-card">
                <div className="member-avatar">
                  <img src={style.image} alt={item.position} />
                </div>
                <div className="member-main">
                  <h3 className="member-name">{item.name}</h3>
                  <span className={`member-badge ${style.className}`}>{item.position}</span>
                </div>
                <div className="member-info">
                  <div>
                    <span>อายุ</span>
                    <strong>{item.age} ปี</strong>
                  </div>
                  <div>
                    <span>รหัสพนักงาน</span>
                    <strong>EMP-{String(item.id).padStart(3, '0')}</strong>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default PersonList;
