import logo from '../assets/logo.svg'
import Header from './Header'
import './About.css'

const features = [
  { icon: '👥', title: 'จัดการข้อมูลพนักงาน', desc: 'เก็บประวัติ ตำแหน่ง และข้อมูลสำคัญของพนักงานไว้ในที่เดียว' },
  { icon: '🏢', title: 'แบ่งตามแผนก', desc: 'ดูภาพรวมของแต่ละแผนก IT Dev, Marketing และ Sales' },
  { icon: '📊', title: 'สรุปข้อมูลอัตโนมัติ', desc: 'แสดงจำนวนพนักงานและสถิติสำคัญแบบเรียลไทม์' },
  { icon: '🔒', title: 'ปลอดภัย เชื่อถือได้', desc: 'เข้าถึงข้อมูลได้เฉพาะผู้ที่ได้รับสิทธิ์' }
]

const values = [
  { label: 'ก่อตั้ง', value: '2026' },
  { label: 'ทีมงาน', value: '120+' },
  { label: 'ลูกค้า', value: '30+' }
]

function About() {
  return (
    <div className="page">
      <Header title="เกี่ยวกับเรา" subtitle="รู้จัก YaowapaDev และแอปของเรา" />

      <main className="page-body">
        <div className="card about-company">
          <div className="about-company-head">
            <img src={logo} alt="YaowapaDev logo" />
            <div>
              <h2>YaowapaDev</h2>
              <span>Software & Digital Solutions</span>
            </div>
          </div>
          <p className="about-desc">
            ทีมพัฒนาซอฟต์แวร์ที่มุ่งสร้างเครื่องมือดิจิทัลที่ใช้งานง่าย ทันสมัย
            และตอบโจทย์องค์กรยุคใหม่ เราเชื่อว่าเทคโนโลยีที่ดีต้องช่วยให้คนทำงานได้ง่ายขึ้น
          </p>
          <div className="about-values">
            {values.map((item) => (
              <div key={item.label} className="about-value">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-app-banner">
          <span className="about-app-tag">Our Application</span>
          <h2>HR Management Application</h2>
          <p>แอปบริหารงานบุคคลที่ช่วยให้ฝ่าย HR จัดการข้อมูลพนักงานได้อย่างมีประสิทธิภาพ</p>
        </div>

        <h3 className="section-title">ฟีเจอร์หลัก</h3>
        <div className="about-features">
          {features.map((item) => (
            <article key={item.title} className="card about-feature">
              <div className="about-feature-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
export default About;
