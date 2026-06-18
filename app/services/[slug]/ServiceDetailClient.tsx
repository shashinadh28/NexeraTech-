"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Code2, Brain, Shield, Banknote, Users, Cloud, Monitor, UserCheck, BarChart3, Zap } from "lucide-react";
import type { Service } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  Globe, Code2, Brain, Shield, Banknote, Users, Cloud, Monitor, CheckCircle, UserCheck, BarChart3, Zap,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

interface Props {
  service: Service;
  related: Service[];
}

export default function ServiceDetailClient({ service, related }: Props) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <div className="overflow-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: "#0B1120" }}>
        {/* Dot grid */}
        <div
          aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.15) 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}
        />
        {/* Ambient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -right-40 top-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-18"
            style={{ background: `radial-gradient(circle, ${service.color} 0%, transparent 70%)` }}
          />
          <div
            className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-08"
            style={{ background: "radial-gradient(circle, rgba(232,93,4,0.25) 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/40 hover:text-[#E85D04] transition-colors">Home</Link>
            <span className="text-white/25">/</span>
            <Link href="/services" className="text-white/40 hover:text-[#E85D04] transition-colors">Services</Link>
            <span className="text-white/25">/</span>
            <span className="font-medium" style={{ color: service.color }}>{service.shortTitle}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Icon */}
              <motion.div
                variants={fadeUp}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 animate-float"
                style={{ background: service.color + "25" }}
              >
                <Icon className="w-8 h-8" style={{ color: service.color }} />
              </motion.div>

              {/* Eyebrow */}
              <motion.div variants={fadeUp} className="mb-4">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                  style={{
                    background: service.color + "22",
                    color: service.color,
                    border: `1px solid ${service.color}40`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                  {service.shortTitle}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.04] tracking-tight"
                style={displayFont}
              >
                {service.title}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl mb-4 font-medium" style={{ color: service.color }}>
                {service.tagline}
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/50 leading-relaxed mb-8">
                {service.description}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="glow-btn"
                  style={{ background: service.color, boxShadow: `0 8px 28px ${service.color}55` }}
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/case-studies" className="glow-btn glow-btn-ghost">
                  See Case Studies
                </Link>
              </motion.div>
            </motion.div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div
                  className="w-72 h-72 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
                  style={{
                    background: service.color + "15",
                    border: `1px solid ${service.color}30`,
                    boxShadow: `0 0 60px ${service.color}18`,
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-15"
                    style={{ backgroundImage: `radial-gradient(circle, ${service.color}55 1px, transparent 1px)`, backgroundSize: "20px 20px" }}
                  />
                  <p className="text-5xl font-bold text-white mb-2 relative z-10" style={displayFont}>{service.heroStat.value}</p>
                  <p className="text-white/50 text-center px-8 relative z-10 text-sm">{service.heroStat.label}</p>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <Icon className="w-9 h-9" style={{ color: service.color }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES & USE CASES ────────────────────────────────────────── */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] blur-[90px]" style={{ background: "rgba(232,93,4,0.04)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Features */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ background: service.color + "12", color: service.color, border: `1px solid ${service.color}30` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                  What&apos;s Included
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#0A1628] mb-8 leading-tight" style={displayFont}>
                Key Features &amp; Capabilities
              </motion.h2>
              <motion.ul variants={stagger} className="space-y-4">
                {service.features.map((feature, i) => (
                  <motion.li key={i} variants={fadeUp} className="feature-item">
                    <div className="feature-dot" />
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Use Cases */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ background: "rgba(232,93,4,0.08)", color: "#E85D04", border: "1px solid rgba(232,93,4,0.25)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
                  Use Cases
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#0A1628] mb-8 leading-tight" style={displayFont}>
                When to Choose This Service
              </motion.h2>
              <motion.ul variants={stagger} className="space-y-4">
                {service.useCases.map((uc, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="group relative flex items-start gap-3 bg-white rounded-xl p-4 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                    style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 1px 6px rgba(15,23,42,0.05)" }}
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                    />
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                    <span className="text-gray-600 text-sm leading-relaxed">{uc}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section
        className="relative py-16 overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.10) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10"
          >
            <span className="eyebrow-tag mb-5"><span className="dot" />Verticals</span>
            <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight" style={displayFont}>
              Industries We Serve with This Service
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-wrap gap-3 justify-center"
          >
            {service.industries.map((ind, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  href="/industries"
                  className="group px-5 py-3 rounded-full bg-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ border: "1px solid rgba(15,23,42,0.10)", boxShadow: "0 2px 8px rgba(15,23,42,0.06)", color: "#0A1628" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${service.color}50`;
                    (e.currentTarget as HTMLElement).style.color = service.color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${service.color}18`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,23,42,0.10)";
                    (e.currentTarget as HTMLElement).style.color = "#0A1628";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(15,23,42,0.06)";
                  }}
                >
                  {ind}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── RELATED SERVICES ────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="relative section-py overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.06) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="flex flex-col items-center text-center mb-12"
            >
              <span className="eyebrow-tag mb-5"><span className="dot" />Also Explore</span>
              <h2 className="text-3xl font-extrabold text-[#0A1628] tracking-tight" style={displayFont}>Related Services</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rel) => {
                const RelIcon = iconMap[rel.icon] || Globe;
                return (
                  <motion.div key={rel.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <Link
                      href={`/services/${rel.slug}`}
                      className="group relative flex flex-col h-full bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                      style={{ border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 2px 12px rgba(15,23,42,0.06)" }}
                    >
                      <span className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, transparent, ${rel.color}, transparent)` }}
                      />
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: rel.color + "18" }}>
                        <RelIcon className="w-5 h-5" style={{ color: rel.color }} />
                      </div>
                      <h3 className="font-bold text-[#0A1628] mb-1 group-hover:text-[#E85D04] transition-colors" style={displayFont}>{rel.shortTitle}</h3>
                      <p className="text-sm text-gray-500 flex-1">{rel.tagline}</p>
                      <div className="flex items-center gap-1 mt-4 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: rel.color }}>
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: rel.color }} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden border-t border-white/05"
        style={{ backgroundColor: "#070D19" }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-15"
          style={{ background: `radial-gradient(circle, ${service.color}60 0%, transparent 70%)` }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: service.color + "22", color: service.color, border: `1px solid ${service.color}45` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: service.color }} />
                Ready to Start?
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-4 leading-[1.04] tracking-tight" style={displayFont}>
              Ready to Get Started with {service.shortTitle}?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg mb-8">
              Let&apos;s discuss your requirements and build the right engagement model.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="glow-btn"
                style={{ background: service.color, boxShadow: `0 8px 28px ${service.color}55` }}
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="glow-btn glow-btn-ghost">
                All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
