import { useState } from "react";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebookF, FaGoogle, FaInstagram, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";

const layoutMarkingPhotos = ["/layout-marking/01.png", "/layout-marking/02.png", "/layout-marking/03.png", "/layout-marking/04.png", "/layout-marking/05.png"];

const services = [
  { icon: "📍", title: "Boundary Survey", short: "Accurate legal boundary verification using Total Station and GPS." },
  { icon: "🧩", title: "Sub-division Survey", short: "Land split planning with plot and road marking for development." },
  { icon: "📐", title: "Stakeout Survey", short: "Design point transfer to site before construction starts." },
  { icon: "🗺️", title: "Topographic Survey", short: "Feature and level mapping for planning and design." },
  { icon: "📊", title: "Contour Survey", short: "Contour generation for slope, grading, and drainage analysis." },
  { icon: "🏢", title: "Interior Survey", short: "Internal as-built measurements for renovation and fit-out." },
  { icon: "🏟️", title: "Sports Flooring Making", short: "Level and line setup for accurate sports flooring execution." },
  { icon: "🧭", title: "Layout Site Making", short: "Baseline and plot-road marking for layout execution." },
  { icon: "🏗️", title: "Building Setting Out", short: "Grid and footing center transfer from drawing to site." },
  { icon: "📎", title: "Template Marking", short: "Repetitive point marking with spacing and alignment checks." },
];

function TopHeader() {
  return (
    <header className="bg-[#1E73D8] text-white border-b border-white/20">
      <div className="mx-auto max-w-[1200px] px-5 py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-[11px]">
          <a href="#"><FaFacebookF /></a><a href="#"><FaInstagram /></a><a href="#"><FaYoutube /></a><a href="tel:+918148982300"><FaPhoneAlt /></a>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[11px]">
          <p>Call Us : <a href="tel:+918148982300" className="font-semibold hover:underline">+91 81489 82300</a></p>
          <p>Mail Us : <a href="mailto:mugeshkannan02131@gmail.com" className="font-semibold hover:underline">mugeshkannan02131@gmail.com</a></p>
          <p>Open Hours: <span className="font-semibold">Mon-Fri: 9 am - 8 pm</span></p>
        </div>
        <button className="text-[10px] bg-white text-[#111827] px-2 py-0.5 border border-slate-300">Close</button>
      </div>
    </header>
  );
}

function Navbar() {
  const items = [["Home", "/"], ["About Us", "/about"], ["Services +", "/services"], ["Projects", "/projects"], ["Gallery +", "/gallery"], ["Testimonials", "/testimonials"], ["Contact Us", "/contact"]];
  return (
    <nav className="sticky top-0 z-50 bg-white/90 border-b border-slate-300 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-5 py-3 flex items-center gap-4">
        <div className="leading-tight"><p className="text-[#111827] font-semibold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>RMD Digital</p><p className="text-[#6B7280] text-xs">Surveyors</p></div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-3 md:px-4 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)] max-w-[900px] w-full">
            <ul className="flex items-center gap-1 text-[13px] font-semibold text-[#111827] overflow-x-auto whitespace-nowrap flex-1">
              {items.map(([label, path]) => (
                <li key={label}>
                  <motion.div whileTap={{ scale: 0.93 }}>
                    <NavLink to={path} className={({ isActive }) => `px-3 py-2 rounded-full transition-colors ${isActive ? "bg-[#EFF6FF] text-[#1E73D8]" : "hover:bg-slate-100"}`}>{label}</NavLink>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/contact" className="bg-[#1E73D8] text-white px-4 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm whitespace-nowrap">Write Reviews ★</motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return <section className="bg-gradient-to-r from-[#1E3A8A] to-blue-700 text-white"><div className="mx-auto max-w-[1200px] px-5 py-[110px]"><h2 className="text-4xl md:text-6xl leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>Professional <span className="text-[#F97316]">Engineers & Land</span> Surveyors</h2><p className="text-white/90 text-lg max-w-3xl">RMD Digital Surveyors provides accurate, reliable, and technology-driven land surveying services tailored for modern infrastructure and development needs.</p></div></section>;
}

function AboutPage() {
  return <section className="py-[100px] bg-white"><div className="mx-auto max-w-[1200px] px-5"><h3 className="text-3xl text-[#1E3A8A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>About RMD Digital Surveyors</h3><p className="text-[#6B7280] leading-7">RMD Digital Surveyors is one of the most trusted surveying companies in Coimbatore with strong field expertise and modern equipment.</p></div></section>;
}

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  return (
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <h3 className="text-3xl text-center text-[#1E3A8A] mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>Always We Offer Best Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.article key={s.title} whileHover={{ y: -8 }} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center text-2xl mb-4">{s.icon}</div>
              <h4 className="text-xl mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{s.title}</h4>
              <p className="text-sm text-[#6B7280] mb-4">{s.short}</p>
              <button onClick={() => setActiveService(s)} className="text-[#1E3A8A] font-semibold text-sm">Read More</button>
            </motion.article>
          ))}
        </div>
      </div>
      {activeService && (
        <div className="fixed inset-0 z-[70] bg-black/50 p-4 overflow-y-auto">
          <div className="mx-auto max-w-3xl bg-white rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4"><h3 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>{activeService.title}</h3><button onClick={() => setActiveService(null)}>✕</button></div>
            <p className="text-[#6B7280] mb-4">{activeService.short}</p>
            {activeService.title === "Layout Site Making" && <div className="grid grid-cols-2 md:grid-cols-3 gap-3">{layoutMarkingPhotos.map((src) => <img key={src} src={src} className="h-36 w-full object-cover rounded-lg border" />)}</div>}
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectsPage() {
  const items = [["Boundary Survey", "Thiruppullani"], ["Sub-division Survey", "Palla Pacheri"], ["Stakeout Survey", "Idampadal"], ["Topographic Survey", "Ramanathapuram"], ["Contour Survey", "Uchipuli"], ["Interior Survey", "Mandapam"], ["Sports Flooring Making", "Erwadi"], ["Layout Site Making", "Keelakarai"], ["Building Setting Out", "Devipattinam"], ["Template Marking", "Palla Pacheri"]];
  return <section className="py-[100px] bg-[#F8FAFC]"><div className="mx-auto max-w-[1200px] px-5"><h3 className="text-3xl text-center text-[#1E3A8A] mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>Projects</h3><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#bfdbfe] bg-white">{items.map(([t, p]) => <article key={`${t}-${p}`} className="border border-[#bfdbfe] p-4"><h4 className="text-lg mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{t}</h4><p className="text-sm text-[#475569]">At <span className="text-[#F97316] font-semibold">{p}</span>, we completed this survey with accurate control and field verification.</p></article>)}</div></div></section>;
}

function GalleryPage() {
  return <section className="py-[100px] bg-white"><div className="mx-auto max-w-[1200px] px-5"><h3 className="text-3xl text-center text-[#1E3A8A] mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>Gallery</h3><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{layoutMarkingPhotos.map((src, i) => <div key={src} className="h-64 rounded-xl border overflow-hidden"><img src={src} alt={`Layout marking ${i + 1}`} className="w-full h-full object-cover" /></div>)}</div></div></section>;
}

function TestimonialsPage() {
  return <section className="py-[100px] bg-[#F8FAFC]"><div className="mx-auto max-w-[1200px] px-5"><div className="bg-white rounded-2xl border p-8 text-center max-w-3xl mx-auto"><p className="text-[#6B7280] mb-4">"Excellent and precise work. The team delivered on time with great accuracy."</p><h4 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>Raguraam Selvaraj</h4><p className="text-[#6B7280]">Managing Director</p></div></div></section>;
}

function ContactPage() {
  return <section className="py-[100px] bg-[#F8FAFC]"><div className="mx-auto max-w-[1200px] px-5"><div className="bg-white border rounded-2xl p-8"><h3 className="text-3xl text-[#1E3A8A] mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Get A Quote</h3><form className="grid md:grid-cols-2 gap-5">{["Name", "Email", "Phone", "Address", "Subject"].map((f) => <input key={f} placeholder={f} className={`border rounded-lg px-4 py-3 ${f === "Subject" ? "md:col-span-2" : ""}`} />)}<button className="md:col-span-2 bg-[#F97316] text-white py-3 rounded-lg font-semibold">Get A Quote</button></form></div></div></section>;
}

function Footer() {
  return <footer className="bg-[#F8FAFC] py-12 border-t"><div className="mx-auto max-w-[1200px] px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8"><div><p className="font-semibold">RMD Digital Surveyors</p><div className="flex items-center gap-2 mt-3"><a href="https://wa.me/919123534173"><FaWhatsapp /></a><a href="#"><FaYoutube /></a><a href="#"><FaGoogle /></a></div></div><div><p className="font-semibold mb-2">Quick Links</p><ul className="text-sm space-y-1"><li><NavLink to="/about">About</NavLink></li><li><NavLink to="/services">Services</NavLink></li><li><NavLink to="/gallery">Gallery</NavLink></li></ul></div><div><p className="font-semibold mb-2">Survey Links</p><ul className="text-sm space-y-1"><li><NavLink to="/services">Boundary Survey</NavLink></li><li><NavLink to="/services">Topographic Survey</NavLink></li></ul></div><div className="text-sm"><p><a href="tel:+918148982300">+91 81489 82300</a></p><p><a href="mailto:mugeshkannan02131@gmail.com">mugeshkannan02131@gmail.com</a></p></div></div></footer>;
}

function FloatingActions() {
  return <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[80] flex flex-col gap-3"><a href="https://wa.me/919123534173" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center text-2xl"><FaWhatsapp /></a><a href="tel:+918148982300" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-[#1E3A8A] text-white shadow-lg flex items-center justify-center text-2xl"><FaPhoneAlt /></a><a href="mailto:mugeshkannan02131@gmail.com" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-white text-[#111827] border border-slate-200 shadow-lg flex items-center justify-center text-2xl"><FaEnvelope /></a></div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}

const layoutMarkingPhotos = [
  "/layout-marking/01.png",
  "/layout-marking/02.png",
  "/layout-marking/03.png",
  "/layout-marking/04.png",
  "/layout-marking/05.png",
];

const services = [
  { icon: "📍", title: "Boundary Survey", short: "We verify legal records, locate corner stones, and measure every boundary line using Total Station/GPS for accurate demarcation." },
  { icon: "🧩", title: "Sub-division Survey", short: "We inspect parent land and divide it into planned plots with road and dimension compliance for registration and development." },
  { icon: "📐", title: "Stakeout Survey", short: "We transfer approved design points to ground by marking centerlines, footing points, and control references before execution." },
  { icon: "🗺️", title: "Topographic Survey", short: "We capture levels and all visible site features and deliver topo outputs for planning, grading, and infrastructure design." },
  { icon: "📊", title: "Contour Survey", short: "We collect spot levels and generate contours to support slope analysis, drainage flow planning, and earthwork decisions." },
  { icon: "🏢", title: "Interior Survey", short: "We measure internal walls, openings, levels, and built elements to provide precise as-built data for renovation." },
  { icon: "🏟️", title: "Sports Flooring Making", short: "We verify levels, slope tolerance, and court line references for accurate flooring and performance alignment." },
  { icon: "🧭", title: "Layout Site Making", short: "We create baseline control and mark plot corners, roads, and references for error-free site execution." },
  { icon: "🏗️", title: "Building Setting Out", short: "We transfer structural grid, footing centers, and benchmark levels from drawing to field with high precision." },
  { icon: "📎", title: "Template Marking", short: "We mark repetitive structural points and template references to maintain spacing, alignment, and quality control." },
];

function TopHeader() {
  return (
    <header className="bg-[#1E73D8] text-white border-b border-white/20">
      <div className="mx-auto max-w-[1200px] px-5 py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-[11px]">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="tel:+918148982300" aria-label="Call"><FaPhoneAlt /></a>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[11px]">
          <p>Call Us : <a href="tel:+918148982300" className="font-semibold hover:underline">+91 81489 82300</a></p>
          <p>Mail Us : <a href="mailto:mugeshkannan02131@gmail.com" className="font-semibold hover:underline">mugeshkannan02131@gmail.com</a></p>
          <p>Open Hours: <span className="font-semibold">Mon-Fri: 9 am - 8 pm</span></p>
        </div>
        <button className="text-[10px] bg-white text-[#111827] px-2 py-0.5 border border-slate-300">Close</button>
      </div>
    </header>
  );
}

function Navbar() {
  const items = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services +", "/services"],
    ["Projects", "/projects"],
    ["Gallery +", "/gallery"],
    ["Testimonials", "/testimonials"],
    ["Contact Us", "/contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 border-b border-slate-300 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-5 py-3 flex items-center gap-4">
        <div className="leading-tight">
          <p className="text-[#111827] font-semibold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>RMD Digital</p>
          <p className="text-[#6B7280] text-xs">Surveyors</p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-3 md:px-4 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)] max-w-[900px] w-full">
            <ul className="flex items-center gap-1 text-[13px] font-semibold text-[#111827] overflow-x-auto whitespace-nowrap flex-1">
              {items.map(([label, path]) => (
                <li key={label}>
                  <motion.div whileTap={{ scale: 0.93 }}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-full transition-colors ${isActive ? "bg-[#EFF6FF] text-[#1E73D8]" : "hover:bg-slate-100"}`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/contact" className="bg-[#1E73D8] text-white px-4 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm whitespace-nowrap">
              Write Reviews ★
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <section className="bg-gradient-to-r from-[#1E3A8A] to-blue-700 text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-[100px] md:py-[140px]">
        <h2 className="text-4xl md:text-6xl leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
          Professional <span className="text-[#F97316]">Engineers & Land</span> Surveyors
        </h2>
        <p className="text-white/90 text-lg max-w-3xl">
          RMD Digital Surveyors provides accurate, reliable, and technology-driven land surveying services tailored for modern infrastructure and development needs.
        </p>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-slate-100 rounded-2xl h-80 lg:h-96" />
        <div>
          <h3 className="text-3xl md:text-4xl text-[#1E3A8A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>About RMD Digital Surveyors</h3>
          <p className="text-[#6B7280] leading-7">
            RMD Digital Surveyors is one of the most trusted land surveying companies in Coimbatore. We deliver precise surveying solutions using modern Total Station and GPS technologies across residential, industrial, and infrastructure sectors.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  return (
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <h3 className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>Always We Offer Best Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service) => (
            <motion.article key={service.title} whileHover={{ y: -8 }} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center text-2xl mb-4">{service.icon}</div>
              <h4 className="text-xl text-[#111827] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{service.title}</h4>
              <p className="text-[#6B7280] text-sm leading-6 mb-4 flex-grow">{service.short}</p>
              <button onClick={() => setActiveService(service)} className="text-[#1E3A8A] font-semibold text-sm mt-auto text-left">Read More</button>
            </motion.article>
          ))}
        </div>
      </div>
      {activeService && (
        <div className="fixed inset-0 z-[70] bg-black/50 p-4 md:p-8 overflow-y-auto">
          <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl">
            <div className="p-6 md:p-8 border-b border-slate-200 flex items-start justify-between gap-4">
              <h3 className="text-2xl md:text-3xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>{activeService.title}</h3>
              <button onClick={() => setActiveService(null)} className="w-10 h-10 rounded-full border border-slate-300 text-[#111827] font-bold">×</button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[#6B7280] mb-4">{activeService.short}</p>
              {activeService.title === "Layout Site Making" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {layoutMarkingPhotos.map((src, idx) => (
                    <img key={src} src={src} alt={`Layout marking ${idx + 1}`} className="h-36 w-full object-cover rounded-lg border border-slate-200" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectsPage() {
  return (
    <section className="py-[100px] bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1200px] px-5">
        <h3 className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-10" style={{ fontFamily: "Poppins, sans-serif" }}>Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#bfdbfe] bg-white">
          {[
            ["Boundary Survey", "Thiruppullani"],
            ["Sub-division Survey", "Palla Pacheri"],
            ["Stakeout Survey", "Idampadal"],
            ["Topographic Survey", "Ramanathapuram"],
            ["Contour Survey", "Uchipuli"],
            ["Interior Survey", "Mandapam"],
            ["Sports Flooring Making", "Erwadi"],
            ["Layout Site Making", "Keelakarai"],
            ["Building Setting Out", "Devipattinam"],
            ["Template Marking", "Palla Pacheri"],
          ].map(([title, place]) => (
            <article key={`${title}-${place}`} className="border border-[#bfdbfe] p-4 min-h-[150px]">
              <h4 className="text-lg text-[#111827] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
              <p className="text-sm text-[#475569] leading-6">
                At <span className="text-[#F97316] font-semibold">{place}</span>, this survey was completed with accurate control measurements and field verification for reliable site delivery.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <h3 className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>Gallery</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {layoutMarkingPhotos.map((src, i) => (
            <div key={src} className="h-64 rounded-xl border border-slate-200 overflow-hidden bg-[#F8FAFC]">
              <img src={src} alt={`Layout marking work ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPage() {
  return (
    <section className="py-[100px] bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#6B7280] leading-8 mb-6">"Excellent and precise work. The team delivered on time with great accuracy. Highly recommended for any surveying needs."</p>
          <h4 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>Raguraam Selvaraj</h4>
          <p className="text-[#6B7280]">Managing Director</p>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="py-[100px] bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
          <h3 className="text-3xl text-[#1E3A8A] mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Get A Quote</h3>
          <form className="grid md:grid-cols-2 gap-5">
            {["Name", "Email", "Phone", "Address", "Subject"].map((f) => (
              <input key={f} placeholder={f} className={`border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-[#1E3A8A] ${f === "Subject" ? "md:col-span-2" : ""}`} />
            ))}
            <button className="md:col-span-2 bg-[#F97316] text-white py-3 rounded-lg font-semibold">Get A Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#F8FAFC] py-16 border-t border-slate-200">
      <div className="mx-auto max-w-[1200px] px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold">R</div>
            <div><p className="text-[#111827] font-semibold leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>RMD Digital</p><p className="text-[#6B7280] text-sm">Surveyors</p></div>
          </div>
          <p className="text-[#475569] text-sm leading-7 mb-4">RMD Digital Surveyors delivers precise land surveying solutions with trusted field expertise across Tamil Nadu.</p>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/919123534173" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center"><FaWhatsapp /></a>
            <a href="#" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center"><FaYoutube /></a>
            <a href="#" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center"><FaGoogle /></a>
          </div>
        </div>
        <div><h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Quick Links</h6><ul className="space-y-2 text-[#334155] text-sm"><li><NavLink to="/about">About Us</NavLink></li><li><NavLink to="/services">Services</NavLink></li><li><NavLink to="/gallery">Gallery</NavLink></li><li><NavLink to="/testimonials">Testimonials</NavLink></li><li><NavLink to="/contact">Contact Us</NavLink></li></ul></div>
        <div><h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Survey Links</h6><ul className="space-y-2 text-[#334155] text-sm"><li><NavLink to="/services">Boundary Survey</NavLink></li><li><NavLink to="/services">Sub-division Survey</NavLink></li><li><NavLink to="/services">Stakeout Survey</NavLink></li><li><NavLink to="/services">Topographic Survey</NavLink></li><li><NavLink to="/services">Contour Survey</NavLink></li></ul></div>
        <div><h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Contacts</h6><div className="space-y-4 text-sm text-[#334155]"><p><span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">A</span>#357, Ramachandra Layout, Ramnagar, Coimbatore - 641009</p><p><span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">P</span><a href="tel:+918148982300">+91 81489 82300</a></p><p><span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">E</span><a href="mailto:mugeshkannan02131@gmail.com">mugeshkannan02131@gmail.com</a></p></div></div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[80] flex flex-col gap-3">
      <a href="https://wa.me/919123534173" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center text-2xl"><FaWhatsapp /></a>
      <a href="tel:+918148982300" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-[#1E3A8A] text-white shadow-lg flex items-center justify-center text-2xl"><FaPhoneAlt /></a>
      <a href="mailto:mugeshkannan02131@gmail.com" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-white text-[#111827] border border-slate-200 shadow-lg flex items-center justify-center text-2xl"><FaEnvelope /></a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}
import { useMemo, useState } from "react";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaYoutube, FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const layoutMarkingPhotos = [
  "/layout-marking/01.png",
  "/layout-marking/02.png",
  "/layout-marking/03.png",
  "/layout-marking/04.png",
  "/layout-marking/05.png",
];

const services = [
  {
    icon: "📍",
    title: "Boundary Survey",
    short: "We verify legal records, locate corner stones on site, and measure every boundary line using Total Station/GPS to create an accurate boundary sketch.",
    example: "Example: Boundary re-fix and legal corner verification completed for a residential land parcel at Thiruppullani.",
    details: [
      "Collect title deed, FMB sketch, patta/chitta, and previous survey references before site visit.",
      "Reconnaissance is done to identify existing boundary stones, fence lines, access, and neighboring occupation.",
      "Establish temporary control points and orient instrument to known coordinate/benchmark.",
      "Observe all corners, bends, and boundary offsets using Total Station and RTK GPS for high precision.",
      "Cross-check measured side lengths and diagonals with record dimensions to detect encroachments.",
      "Re-fix missing corners by legal reconstruction method and mark with permanent stones/pegs.",
      "Prepare final boundary plan with coordinates, side lengths, area statement, and encroachment notes.",
      "Issue signed report with boundary sketch, methodology, and recommended legal follow-up if needed.",
    ],
  },
  {
    icon: "🧩",
    title: "Sub-division Survey",
    short: "We inspect the parent land, plan new plot divisions as per local rules, and mark each proposed lot with precise dimensions for registration and development.",
    example: "Example: Parent parcel divided into saleable plots with internal road alignment at Palla Pacheri.",
    details: [
      "Study parent boundary and statutory requirements (minimum road width, setback, plot size norms).",
      "Fix control points and establish the parent parcel limits accurately on the ground.",
      "Design subdivision layout with road network, plot numbering, utility corridor, and drainage flow.",
      "Set out each plot corner and road edge with pegs and paint markings for site identification.",
      "Verify every plot area and frontage using coordinate-based calculations and closure checks.",
      "Prepare subdivision drawing showing plot table, dimensions, road schedule, and total area balance.",
      "Support approvals by providing technical documents required by planning/local authority.",
      "Deliver final pegged layout and signed plan ready for registration and execution.",
    ],
  },
  {
    icon: "📐",
    title: "Stakeout Survey",
    short: "Using approved drawings, we transfer design points to the ground by pegging centerlines, offsets, and control points before construction starts.",
    example: "Example: Building grid and footing stakeout executed for a commercial structure in Gandhipuram.",
    details: [
      "Review IFC drawings and coordinate schedule to identify all stakeout points.",
      "Transfer design grid to field through established site control and benchmark references.",
      "Mark centerlines, column points, wall offsets, and service corridor points with labeled pegs.",
      "Use offset stakes to protect critical points during excavation and heavy equipment movement.",
      "Re-check stakeout coordinates with independent backsight and tie-line verification.",
      "Issue stakeout sheet with point ID, Northing/Easting, RL, and tolerance records.",
      "Conduct re-stake as work progresses for footing, plinth, and superstructure phases.",
      "Submit as-staked report confirming alignment with approved design intent.",
    ],
  },
  {
    icon: "🗺️",
    title: "Topographic Survey",
    short: "We capture natural and built features like levels, roads, drains, and trees, then prepare a detailed topo map for planning and engineering design.",
    example: "Example: Full topographic mapping completed for a mixed-use site near Uchipuli.",
    details: [
      "Define survey scope, contour interval, and feature coding as per project requirement.",
      "Establish horizontal and vertical control network over the complete site.",
      "Capture dense spot levels and all visible features: roads, drains, utilities, trees, structures, compound.",
      "Record breaklines and terrain changes to model realistic ground behavior.",
      "Process raw data in CAD/GIS workflow and generate digital terrain model (DTM).",
      "Prepare topo drawing with legend, scale, coordinate grid, north arrow, and benchmark details.",
      "Quality check is performed through random check shots and closure/error analysis.",
      "Deliverables include DWG/PDF maps, point files, and level report for design teams.",
    ],
  },
  {
    icon: "📊",
    title: "Contour Survey",
    short: "We collect spot levels in a grid pattern and generate contour intervals to support grading, slope analysis, and drainage planning.",
    example: "Example: Contour plan with cut/fill analysis prepared for a semi-urban site in Saravanampatti.",
    details: [
      "Set grid spacing based on terrain complexity and required contour interval.",
      "Observe RL values at grid points, critical ridges, depressions, and drainage paths.",
      "Validate benchmark and instrument setup repeatedly to maintain vertical accuracy.",
      "Interpolate contours from processed levels and smooth only where justified by terrain logic.",
      "Highlight high points, low points, natural flow direction, and possible cut/fill zones.",
      "Generate contour map with chainage/grid references and reduced level table.",
      "Perform independent checks at random points to confirm contour reliability.",
      "Issue contour plan and technical note for grading and stormwater planning.",
    ],
  },
  {
    icon: "🏢",
    title: "Interior Survey",
    short: "We measure walls, columns, openings, and internal utilities to produce precise floor layout data for renovation, fit-out, and documentation.",
    example: "Example: Interior as-built survey delivered for an office renovation project at Peelamedu.",
    details: [
      "Create room-by-room survey plan and identify fixed reference datum points.",
      "Measure wall lengths, corner angles, floor levels, ceiling heights, and slab variations.",
      "Capture door/window openings, stair geometry, shafts, columns, and utility points.",
      "Use laser disto + Total Station where needed to reduce cumulative measurement error.",
      "Check dimensional closure for each room and floor to avoid fit-out clashes.",
      "Draft as-built interior drawings with dimensions, levels, and section references.",
      "Provide area statements (carpet/built-up) if required for planning and leasing.",
      "Deliver CAD/PDF outputs suitable for architecture, MEP, and execution teams.",
    ],
  },
  {
    icon: "🏟️",
    title: "Sports Flooring Making",
    short: "We establish levels, check slope tolerance, set center references, and mark layout lines to ensure proper flooring alignment and performance.",
    example: "Example: Sports court level control and line setting completed in Ramanathapuram region.",
    details: [
      "Inspect site condition and establish benchmark for finish floor level control.",
      "Set centerlines, boundary lines, and game-court geometry using calibrated instruments.",
      "Verify slope and level tolerance to ensure proper drainage and play performance.",
      "Mark layer thickness references for base, sub-base, and final flooring system.",
      "Check right angles, diagonals, and symmetry before material laying begins.",
      "Guide execution team with periodic re-checks during each construction layer.",
      "Finalize line marking layout as per sport-specific standards/dimensions.",
      "Provide completion check report with dimensional conformity statement.",
    ],
  },
  {
    icon: "🧭",
    title: "Layout Site Making",
    short: "We create baseline control, mark plot corners and road widths, and verify dimensions so the full layout is ready for execution without mismatch.",
    example: "Example: Plot and road layout marking completed for a residential extension near Mandapam.",
    details: [
      "Fix master control line and benchmark covering entire project extents.",
      "Mark plot corners, road edges, junction radii, and open-space boundaries.",
      "Provide offset pegs for durable references during earthwork and utility works.",
      "Check road widths, plot frontages, and cumulative chainage for dimensional accuracy.",
      "Coordinate with design team for on-ground adjustments caused by site conditions.",
      "Prepare plot-wise stakeout sheet and layout compliance checklist.",
      "Re-verify all critical points prior to handing over for construction.",
      "Issue final marked layout certificate with coordinates and area reconciliation.",
    ],
  },
  {
    icon: "🏗️",
    title: "Building Setting Out",
    short: "We transfer the approved structural grid from drawing to site by marking axis lines, footing centers, and benchmark levels with high precision.",
    example: "Example: Axis transfer and benchmark control done for an industrial block in Singanallur.",
    details: [
      "Review structural drawings and establish project grid reference on site control.",
      "Mark primary and secondary axes using Total Station with tight angular checks.",
      "Set footing centers, pile points, and column grid intersections with labeled pegs.",
      "Transfer benchmark levels for excavation depth and PCC/footing level control.",
      "Provide offset references outside excavation zone to preserve axis continuity.",
      "Perform as-setout verification against design coordinates before concreting.",
      "Re-establish control after each construction stage to prevent cumulative drift.",
      "Submit setting-out records with coordinates, RL, and tolerance confirmation.",
    ],
  },
  {
    icon: "📎",
    title: "Template Marking",
    short: "We mark repetitive structural points and reference templates on site to maintain uniform spacing, alignment, and construction quality.",
    example: "Example: Repetitive structural template marking completed for a warehouse foundation in Devipattinam.",
    details: [
      "Identify repetitive elements (anchors, bolts, sleeves, inserts, plates) from drawing.",
      "Create master template reference line and control dimensions for repeat accuracy.",
      "Mark each point using fixed offsets from grid/axis with precise spacing control.",
      "Use jigs/templates to transfer repeated geometry without manual cumulative errors.",
      "Check linearity, perpendicularity, and interval consistency before execution.",
      "Coordinate with shuttering/steel teams to lock marks before concreting.",
      "Perform final verification with spot-check matrix and tolerance limits.",
      "Issue marking checklist and approved reference record for QA documentation.",
    ],
  },
];

const faqs = [
  {
    q: "What services does RMD Digital Surveyors offer?",
    a: "We provide Boundary Survey, Sub-division Survey, Stakeout Survey, Topographic Survey, Contour Survey, Interior Survey, Sports Flooring Making, Layout Site Making, Building Setting Out, and Template Marking for residential, commercial, and infrastructure projects.",
  },
  {
    q: "How can I request a survey?",
    a: "You can request a survey by filling out the quote form, calling +91 81489 82300, emailing mugeshkannan02131@gmail.com, or sending a WhatsApp message through the floating button.",
  },
  {
    q: "How long does a survey take?",
    a: "The schedule depends on project size, terrain, and reporting needs. Small properties can be completed quickly, while larger or detailed projects require additional field and data-processing time.",
  },
  {
    q: "Are your surveyors licensed?",
    a: "Our team follows professional surveying standards and validated field procedures with calibrated equipment to ensure reliable and high-precision outputs.",
  },
  {
    q: "Do you handle boundary disputes?",
    a: "Yes. We perform technical boundary verification with records and field measurements, then provide clear plans and evidence that support legal or administrative resolution.",
  },
  {
    q: "What equipment do you use?",
    a: "We use modern Total Station, GPS/RTK systems, digital leveling tools, and other precision instruments selected according to required survey accuracy.",
  },
  {
    q: "Do you provide reports?",
    a: "Yes, we deliver professional outputs such as drawings, coordinate tables, level data, area statements, and project-specific technical reports.",
  },
  {
    q: "What is the cost of a survey?",
    a: "Cost is based on land extent, terrain complexity, survey type, deliverables, and timeline. Contact us with site details for a clear project quotation.",
  },
];

function TopHeader() {
  return (
    <header className="bg-[#1E73D8] text-white border-b border-white/20">
      <div className="mx-auto max-w-[1200px] px-5 py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-[11px]">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="tel:+918148982300" aria-label="Call"><FaPhoneAlt /></a>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[11px]">
          <p>Call Us : <a href="tel:+918148982300" className="font-semibold hover:underline">+91 81489 82300</a></p>
          <p>Mail Us : <a href="mailto:mugeshkannan02131@gmail.com" className="font-semibold hover:underline">mugeshkannan02131@gmail.com</a></p>
          <p>Open Hours: <span className="font-semibold">Mon-Fri: 9 am - 8 pm</span></p>
        </div>
        <button className="text-[10px] bg-white text-[#111827] px-2 py-0.5 border border-slate-300">Close</button>
      </div>
    </header>
  );
}

function Navbar() {
  const items = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services +", "/services"],
    ["Projects", "/projects"],
    ["Gallery +", "/gallery"],
    ["Testimonials", "/testimonials"],
    ["Contact Us", "/contact"],
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white/90 border-b border-slate-300 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-5 py-3 flex items-center gap-4">
        <div className="leading-tight">
          <p className="text-[#111827] font-semibold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>RMD Digital</p>
          <p className="text-[#6B7280] text-xs">Surveyors</p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-3 md:px-4 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)] max-w-[900px] w-full">
            <ul className="flex items-center gap-1 text-[13px] font-semibold text-[#111827] overflow-x-auto whitespace-nowrap flex-1">
              {items.map(([label, path]) => (
                <li key={label}>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-full transition-colors ${isActive ? "bg-[#EFF6FF] text-[#1E73D8]" : "hover:bg-slate-100"}`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#contact-form" className="bg-[#1E73D8] text-white px-4 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm whitespace-nowrap">
              Write Reviews ★
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <section className="bg-gradient-to-r from-[#1E3A8A] to-blue-700 text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-[100px] md:py-[140px]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl space-y-6">
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }} className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
            Professional <span className="text-[#F97316]">Engineers & Land</span> Surveyors
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }} className="text-white/90 text-lg">
            RMD Digital Surveyors provides accurate, reliable, and technology-driven land surveying services tailored for modern infrastructure and development needs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1200px] px-5 grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-slate-100 rounded-2xl h-80 lg:h-96" />
        <div>
          <h3 className="text-3xl md:text-4xl text-[#1E3A8A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>About RMD Digital Surveyors</h3>
          <p className="text-[#6B7280] leading-7 mb-6">
            RMD Digital Surveyors is one of the most trusted land surveying companies in Coimbatore. With a strong portfolio of successfully completed projects, we specialize in delivering precise and efficient surveying solutions using modern Total Station and GPS technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  return (
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <h3 className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>Always We Offer Best Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service) => (
            <motion.article key={service.title} whileHover={{ y: -8 }} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center text-2xl mb-4">{service.icon}</div>
              <h4 className="text-xl text-[#111827] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{service.title}</h4>
              <p className="text-[#6B7280] text-sm leading-6 mb-2">{service.short}</p>
              <p className="text-[#475569] text-xs leading-5 italic mb-4 flex-grow">{service.example}</p>
              <button onClick={() => setActiveService(service)} className="text-[#1E3A8A] font-semibold text-sm mt-auto text-left">Read More</button>
            </motion.article>
          ))}
        </div>
      </div>
      {activeService && (
        <div className="fixed inset-0 z-[70] bg-black/50 p-4 md:p-8 overflow-y-auto">
          <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl">
            <div className="p-6 md:p-8 border-b border-slate-200 flex items-start justify-between gap-4">
              <h3 className="text-2xl md:text-3xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>{activeService.title}</h3>
              <button onClick={() => setActiveService(null)} className="w-10 h-10 rounded-full border border-slate-300 text-[#111827] font-bold">×</button>
            </div>
            <div className="p-6 md:p-8">
              {activeService.title === "Layout Site Making" && (
                <div className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {layoutMarkingPhotos.map((src, idx) => (
                    <img key={src} src={src} alt={`Layout marking ${idx + 1}`} className="h-36 w-full object-cover rounded-lg border border-slate-200" />
                  ))}
                </div>
              )}
              <ol className="space-y-3">
                {activeService.details.map((step) => <li key={step} className="text-[#334155]">{step}</li>)}
              </ol>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectsPage() {
  const projects = useMemo(
    () => [
      ["Boundary Survey", "Thiruppullani", "we completed detailed boundary verification and legal corner fixing for private plot demarcation."],
      ["Sub-division Survey", "Palla Pacheri", "we split parent land into planned plots and marked internal roads for development."],
      ["Stakeout Survey", "Idampadal", "we transferred design points and footing grid references to ground before construction."],
      ["Topographic Survey", "Ramanathapuram", "we captured site levels, roads, and drainage features for planning support."],
      ["Contour Survey", "Uchipuli", "we prepared contour intervals and slope data for grading and water-flow design."],
      ["Interior Survey", "Mandapam", "we measured internal walls, openings, and levels for renovation layout."],
      ["Sports Flooring Making", "Erwadi", "we completed level checks and line references for sports court execution."],
      ["Layout Site Making", "Keelakarai", "we established baseline and marked plot corners with road alignment."],
      ["Building Setting Out", "Devipattinam", "we marked axes, footing centers, and benchmark levels at site."],
      ["Template Marking", "Palla Pacheri", "we performed repetitive structural template marking with spacing checks."],
    ],
    []
  );
  return (
    <section className="py-[100px] bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1200px] px-5">
        <h3 className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#bfdbfe] bg-white">
          {projects.map(([title, place, desc]) => (
            <article key={`${title}-${place}`} className="border border-[#bfdbfe] p-4 min-h-[150px]">
              <h4 className="text-lg text-[#111827] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
              <p className="text-sm text-[#475569] leading-6">At <span className="text-[#F97316] font-semibold">{place}</span>, {desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <section className="py-[100px] bg-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <h3 className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>Gallery</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {layoutMarkingPhotos.map((src, i) => (
            <div key={src} className="h-64 rounded-xl border border-slate-200 overflow-hidden bg-[#F8FAFC]">
              <img src={src} alt={`Layout marking work ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPage() {
  return (
    <section className="py-[100px] bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#6B7280] leading-8 mb-6">"Excellent and precise work. The team delivered on time with great accuracy. Highly recommended for any surveying needs."</p>
          <h4 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>Raguraam Selvaraj</h4>
          <p className="text-[#6B7280]">Managing Director</p>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="py-[100px] bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1200px] px-5">
        <div id="contact-form" className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
          <h3 className="text-3xl text-[#1E3A8A] mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Get A Quote</h3>
          <form className="grid md:grid-cols-2 gap-5">
            {["Name", "Email", "Phone", "Address", "Subject"].map((f) => (
              <input key={f} placeholder={f} className={`border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-[#1E3A8A] ${f === "Subject" ? "md:col-span-2" : ""}`} />
            ))}
            <button className="md:col-span-2 bg-[#F97316] text-white py-3 rounded-lg font-semibold">Get A Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <section className="relative bg-[#1E3A8A] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.08) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.08) 75%, transparent 75%, transparent)", backgroundSize: "44px 44px" }} />
        <div className="mx-auto max-w-[1200px] px-5 relative z-10 text-center">
          <h3 className="text-4xl md:text-5xl font-semibold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Need Help? Let's Get in Touch</h3>
          <a href="tel:+918148982300" className="text-[#F97316] text-4xl md:text-5xl font-bold hover:underline">+91 81489 82300</a>
        </div>
      </section>
      <footer className="bg-[#F8FAFC] py-16 border-t border-slate-200">
        <div className="mx-auto max-w-[1200px] px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold">R</div>
              <div><p className="text-[#111827] font-semibold leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>RMD Digital</p><p className="text-[#6B7280] text-sm">Surveyors</p></div>
            </div>
            <p className="text-[#475569] text-sm leading-7 mb-4">RMD Digital Surveyors delivers precise land surveying solutions with trusted field expertise across Tamil Nadu.</p>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/919123534173" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center"><FaWhatsapp /></a>
              <a href="#" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center"><FaYoutube /></a>
              <a href="#" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center"><FaGoogle /></a>
            </div>
          </div>
          <div><h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Quick Links</h6><ul className="space-y-2 text-[#334155] text-sm"><li><NavLink to="/about">About Us</NavLink></li><li><NavLink to="/services">Services</NavLink></li><li><NavLink to="/gallery">Gallery</NavLink></li><li><NavLink to="/testimonials">Testimonials</NavLink></li><li><NavLink to="/contact">Contact Us</NavLink></li></ul></div>
          <div><h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Survey Links</h6><ul className="space-y-2 text-[#334155] text-sm"><li><NavLink to="/services">Boundary Survey</NavLink></li><li><NavLink to="/services">Sub-division Survey</NavLink></li><li><NavLink to="/services">Stakeout Survey</NavLink></li><li><NavLink to="/services">Topographic Survey</NavLink></li><li><NavLink to="/services">Contour Survey</NavLink></li></ul></div>
          <div><h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Contacts</h6><div className="space-y-4 text-sm text-[#334155]"><p><span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">A</span>#357, Ramachandra Layout, Ramnagar, Coimbatore - 641009</p><p><span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">P</span><a href="tel:+918148982300">+91 81489 82300</a></p><p><span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">E</span><a href="mailto:mugeshkannan02131@gmail.com">mugeshkannan02131@gmail.com</a></p></div></div>
        </div>
      </footer>
    </>
  );
}

function FloatingActions() {
  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[80] flex flex-col gap-3">
      <a href="https://wa.me/919123534173" target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center text-2xl"><FaWhatsapp /></a>
      <a href="tel:+918148982300" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-[#1E3A8A] text-white shadow-lg flex items-center justify-center text-2xl"><FaPhoneAlt /></a>
      <a href="mailto:mugeshkannan02131@gmail.com" className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-white text-[#111827] border border-slate-200 shadow-lg flex items-center justify-center text-2xl"><FaEnvelope /></a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}

      <section id="stats" className="py-[100px] bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "5000+ Projects",
              "3000+ Satisfied Clients",
              "100% Successful Completion",
              "Worked Across 6+ States",
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
                <p className="text-xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-[100px] bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>
            Always We Offer Best Services
          </motion.h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {services.map((service) => (
              <motion.article key={service.title} variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }} whileHover={{ y: -8 }} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center text-2xl mb-4">{service.icon}</div>
                <h4 className="text-xl text-[#111827] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{service.title}</h4>
                <p className="text-[#6B7280] text-sm leading-6 mb-2">{service.short}</p>
                <p className="text-[#475569] text-xs leading-5 italic mb-4 flex-grow">{service.example}</p>
                <button onClick={() => setActiveService(service)} className="text-[#1E3A8A] font-semibold text-sm mt-auto text-left">
                  Read More
                </button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-[100px] bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h3 className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              Projects
            </h3>
            <p className="text-[#6B7280] text-center max-w-3xl mx-auto mb-10">
              We delivered different surveying works across Ramanathapuram region for land development, layout planning, and construction support.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#bfdbfe] bg-white">
            {[
              ["Boundary Survey", "At ", "Thiruppullani", ", we completed detailed boundary verification by fixing legal corner references, measuring boundary lines with Total Station, and preparing a clear demarcation sketch for site handover."],
              ["Sub-division Survey", "At ", "Palla Pacheri", ", we carried out complete parent land division into planned plots, marked road widths and plot corners, and delivered accurate subdivision dimensions for documentation support."],
              ["Stakeout Survey", "At ", "Idampadal", ", we transferred approved building coordinates to ground level, marked centerlines and footing points, and ensured construction starts with accurate control references."],
              ["Topographic Survey", "At ", "Ramanathapuram", ", we captured all natural and man-made features, collected field levels, and generated planning-ready topographic data for roads, drainage, and land development."],
              ["Contour Survey", "At ", "Uchipuli", ", we observed grid-based spot levels, produced contour intervals, and provided slope and cut-fill understanding for grading and water-flow planning."],
              ["Interior Survey", "At ", "Mandapam", ", we measured room dimensions, wall alignments, openings, and internal utility points to create precise as-built inputs for renovation and fit-out design."],
              ["Sports Flooring Making", "At ", "Erwadi", ", we performed level checks, slope tolerance verification, and layout line marking to support accurate sports flooring execution with proper alignment."],
              ["Layout Site Making", "At ", "Keelakarai", ", we established baseline control, marked plot boundaries and street lines, and verified dimensions for smooth layout execution on site."],
              ["Building Setting Out", "At ", "Devipattinam", ", we transferred structural grid lines, footing centers, and benchmark levels from drawings to field for precise foundation and column positioning."],
              ["Template Marking", "At ", "Palla Pacheri", ", we completed repetitive structural template marking with spacing checks and reference control to maintain construction uniformity and accuracy."],
            ].map(([title, prefix, place, suffix]) => (
              <motion.article
                key={`${title}-${place}`}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="border border-[#bfdbfe] p-4 min-h-[150px]"
              >
                <h4 className="text-lg text-[#111827] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {title}
                </h4>
                <p className="text-sm text-[#475569] leading-6">
                  {prefix}
                  <span className="text-[#F97316] font-semibold">{place}</span>
                  {suffix}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-[100px] bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }} className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
            <h3 className="text-3xl text-[#1E3A8A] mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Get A Quote</h3>
            <form className="grid md:grid-cols-2 gap-5">
              {["Name", "Email", "Phone", "Address", "Subject"].map((f) => (
                <input key={f} placeholder={f} className={`border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-[#1E3A8A] ${f === "Subject" ? "md:col-span-2" : ""}`} />
              ))}
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="md:col-span-2 bg-[#F97316] text-white py-3 rounded-lg font-semibold">
                Get A Quote
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-[100px] bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-3xl text-[#1E3A8A] mb-8 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
            FAQ
          </motion.h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item, idx) => (
              <div key={item.q} className="border border-slate-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)} className="w-full text-left px-5 py-4 flex items-center justify-between font-semibold">
                  {item.q}
                  <span>{openFaq === idx ? "−" : "+"}</span>
                </button>
                <motion.div initial={false} animate={{ height: openFaq === idx ? "auto" : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="overflow-hidden">
                  <p className="px-5 pb-5 text-[#6B7280] leading-7">{item.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-[100px] bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeInOut" }} className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-[#6B7280] leading-8 mb-6">"Excellent and precise work. The team delivered on time with great accuracy. Highly recommended for any surveying needs."</p>
            <h4 className="text-2xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>Raguraam Selvaraj</h4>
            <p className="text-[#6B7280]">Managing Director</p>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-[100px] bg-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-3xl md:text-4xl text-center text-[#1E3A8A] mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>
            Gallery
          </motion.h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {layoutMarkingPhotos.map((src, i) => (
              <motion.div key={src} variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }} className="h-64 rounded-xl border border-slate-200 overflow-hidden bg-[#F8FAFC]">
                <img src={src} alt={`Layout marking work ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#1E3A8A] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.08) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.08) 75%, transparent 75%, transparent)", backgroundSize: "44px 44px" }} />
        <div className="mx-auto max-w-[1200px] px-5 relative z-10 text-center">
          <h3 className="text-4xl md:text-5xl font-semibold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Need Help? Let's Get in Touch
          </h3>
          <a href="tel:+918148982300" className="text-[#F97316] text-4xl md:text-5xl font-bold hover:underline">
            +91 81489 82300
          </a>
        </div>
      </section>

      <footer className="bg-[#F8FAFC] py-16 border-t border-slate-200">
        <div className="mx-auto max-w-[1200px] px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold">R</div>
              <div>
                <p className="text-[#111827] font-semibold leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>RMD Digital</p>
                <p className="text-[#6B7280] text-sm">Surveyors</p>
              </div>
            </div>
            <p className="text-[#475569] text-sm leading-7 mb-4">
              RMD Digital Surveyors delivers precise land surveying solutions with trusted field expertise across Tamil Nadu.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/919123534173" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center">
                <FaWhatsapp />
              </a>
              <a href="#" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center">
                <FaYoutube />
              </a>
              <a href="#" className="w-9 h-9 bg-[#F97316] text-white rounded-sm flex items-center justify-center">
                <FaGoogle />
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Quick Links</h6>
            <ul className="space-y-2 text-[#334155] text-sm">
              <li><a href="#about" className="hover:text-[#F97316]">About Us</a></li>
              <li><a href="#services" className="hover:text-[#F97316]">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#F97316]">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-[#F97316]">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#F97316]">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Survey Links</h6>
            <ul className="space-y-2 text-[#334155] text-sm">
              <li><a href="#services" className="hover:text-[#F97316]">Boundary Survey</a></li>
              <li><a href="#services" className="hover:text-[#F97316]">Sub-division Survey</a></li>
              <li><a href="#services" className="hover:text-[#F97316]">Stakeout Survey</a></li>
              <li><a href="#services" className="hover:text-[#F97316]">Topographic Survey</a></li>
              <li><a href="#services" className="hover:text-[#F97316]">Contour Survey</a></li>
              <li><a href="#services" className="hover:text-[#F97316]">Interior Survey</a></li>
              <li><a href="#services" className="hover:text-[#F97316]">Layout Site Making</a></li>
              <li><a href="#services" className="hover:text-[#F97316]">Building Setting Out</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-[#111827] text-xl mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Contacts</h6>
            <div className="space-y-4 text-sm text-[#334155]">
              <p>
                <span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">A</span>
                #357, Ramachandra Layout, Ramnagar, Coimbatore - 641009
              </p>
              <p>
                <span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">P</span>
                <a href="tel:+918148982300" className="hover:text-[#F97316]">+91 81489 82300</a>
              </p>
              <p>
                <span className="inline-flex w-7 h-7 bg-[#F97316] text-white items-center justify-center mr-2 font-semibold">E</span>
                <a href="mailto:mugeshkannan02131@gmail.com" className="hover:text-[#F97316]">mugeshkannan02131@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[80] flex flex-col gap-3">
        <motion.a
          href="https://wa.me/919123534173"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center text-2xl"
          aria-label="Open WhatsApp"
        >
          <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            <FaWhatsapp />
          </motion.span>
        </motion.a>

        <motion.a
          href="tel:+918148982300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-[#1E3A8A] text-white shadow-lg flex items-center justify-center text-2xl"
          aria-label="Call now"
        >
          <FaPhoneAlt />
        </motion.a>

        <motion.a
          href="mailto:mugeshkannan02131@gmail.com"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-[60px] h-[60px] md:w-[55px] md:h-[55px] rounded-full bg-white text-[#111827] border border-slate-200 shadow-lg flex items-center justify-center text-2xl"
          aria-label="Send email"
        >
          <FaEnvelope />
        </motion.a>
      </div>

      {activeService && (
        <div className="fixed inset-0 z-[70] bg-black/50 p-4 md:p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl"
          >
            <div className="p-6 md:p-8 border-b border-slate-200 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[#6B7280] mb-2">Detailed Survey Methodology</p>
                <h3 className="text-2xl md:text-3xl text-[#1E3A8A]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {activeService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveService(null)}
                className="w-10 h-10 rounded-full border border-slate-300 text-[#111827] font-bold"
                aria-label="Close details"
              >
                ×
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[#6B7280] leading-7 mb-6">{activeService.short}</p>
              {activeService.title === "Layout Site Making" && (
                <div className="mb-6">
                  <h4 className="text-lg text-[#1E3A8A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Layout Marking Work Photos
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {layoutMarkingPhotos.map((src, idx) => (
                      <div key={src} className="h-36 rounded-lg overflow-hidden border border-slate-200">
                        <img src={src} alt={`Layout marking site ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <ol className="space-y-4">
                {activeService.details.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[#1E3A8A] text-white text-xs flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-[#111827] leading-7">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
