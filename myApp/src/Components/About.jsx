import { useState } from 'react'
import logo from '../assets/logo.svg'
import Header from './Header'
import './About.css'

const values = [
  { label: 'ก่อตั้ง', value: '2026' },
  { label: 'ทีมงาน', value: '120+' },
  { label: 'ลูกค้า', value: '30+' }
]

const tabs = [
  {
    id: 'vision',
    label: 'วิสัยทัศน์',
    text: 'เป็นผู้นำด้านซอฟต์แวร์บริหารงานบุคคลที่ใช้งานง่ายที่สุด เพื่อให้ทุกองค์กรเข้าถึงเทคโนโลยีได้'
  },
  {
    id: 'mission',
    label: 'พันธกิจ',
    text: 'พัฒนาเครื่องมือดิจิทัลที่ช่วยลดงานเอกสาร เพิ่มความรวดเร็ว และทำให้ฝ่าย HR มีเวลาดูแลคนมากขึ้น'
  },
  {
    id: 'values',
    label: 'ค่านิยม',
    text: 'เรียบง่าย โปร่งใส ใส่ใจผู้ใช้ และพัฒนาอย่างต่อเนื่อง'
  }
]

const features = [
  { icon: '👥', title: 'จัดการข้อมูลพนักงาน', desc: 'เก็บประวัติ ตำแหน่ง และข้อมูลสำคัญของพนักงานไว้ในที่เดียว' },
  { icon: '🏢', title: 'แบ่งตามแผนก', desc: 'ดูภาพรวมของแต่ละแผนก IT Dev, Marketing และ Sales' },
  { icon: '📊', title: 'Dashboard รายงาน', desc: 'สรุปจำนวนพนักงานและสถิติสำคัญให้เห็นทันที' },
  { icon: '🌗', title: 'Light / Dark Mode', desc: 'สลับธีมได้ตามความชอบ ถนอมสายตาทั้งกลางวันและกลางคืน' }
]

const techStack = ['React', 'Vite', 'Bootstrap 5', 'PWA', 'Mobile-First']

const steps = [
  { title: 'เข้าสู่ระบบ', desc: 'กรอกชื่อผู้ใช้และรหัสผ่านที่หน้า Home' },
  { title: 'ดู Dashboard', desc: 'ตรวจสอบภาพรวมข้อมูลพนักงานและสถานะระบบ' },
  { title: 'จัดการพนักงาน', desc: 'เปิดเมนู Member เพื่อดูข้อมูลพนักงานแต่ละคน' }
]

const faqs = [
  {
    q: 'ใช้งานบนมือถือได้หรือไม่?',
    a: 'ได้ แอปออกแบบแบบ Mobile-First ใช้งานได้ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์'
  },
  {
    q: 'ติดตั้งลงหน้าจอโทรศัพท์ได้อย่างไร?',
    a: 'เปิดแอปในเบราว์เซอร์ แล้วเลือก "เพิ่มไปยังหน้าจอหลัก" (Add to Home Screen) แอปจะเปิดแบบเต็มจอเหมือนแอปทั่วไป'
  },
  {
    q: 'เปลี่ยนเป็น Dark Mode ได้ที่ไหน?',
    a: 'กดปุ่ม Dark / Light ที่มุมขวาบนของทุกหน้า ระบบจะจำค่าที่เลือกไว้ให้'
  }
]

function About() {
  const [activeTab, setActiveTab] = useState('vision')
  const currentTab = tabs.find((t) => t.id === activeTab)

  return (
    <div className="page">
      <Header title="เกี่ยวกับเรา" subtitle="รู้จัก YaowapaDev และแอปของเรา" />

      <main className="page-body about-bs">
        {/* Company */}
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <div className="d-flex align-items-center gap-3">
              <img src={logo} alt="YaowapaDev logo" className="about-logo" />
              <div>
                <h2 className="h5 fw-bold mb-0">YaowapaDev</h2>
                <small className="text-body-secondary">Software & Digital Solutions</small>
              </div>
            </div>
            <p className="text-body-secondary mt-3 mb-0 lh-lg">
              ทีมพัฒนาซอฟต์แวร์ที่มุ่งสร้างเครื่องมือดิจิทัลที่ใช้งานง่าย ทันสมัย
              และตอบโจทย์องค์กรยุคใหม่ เราเชื่อว่าเทคโนโลยีที่ดีต้องช่วยให้คนทำงานได้ง่ายขึ้น
            </p>
            <div className="row g-2 mt-2">
              {values.map((item) => (
                <div key={item.label} className="col-4">
                  <div className="bg-primary-subtle rounded-4 py-3 text-center">
                    <div className="fs-5 fw-bold text-primary">{item.value}</div>
                    <small className="text-body-secondary">{item.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision / Mission / Values tabs */}
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <ul className="nav nav-pills nav-fill gap-2 p-1 bg-body-tertiary rounded-pill">
              {tabs.map((tab) => (
                <li key={tab.id} className="nav-item">
                  <button
                    className={`nav-link w-100 ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
            <p key={currentTab.id} className="about-tab-text mt-3 mb-0">{currentTab.text}</p>
          </div>
        </div>

        {/* Application banner */}
        <div className="about-app-banner">
          <span className="badge rounded-pill about-app-tag">Our Application</span>
          <h2 className="h4 fw-bold mt-3 mb-1">HR Management Application</h2>
          <p className="mb-3">แอปบริหารงานบุคคลที่ช่วยให้ฝ่าย HR จัดการข้อมูลพนักงานได้อย่างมีประสิทธิภาพ</p>
          <div className="d-flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="badge rounded-pill about-tech">{tech}</span>
            ))}
          </div>
        </div>

        {/* Features */}
        <h3 className="section-title">ฟีเจอร์หลัก</h3>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {features.map((item) => (
            <div key={item.title} className="col">
              <div className="card h-100 shadow-sm about-feature">
                <div className="card-body d-flex gap-3">
                  <div className="about-feature-icon">{item.icon}</div>
                  <div>
                    <h4 className="h6 fw-semibold mb-1">{item.title}</h4>
                    <p className="small text-body-secondary mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to use */}
        <h3 className="section-title">เริ่มต้นใช้งานใน 3 ขั้นตอน</h3>
        <ol className="list-group list-group-numbered shadow-sm">
          {steps.map((step) => (
            <li key={step.title} className="list-group-item d-flex align-items-start gap-2 py-3">
              <div className="ms-1">
                <div className="fw-semibold">{step.title}</div>
                <small className="text-body-secondary">{step.desc}</small>
              </div>
            </li>
          ))}
        </ol>

        {/* FAQ */}
        <h3 className="section-title">คำถามที่พบบ่อย</h3>
        <div className="accordion shadow-sm" id="faq">
          {faqs.map((item, index) => (
            <div key={item.q} className="accordion-item">
              <h4 className="accordion-header">
                <button
                  className={`accordion-button fw-medium ${index === 0 ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${index}`}
                  aria-expanded={index === 0}
                  aria-controls={`faq-${index}`}
                >
                  {item.q}
                </button>
              </h4>
              <div
                id={`faq-${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                data-bs-parent="#faq"
              >
                <div className="accordion-body text-body-secondary small">{item.a}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="card shadow-sm text-center">
          <div className="card-body p-4">
            <h3 className="h5 fw-bold">ติดต่อเรา</h3>
            <p className="text-body-secondary small mb-3">มีคำถามหรือต้องการทดลองใช้งาน ทีมงานพร้อมช่วยเหลือ</p>
            <div className="d-grid d-sm-flex justify-content-sm-center gap-2">
              <a href="mailto:contact@yaowapadev.com" className="btn btn-primary rounded-pill px-4 py-2">
                ✉️ ส่งอีเมล
              </a>
              <a href="#faq" className="btn btn-outline-primary rounded-pill px-4 py-2">
                ❓ ดูคำถามที่พบบ่อย
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default About;
