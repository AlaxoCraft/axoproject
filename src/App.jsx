import React, { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BarChart3, BookOpen, Check, CheckCircle2,
  ChevronDown, ClipboardCheck, Clock3, Cloud, Code2, Copy, Database, Download, Eye,
  FileSpreadsheet, Fingerprint, GraduationCap, Image as ImageIcon, Laptop, Layers3,
  LockKeyhole, Menu, Moon, Monitor, MonitorSmartphone, MousePointer2, Network, ScanEye,
  Server, Shield, ShieldCheck, Smartphone, Sun, Tablet, Users, X, Zap, Activity,
  CircleHelp, Settings2, FileLock2, KeyRound, ChartNoAxesCombined
} from 'lucide-react'

const navItems = [
  ['Ringkasan', 'ringkasan'], ['Galeri UI', 'galeri'], ['Fitur Utama', 'fitur'],
  ['Keamanan', 'keamanan'], ['Keunggulan', 'keunggulan'], ['Sistem Desain', 'desain']
]
const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`
const colors = [
  ['Navy utama', '#101B35'], ['Navy sekunder', '#172642'], ['Hijau aksi', '#16A36A'],
  ['Hijau gelap', '#123B32'], ['Mint', '#DDF7EA'], ['Background', '#F4F7FA'],
  ['Muted', '#64748B'], ['Border', '#E2E8F0'], ['Putih', '#FFFFFF'],
  ['Dark background', '#0B1220'], ['Dark panel', '#172033'], ['Dark border', '#334155']
]
const studentFeatures = [
  { icon: Fingerprint, title: 'Autentikasi & sesi tunggal', desc: 'Login menggunakan username dan password, dengan pembatasan satu akun agar hanya aktif pada satu perangkat.' },
  { icon: KeyRound, title: 'Jadwal & token dinamis', desc: 'Melihat daftar ujian, durasi, dan jadwal. Akses ujian menggunakan token 6 huruf yang berubah otomatis setiap 20 menit.' },
  { icon: BookOpen, title: 'Antarmuka pengerjaan nyaman', desc: 'Mendukung pilihan ganda satu atau beberapa jawaban benar, pengaturan ukuran teks, serta penandaan soal ragu-ragu.' },
  { icon: Clock3, title: 'Navigasi & timer server', desc: 'Status soal real-time, timer tersinkronisasi dengan server, auto-save jawaban, dan auto-submit saat waktu habis.' },
  { icon: ChartNoAxesCombined, title: 'Dashboard & riwayat nilai', desc: 'Ringkasan ujian selesai, rata-rata nilai, ujian yang sedang berlangsung, dan riwayat hasil ujian.' }
]
const adminFeatures = [
  { icon: ClipboardCheck, title: 'Manajemen ujian lengkap', desc: 'Membuat, mengubah, mempublikasikan, dan menghapus ujian beserta mata pelajaran, durasi, jadwal, opsi jawaban, dan deskripsi.' },
  { icon: ImageIcon, title: 'Bank soal kaya media', desc: 'Mendukung kunci jawaban tunggal maupun jamak, serta unggah gambar pada soal dan pilihan jawaban.' },
  { icon: FileSpreadsheet, title: 'Otomasi data skala sekolah', desc: 'Impor soal dan ribuan peserta melalui spreadsheet, dilengkapi generator username dan password otomatis.' },
  { icon: Activity, title: 'Monitoring & analitik nilai', desc: 'Memantau peserta aktif, status perangkat, catatan pelanggaran, hasil per kelas, grafik perkembangan, dan rata-rata mata pelajaran.' },
  { icon: Download, title: 'Ekspor & kontrol reset', desc: 'Ekspor nilai ke Excel dengan sheet per kelas, serta reset login, attempt, atau seluruh data siswa.' }
]
const security = [
  { icon: Server, title: 'Penilaian di sisi server', desc: 'Skor dihitung langsung oleh database PostgreSQL, bukan di browser, sehingga mengurangi risiko manipulasi dari sisi klien.' },
  { icon: Database, title: 'Validasi waktu & kontrol akses', desc: 'Batas waktu dan pengumpulan divalidasi server. Kontrol akses membatasi pembaca terhadap kunci jawaban dan data soal.' },
  { icon: ScanEye, title: 'Deteksi pelanggaran otomatis', desc: 'Mendeteksi perpindahan tab, kehilangan fokus jendela, klik kanan, dan pintasan terlarang. Catatan dapat ditinjau administrator.' },
  { icon: Smartphone, title: 'Kunci perangkat & Android kiosk', desc: 'Mendukung satu perangkat aktif melalui token perangkat, mode kiosk Android melalui EMM, dan pembatasan screenshot dengan FLAG_SECURE.' }
]
const advantages = [
  ['Terpusat', 'Siswa, soal, ujian, penilaian, dan laporan dikelola dalam satu platform terpadu.', Layers3],
  ['Lebih Aman', 'Penilaian jawaban diproses di server, bukan di browser.', ShieldCheck],
  ['Meminimalkan Kecurangan', 'Deteksi pelanggaran real-time dan pembatasan satu perangkat aktif per akun.', ScanEye],
  ['Mendukung Soal Kompleks', 'Kunci jawaban tunggal atau jamak, serta gambar pada soal dan opsi jawaban.', ImageIcon],
  ['Efisien untuk Sekolah', 'Impor peserta dan bank soal dalam jumlah besar melalui spreadsheet.', FileSpreadsheet],
  ['Pelaporan Lengkap', 'Rekap per kelas, analisis mata pelajaran, grafik nilai, dan ekspor Excel multi-sheet.', BarChart3],
  ['Responsif Lintas Perangkat', 'Tampilan optimal di desktop, tablet, maupun ponsel.', MonitorSmartphone],
  ['Mode Terang & Gelap', 'Kenyamanan visual untuk beragam kondisi pencahayaan dan preferensi.', Sun]
]
const gallery = [
  { src: publicAsset('images/axoproject-2-dashboard.png'), category: 'Siswa', title: 'Dashboard & Statistik Siswa', desc: 'Menampilkan daftar ujian aktif, input token 6 huruf, statistik rata-rata nilai, dan riwayat ujian (Dashboard.jsx & History.jsx).', alt: 'Tangkapan layar dashboard siswa AxoProject' },
  { src: publicAsset('images/axoproject-3-admin.png'), category: 'Administrator', title: 'Manajemen Ujian & Impor Peserta', desc: 'Pengelolaan bank soal dengan gambar, impor peserta massal via spreadsheet, dan pemantauan status perangkat (Admin.jsx).', alt: 'Tangkapan layar Admin Workspace AxoProject' }
]

function SectionHeading({ eyebrow, title, desc, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{desc && <p>{desc}</p>}</div>
}
function Placeholder({ children }) { return <div className="placeholder"><div className="placeholder-icon"><ImageIcon size={25}/></div><span>{children}</span><small>Tambahkan file gambar ke folder <code>public/images</code></small></div> }
function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('axoproject-theme') === 'dark')
  const [activeTab, setActiveTab] = useState('student')
  const [lightbox, setLightbox] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState('')
  const [activeSection, setActiveSection] = useState('ringkasan')
  const [imageErrors, setImageErrors] = useState({})
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('axoproject-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  useEffect(() => { const onKey = e => { if (e.key === 'Escape') setLightbox(null) }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
  useEffect(() => {
    const ids = navItems.map(([, id]) => id)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-16% 0px -58% 0px', threshold: [0.05, 0.25, 0.5] })
    ids.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])
  const copyColor = async (hex) => { try { await navigator.clipboard.writeText(hex); setCopied(hex); setTimeout(() => setCopied(''), 1500) } catch { setCopied('error') } }
  const navigateTo = (id) => {
    setMenuOpen(false)
    if (id === 'ringkasan') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const section = document.getElementById(id)
    if (!section) return
    const offset = window.innerWidth <= 780 ? 88 : 106
    const top = section.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }
  const features = activeTab === 'student' ? studentFeatures : adminFeatures
  return <div className="site-shell">
    <header className="navbar"><a className="brand" href="#ringkasan" aria-label="AxoProject CBT home" onClick={(e) => { e.preventDefault(); navigateTo('ringkasan') }}><span className="brand-mark"><img src={publicAsset('images/axoproject-logo.png')} alt="Logo AxoProject"/></span><span>AxoProject <b>CBT</b></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{navItems.map(([label,id]) => <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigateTo(id) }}>{label}</a>)}</nav>
      <div className="nav-actions"><button className="theme-toggle" onClick={() => setDark(v => !v)} aria-label="Ganti tema">{dark ? <Sun size={17}/> : <Moon size={17}/>}<span>{dark ? 'Mode terang' : 'Mode gelap'}</span></button><a className="button button-primary nav-cta" href="https://axoproject.vercel.app" target="_blank" rel="noreferrer">Lihat Demo Live <ArrowUpRight size={16}/></a><button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Buka menu">{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>
    <main>
      <section className="hero section-wrap" id="ringkasan">
        <div className="hero-copy"><div className="status-pill"><span className="status-dot"/> Web & Android Native CBT System</div><p className="hero-kicker">PROJECT SHOWCASE <span>—</span> EDUCATION TECHNOLOGY</p><h1>AxoProject CBT<span>.</span><br/><em>Sistem Ujian Digital</em><br/>Terpusat, Aman, dan Responsif.</h1><p className="hero-description">Aplikasi <strong>Computer Based Test (CBT)</strong> berbasis web yang dibangun menggunakan React, Vite, PostgreSQL, dan Tailwind CSS, serta tersedia sebagai aplikasi Android untuk kebutuhan ujian sekolah.</p><div className="tech-pills">{['React','Vite','PostgreSQL','Tailwind CSS','Capacitor Android'].map(x => <span key={x}>{x}</span>)}</div><div className="hero-actions"><a href="https://axoproject.vercel.app" target="_blank" rel="noreferrer" className="button button-primary">Jelajahi Demo <ArrowUpRight size={17}/></a><a href="#galeri" className="button button-outline">Lihat antarmuka <ArrowDown size={16}/></a></div><div className="hero-meta"><span><ShieldCheck size={15}/> Server-side scoring</span><span><MonitorSmartphone size={15}/> Multi-platform</span><span><Activity size={15}/> Real-time monitoring</span></div></div>
        <div className="hero-visual"><div className="browser-frame"><div className="browser-top"><div className="browser-dots"><i/><i/><i/></div><div className="browser-address"><LockKeyhole size={11}/> axoproject.vercel.app / exam</div><span className="browser-menu">•••</span></div><div className="hero-image-wrap">{!imageErrors.hero ? <img src={publicAsset(dark ? 'images/axoproject-1-exam-dark.png' : 'images/axoproject-1-exam.png')} alt="Antarmuka pengerjaan ujian AxoProject" onError={() => setImageErrors(v => ({...v,hero:true}))}/> : <Placeholder>Slot Gambar 1: Halaman Pengerjaan Ujian (16:9)</Placeholder>}</div></div><p className="image-caption"><span className="caption-mark"/> Antarmuka Pengerjaan Ujian (Exam.jsx) — Timer Server & Navigasi Soal</p><div className="floating-chip"><span className="floating-icon"><Check size={15}/></span><span><b>Auto-save aktif</b><small>Sinkronisasi jawaban</small></span></div></div>
      </section>
      <section className="proof-strip"><div><b>01</b><span>Platform ujian terpadu</span></div><div><b>02</b><span>Keamanan berlapis</span></div><div><b>03</b><span>Monitoring terpusat</span></div><div><b>04</b><span>Web & Android</span></div></section>
      <section className="section-wrap section-block" id="galeri"><SectionHeading eyebrow="PRODUCT INTERFACE" title="Tampilan & Alur Aplikasi" desc="Cuplikan antarmuka AxoProject CBT dari sisi peserta hingga administrator."/><div className="gallery-grid">{gallery.map((item,i) => <article className="gallery-card" key={item.title} onClick={() => setLightbox(item)} tabIndex="0" role="button" onKeyDown={e => e.key === 'Enter' && setLightbox(item)}><div className="gallery-image">{item.src && !imageErrors[i] ? <img src={item.src} alt={item.alt} onError={() => setImageErrors(v => ({...v,[i]:true}))}/> : <Placeholder>{item.placeholder || `Slot Gambar ${i+2}: Tampilan aplikasi (16:9)`}</Placeholder>}<span className="expand-icon"><Eye size={17}/></span></div><div className="gallery-content"><span className={`category-tag ${i===1?'tag-navy':''}`}>{item.category}</span><h3>{item.title}</h3><p>{item.desc}</p><span className="view-link">Lihat preview <ArrowUpRight size={14}/></span></div></article>)}</div></section>
      <section className="feature-section section-block" id="fitur"><div className="section-wrap"><SectionHeading eyebrow="CORE CAPABILITIES" title="Fitur yang dirancang berdasarkan peran" desc="Alur kerja yang berbeda untuk siswa dan administrator, dalam satu ekosistem yang saling terhubung."/><div className="feature-layout"><div className="feature-aside"><span className="aside-icon"><Settings2 size={22}/></span><h3>Satu platform.<br/><span>Dua pengalaman.</span></h3><p>Setiap peran mendapatkan perangkat kerja yang relevan tanpa mengorbankan konsistensi sistem.</p><div className="role-switch"><button className={activeTab==='student'?'selected':''} onClick={() => setActiveTab('student')}><GraduationCap size={18}/> Siswa <ArrowRight size={15}/></button><button className={activeTab==='admin'?'selected':''} onClick={() => setActiveTab('admin')}><Users size={18}/> Administrator <ArrowRight size={15}/></button></div></div><div className="feature-list" key={activeTab}>{features.map((f,i) => <div className="feature-row" key={f.title}><div className="feature-icon"><f.icon size={19}/></div><div><span className="feature-number">0{i+1}</span><h3>{f.title}</h3><p>{f.desc}</p></div></div>)}</div></div></div></section>
      <section className="section-wrap section-block" id="keamanan"><SectionHeading eyebrow="SECURITY & EXAM CONTROL" title="Keamanan sebagai fondasi" desc="Kontrol ujian dirancang untuk menjaga integritas proses, data, dan perangkat peserta."/><div className="security-grid">{security.map((s,i)=><article className="security-card" key={s.title}><div className="security-top"><span className="security-icon"><s.icon size={21}/></span><span className="security-index">0{i+1}</span></div><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div><div className="technical-note"><div className="note-icon"><CircleHelp size={21}/></div><div><b>Catatan teknis & penerapan</b><p>Untuk ujian berisiko tinggi, implementasi tetap direkomendasikan disertai audit kebijakan akses, rate limiting, backup berkala, pengujian keamanan, serta pengelolaan perangkat terkelola. Deteksi pada sisi browser merupakan lapisan mitigasi, bukan jaminan anti-kecurangan mutlak.</p></div></div></section>
      <section className="advantage-section section-block" id="keunggulan"><div className="section-wrap"><SectionHeading eyebrow="WHY AXOPROJECT" title="Dibangun untuk kebutuhan sekolah" desc="Delapan keunggulan yang menyatukan efisiensi operasional, pengalaman pengguna, dan kontrol ujian."/><div className="bento-grid">{advantages.map(([title,desc,Icon],i)=><article className={`bento-card bento-${i+1}`} key={title}><div className="bento-top"><span className="bento-number">0{i+1}</span><Icon size={21}/></div><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="section-wrap section-block" id="desain"><SectionHeading eyebrow="DESIGN SYSTEM" title="Sistem desain yang konsisten" desc="Palet warna resmi AxoProject. Pilih swatch untuk menyalin kode HEX."/><div className="palette-grid">{colors.map(([name,hex])=><button className="swatch-card" key={hex} onClick={() => copyColor(hex)}><span className="swatch-color" style={{backgroundColor:hex}}/><span className="swatch-info"><b>{name}</b><small>{hex}</small></span><span className="copy-icon">{copied===hex?<Check size={16}/>:<Copy size={15}/>}</span></button>)}</div><div className="design-footnote"><span><CheckCircle2 size={16}/> Kontras dan konsistensi visual</span><span><Monitor size={16}/> Responsive layout</span><span><MousePointer2 size={16}/> Interaksi yang jelas</span></div></section>
      <section className="closing-cta"><div className="section-wrap closing-inner"><div><span className="eyebrow">READY TO EXPLORE?</span><h2>Lihat AxoProject<br/>dalam penggunaan nyata.</h2><p>Jelajahi demo aplikasi dan lihat bagaimana alur ujian digital dikelola dari satu tempat.</p></div><a className="button button-light" href="https://axoproject.vercel.app" target="_blank" rel="noreferrer">Buka Demo Live <ArrowUpRight size={17}/></a></div></section>
    </main>
    <footer className="footer"><div className="section-wrap footer-main"><div className="footer-brand"><a className="brand" href="#ringkasan"><span className="brand-mark"><img src={publicAsset('images/axoproject-logo.png')} alt="Logo AxoProject"/></span><span>AxoProject <b>CBT</b></span></a><p>Sistem ujian digital terpusat untuk pengalaman evaluasi yang lebih terstruktur.</p></div><div className="footer-col"><b>Jelajahi</b><a href="#galeri">Galeri UI</a><a href="#fitur">Fitur utama</a><a href="#keamanan">Keamanan</a></div><div className="footer-col"><b>Teknologi</b><span>React · Vite</span><span>PostgreSQL</span><span>Tailwind · Capacitor</span></div><div className="footer-col"><b>Proyek</b><a href="https://axoproject.vercel.app" target="_blank" rel="noreferrer">Demo aplikasi <ArrowUpRight size={13}/></a><span>Web & Android Native</span></div></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} AxoProject CBT. Project showcase.</span><span>Dikembangkan oleh <b>Alfaiz Muafy Rizqi Ramadhan</b></span></div></footer>
    {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Tutup"><X/></button><div className="lightbox-panel" onClick={e => e.stopPropagation()}><div className="lightbox-image">{lightbox.src && !imageErrors[gallery.indexOf(lightbox)] ? <img src={lightbox.src} alt={lightbox.alt || lightbox.title}/> : <Placeholder>{lightbox.placeholder || 'Preview tidak tersedia'}</Placeholder>}</div><div className="lightbox-caption"><span className="category-tag">{lightbox.category}</span><h3>{lightbox.title}</h3><p>{lightbox.desc}</p></div></div></div>}
  </div>
}
export default App
