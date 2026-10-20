import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import {
  Mail, ExternalLink, GraduationCap, ArrowUpRight, Github, Linkedin,
  ArrowUp, Copy, Check, Menu, X, Sparkles, Award, Trophy, Star,
  BookOpen, Briefcase, Heart, Calendar, Building2, User, Code2, Rocket, ChevronRight,
  ChevronLeft, Maximize2, Eye, Camera
} from 'lucide-react'

// ─── react-icons (Simple Icons + Tabler) ───────────────────────────────────────
import {
  SiPython, SiCplusplus, SiMysql, SiJavascript, SiFastapi, SiFlask, SiPostgresql,
  SiGit, SiGithub, SiDocker, SiOverleaf,
  SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiNumpy, SiPandas,
  SiOpencv, SiOpenai, SiJupyter, SiGooglecolab,
} from 'react-icons/si'
import {
  TbApi, TbBrandVscode, TbBrain, TbChartDots, TbEye,
  TbMessageChatbot, TbLanguage, TbSearch,
} from 'react-icons/tb'

const SKILL_ICONS = {
  SiPython, SiCplusplus, SiMysql, SiJavascript, SiFastapi, SiFlask, SiPostgresql,
  SiGit, SiGithub, SiDocker, SiOverleaf,
  SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiNumpy, SiPandas,
  SiOpencv, SiOpenai, SiJupyter, SiGooglecolab,
  TbApi, TbBrandVscode, TbBrain, TbChartDots, TbEye,
  TbMessageChatbot, TbLanguage, TbSearch,
}

function SkillIcon({ iconKey }) {
  const Icon = SKILL_ICONS[iconKey]
  if (!Icon) return null
  return <Icon size={15} className="shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden />
}

// ─── Data Imports ─────────────────────────────────────────────────────────────
import profile from './data/profile.json'
import aboutData from './data/about.json'
import skills from './data/skills.json'
import projects from './data/projects.json'
import research from './data/research.json'
import experience from './data/experience.json'
import achievements from './data/achievements.json'
import achievementPhotos from './data/achievementPhotos.json'

const navLinks = ['About', 'Skills', 'Projects', 'Research', 'Experience', 'Achievements', 'Contact']

// ─── Palette Definition ───────────────────────────────────────────────────────
export const PALETTE = {
  blush: '#FFDBDF',
  rose: '#F791A9',
  butter: '#FFE797',
  lime: '#DDDD7B',
  mist: '#E0F2F4',
  sky: '#BAD6DA',
  ink: '#19282C',
  paper: '#FAF5F5',
}

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.94 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

// ─── Reusable Components ───────────────────────────────────────────────────────
function SectionLabel({ children, color = PALETTE.rose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-2.5 sm:mb-3 inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-ink-800"
      style={{
        backgroundColor: `${color}40`,
        border: `1px solid ${color}80`,
      }}
    >
      <span
        className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full animate-pulse"
        style={{ backgroundColor: color }}
      />
      {children}
    </motion.div>
  )
}

function SectionTitle({ label, title, subtitle, color = PALETTE.rose }) {
  return (
    <div className="mb-8 sm:mb-12">
      <SectionLabel color={color}>{label}</SectionLabel>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-ink-600">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative px-4 py-14 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl w-full">{children}</div>
    </section>
  )
}

// ─── Ambient Floating Pastel Background Orbs (Responsive) ─────────────────────
function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden w-full max-w-full">
      {/* Blush orb */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -35, 15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-16 -top-16 h-64 w-64 md:h-96 md:w-96 rounded-full opacity-35 sm:opacity-45 blur-2xl sm:blur-3xl"
        style={{ backgroundColor: PALETTE.blush }}
      />
      {/* Butter orb */}
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-0 top-1/4 h-64 w-64 md:h-[420px] md:w-[420px] rounded-full opacity-30 sm:opacity-40 blur-2xl sm:blur-3xl"
        style={{ backgroundColor: PALETTE.butter }}
      />
      {/* Sky & Mist orb */}
      <motion.div
        animate={{
          x: [0, 30, -25, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.12, 0.92, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/4 top-2/3 h-64 w-64 md:h-96 md:w-96 rounded-full opacity-35 sm:opacity-45 blur-2xl sm:blur-3xl"
        style={{ backgroundColor: PALETTE.sky }}
      />
      {/* Rose subtle glow */}
      <motion.div
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 20, -35, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 h-56 w-56 md:h-80 md:w-80 rounded-full opacity-25 sm:opacity-35 blur-2xl sm:blur-3xl"
        style={{ backgroundColor: PALETTE.rose }}
      />
    </div>
  )
}

// ─── Navigation Items with Details ───────────────────────────────────────────
const NAV_ITEMS = [
  { name: 'About', href: '#about', icon: User, subtitle: 'Background & education', color: PALETTE.rose, bg: PALETTE.blush },
  { name: 'Skills', href: '#skills', icon: Code2, subtitle: 'Tech stack & frameworks', color: '#9BA328', bg: PALETTE.lime },
  { name: 'Projects', href: '#projects', icon: Rocket, subtitle: 'Live apps & APIs', color: PALETTE.rose, bg: PALETTE.blush },
  { name: 'Research', href: '#research', icon: BookOpen, subtitle: 'Peer-reviewed publications', color: '#B39800', bg: PALETTE.butter },
  { name: 'Experience', href: '#experience', icon: Briefcase, subtitle: 'Teaching & work history', color: '#3E7780', bg: PALETTE.sky },
  { name: 'Achievements', href: '#achievements', icon: Trophy, subtitle: 'Awards, Olympiads & hackathons', color: '#9BA328', bg: PALETTE.lime },
  { name: 'Contact', href: '#contact', icon: Mail, subtitle: 'Get in touch & email', color: PALETTE.rose, bg: PALETTE.blush },
]

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.name.toLowerCase())
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-sky/40 bg-paper/90 backdrop-blur-md transition-all duration-300">
      {/* Animated scroll progress bar in the 6 palette colors */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
        style={{
          scaleX,
          background: `linear-gradient(90deg, ${PALETTE.blush}, ${PALETTE.rose}, ${PALETTE.butter}, ${PALETTE.lime}, ${PALETTE.mist}, ${PALETTE.sky})`,
        }}
      />

      <nav className="mx-auto flex max-w-6xl xl:max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-12">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-1.5 font-display text-lg sm:text-xl font-bold tracking-tight text-ink-900"
        >
          <span>Nahreen</span>
          <span
            className="inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-transform duration-300 group-hover:scale-150"
            style={{ backgroundColor: PALETTE.rose }}
          />
        </motion.a>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1 text-sm font-semibold text-ink-600 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.name.toLowerCase()
            return (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`relative rounded-full px-3.5 py-1.5 lg:px-4 lg:py-2 transition-colors duration-200 ${
                    isActive ? 'text-ink-950 font-bold' : 'hover:text-ink-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{
                        backgroundColor: `${PALETTE.blush}90`,
                        border: `1px solid ${PALETTE.rose}50`,
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </motion.a>
              </li>
            )
          })}
        </ul>

        {/* Detailed Animated Hamburger Button */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl border bg-white/90 shadow-sm backdrop-blur-md md:hidden transition-all duration-300"
          style={{
            borderColor: isOpen ? PALETTE.rose : `${PALETTE.sky}90`,
            boxShadow: isOpen ? `0 0 16px ${PALETTE.rose}45` : `0 2px 8px rgba(0,0,0,0.04)`,
          }}
          aria-label={isOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {/* Animated 3-line transformation into X */}
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="h-[2.5px] w-5 rounded-full"
              style={{ backgroundColor: isOpen ? PALETTE.rose : PALETTE.ink }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
              className="h-[2.5px] w-5 rounded-full origin-left"
              style={{ backgroundColor: isOpen ? PALETTE.rose : PALETTE.ink }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="h-[2.5px] w-5 rounded-full"
              style={{ backgroundColor: isOpen ? PALETTE.rose : PALETTE.ink }}
            />
          </div>
        </motion.button>
      </nav>

      {/* Detailed Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[61px] -z-10 bg-ink-950/40 backdrop-blur-sm md:hidden"
            />

            {/* Slide-down Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -16, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -16, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-sky/40 bg-paper/98 px-4 pb-6 pt-3 shadow-2xl backdrop-blur-xl md:hidden max-h-[calc(100vh-75px)] overflow-y-auto"
            >
              {/* Profile Card Header inside Burger Menu */}
              <div className="mb-4 rounded-2xl border border-sky/40 bg-white/90 p-3.5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div
                    className="relative rounded-full p-[2px] shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${PALETTE.rose}, ${PALETTE.butter}, ${PALETTE.sky})`,
                    }}
                  >
                    <img
                      src={profile.avatar || '/images/profile.jpg'}
                      alt={profile.name}
                      className="h-11 w-11 rounded-full object-cover"
                      style={{ objectPosition: '33% 52%' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-display text-sm font-bold text-ink-950 truncate">{profile.name}</p>
                      <Sparkles size={13} className="text-rose-500 shrink-0" />
                    </div>
                    <p className="text-[11px] font-medium text-ink-500 truncate">{profile.role}</p>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                          style={{ backgroundColor: PALETTE.lime }}
                        />
                        <span
                          className="relative inline-flex h-2 w-2 rounded-full"
                          style={{ backgroundColor: PALETTE.lime }}
                        />
                      </span>
                      <span className="text-[10px] font-bold text-ink-700">Open to collaborations & research</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Navigation Links */}
              <div className="space-y-1">
                {NAV_ITEMS.map((item, idx) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.name.toLowerCase()

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.035 }}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between rounded-2xl p-2.5 transition-all ${
                        isActive
                          ? 'bg-white shadow-sm border border-rose/40'
                          : 'hover:bg-white/70 active:bg-blush/40'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-xs transition-transform duration-200 group-hover:scale-110"
                          style={{ backgroundColor: item.bg }}
                        >
                          <Icon size={17} style={{ color: item.color }} />
                        </div>
                        <div className="min-w-0">
                          <p className={`text-sm font-bold tracking-tight truncate ${isActive ? 'text-ink-950' : 'text-ink-800'}`}>
                            {item.name}
                          </p>
                          <p className="text-[11px] font-medium text-ink-500 truncate">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        size={16}
                        className={`text-ink-400 transition-transform duration-200 group-hover:translate-x-1 ${
                          isActive ? 'text-rose-500 font-bold' : ''
                        }`}
                      />
                    </motion.a>
                  )
                })}
              </div>

              {/* Quick Contact & Action Buttons */}
              <div className="mt-4 border-t border-sky/30 pt-4 space-y-2.5">
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
                  style={{
                    backgroundColor: PALETTE.rose,
                    boxShadow: `0 4px 18px ${PALETTE.rose}50`,
                  }}
                >
                  <Mail size={16} /> Get in touch / Email
                </a>

                {/* Social icons row inside drawer */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-sky/40 bg-white/80 py-2.5 text-xs font-bold text-ink-800 shadow-xs active:bg-white"
                  >
                    <Linkedin size={14} className="text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-sky/40 bg-white/80 py-2.5 text-xs font-bold text-ink-800 shadow-xs active:bg-white"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Palette Accent Bar */}
              <div className="mt-4 flex items-center justify-center gap-1.5 pt-2">
                {[PALETTE.blush, PALETTE.rose, PALETTE.butter, PALETTE.lime, PALETTE.mist, PALETTE.sky].map((c, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-6 rounded-full"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

// ─── Typewriter Effect Component ──────────────────────────────────────────────
function TypewriterIntro({ text, speed = 32 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayedText('')
    setIsDone(false)
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1))
        i++
      } else {
        setIsDone(true)
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  const highlightKeyword = (content) => {
    const target = 'AI and ML models'
    const idx = content.indexOf(target)
    if (idx === -1) {
      return <span>{content}</span>
    }
    const before = content.slice(0, idx)
    const match = content.slice(idx, idx + target.length)
    const after = content.slice(idx + target.length)
    return (
      <>
        <span>{before}</span>
        <span
          className="font-extrabold underline decoration-rose/40 decoration-2 underline-offset-4"
          style={{ color: PALETTE.rose }}
        >
          {match}
        </span>
        <span>{after}</span>
      </>
    )
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="mt-3.5 sm:mt-4 max-w-xl mx-auto md:mx-0 min-h-[3.6rem] sm:min-h-[4.2rem]"
    >
      <p
        aria-label={text}
        className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-ink-950 tracking-tight"
      >
        {highlightKeyword(displayedText)}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.75, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block ml-1 font-extrabold"
          style={{ color: PALETTE.rose }}
          aria-hidden="true"
        >
          |
        </motion.span>
      </p>
    </motion.div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:px-12 md:pb-28 md:pt-16">
      {/* Decorative background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-25"
        style={{
          backgroundImage: `linear-gradient(${PALETTE.sky} 1px, transparent 1px), linear-gradient(90deg, ${PALETTE.sky} 1px, transparent 1px)`,
          backgroundSize: '40px 40px sm:48px sm:48px',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl xl:max-w-7xl flex-col items-center justify-between gap-8 sm:gap-12 md:flex-row md:items-center md:gap-16 lg:gap-20">
        
        {/* ── Avatar on top on mobile, right on desktop (shifted left & upwards, enlarged) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-first mb-4 flex shrink-0 flex-col items-center sm:mb-0 md:order-last md:ml-auto md:-translate-y-6 md:-translate-x-8 lg:-translate-y-10 lg:-translate-x-12"
        >
          {/* Animated floating wrapper */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Spinning multi-color palette aura ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 sm:-inset-2.5 rounded-full blur-sm sm:blur-md opacity-80"
              style={{
                background: `conic-gradient(from 0deg, ${PALETTE.blush}, ${PALETTE.rose}, ${PALETTE.butter}, ${PALETTE.lime}, ${PALETTE.mist}, ${PALETTE.sky}, ${PALETTE.blush})`,
              }}
            />

            {/* Solid multi-color ring border */}
            <div
              className="relative rounded-full p-[3px] sm:p-[4px] shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${PALETTE.rose} 0%, ${PALETTE.butter} 40%, ${PALETTE.sky} 100%)`,
              }}
            >
              <div className="overflow-hidden rounded-full h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[340px] xl:w-[340px] bg-white">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  src={profile.avatar || '/images/profile.jpg'}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: '33% 52%' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = "https://lh3.googleusercontent.com/d/1jJas39-46dPL5psH1h0RBiz9b017LJ5Q"
                  }}
                />
              </div>
            </div>

            {/* Floating micro-badge: Available status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 whitespace-nowrap rounded-full border border-white/80 bg-white/95 px-3.5 py-1 sm:px-4 sm:py-1.5 shadow-lg backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: PALETTE.lime }}
                />
                <span
                  className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full"
                  style={{ backgroundColor: PALETTE.lime }}
                />
              </span>
              <p className="text-[11px] sm:text-xs font-bold text-ink-900">{profile.name}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Text Content — Left on Desktop ── */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex-1 text-center md:text-left w-full"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp} className="mb-4 sm:mb-5 inline-block">
            <span
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold tracking-wide shadow-sm"
              style={{
                backgroundColor: `${PALETTE.blush}70`,
                borderColor: `${PALETTE.rose}60`,
                color: PALETTE.ink,
              }}
            >
              <Sparkles size={13} className="text-rose-500 animate-spin-slow" />
              Open to research collaborations & internships
            </span>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-ink-950"
          >
            {profile.name}
          </motion.h1>

          {/* Role Pill Highlight */}
          <motion.p
            variants={fadeInUp}
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold"
            style={{ color: PALETTE.rose }}
          >
            {profile.role}
          </motion.p>

          {/* Intro Description with Bold Effect & Typewriter Animation */}
          <TypewriterIntro text={profile.intro} />

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:justify-start"
          >
            <motion.a
              href="#research"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 rounded-full px-6 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 w-full sm:w-auto"
              style={{
                backgroundColor: PALETTE.rose,
                boxShadow: `0 8px 24px -4px ${PALETTE.rose}70`,
              }}
            >
              Read my research
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-ink-800 bg-white/70 px-6 py-3 sm:py-3.5 text-sm font-bold text-ink-900 backdrop-blur-sm transition-all duration-300 hover:bg-ink-800 hover:text-white w-full sm:w-auto"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

// ─── About Section ─────────────────────────────────────────────────────────────
function About() {
  const { paragraphs, education } = aboutData

  return (
    <Section id="about" className="bg-paper">
      <SectionTitle
        label="Who I am"
        title="About & Background"
        subtitle="Bridging machine learning research, software development, and community leadership."
        color={PALETTE.rose}
      />

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.3fr_1fr] items-start">
        {/* Story column */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-ink-700 md:text-lg"
        >
          {paragraphs.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative rounded-2xl border border-sky/40 bg-white/70 p-4 sm:p-6 shadow-card-soft backdrop-blur-sm transition-all duration-300 hover:shadow-card-hover"
            >
              <div
                className="absolute left-0 top-5 sm:top-6 h-7 sm:h-8 w-1.5 rounded-r-full"
                style={{ backgroundColor: idx % 2 === 0 ? PALETTE.rose : PALETTE.sky }}
              />
              <p className="pl-2 sm:pl-3">{t}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white via-white/95 to-mist/40 p-5 sm:p-7 shadow-card-soft backdrop-blur-md"
        >
          {/* Subtle decorative background glow */}
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-35 blur-2xl"
            style={{ backgroundColor: PALETTE.butter }}
          />

          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl shadow-sm shrink-0"
              style={{ backgroundColor: PALETTE.butter }}
            >
              <GraduationCap className="text-ink-900" size={22} />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-ink-500">
                Education
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950">
                {education.degree}
              </h3>
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm font-semibold text-ink-600">
            {education.institution} · <span className="font-bold text-rose-500">{education.period}</span>
          </p>

          <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
            {/* HSC Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-sky/30 bg-paper/80 p-3 sm:p-4 shadow-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <span
                  className="rounded-full px-2.5 sm:px-3 py-0.5 text-[11px] sm:text-xs font-bold text-ink-900"
                  style={{ backgroundColor: PALETTE.blush }}
                >
                  HSC ({education.hsc.background})
                </span>
                <span className="font-display text-xs sm:text-sm font-bold text-ink-800">
                  {education.hsc.passing_year}
                </span>
              </div>
              <p className="mt-1.5 sm:mt-2 text-xs font-medium text-ink-600">
                {education.hsc.college}
              </p>
            </motion.div>

            {/* SSC Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-sky/30 bg-paper/80 p-3 sm:p-4 shadow-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <span
                  className="rounded-full px-2.5 sm:px-3 py-0.5 text-[11px] sm:text-xs font-bold text-ink-900"
                  style={{ backgroundColor: PALETTE.mist }}
                >
                  SSC ({education.ssc.background})
                </span>
                <span className="font-display text-xs sm:text-sm font-bold text-ink-800">
                  {education.ssc.passing_year}
                </span>
              </div>
              <p className="mt-1.5 sm:mt-2 text-xs font-medium text-ink-600">
                {education.ssc.school}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

// ─── Skills Section ────────────────────────────────────────────────────────────
function Skills() {
  const groupColors = [
    { border: PALETTE.rose, bg: PALETTE.blush },
    { border: PALETTE.sky, bg: PALETTE.mist },
    { border: '#E0B528', bg: PALETTE.butter },
    { border: '#A6A633', bg: PALETTE.lime },
    { border: PALETTE.sky, bg: PALETTE.mist },
    { border: PALETTE.rose, bg: PALETTE.blush },
  ]

  return (
    <Section id="skills" className="bg-gradient-to-b from-paper via-white to-paper">
      <SectionTitle
        label="Technical Toolbox"
        title="Skills & Technologies"
        subtitle="Specialized in AI/ML research workflows, deep neural networks, and robust software engineering."
        color={PALETTE.lime}
      />

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, idx) => {
          const theme = groupColors[idx % groupColors.length]

          return (
            <motion.div
              key={s.group}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={idx}
              variants={scaleUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sky/40 bg-white/90 p-4 sm:p-6 shadow-card-soft backdrop-blur-md transition-shadow duration-300 hover:shadow-card-hover"
            >
              {/* Colored top indicator line */}
              <div
                className="absolute left-0 top-0 h-1.5 w-full transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: theme.border }}
              />

              <div>
                <div className="mb-4 sm:mb-5 flex items-center justify-between">
                  <h3 className="font-display text-sm sm:text-base font-bold tracking-tight text-ink-900">
                    {s.group}
                  </h3>
                  <span
                    className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[11px] sm:text-xs font-extrabold text-ink-800"
                    style={{ backgroundColor: theme.bg }}
                  >
                    {s.items.length}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {s.items.map((item) => (
                    <motion.span
                      key={item.name}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="group/pill inline-flex items-center gap-1.5 rounded-xl border border-ink-100 bg-paper/90 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold text-ink-800 shadow-sm transition-all duration-200 hover:border-transparent hover:text-ink-950"
                      style={{
                        ['--hover-bg']: theme.bg,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme.bg
                        e.currentTarget.style.borderColor = theme.border
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = ''
                        e.currentTarget.style.borderColor = ''
                      }}
                    >
                      <SkillIcon iconKey={item.icon} />
                      <span>{item.name}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

// ─── Projects Section ──────────────────────────────────────────────────────────
function Projects() {
  const badgeColors = [PALETTE.blush, PALETTE.butter, PALETTE.lime, PALETTE.sky]

  return (
    <Section id="projects" className="bg-paper">
      <SectionTitle
        label="Machine Learning & Software Development"
        title="Featured Projects"
        subtitle="Production machine learning systems, dual-language health AI platforms, Bengali NLP APIs, predictive maintenance architectures, and aerospace intelligence."
        color={PALETTE.rose}
      />

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            custom={i}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-sky/40 bg-white/95 shadow-card-soft backdrop-blur-md transition-shadow duration-300 hover:shadow-card-hover"
          >
            {/* Image container */}
            <div className="relative h-44 sm:h-52 overflow-hidden bg-mist/60">
              <motion.img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent opacity-60" />

              {/* Tag pill floating over image */}
              <div className="absolute right-3 top-3 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 2).map((t, idx) => (
                  <span
                    key={t}
                    className="rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold text-ink-900 shadow-sm backdrop-blur-md"
                    style={{ backgroundColor: badgeColors[idx % badgeColors.length] }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-bold leading-snug text-ink-950">
                {p.title}
              </h3>
              <p className="mt-2.5 sm:mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-ink-600">
                {p.desc}
              </p>

              {/* Result Callout Box */}
              {p.result && (
                <div
                  className="mt-3.5 sm:mt-4 rounded-2xl border-l-4 p-3 sm:p-3.5 shadow-sm"
                  style={{
                    borderLeftColor: PALETTE.rose,
                    backgroundColor: `${PALETTE.blush}35`,
                  }}
                >
                  <p className="text-xs font-semibold leading-relaxed text-ink-800">
                    <span className="font-bold text-rose-500">Key Result: </span>
                    {p.result}
                  </p>
                </div>
              )}

              {/* Full Tech Tags */}
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-sky/30 bg-mist/40 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-ink-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Live Link Button */}
              {p.liveLink && (
                <div className="mt-4 sm:mt-5 border-t border-sky/30 pt-3.5 sm:pt-4">
                  <motion.a
                    href={p.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-colors"
                    style={{ color: PALETTE.rose }}
                  >
                    <span>{p.liveLinkLabel || 'View project'}</span>
                    {p.liveLink.includes('github.com') ? (
                      <Github size={15} />
                    ) : (
                      <ExternalLink size={15} />
                    )}
                  </motion.a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

// ─── Research Section ─────────────────────────────────────────────────────────
function Research() {
  return (
    <Section id="research" className="bg-gradient-to-b from-paper via-mist/20 to-paper">
      <SectionTitle
        label="Peer-Reviewed Literature"
        title="Research Publications"
        subtitle="Peer-reviewed research contributions published with IEEE spanning clinical machine learning, predictive analytics, and medical diagnostics."
        color={PALETTE.sky}
      />

      <div className="space-y-4 sm:space-y-5">
        {research.map((r, i) => {
          const isPublished = r.status.toLowerCase().includes('published')
          const badgeColor = isPublished ? PALETTE.lime : PALETTE.butter

          return (
            <motion.div
              key={r.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.008 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl border border-sky/50 bg-white/95 p-4 sm:p-6 md:p-8 shadow-card-soft backdrop-blur-md transition-all duration-300 hover:border-rose/50 hover:shadow-card-hover"
            >
              {/* Left vertical accent stripe */}
              <div
                className="absolute bottom-0 left-0 top-0 w-1.5 sm:w-2 transition-all duration-300 group-hover:w-3"
                style={{ backgroundColor: badgeColor }}
              />

              <div className="flex flex-col gap-3.5 pl-2 sm:pl-3 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl space-y-1.5 sm:space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen size={15} className="text-ink-400" />
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink-500">
                      Paper #{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg md:text-xl font-bold leading-snug text-ink-950">
                    {r.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-ink-600">
                    {r.venue}
                  </p>
                </div>

                <div className="flex shrink-0 flex-row flex-wrap items-center gap-2.5 pt-1 md:flex-col md:items-end md:gap-3 md:pt-0">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] sm:text-xs font-bold text-ink-900 shadow-sm"
                    style={{ backgroundColor: badgeColor }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: isPublished ? '#4E5F1E' : '#926F00' }}
                    />
                    {r.status}
                  </span>

                  {r.link && (
                    <motion.a
                      href={r.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-paper px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-ink-900 shadow-sm transition-all hover:border-transparent hover:text-white"
                      style={{
                        ['--hover-color']: PALETTE.rose,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = PALETTE.rose
                        e.currentTarget.style.color = '#FFFFFF'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = ''
                        e.currentTarget.style.color = ''
                      }}
                    >
                      <span>View paper</span>
                      <ExternalLink size={12} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

// ─── Experience Section ───────────────────────────────────────────────────────
function Experience() {
  const dotColors = [PALETTE.rose, PALETTE.sky]

  return (
    <Section id="experience" className="bg-paper">
      <SectionTitle
        label="Work History"
        title="Professional Experience"
        subtitle="Hands-on academic instruction, lab mentorship, and international client relationship management."
        color={PALETTE.butter}
      />

      <div className="relative space-y-8 sm:space-y-12 pl-6 sm:pl-10">
        {/* Continuous gradient vertical timeline rail */}
        <div
          className="absolute bottom-2 left-2.5 sm:left-4 top-2 w-1 rounded-full"
          style={{
            background: `linear-gradient(180deg, ${PALETTE.rose} 0%, ${PALETTE.butter} 50%, ${PALETTE.sky} 100%)`,
          }}
        />

        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            variants={fadeInUp}
            className="relative"
          >
            {/* Timeline node */}
            <div
              className="absolute -left-[29px] sm:-left-[43px] top-1.5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-4 border-paper shadow-md"
              style={{ backgroundColor: dotColors[i % dotColors.length] }}
            >
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white" />
            </div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -4, x: 4 }}
              transition={{ type: 'spring', stiffness: 280 }}
              className="rounded-3xl border border-sky/40 bg-white/95 p-4 sm:p-6 md:p-8 shadow-card-soft backdrop-blur-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky/30 pb-3 sm:pb-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950">
                    {e.role}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink-600">
                    <Building2 size={14} className="text-ink-400" />
                    <span>{e.org}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full border border-sky/40 bg-mist/40 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-bold text-ink-800">
                  <Calendar size={12} />
                  <span>{e.when}</span>
                </div>
              </div>

              <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                {e.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm leading-relaxed text-ink-700">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: PALETTE.rose }}
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

// ─── Achievements Section with Animated Photo Gallery & Lightbox ───────────────
function Achievements() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(null)
  const iconList = [Trophy, Award, Star, Sparkles]
  const cardThemes = [
    { bg: PALETTE.blush, border: PALETTE.rose, color: '#C05872' },
    { bg: PALETTE.butter, border: '#D0A820', color: '#967800' },
    { bg: PALETTE.mist, border: PALETTE.sky, color: '#2E6972' },
    { bg: PALETTE.lime, border: '#9BA328', color: '#687008' },
    { bg: PALETTE.blush, border: PALETTE.rose, color: '#C05872' },
  ]

  // Lightbox keyboard controls
  useEffect(() => {
    if (activePhotoIdx === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActivePhotoIdx(null)
      if (e.key === 'ArrowRight') {
        setActivePhotoIdx((prev) => (prev + 1) % achievementPhotos.length)
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIdx((prev) => (prev - 1 + achievementPhotos.length) % achievementPhotos.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activePhotoIdx])

  const activePhoto = activePhotoIdx !== null ? achievementPhotos[activePhotoIdx] : null

  return (
    <Section id="achievements" className="bg-gradient-to-b from-paper via-white to-paper">
      <SectionTitle
        label="Honors & Recognition"
        title="Key Achievements & Moments"
        subtitle="National and international accolades, programming contests, robotics competitions, and verified certifications."
        color={PALETTE.lime}
      />

      {/* ─── Part 1: Animated Photo Showcase (5 Real Certificates & Ceremonies) ─── */}
      <div className="mb-14">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-xl shadow-xs"
              style={{ backgroundColor: PALETTE.blush }}
            >
              <Camera size={16} className="text-rose-600" />
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950">
              Certificates & Award Ceremonies
            </h3>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-bold text-ink-900 shadow-xs"
              style={{ backgroundColor: PALETTE.butter }}
            >
              {achievementPhotos.length} Moments
            </span>
          </div>
          <p className="text-xs font-semibold text-ink-500">
            Click any photo to view in high resolution
          </p>
        </div>

        {/* Responsive Grid with Staggered Animations */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievementPhotos.map((item, idx) => {
            const theme = cardThemes[idx % cardThemes.length]

            return (
              <motion.article
                key={item.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={idx}
                variants={fadeInUp}
                whileHover={{ y: -7 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                onClick={() => setActivePhotoIdx(idx)}
                className="group relative flex flex-col cursor-pointer overflow-hidden rounded-3xl border border-sky/40 bg-white/95 shadow-card-soft backdrop-blur-md transition-all duration-300 hover:border-rose/50 hover:shadow-card-hover"
              >
                {/* Photo frame */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-mist/50">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    style={{
                      objectPosition: item.aspect === 'portrait' ? 'center 20%' : 'center center',
                    }}
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/10 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70" />

                  {/* Top Badge Pill */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5">
                    <span
                      className="rounded-full px-2.5 py-1 text-[11px] font-bold text-ink-900 shadow-sm backdrop-blur-md"
                      style={{ backgroundColor: theme.bg }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Date badge */}
                  <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-ink-800 shadow-sm backdrop-blur-md">
                      {item.date}
                    </span>
                  </div>

                  {/* Interactive Hover Pill overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-ink-900 shadow-lg backdrop-blur-md">
                      <Maximize2 size={13} className="text-rose-500" />
                      <span>Enlarge Photo</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-widest"
                    style={{ color: theme.color }}
                  >
                    {item.category}
                  </span>

                  <h4 className="mt-1 font-display text-base font-bold leading-snug text-ink-950 group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-xs font-semibold text-rose-500">
                    {item.award}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-ink-600 flex-1 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-sky/30 pt-3 text-[11px] font-bold text-ink-500 group-hover:text-ink-900">
                    <span>View certificate / photo</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* ─── Part 2: Accolades & Contests List ─── */}
      <div className="pt-2">
        <div className="mb-6 flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-xl shadow-xs"
            style={{ backgroundColor: PALETTE.lime }}
          >
            <Trophy size={16} className="text-ink-900" />
          </span>
          <h3 className="font-display text-lg sm:text-xl font-bold text-ink-950">
            All Honors & Accolades
          </h3>
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-bold text-ink-900 shadow-xs"
            style={{ backgroundColor: PALETTE.blush }}
          >
            {achievements.length} Honors
          </span>
        </div>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = iconList[i % iconList.length]
            const theme = cardThemes[i % cardThemes.length]

            return (
              <motion.div
                key={a}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-30px' }}
                custom={i}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="group flex items-start gap-3 sm:gap-4 rounded-3xl border border-sky/40 bg-white/95 p-3.5 sm:p-5 shadow-card-soft backdrop-blur-md transition-all hover:shadow-card-hover"
              >
                <div
                  className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: theme.bg }}
                >
                  <Icon size={18} className="text-ink-900" />
                </div>

                <div className="flex-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-400">
                    Honor #{i + 1}
                  </span>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold leading-relaxed text-ink-800">
                    {a}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* ─── Lightbox Modal with Full View & Carousel Navigation ─── */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
          >
            {/* Backdrop */}
            <div
              onClick={() => setActivePhotoIdx(null)}
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/98 shadow-2xl backdrop-blur-xl"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-sky/30 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-full px-3 py-0.5 text-xs font-bold text-ink-900"
                    style={{ backgroundColor: PALETTE.blush }}
                  >
                    {activePhoto.badge}
                  </span>
                  <span className="text-xs font-bold text-ink-500">
                    Photo {activePhotoIdx + 1} of {achievementPhotos.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActivePhotoIdx(null)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/80 text-ink-700 transition-colors hover:bg-rose/20 hover:text-rose-600"
                    aria-label="Close dialog"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Main Image View Area */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-ink-950/95 p-2 sm:p-4 min-h-[260px] sm:min-h-[380px] max-h-[60vh]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhoto.id}
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22 }}
                    className="max-h-[56vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                  />
                </AnimatePresence>

                {/* Left navigation arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setActivePhotoIdx((prev) => (prev - 1 + achievementPhotos.length) % achievementPhotos.length)
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/85 text-ink-900 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:scale-110 active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Right navigation arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setActivePhotoIdx((prev) => (prev + 1) % achievementPhotos.length)
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/85 text-ink-900 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:scale-110 active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Caption and Details */}
              <div className="border-t border-sky/30 bg-paper/95 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-ink-950">
                      {activePhoto.title}
                    </h4>
                    <p className="mt-0.5 text-xs sm:text-sm font-semibold text-rose-500">
                      {activePhoto.award}
                    </p>
                  </div>
                  <span className="self-start rounded-full border border-sky/40 bg-white px-3 py-1 text-xs font-bold text-ink-700">
                    {activePhoto.date}
                  </span>
                </div>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-700">
                  {activePhoto.description}
                </p>

                {/* Thumbnail strip */}
                <div className="mt-4 flex items-center gap-2 overflow-x-auto pt-2">
                  {achievementPhotos.map((thumb, tIdx) => (
                    <button
                      key={thumb.id}
                      onClick={() => setActivePhotoIdx(tIdx)}
                      className={`relative h-12 w-14 sm:h-14 sm:w-18 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                        tIdx === activePhotoIdx
                          ? 'border-rose-500 scale-105 shadow-md'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumb.image}
                        alt={thumb.title}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <Section id="contact" className="bg-paper">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={scaleUp}
        className="relative overflow-hidden rounded-3xl border border-sky/50 p-6 sm:p-10 md:p-16 shadow-card-hover text-center"
        style={{
          background: `linear-gradient(135deg, ${PALETTE.blush}50 0%, ${PALETTE.butter}35 50%, ${PALETTE.mist}60 100%)`,
        }}
      >
        {/* Floating background glowing circles */}
        <div
          className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 sm:h-64 sm:w-64 rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: PALETTE.rose }}
        />
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 sm:h-64 sm:w-64 rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: PALETTE.sky }}
        />

        <div className="relative mx-auto max-w-2xl">
          <SectionLabel color={PALETTE.rose}>Let's connect</SectionLabel>

          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-ink-950">
            Get in touch
          </h2>

          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base leading-relaxed text-ink-700 md:text-lg">
            Whether you want to discuss research collaborations, machine learning projects,
            internship opportunities, or simply share ideas — my inbox is always open.
          </p>

          {/* Contact Action Pills */}
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Email Button with Copy capability */}
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 rounded-full px-6 py-3 sm:py-3.5 text-sm font-bold text-white shadow-lg transition-all w-full sm:w-auto"
              style={{
                backgroundColor: PALETTE.rose,
                boxShadow: `0 8px 24px -4px ${PALETTE.rose}75`,
              }}
            >
              <Mail size={16} />
              <span>Email me</span>
            </motion.a>

            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 rounded-full border border-sky/60 bg-white/90 px-6 py-3 sm:py-3.5 text-sm font-bold text-ink-900 shadow-sm backdrop-blur-md transition-all hover:bg-white w-full sm:w-auto"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-600" />
                  <span className="text-emerald-700">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-ink-600" />
                  <span>Copy email</span>
                </>
              )}
            </motion.button>

            {/* LinkedIn */}
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 rounded-full border border-sky/60 bg-white/90 px-6 py-3 sm:py-3.5 text-sm font-bold text-ink-900 shadow-sm backdrop-blur-md transition-all hover:bg-white w-full sm:w-auto"
            >
              <Linkedin size={16} className="text-[#0A66C2]" />
              <span>LinkedIn</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 rounded-full border border-sky/60 bg-white/90 px-6 py-3 sm:py-3.5 text-sm font-bold text-ink-900 shadow-sm backdrop-blur-md transition-all hover:bg-white w-full sm:w-auto"
            >
              <Github size={16} />
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-sky/40 bg-paper px-4 py-8 sm:px-6 sm:py-10 text-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
        <p className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-ink-600">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>· Crafted with</span>
          <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
          <span>&amp; React</span>
        </p>

        <motion.a
          href="#top"
          whileHover={{ y: -2 }}
          className="text-xs font-bold uppercase tracking-wider text-ink-500 hover:text-rose-500 transition-colors"
        >
          Back to top ↑
        </motion.a>
      </div>
    </footer>
  )
}

// ─── Floating Scroll to Top Button ─────────────────────────────────────────────
function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', toggleVisible, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full text-white shadow-xl backdrop-blur-md"
          style={{
            backgroundColor: PALETTE.rose,
            boxShadow: `0 8px 24px ${PALETTE.rose}70`,
          }}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// ─── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-blush selection:text-ink w-full overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}