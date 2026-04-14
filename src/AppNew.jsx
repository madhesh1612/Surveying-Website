import { useState, useMemo, useEffect } from "react";
import { BrowserRouter, NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaYoutube, 
  FaChevronRight, 
  FaChevronDown, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCheckCircle, 
  FaQuoteLeft,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaTimes,
  FaUser,
  FaExpandArrowsAlt
} from "react-icons/fa";
import { BsAlignCenter } from "react-icons/bs";

// Data
const photos = [
  "/assets/images/layout marking/IMG_20241130_133619.jpg.jpeg",
  "/assets/images/layout marking/IMG_20250312_161441.jpg.jpeg",
  "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.42 AM (1).jpeg",
  "/assets/images/subdivision survey/IMG_20260320_095625.jpg.jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.27 AM.jpeg",
  "/assets/images/layout marking/IMG_20260224_104858.jpg.jpeg"
];

const galleryPhotos = [
  "/assets/images/layout marking/IMG_20220610_113614.jpg.jpeg",
  "/assets/images/layout marking/IMG_20241130_133619.jpg.jpeg",
  "/assets/images/layout marking/IMG_20250312_161441.jpg.jpeg",
  "/assets/images/layout marking/IMG_20260223_113049.jpg.jpeg",
  "/assets/images/layout marking/IMG_20260224_104858.jpg.jpeg",
  "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.40 AM.jpeg",
  "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.41 AM.jpeg",
  "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.42 AM (1).jpeg",
  "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.42 AM (2).jpeg",
  "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.42 AM.jpeg",
  "/assets/images/subdivision survey/IMG_20251202_162150.jpg.jpeg",
  "/assets/images/subdivision survey/IMG_20260320_095330.jpg.jpeg",
  "/assets/images/subdivision survey/IMG_20260320_095625.jpg.jpeg",
  "/assets/images/subdivision survey/IMG_20260320_152256.jpg.jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM (1).jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM (2).jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM (3).jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM.jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.27 AM (1).jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.27 AM (2).jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.27 AM.jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.28 AM (1).jpeg",
  "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.28 AM.jpeg"
];

const services = [
  {
    id: "boundary",
    icon: "📍",
    title: "Boundary Survey",
    short: "Accurate legal boundary verification using Total Station and GPS.",
    details: "We verify legal records, locate corner stones on site, and measure every boundary line using Total Station/GPS to create an accurate boundary sketch for legal and development purposes.",
  },
  {
    id: "subdivision",
    icon: "🧩",
    title: "Sub-division Survey",
    short: "Land split planning with plot and road marking for development.",
    details: "We inspect parent land and divide it into planned plots with road and dimension compliance for registration and housing development projects.",
    images: [
      "/assets/images/subdivision survey/IMG_20251202_162150.jpg.jpeg",
      "/assets/images/subdivision survey/IMG_20260320_095330.jpg.jpeg",
      "/assets/images/subdivision survey/IMG_20260320_095625.jpg.jpeg",
      "/assets/images/subdivision survey/IMG_20260320_152256.jpg.jpeg"
    ]
  },
  {
    id: "stakeout",
    icon: "📐",
    title: "Stakeout Survey",
    short: "Design point transfer to site before construction starts.",
    details: "Using approved drawings, we transfer design points to the ground by pegging centerlines, offsets, and control points before construction begins.",
  },
  {
    id: "topography",
    icon: "🗺️",
    title: "Topographic Survey",
    short: "Feature and level mapping for planning and design.",
    details: "We capture natural and built features like levels, roads, drains, and trees, then prepare a detailed topographic map for engineering design.",
  },
  {
    id: "contour",
    icon: "📊",
    title: "Contour Survey",
    short: "Contour generation for slope, grading, and drainage analysis.",
    details: "We collect spot levels in a grid pattern and generate contour intervals to support grading, slope analysis, and drainage planning.",
    images: [
      "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.40 AM.jpeg",
      "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.41 AM.jpeg",
      "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.42 AM (1).jpeg",
      "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.42 AM (2).jpeg",
      "/assets/images/countour survey/WhatsApp Image 2026-03-31 at 10.31.42 AM.jpeg"
    ]
  },
  {
    id: "interior",
    icon: "🏢",
    title: "Interior Survey",
    short: "As-built measurements for renovation and fit-out.",
    details: "We measure walls, columns, openings, and internal utilities to produce precise floor layout data for architecture and renovation teams.",
  },
  {
    id: "layout-site",
    icon: "📐",
    title: "Layout Site Making",
    short: "Converting plot maps into precise ground demarcations.",
    details: "Layout site making involves taking a master plan and physically marking out roads, drainage paths, and individual plot boundaries on the site.",
    images: [
      "/assets/images/layout marking/IMG_20220610_113614.jpg.jpeg",
      "/assets/images/layout marking/IMG_20241130_133619.jpg.jpeg",
      "/assets/images/layout marking/IMG_20250312_161441.jpg.jpeg",
      "/assets/images/layout marking/IMG_20260223_113049.jpg.jpeg",
      "/assets/images/layout marking/IMG_20260224_104858.jpg.jpeg"
    ]
  },
  {
    id: "building-staking",
    icon: "🏗️",
    title: "Building Setting Out",
    short: "Defining exact column and center lines for construction.",
    details: "Building setting out is the process of defining the exact positions and levels of the building's columns and foundations on the site.",
    images: [
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM (1).jpeg",
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM (2).jpeg",
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM (3).jpeg",
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM.jpeg",
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.27 AM (1).jpeg",
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.27 AM (2).jpeg",
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.27 AM.jpeg",
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.28 AM (1).jpeg",
      "/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.28 AM.jpeg"
    ]
  },
  {
    id: "template-marking",
    icon: "🖊️",
    title: "Template Marking",
    short: "Advanced demarcation for complex structural templates.",
    details: "Template marking involves the precise physical demarcation of complex patterns or structural templates for advanced engineering projects.",
  },
];

const projects = [
  { 
    title: "Boundary Survey", 
    place: "Thiruppullani", 
    status: "Completed",
    description: "Accurate boundary verification using Total Station technology for legal documentation and property registration.",
    client: "Private Property Owner",
    duration: "3 days",
    area: "2.5 acres"
  },
  { 
    title: "Sub-division Survey", 
    place: "Palla Pacheri", 
    status: "Completed",
    description: "Complete land subdivision planning with plot demarcation and road layout for residential development project.",
    client: "Real Estate Developer",
    duration: "5 days",
    area: "8 acres"
  },
  { 
    title: "Stakeout Survey", 
    place: "Idampadal", 
    status: "Completed",
    description: "Construction stakeout for industrial building foundation with precise coordinate marking.",
    client: "Construction Company",
    duration: "2 days",
    area: "1.8 acres"
  },
  { 
    title: "Topographic Survey", 
    place: "Ramanathapuram", 
    status: "Completed",
    description: "Comprehensive topographic mapping including natural features, utilities, and elevation data for site planning.",
    client: "Municipal Corporation",
    duration: "4 days",
    area: "12 acres"
  },
  { 
    title: "Contour Survey", 
    place: "Uchipuli", 
    status: "Completed",
    description: "Detailed contour mapping with 1m interval for drainage planning and earthwork calculation.",
    client: "Agricultural Developer",
    duration: "3 days",
    area: "6 acres"
  },
  { 
    title: "Sports Flooring", 
    place: "Erwadi", 
    status: "Completed",
    description: "Professional sports field layout marking and leveling for multi-purpose sports complex.",
    client: "Educational Institution",
    duration: "2 days",
    area: "3 acres"
  },
];

const stats = [
  { label: "Successful Projects", value: "250+", icon: <FaCheckCircle /> },
  { label: "Happy Clients", value: "100+", icon: <FaRocket /> },
  { label: "Years Experience", value: "5+", icon: <FaClock /> },
];

// State for contact form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    details: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form details
    const message = encodeURIComponent(
      `Hello RMD Digital Surveyors!\n\n` +
      `*New Inquiry Details:*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${formData.service}\n` +
      `*Project Details:* ${formData.details}\n\n` +
      `I would like to discuss my surveying requirements. Please contact me soon.`
    );
    
    // WhatsApp number (using the existing WhatsApp number)
    const whatsappNumber = '919123534173';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
          <input 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-black border border-gray-700 text-white rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-[#1E73D8] outline-none transition-all placeholder-gray-400" 
            placeholder="John Doe" 
            required 
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
          <input 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-black border border-gray-700 text-white rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-[#1E73D8] outline-none transition-all placeholder-gray-400" 
            placeholder="+91 00000 00000" 
            required 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Survey Service</label>
        <select 
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full bg-black border border-gray-700 text-white rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-[#1E73D8] outline-none transition-all appearance-none" 
          required
        >
          <option value="">Select Service Type</option>
          {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Project Details</label>
        <textarea 
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          rows="4" 
          className="w-full bg-black border border-gray-700 text-white rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 focus:ring-2 focus:ring-[#1E73D8] outline-none transition-all placeholder-gray-400" 
          placeholder="Tell us about the site location and extent..." 
          required
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-[#1E73D8] to-blue-600 text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        Submit Inquiry
      </button>
    </form>
  );
};

// Components
const SectionHeading = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-12">
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-sm font-bold uppercase tracking-widest mb-2 ${light ? 'text-blue-200' : 'text-[#1E73D8]'}`}
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-4xl font-extrabold ${light ? 'text-white' : 'text-slate-900'} font-poppins`}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className="h-1 bg-[#F97316] mx-auto mt-4 rounded-full"
    />
  </div>
);

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-slate-900 text-white border-b border-white/5">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-2">
          {/* Desktop header info */}
          <div className="hidden sm:flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-6 text-[11px] md:text-[12px] text-slate-400">
              <a href="tel:+918148982300" className="flex items-center gap-2 font-medium hover:text-white transition-colors"><FaPhoneAlt className="text-[#F97316]" /> <span className="hidden md:inline">+91 81489 82300</span><span className="md:hidden">+91 81489 82300</span></a>
              <a href="mailto:mugeshkannan02131@gmail.com" className="hidden md:flex items-center gap-2 font-medium hover:text-white transition-colors"><FaEnvelope className="text-[#F97316]" /> mugeshkannan02131@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 md:gap-4 text-xs">
              <a href="https://www.instagram.com/rmd_digital_surveyors?utm_source=qr&igsh=bDg5dHR0aDVkaGtw" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97316] transition-colors p-1.5"><FaInstagram /></a>
              <a href="#" className="hover:text-[#F97316] transition-colors p-1.5"><FaYoutube /></a>
            </div>
          </div>
          {/* Mobile header info - simplified */}
          <div className="sm:hidden flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <a href="tel:+918148982300" className="flex items-center gap-1 font-medium hover:text-white transition-colors"><FaPhoneAlt className="text-[#F97316] text-xs" /> Call Us</a>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <a href="https://www.instagram.com/rmd_digital_surveyors?utm_source=qr&igsh=bDg5dHR0aDVkaGtw" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97316] transition-colors p-1"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </header>
      
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-4 sm:py-5">
          {/* Mobile Layout */}
          <div className="lg:hidden mobile-navbar">
            {/* Logo */}
            <NavLink to="/" className="mobile-logo">
              <img src="/assets/images/logo.png.jpeg" alt="RMD Digital Surveyors Logo" className="w-10 h-10 object-contain" />
              <div className="mobile-logo-text">
                <div className="main">RMD</div>
                <div className="digital">Digital</div>
                <div className="surveyors">Surveyors</div>
              </div>
            </NavLink>
            
            {/* Hamburger Menu Button */}
            <button 
              className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-3 group">
              <img src="/assets/images/logo.png.jpeg" alt="RMD Digital Surveyors Logo" className="w-14 h-14 object-contain group-hover:scale-105 transition-transform" />
              <div>
                <p className="font-extrabold text-lg text-slate-900 leading-tight tracking-tight font-poppins">RMD DIGITAL</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Surveyors & Engineers</p>
              </div>
            </NavLink>
            
            <div className="flex-1 flex justify-center px-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <ul className="flex items-center gap-1">
                  {[
                    ["Home", "/"],
                    ["About Us", "/about"],
                    ["Services", "/services"],
                    ["Projects", "/projects"],
                    ["Gallery", "/gallery"],
                    ["Contact Us", "/contact"],
                  ].map(([label, to]) => (
                    <li key={label}>
                      <NavLink to={to} className={({ isActive }) => `px-4 py-2.5 rounded-xl text-[12px] font-bold transition-all ${isActive ? "text-[#1E73D8] bg-blue-50" : "text-slate-600 hover:text-[#1E73D8] hover:bg-slate-50"}`}>
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <NavLink to="/contact" className="bg-gradient-to-r from-[#1E73D8] to-blue-600 text-white ml-3 px-6 py-3 rounded-xl font-bold text-[12px] shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                  Get Free Quote
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay and Panel */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'active' : ''}`}>
        {/* Mobile Menu Header */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <img src="/assets/images/logo.png.jpeg" alt="RMD Digital Surveyors Logo" />
            <div className="mobile-menu-logo-text">RMD DIGITAL</div>
          </div>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
        </div>
        
        {/* Mobile Menu Navigation */}
        <nav className="mobile-menu-nav">
          <ul>
            <li>
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu CTA */}
        <div className="mobile-menu-cta">
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Get Free Quote
          </NavLink>
        </div>
      </div>
    </>
  );
}

// GPS Pulse Dot component
const GpsDot = ({ x, y, delay = 0, size = "sm" }) => (
  <div className="absolute pointer-events-none" style={{ left: x, top: y }}>
    <motion.div
      animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
      transition={{ duration: 2.5, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`rounded-full bg-blue-400 ${size === "lg" ? "w-3 h-3" : "w-2 h-2"}`}
    />
    <motion.div
      animate={{ scale: [1, 3.5, 1], opacity: [0.4, 0, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: delay + 0.3, ease: "easeInOut" }}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/60 ${size === "lg" ? "w-6 h-6" : "w-4 h-4"}`}
    />
  </div>
);

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#020817] overflow-hidden">
      {/* ── BACKGROUND LAYERS ── */}
      {/* Deep navy → blue gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#0a1628] to-[#0d1f3c]" />

      {/* Radial blue glow — left */}
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] bg-blue-700/20 blur-[160px] rounded-full" />
      {/* Radial orange glow — bottom right */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-[180px] rounded-full" />
      {/* Accent blue glow — top right */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-500/15 blur-[140px] rounded-full" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,115,216,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,115,216,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Diagonal scan line — very subtle */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1E73D8 0, #1E73D8 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }}
      />

      {/* ── GPS PULSE DOTS ── */}
      <GpsDot x="8%" y="20%" delay={0} size="lg" />
      <GpsDot x="22%" y="68%" delay={0.7} />
      <GpsDot x="48%" y="15%" delay={1.2} />
      <GpsDot x="65%" y="72%" delay={0.4} size="lg" />
      <GpsDot x="80%" y="30%" delay={1.8} />
      <GpsDot x="92%" y="60%" delay={0.9} />

      {/* ── RIGHT — FLOATING LOGO WATERMARK ── */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[620px] md:h-[620px] pointer-events-none select-none hidden lg:block"
      >
        {/* Outer glow halo */}
        <div className="absolute inset-0 rounded-full bg-blue-600/8 blur-[80px]" />
        <img
          src="/assets/images/logo.png.jpeg"
          alt=""
          className="w-full h-full object-contain opacity-[0.07]"
          style={{ filter: 'blur(1px) brightness(1.4)' }}
        />
      </motion.div>

      {/* Mobile logo watermark (centered, low opacity) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none select-none lg:hidden"
      >
        <img src="/assets/images/logo.png.jpeg" alt="" className="w-full h-full object-contain opacity-[0.05]" />
      </motion.div>

      {/* ── MAIN CONTENT ── */}
      <div className="mx-auto max-w-[1280px] px-6 sm:px-6 relative z-10 py-24 sm:py-28 md:py-32 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Top precision tag */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/25 text-blue-300 px-6 py-3 rounded-full text-sm font-black uppercase tracking-[0.15em] mb-8 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
                </span>
                <span className="hidden sm:inline">Precision You Can Trust</span>
                <span className="sm:hidden">Precision You Can Trust</span>
              </span>
            </motion.div>

            {/* Main heading — stagger line by line */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                variants={itemVariants}
                className="font-poppins font-black leading-[1.0] tracking-tight"
                style={{ willChange: 'transform' }}
              >
                {/* Line 1 */}
                <motion.span
                  variants={itemVariants}
                  className="block text-[clamp(48px,12vw,120px)] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-300"
                  style={{ textShadow: '0 0 80px rgba(30,115,216,0.3)' }}
                >
                  RMD
                </motion.span>
                {/* Line 2 */}
                <motion.span
                  variants={itemVariants}
                  className="block text-[clamp(48px,12vw,120px)] text-transparent bg-clip-text bg-gradient-to-r from-[#1E73D8] via-blue-400 to-cyan-300"
                  style={{ textShadow: '0 0 80px rgba(30,115,216,0.5)', filter: 'drop-shadow(0 0 30px rgba(30,115,216,0.4))' }}
                >
                  DIGITAL
                </motion.span>
                {/* Line 3 */}
                <motion.span
                  variants={itemVariants}
                  className="block text-[clamp(24px,6vw,48px)] text-slate-400 font-bold tracking-[0.3em] uppercase mt-2"
                >
                  SURVEYORS
                </motion.span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mb-6 tracking-wide"
            >
              <span className="block">Professional Engineers</span>
              <span className="block">&amp; Land Surveyors</span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-10"
            >
              We combine advanced Total Station &amp; GPS technology with expert field experience to deliver accurate surveying solutions across Tamil Nadu.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Primary — orange glow */}
              <NavLink
                to="/contact"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-white text-lg overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                  boxShadow: '0 8px 32px rgba(249,115,22,0.35), 0 0 0 1px rgba(249,115,22,0.2)'
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 48px rgba(249,115,22,0.55), 0 0 0 1px rgba(249,115,22,0.4)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(249,115,22,0.35), 0 0 0 1px rgba(249,115,22,0.2)'}
              >
                <span className="relative z-10">Start Your Survey</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaChevronRight className="text-sm" />
                </motion.span>
                {/* Inner shine */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </NavLink>

              {/* Secondary — outline */}
              <NavLink
                to="/services"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-blue-400/50 hover:scale-[1.04] active:scale-[0.97]"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                Explore Services
                <FaChevronRight className="text-sm opacity-60 group-hover:opacity-100 transition-opacity" />
              </NavLink>
            </motion.div>

                      </motion.div>

          {/* ── RIGHT COLUMN (desktop only decorative panel) ── */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Glassmorphism card floating behind logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="relative w-[420px] h-[420px]"
            >
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-blue-500/10"
                style={{ borderDasharray: '4 8' }}
              />
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-orange-400/8"
              />

              {/* Centre glass disc */}
              <div className="absolute inset-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 40% 40%, rgba(30,115,216,0.12) 0%, rgba(2,8,23,0.8) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(30,115,216,0.15)',
                  boxShadow: '0 0 80px rgba(30,115,216,0.12), inset 0 0 40px rgba(30,115,216,0.05)'
                }}
              >
                <motion.img
                  src="/assets/images/logo.png.jpeg"
                  alt="RMD Digital Logo"
                  className="w-36 h-36 object-contain"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: 'drop-shadow(0 0 24px rgba(30,115,216,0.6)) brightness(1.1)' }}
                />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-0 bg-slate-900/90 backdrop-blur-md border border-blue-500/20 rounded-2xl px-4 py-3 shadow-2xl"
              >
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Accuracy</p>
                <p className="text-lg font-black text-blue-400 font-poppins">±1 cm</p>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 -left-4 bg-slate-900/90 backdrop-blur-md border border-purple-500/20 rounded-2xl px-4 py-3 shadow-2xl"
              >
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Projects</p>
                <p className="text-lg font-black text-[#8B5CF6] font-poppins">250+</p>
              </motion.div>

              {/* GPS pulse on ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400"
                  style={{ boxShadow: '0 0 12px rgba(96,165,250,0.8)' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-blue-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="py-20 bg-white">
    <div className="mx-auto max-w-[1280px] px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 font-poppins flex items-center gap-3">
              <span className="text-[#1E73D8] opacity-50 text-2xl tracking-tighter group-hover:scale-125 transition-transform inline-block">{stat.icon}</span>
              {stat.value}
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-20 bg-slate-50">
    <div className="mx-auto max-w-[1280px] px-6">
      <SectionHeading title="Why Choose RMD Surveyors" subtitle="The Professional Edge" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <FaRocket />, title: "Precision Technology", desc: "We use the latest Total Station and RTK-GPS equipment for sub-centimeter accuracy." },
          { icon: <FaShieldAlt />, title: "Verified Results", desc: "Every survey undergoes triple-point verification to ensure legal and technical compliance." },
          { icon: <FaClock />, title: "Fast Delivery", desc: "We understand site timelines. Get your digital reports within 24-48 hours of site visit." },
        ].map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm shadow-slate-200/50"
          >
            <div className="w-16 h-16 bg-blue-50 text-[#1E73D8] rounded-2xl flex items-center justify-center text-3xl mb-6">{f.icon}</div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 font-poppins">{f.title}</h4>
            <p className="text-slate-600 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesHome = () => {
    const [selected, setSelected] = useState(null);
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-[1280px] px-6">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <SectionHeading title="Comprehensive Surveying Solutions" subtitle="What We Offer" />
                    </div>
                    <NavLink to="/services" className="text-[#1E73D8] font-bold flex items-center gap-2 hover:gap-4 transition-all mb-12">
                        View All Services <FaChevronRight className="text-xs" />
                    </NavLink>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
                    {services.map((s, i) => (
                        <motion.div 
                            key={s.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            onClick={() => setSelected(s)}
                            className="group cursor-pointer bg-white hover:bg-gradient-to-br hover:from-[#8B5CF6] hover:to-[#10B981] rounded-[32px] sm:rounded-[40px] p-8 sm:p-8 border border-slate-200 hover:border-green-200 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/10 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700 delay-100" />
                            
                            {/* Icon with enhanced styling */}
                            <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-white to-purple-50 text-4xl rounded-3xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6 border border-purple-100 group-hover:border-white">
                                {s.icon}
                            </div>
                            
                            {/* Enhanced title */}
                            <h3 className="relative z-10 text-xl sm:text-xl font-black text-slate-900 group-hover:text-white mb-4 font-poppins transition-colors duration-300">
                                {s.title}
                            </h3>
                            
                            {/* Enhanced description */}
                            <p className="relative z-10 text-slate-600 group-hover:text-purple-50 text-sm sm:text-sm leading-relaxed mb-6 transition-colors duration-300">
                                {s.short}
                            </p>
                            
                            {/* Enhanced CTA button */}
                            <div className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-purple-50 group-hover:bg-white/20 backdrop-blur-sm rounded-full font-bold text-sm uppercase tracking-wider text-[#8B5CF6] group-hover:text-white border-2 border-purple-100 group-hover:border-white transition-all duration-300">
                                <span className="group-hover:translate-x-1 transition-transform duration-300">Read More</span>
                                <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                            
                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] sm:rounded-[40px]" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" 
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                        >
                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                                <button 
                                    onClick={() => setSelected(null)} 
                                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-full transition-all duration-300"
                                >
                                    <FaChevronRight className="rotate-180 text-sm sm:text-base" />
                                </button>
                            </div>
                            <div className="p-8 sm:p-12">
                                <div className="text-6xl mb-6">{selected.icon}</div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4 font-poppins">{selected.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">{selected.details || selected.short}</p>
                                
                                {selected.images && (
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {selected.images.map((img, i) => (
                                            <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                                                <img src={img} className="w-full h-full object-cover" alt={`${selected.title} ${i}`} />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                                    <h4 className="font-bold text-[#1E73D8] mb-2 uppercase tracking-widest text-xs">Standard Deliverables</h4>
                                    <ul className="grid sm:grid-cols-2 gap-3">
                                        {['Digital DWG Plan', 'Site Level Report', 'Coordinate Table', 'Corner Marking'].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                                <FaCheckCircle className="text-blue-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <NavLink to="/contact" className="w-full bg-[#1E73D8] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
                                    Request a Quote for {selected.title}
                                </NavLink>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

const CTASection = () => (
  <section className="py-24 bg-[#1E73D8] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/20 skew-x-[-12deg] translate-x-20" />
    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600/20 skew-x-[-12deg] translate-x-[-20px]" />
    
    <div className="mx-auto max-w-[1280px] px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-poppins">Ready to Start Your Next Project?</h2>
        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
          Get in touch with our expert surveyors today for a free consultation and personalized quote.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="tel:+918148982300" className="bg-white text-[#1E73D8] px-10 py-5 rounded-2xl font-black flex items-center gap-4 hover:bg-slate-50 transition-all hover:scale-105 shadow-xl">
             <div className="bg-blue-100 p-2 rounded-lg"><FaPhoneAlt /></div>
             +91 81489 82300
          </a>
          <a href="https://wa.me/919123534173" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black flex items-center gap-4 hover:bg-[#22c55e] transition-all hover:scale-105 shadow-xl">
             <div className="bg-white/20 p-2 rounded-lg"><FaWhatsapp /></div>
             WhatsApp Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-50">
    <div className="mx-auto max-w-[1280px] px-6">
      <SectionHeading title="Trusted by Developers & Industry Leaders" subtitle="Client Feedback" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
        {[
          { name: "Darvin", role: "Property Developer", text: "The team at RMD Digital Surveyors is exceptionally professional. Their GPS-based boundary survey was spot on, helping us clear all legal doubts regarding our property. Highly satisfied with their service." },
          { name: "Shanmugarajan", role: "Civil Engineer", text: "I've worked with many surveyors, but the precision RMD brings with their Total Station equipment is unmatched. Their digital reports are detailed and easy to understand for our construction team." },
          { name: "Muralidharan", role: "Site Supervisor", text: "Prompt response and quick delivery of reports. They mapped our entire layout with incredible detail. Their expertise in contour mapping was crucial for our site planning." },
          { name: "Raguraam Selvaraj", role: "Managing Director", text: "Excellent and precise work. The team delivered on time with great accuracy. Highly recommended for any surveying needs." },
          { name: "Inba Kumar", role: "Site Engineer", text: "The digital reports provided by RMD were extremely helpful for our foundation planning. Their accuracy is commendable." }
        ].map((t, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-slate-200 shadow-sm relative"
          >
            <FaQuoteLeft className="text-4xl sm:text-4xl text-blue-100 absolute top-8 sm:top-10 right-8 sm:right-10" />
            <p className="text-slate-600 text-lg sm:text-lg italic leading-relaxed mb-8 sm:mb-8">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-14 sm:h-14 bg-slate-100 rounded-full" />
              <div>
                <h5 className="font-bold text-slate-900 font-poppins text-base sm:text-base">{t.name}</h5>
                <p className="text-sm sm:text-sm text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Pages
const HomePage = () => (
  <main>
    <Hero />
    <Stats />
    <Features />
    <ServicesHome />
    <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1280px] px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[48px] backdrop-blur-xl">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-[40px] overflow-hidden border-4 border-white/20 shadow-2xl shrink-0 rotate-3">
                    <img src="/assets/images/founder.png.jpeg" alt="M. Mukeshkannan B.E Civil" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                    <span className="inline-block bg-[#F97316] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-4">Founder's Message</span>
                    <h2 className="text-3xl md:text-4xl font-black mb-2 font-poppins">M. Mukeshkannan B.E Civil</h2>
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6">Founder & Managing Director</p>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed italic mb-8">
                        "Precision is not just a measurement; it is the foundation of trust. We are dedicated to providing the most accurate digital surveying solutions to power the infrastructure of tomorrow."
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <NavLink to="/contact" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-[#F97316] hover:text-white transition-all">Connect with Me</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Testimonials />
    <CTASection />
  </main>
);

const AboutPage = () => (
  <main className="py-20">
    <div className="mx-auto max-w-[1280px] px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-slate-200 rounded-[60px] overflow-hidden flex items-center justify-center">
             <img src="/assets/images/column & footing marking/WhatsApp Image 2026-03-31 at 10.39.26 AM.jpeg" className="w-[95%] h-[95%] object-cover rounded-[56px]" alt="About" />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-[#F97316] p-8 rounded-[40px] text-white shadow-2xl hidden md:block">
            <p className="text-5xl font-black mb-1 font-poppins">12+</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Years of Excellence</p>
          </div>
        </motion.div>
        <div>
          <SectionHeading title="Precision Engineering & Land Surveying Expertise" subtitle="About Us" />
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            RMD Digital Surveyors is one of the most trusted land surveying companies in Ramanathapuram. We deliver precise surveying solutions using modern Total Station and GPS technologies across residential, industrial, and infrastructure sectors.
          </p>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50/50 p-6 rounded-[32px] border border-blue-100 mb-8">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg shrink-0">
                    <img src="/assets/images/founder.png.jpeg" alt="M. Mukeshkannan B.E Civil" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-xl font-black text-slate-900 font-poppins mb-1">M. Mukeshkannan B.E Civil</h4>
                    <p className="text-[#1E73D8] font-bold uppercase tracking-widest text-[10px] mb-3">Founder & Lead Surveyor</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Leading the team with technical expertise and a vision for digital precision in land surveying.
                    </p>
                </div>
            </div>

            {[
              { title: "Our Mission", text: "To provide the most accurate and reliable surveying data that empowers developers and landowners to build with confidence." },
              { title: "Our Vision", text: "To be the leading digital surveying firm in India recognized for technological innovation and field excellence." }
            ].map(item => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-black text-[#1E73D8] mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
                <p className="text-slate-700 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </main>
);

const ServicesPage = () => (
  <main className="py-20">
    <ServicesHome />
    <div className="mx-auto max-w-[1280px] px-6 text-center">
        <p className="text-slate-500 mb-8">Working with advanced equipment across Tamil Nadu</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
            {['Total Station', 'RTK-GPS', 'GIS Mapping', 'AutoCAD'].map(tech => (
                <span key={tech} className="text-2xl font-black">{tech}</span>
            ))}
        </div>
    </div>
  </main>
);

const ProjectsPage = () => (
  <main className="py-20 bg-slate-50">
    <div className="mx-auto max-w-[1280px] px-6">
      <SectionHeading title="Recent Successful Deliveries" subtitle="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 group"
          >
            <div className="h-48 sm:h-48 bg-slate-100 rounded-xl sm:rounded-2xl mb-6 sm:mb-6 overflow-hidden">
                <img src={photos[i % photos.length]} className="w-full h-full object-cover" style={{ transform: 'scale(0.8)', maxWidth: '100%', maxHeight: '100%' }} alt={p.title} />
            </div>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg sm:text-lg font-bold text-slate-900 font-poppins">{p.title}</h3>
                <span className={`text-[10px] sm:text-[10px] font-black uppercase tracking-widest px-3 sm:px-3 py-1 rounded-full ${p.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>{p.status}</span>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{p.description}</p>
            
            <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FaMapMarkerAlt className="text-blue-500 text-sm" />
                    <span>{p.place}, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FaUser className="text-blue-500 text-sm" />
                    <span>{p.client}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FaClock className="text-blue-500 text-sm" />
                    <span>{p.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FaExpandArrowsAlt className="text-blue-500 text-sm" />
                    <span>{p.area}</span>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

const GalleryPage = () => (
    <main className="py-20 bg-white">
        <div className="mx-auto max-w-[1280px] px-6">
            <SectionHeading title="Precision in Action" subtitle="Field Gallery" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
                {galleryPhotos.map((p, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="aspect-[4/3] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border-4 sm:border-6 md:border-8 border-slate-50 shadow-sm"
                    >
                        <img src={p} className="w-full h-full object-cover" style={{ transform: 'scale(1.1)', maxWidth: '100%', maxHeight: '100%' }} alt={`Gallery ${i}`} />
                    </motion.div>
                ))}
            </div>
        </div>
    </main>
);

const ContactPage = () => (
  <main className="py-20 bg-slate-950 text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
      style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
    />
    <div className="mx-auto max-w-[1280px] px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <SectionHeading title="Let's Talk About Your Site" subtitle="Contact Us" light={true} />
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
            Whether you need a quick boundary check or a full-scale layout marking, our team is ready to assist you.
          </p>
          <div className="space-y-8">
            {[ 
              { icon: <FaPhoneAlt />, label: "Call Us Anytime", value: "+91 81489 82300", href: "tel:+918148982300" },
              { icon: <FaEnvelope />, label: "Email Support", value: "mugeshkannan02131@gmail.com", href: "mailto:mugeshkannan02131@gmail.com" },
              { icon: <FaMapMarkerAlt />, label: "Office Address", value: "2/4, EAST STREET, PALLAPACHERI, THIRUPPULLANI, RAMANATHAPURAM (DIST).623532", href: "https://maps.app.goo.gl/qr5G1iZ1uLPAktgs9?g_st=aw" }
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.label === "Office Address" ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-400 text-lg sm:text-xl group-hover:bg-[#F97316] group-hover:text-white transition-all">{item.icon}</div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">{item.label} {item.label === "Office Address" && "(View on Map)"}</p>
                  <p className="text-lg sm:text-xl font-bold font-poppins leading-tight">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden border-4 border-white/5 h-48 sm:h-64 grayscale hover:grayscale-0 transition-all shadow-2xl">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745.87702580193!2d78.91038597148437!3d9.36394334031666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01859877b102b5%3A0x7d287042a2761619!2sThiruppullani%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712675400000!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             />
          </div>
        </div>
        
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-[48px] shadow-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  </main>
);
function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/5 py-12 sm:py-16 lg:py-20 text-white">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-white p-1 rounded-lg">
                    <img src="/assets/images/logo.png.jpeg" alt="RMD Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                </div>
                <div>
                  <p className="font-extrabold text-lg text-white leading-tight font-poppins">RMD DIGITAL</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Surveyors</p>
                </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Empowering construction and land development with precise digital surveying solutions across Coimbatore & Tamil Nadu.
            </p>
            <div className="flex gap-3 sm:gap-4">
               {[<FaFacebookF />, <FaInstagram />, <FaYoutube />].map((icon, i) => {
                 const href = i === 1 ? "https://www.instagram.com/rmd_digital_surveyors?utm_source=qr&igsh=bDg5dHR0aDVkaGtw" : "#";
                 return (
                 <a key={i} href={href} target={i === 1 ? "_blank" : ""} rel={i === 1 ? "noopener noreferrer" : ""} className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#1E73D8] transition-all">{icon}</a>
                 );
               })}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 sm:mb-6 font-poppins uppercase tracking-widest text-xs text-blue-400">Services</h5>
            <ul className="space-y-3 sm:space-y-4 text-slate-400 text-sm">
                {services.map(s => <li key={s.id}><NavLink to="/services" className="hover:text-white transition-colors">{s.title}</NavLink></li>)}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 sm:mb-6 font-poppins uppercase tracking-widest text-xs text-blue-400">Quick Links</h5>
            <ul className="space-y-3 sm:space-y-4 text-slate-400 text-sm">
                <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
                <li><NavLink to="/projects" className="hover:text-white transition-colors">Recent Projects</NavLink></li>
                <li><NavLink to="/gallery" className="hover:text-white transition-colors">Site Gallery</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-white transition-colors">Get a Quote</NavLink></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 sm:mb-6 font-poppins uppercase tracking-widest text-xs text-blue-400">Contact</h5>
            <div className="space-y-3 sm:space-y-4 text-slate-400 text-sm">
                <p className="flex items-start gap-3"><FaMapMarkerAlt className="text-[#F97316] mt-1 shrink-0" /> <span className="text-xs sm:text-sm leading-relaxed">2/4, EAST STREET, PALLAPACHERI, THIRUPPULLANI, RAMANATHAPURAM (DIST).623532</span></p>
                <p className="flex items-center gap-3"><FaPhoneAlt className="text-[#F97316] shrink-0" /> +91 81489 82300</p>
                <a href="mailto:mugeshkannan02131@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors"><FaEnvelope className="text-[#F97316] shrink-0" /> mugeshkannan02131@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
            <p>© 2024 RMD Digital Surveyors. All rights reserved. 
              Developed by SCODE 360</p>
            <div className="flex gap-4 sm:gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}

function Floating() {
    return (
        <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-[200] flex flex-col gap-3 sm:gap-4">
            <motion.a 
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/919123534173" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[#25D366] text-white flex items-center justify-center text-xl sm:text-2xl lg:text-3xl shadow-xl shadow-green-500/40 border-4 border-white"
            >
                <FaWhatsapp />
            </motion.a>
            <motion.a 
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/rmd_digital_surveyors?utm_source=qr&igsh=bDg5dHR0aDVkaGtw" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#C13584] text-white flex items-center justify-center text-xl sm:text-2xl lg:text-3xl shadow-xl shadow-pink-500/40 border-4 border-white"
            >
                <FaInstagram />
            </motion.a>
            <motion.a 
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                href="tel:+918148982300" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[#1E73D8] text-white flex items-center justify-center text-xl sm:text-2xl lg:text-3xl shadow-xl shadow-blue-500/40 border-4 border-white"
            >
                <FaPhoneAlt />
            </motion.a>
        </div>
    );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AppNew() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <div className="flex-1">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
        <Footer />
        <Floating />
      </div>
    </BrowserRouter>
  );
}
