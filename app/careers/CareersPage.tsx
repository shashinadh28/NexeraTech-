"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  ArrowRight,
  ChevronRight,
  Users,
  TrendingUp,
  Globe,
  Award,
  Star,
  Briefcase,
  ChevronLeft,
  ArrowUpRight,
  Quote,
  CheckCircle2,
} from "lucide-react";

/* ─── Animation Variants ────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

/* ─── Data ───────────────────────────────────────────────────────────────── */
const stats = [
  { value: "$4B+", label: "Annual Revenue", color: "#E85D04" },
  { value: "5000+", label: "Employees", color: "#E85D04" },
  { value: "70+", label: "Locations across North America, Europe & Asia", color: "#E85D04" },
  { value: "25+ YEARS", label: "Unmatched Customer Service in the Staffing Industry", color: "#E85D04" },
];

const workforceServices = [
  {
    num: "01",
    title: "Staff Augmentation",
    short: "Scale and flex your team to meet business priorities with our flexible staffing solutions.",
    description:
      "Our staff augmentation services provide qualified professionals aligned with technical, non-IT, functional, and project needs to quickly strengthen teams and maintain delivery momentum.",
    image: "/careers/OurServices/Staff-Augmentation.webp",
  },
  {
    num: "02",
    title: "Direct Hire",
    short: "We've got you covered for top talent be it onsite, hybrid, or remote placements.",
    description:
      "Our direct hire solutions identify and place high-caliber permanent talent across technical, functional, and leadership roles — ensuring the right cultural and skills fit every time.",
    image: "/careers/OurServices/Direct-Hire.webp",
  },
  {
    num: "03",
    title: "SOW & Project Based Delivery",
    short: "Complete project-based solutions with clear scope of work and deliverables.",
    description:
      "We take ownership of defined project outcomes with a dedicated team, clear milestones, and accountability — so you can focus on strategy while we handle execution.",
    image: "/careers/OurServices/SOW-Project-Based-Delivery.webp",
  },
  {
    num: "04",
    title: "Global Payroll Services",
    short: "Comprehensive payroll solutions for your global workforce management needs.",
    description:
      "From multi-country compliance to real-time payroll processing, our global payroll service handles all complexities so your workforce gets paid accurately, on time, every time.",
    image: "/careers/OurServices/Global-Payroll-Services.webp",
  },
  {
    num: "05",
    title: "Global Capability Centers (GCC)",
    short: "Build and scale world class capability centers with the right talent and operational support.",
    description:
      "We help you design, staff, and operate world-class GCCs — from location strategy and talent acquisition to governance frameworks and operational ramp-up.",
    image: "/careers/OurServices/Global-Capability-Centers.webp",
  },
  {
    num: "06",
    title: "Talent Development & Transformation",
    short: "Practical training and capability-building programs.",
    description:
      "We deliver targeted upskilling, leadership development, and transformation programs that build lasting capability across your organization — not just short-term fixes.",
    image: "/careers/OurServices/Talent-Development-Transformation.webp",
  },
];

const aboutPillars = [
  { label: "Expertise and Experience" },
  { label: "Client-Centric Approach" },
  { label: "Commitment to Excellence & Growth" },
  { label: "20+ Years of Leadership" },
];

const aboutStats = [
  { value: "20+", suffix: "Years of Excellence" },
  { value: "200+", suffix: "Global Clients" },
  { value: "5,000+", suffix: "Professionals Deployed" },
  { value: "25+", suffix: "Offices Across 4 Countries" },
];

const testimonials = [
  {
    quote:
      "Great experience working with NexeraTech. They understand our needs and what we do as a company. Armed with this understanding, the profiles we are receiving hit the spot each time.",
    company: "Financial Firm",
    role: "HR Manager",
  },
  {
    quote:
      "We would like to express our satisfaction and happiness on the Data Integration and Marketing Analytics project. Highly competent team at NexeraTech did great job.",
    company: "Retail Firm",
    role: "Head of Data and Analytics",
  },
  {
    quote:
      "I would like to take this moment to acknowledge your polite tenaciousness. You have become my go-to team whenever we face a difficult to fill role.",
    company: "Healthcare Firm",
    role: "Sr. IT Manager",
  },
  {
    quote:
      "We have found NexeraTech extremely proficient and supportive in all aspects of their work. Their approach in matching the right candidate to the relevant role has been impressive.",
    company: "Large MSP Firm",
    role: "Program Director",
  },
  {
    quote:
      "Partnering with this team has completely transformed how we hire and scale. They truly understand our needs and deliver high-quality talent quickly.",
    company: "Retail Firm",
    role: "Head of Data and Analytics",
  },
  {
    quote:
      "Working with this team gave us access to talent we never thought we'd find. Their process is thorough, transparent, and genuinely focused on long-term success.",
    company: "Finance Group",
    role: "VP of Operations",
  },
];

const opportunities = [
  {
    title: "Recruiting & Sales",
    description:
      "Account Managers are the face of NexeraTech, building genuine relationships with clients and partnering with Recruiters to find the right person for their job openings.",
    image: "/careers/careers_recruiting_sales.png",
    bgColor: "#5ECCE9",
    href: "/contact",
  },
  {
    title: "Corporate",
    description:
      "From IT to Finance, Legal or HR, our home office is the bustling hub of the company consisting of nimble thinkers, makers and problem solvers.",
    image: "/careers/careers_corporate.png",
    bgColor: "#F5C518",
    href: "/contact",
  },
  {
    title: "Technology",
    description:
      "Find your next role at NexeraTech's technology division. Make a difference as a full-time employee for any of our sales, delivery, or operations teams.",
    image: "/careers/careers_technology.png",
    bgColor: "#E8E8E8",
    href: "/contact",
  },
  {
    title: "Veteran/SkillBridge",
    description:
      "We are proud to hire Veterans to our growing family. Whether you're interested in an internal role or SkillBridge internship, there's a world of opportunities waiting for you.",
    image: "/careers/careers_veteran.png",
    bgColor: "#5ECCE9",
    href: "/contact",
  },
];

const values = [
  {
    icon: Award,
    title: "High Character",
    description: "We operate with integrity and transparency in everything we do.",
  },
  {
    icon: TrendingUp,
    title: "Hard Work",
    description: "We bring relentless effort to every task, from candidate placement to client delivery.",
  },
  {
    icon: Users,
    title: "Team Growth",
    description: "We invest in our people — personally, professionally, and financially.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work connects talented people with life-changing opportunities worldwide.",
  },
];

const benefits = [
  "Competitive salary & performance bonuses",
  "Health, dental & vision insurance",
  "Flexible work arrangements",
  "Career development programs",
  "Mentorship from industry leaders",
  "401(k) with company match",
  "Paid time off & holidays",
  "Team retreats & culture events",
];

/* ─── Workforce Accordion Section ───────────────────────────────────────── */
function WorkforceSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F0F4F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#E85D04] mb-3">
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-5"
            style={displayFont}
          >
            All Your Workforce Needs{" "}
            <span style={{ color: "#E85D04" }}>in One Place</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Connecting people, processes, and possibilities to empower organizations and professionals. NexeraTech
            helps build strong teams, advance careers, and scale enterprise programs with precision and purpose.
          </motion.p>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col gap-3"
        >
          {workforceServices.map((svc, idx) => {
            const isOpen = active === idx;
            return (
              <motion.div
                key={svc.num}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  background: isOpen ? "#ffffff" : "#ffffff",
                  border: isOpen ? "1.5px solid rgba(232,93,4,0.30)" : "1.5px solid rgba(0,0,0,0.07)",
                  boxShadow: isOpen
                    ? "0 12px 40px rgba(232,93,4,0.10), 0 2px 8px rgba(0,0,0,0.06)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isOpen ? null : idx)}
              >
                {/* ── Collapsed row ── */}
                <div className="flex items-center gap-5 px-7 py-5">
                  {/* Number */}
                  <span
                    className="text-sm font-bold shrink-0 w-8"
                    style={{ color: isOpen ? "#E85D04" : "#6B9DB8", ...displayFont }}
                  >
                    {svc.num}
                  </span>

                  {/* Title + short */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base sm:text-lg font-bold text-[#0A1628] leading-snug"
                      style={displayFont}
                    >
                      {svc.title}
                    </h3>
                    {!isOpen && (
                      <p className="text-gray-400 text-sm mt-0.5 truncate">{svc.short}</p>
                    )}
                  </div>

                  {/* Arrow icon — rotates when open */}
                  <div
                    className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "#E85D04" : "rgba(0,0,0,0.12)",
                      color: isOpen ? "#E85D04" : "#9CA3AF",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* ── Expanded content ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="flex flex-col sm:flex-row gap-6 px-7 pb-7 pt-1">
                        {/* Image */}
                        <div className="sm:w-56 lg:w-64 shrink-0">
                          <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden">
                            <Image
                              src={svc.image}
                              alt={svc.title}
                              fill
                              className="object-cover object-center"
                            />
                          </div>
                        </div>

                        {/* Description + CTA */}
                        <div className="flex flex-col justify-between gap-5 flex-1">
                          <div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-2">{svc.short}</p>
                            <p className="text-[#0A1628] text-sm leading-relaxed font-medium">{svc.description}</p>
                          </div>
                          <Link
                            id={`service-explore-${idx}`}
                            href="/contact"
                            className="self-start inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-95"
                            style={{ background: "linear-gradient(135deg, #0D7A8A, #0EA5A0)" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function CareersPage() {

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [currentStat, setCurrentStat] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevStat = () => setCurrentStat((p) => (p - 1 + stats.length) % stats.length);
  const nextStat = () => setCurrentStat((p) => (p + 1) % stats.length);

  const prevTestimonial = () =>
    setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () =>
    setActiveTestimonial((p) => (p + 1) % testimonials.length);

  /* Auto-advance testimonials */
  useEffect(() => {
    const t = setInterval(nextTestimonial, 5000);
    return () => clearInterval(t);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[540px] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/careers/careers_hero_bg.png"
            alt="NexeraTech Careers Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,22,40,0.60) 0%, rgba(10,22,40,0.42) 60%, rgba(10,22,40,0.75) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-6">
              <Link href="/" className="text-white/60 text-sm hover:text-[#E85D04] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span className="text-[#E85D04] text-sm font-medium">Internal Careers</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              style={displayFont}
            >
              NexeraTech{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #E85D04, #FF802B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Internal Careers
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We are a staffing company that connects people with opportunities. Our purpose is to grow our people
              personally, professionally, and financially, so they can be the light for the world around them. If
              you have the drive to be successful and want to be a part of something greater than yourself,
              you've come to the right place.
            </motion.p>

            <motion.form
              variants={fadeUp}
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="careers-keyword-search"
                  type="text"
                  placeholder="Search keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-gray-800 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85D04]/50 shadow-lg"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="careers-location-search"
                  type="text"
                  placeholder="Search location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-gray-800 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85D04]/50 shadow-lg"
                />
              </div>
              <button
                id="careers-search-btn"
                type="submit"
                className="px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-95 shadow-lg whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #E85D04, #FF802B)" }}
              >
                Search
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHY NEXERATECH — STATS STRIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628]" style={displayFont}>
              Why NexeraTech?
            </h2>
          </motion.div>

          {/* Desktop */}
          <div className="hidden md:flex items-center justify-center gap-4">
            <button
              id="stats-prev-btn"
              onClick={prevStat}
              className="p-2 rounded-full border border-gray-200 text-gray-500 hover:border-[#E85D04] hover:text-[#E85D04] transition-colors flex-shrink-0"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-12 lg:gap-20">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-3xl lg:text-4xl font-extrabold mb-1" style={{ color: stat.color, ...displayFont }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 max-w-[130px] mx-auto leading-snug">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <button
              id="stats-next-btn"
              onClick={nextStat}
              className="p-2 rounded-full border border-gray-200 text-gray-500 hover:border-[#E85D04] hover:text-[#E85D04] transition-colors flex-shrink-0"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center justify-center gap-4">
            <button onClick={prevStat} className="p-2 rounded-full border border-gray-200 text-gray-500" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStat}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="text-center min-w-[160px]"
              >
                <div className="text-4xl font-extrabold mb-1" style={{ color: stats[currentStat].color, ...displayFont }}>
                  {stats[currentStat].value}
                </div>
                <div className="text-xs text-gray-500 max-w-[160px] mx-auto leading-snug">
                  {stats[currentStat].label}
                </div>
              </motion.div>
            </AnimatePresence>
            <button onClick={nextStat} className="p-2 rounded-full border border-gray-200 text-gray-500" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ALL YOUR WORKFORCE NEEDS IN ONE PLACE
      ═══════════════════════════════════════════════════════════════════ */}
      <WorkforceSection />

      {/* ═══════════════════════════════════════════════════════════════════
          OPPORTUNITIES AT NEXERATECH
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4" style={displayFont}>
              Opportunities at <span style={{ color: "#E85D04" }}>NexeraTech</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Explore the different paths you can take to build a rewarding career with us.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {opportunities.map((opp, idx) => (
              <motion.div key={opp.title} variants={fadeUp} className="flex flex-col items-center text-center group">
                <div
                  className="relative w-44 h-44 rounded-full overflow-hidden mb-5 shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: opp.bgColor }}
                >
                  <Image src={opp.image} alt={opp.title} fill className="object-cover object-top" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-3" style={displayFont}>{opp.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-[220px]">{opp.description}</p>
                <Link
                  id={`opportunity-explore-${idx}`}
                  href={opp.href}
                  className="px-6 py-2.5 rounded-full border-2 border-[#0A1628] text-[#0A1628] text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:bg-[#0A1628] hover:text-white"
                >
                  Explore
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FUELED BY GRIT
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/careers/careers_fueled_grit.png" alt="Fueled by Grit" fill className="object-cover object-center" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.20) 100%)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-lg"
          >
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-6" style={displayFont}>
              Fueled by Grit
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 text-sm sm:text-base leading-relaxed">
              One of our Shared Values is{" "}
              <span className="text-white font-semibold">"High Character and Hard Work Above All Else."</span>{" "}
              Whether it's finding the right candidate for a job or seamlessly managing a project end to end for a
              client, we are trusted and we deliver. At NexeraTech we value Grit in our people, and it's part of
              our mission to teach you how to use it to build a life-long career that you can be proud of.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ABOUT NEXERATECH  (NEW — Rang "About" section adapted)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#E85D04] mb-3">
                About NexeraTech
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-5 leading-tight"
                style={displayFont}
              >
                Trusted by Fortune 500 Leaders{" "}
                <span style={{ color: "#E85D04" }}>and Global Innovators.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-base leading-relaxed mb-8">
                Workforce solutions and consulting firm combining people-first values with innovation to deliver talent
                and measurable impact. For 20+ years, we've helped Fortune 500s, mid-sized businesses, and startups
                build teams and technology to succeed.
              </motion.p>

              <motion.ul variants={stagger} className="space-y-3 mb-8">
                {aboutPillars.map((p) => (
                  <motion.li key={p.label} variants={fadeUp} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#E85D04" }} />
                    <span className="text-[#0A1628] font-semibold text-sm">{p.label}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp}>
                <Link
                  id="about-learn-more-btn"
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-95 shadow-md"
                  style={{ background: "linear-gradient(135deg, #E85D04, #FF802B)" }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — 4 stat counters */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 gap-5"
            >
              {aboutStats.map((s, i) => (
                <motion.div
                  key={s.suffix}
                  variants={fadeUp}
                  className="relative rounded-2xl p-8 overflow-hidden flex flex-col justify-between"
                  style={{
                    background: i % 2 === 0 ? "#0A1628" : "rgba(232,93,4,0.06)",
                    border: i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(232,93,4,0.18)",
                  }}
                >
                  {/* Subtle glow */}
                  {i % 2 === 0 && (
                    <div
                      className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20"
                      style={{ background: "#E85D04" }}
                    />
                  )}
                  <div
                    className="text-4xl font-extrabold mb-1 relative z-10"
                    style={{ color: i % 2 === 0 ? "#E85D04" : "#0A1628", ...displayFont }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-sm font-medium relative z-10"
                    style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.55)" : "#6B7280" }}
                  >
                    {s.suffix}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          OUR VALUES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#E85D04] mb-3">
              Our Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]" style={displayFont}>
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={fadeUp}
                  className="relative p-7 rounded-2xl border border-gray-100 hover:border-[#E85D04]/30 transition-all duration-300 hover:shadow-lg group bg-white"
                >
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(circle at top right, rgba(232,93,4,0.08), transparent)" }}
                  />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(232,93,4,0.10)" }}>
                    <Icon className="w-6 h-6" style={{ color: "#E85D04" }} />
                  </div>
                  <h3 className="text-base font-bold text-[#0A1628] mb-2" style={displayFont}>{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CLIENT TESTIMONIALS  (NEW)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
        {/* Dot-grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.10) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
          style={{ background: "#E85D04" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 bottom-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-08"
          style={{ background: "#FF802B" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#E85D04] mb-3">
              Words of Appreciation
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-white"
              style={displayFont}
            >
              Our Client Testimonials
            </motion.h2>
          </motion.div>

          {/* Featured large testimonial */}
          <div className="max-w-3xl mx-auto mb-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative rounded-3xl p-10 sm:p-14 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Gradient top border */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl"
                  style={{ background: "linear-gradient(90deg, transparent, #E85D04, transparent)" }}
                />
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(232,93,4,0.15)" }}
                  >
                    <Quote className="w-6 h-6" style={{ color: "#E85D04" }} />
                  </div>
                </div>
                <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 italic font-light">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: "linear-gradient(135deg, #E85D04, #FF802B)" }}
                  >
                    {testimonials[activeTestimonial].company[0]}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">{testimonials[activeTestimonial].company}</div>
                    <div className="text-white/50 text-xs">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                id="testimonial-prev-btn"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:border-[#E85D04] hover:text-[#E85D04] flex items-center justify-center transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => setActiveTestimonial(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === activeTestimonial ? "28px" : "8px",
                    height: "8px",
                    background: i === activeTestimonial ? "#E85D04" : "rgba(255,255,255,0.25)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
              <button
                id="testimonial-next-btn"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:border-[#E85D04] hover:text-[#E85D04] flex items-center justify-center transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Thumbnail row — all 6 mini-cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                id={`testimonial-card-${i}`}
                variants={fadeUp}
                onClick={() => setActiveTestimonial(i)}
                className="rounded-xl p-4 text-left transition-all duration-300 cursor-pointer"
                style={{
                  background: i === activeTestimonial ? "rgba(232,93,4,0.15)" : "rgba(255,255,255,0.04)",
                  border: i === activeTestimonial ? "1px solid rgba(232,93,4,0.40)" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="text-xs text-white/80 font-bold mb-0.5 truncate">{t.company}</div>
                <div className="text-[10px] text-white/40 truncate">{t.role}</div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BENEFITS & PERKS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#E85D04] mb-3">
                Why Join Us
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-5" style={displayFont}>
                Benefits & Perks
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-base leading-relaxed">
                We invest in the well-being and growth of every team member. Here's what you can expect when you join the NexeraTech family.
              </motion.p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#E85D04]/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,93,4,0.10)" }}>
                    <Star className="w-3 h-3" style={{ color: "#E85D04" }} />
                  </div>
                  <span className="text-[#0A1628] text-sm font-medium">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          APPLY CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.10) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-15"
          style={{ background: "#E85D04" }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full"
                style={{ background: "rgba(232,93,4,0.12)", color: "#E85D04", border: "1px solid rgba(232,93,4,0.25)" }}
              >
                <Briefcase className="w-3.5 h-3.5" /> Join Our Team
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-5"
              style={displayFont}
            >
              Ready to Build a Career <br className="hidden sm:block" />
              You're Proud Of?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Take the first step toward a fulfilling career. Get in touch with our team and let's find the right opportunity for you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                id="careers-apply-cta"
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-95 shadow-lg"
                style={{ background: "linear-gradient(135deg, #E85D04, #FF802B)" }}
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                id="careers-learn-more"
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm border transition-all duration-200 hover:bg-white hover:text-[#0A1628]"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}
              >
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
