"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Users, Globe, Zap, CheckCircle } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function CSRClient() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #132238 60%, #E85D0415 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#E85D04] opacity-8 blur-[120px]" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 justify-center mb-4 text-sm">
              <Link href="/" className="text-white/40 hover:text-[#E85D04] transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <span className="text-[#E85D04] font-medium">CSR Foundation</span>
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-[#FFF4EC] text-[#E85D04] text-xs font-bold uppercase tracking-widest rounded-full mb-6">Social Impact</motion.span>
            <motion.div variants={fadeUp} className="w-20 h-20 rounded-3xl bg-[#E85D04] flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold text-white mb-4">
              IShara <span className="text-[#E85D04]">Foundation</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-[#E85D04] font-semibold mb-6">
              NexeraTech&apos;s CSR Initiative
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              NexeraTech Solutions actively contributes to IShara Foundation — using technology and resources for meaningful social change, digital inclusion, and community development across India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Value */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          backgroundColor: "#0A1628",
          backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "Social Impact", icon: "❤️", label: "Our Core Value" },
              { value: "IShara Foundation", icon: "🤝", label: "CSR Partner" },
              { value: "Digital Inclusion", icon: "💻", label: "Focus Area" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <span className="text-4xl block mb-3">{item.icon}</span>
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="text-white/50 text-sm mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About IShara */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-[#FFF4EC] text-[#E85D04] text-xs font-bold uppercase tracking-widest rounded-full mb-4">About IShara Foundation</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-6">Technology for Meaningful Social Change</motion.h2>
              <motion.div variants={fadeUp} className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  IShara Foundation is a social impact organization dedicated to digital inclusion, education, and community development. NexeraTech Solutions is a committed contributor — bringing technology expertise, resources, and volunteering to support IShara&apos;s programs.
                </p>
                <p>
                  At NexeraTech, social impact is one of our four core values — not a footnote in an annual report. We believe that companies with technology capabilities have a responsibility and an opportunity to use those capabilities for good.
                </p>
              </motion.div>
            </motion.div>
            {/* Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-gradient-to-br from-[#FFF4EC] to-[#E85D04]/10 rounded-3xl p-10 border border-[#E85D04]/20 text-center">
                <div className="w-24 h-24 rounded-full bg-[#E85D04] flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">IShara Foundation</h3>
                <p className="text-[#E85D04] font-semibold mb-4">NexeraTech CSR Partner</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Together, we are working toward a future where technology access, digital literacy, and community development are available to everyone — regardless of socioeconomic background.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section
        className="section-py relative overflow-hidden"
        style={{
          backgroundColor: "#F8FAFC",
          backgroundImage: "radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="eyebrow-tag mb-4"><span className="dot" />What We Support</span>
            <h2 className="text-4xl font-bold text-white mt-4">Focus Areas</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Digital Inclusion", desc: "Making technology and internet access available to underserved communities.", color: "#E85D04" },
              { icon: Users, title: "Education & Literacy", desc: "Digital literacy programs, computer skills training, and educational resources for youth.", color: "#E85D04" },
              { icon: Zap, title: "Skills & Employment", desc: "Technology skills training and career development programs to enable economic mobility.", color: "#E85D04" },
              { icon: Heart, title: "Community Development", desc: "Using technology infrastructure to support community services and development projects.", color: "#E85D04" },
            ].map((area, i) => (
              <motion.div key={i} variants={fadeUp} className="group bg-white rounded-2xl p-7 border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform" style={{ background: area.color + "18" }}>
                  <area.icon className="w-7 h-7" style={{ color: area.color }} />
                </div>
                <h3 className="font-bold text-white mb-3">{area.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How NexeraTech Contributes */}
      <section className="section-py section-line-dark border-t border-white/05 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] rounded-full blur-[100px] opacity-12" style={{ background: "rgba(232,93,4,0.35)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="eyebrow-tag eyebrow-tag-dark mb-4"><span className="dot" />Our Contribution</span>
            <h2 className="text-4xl font-bold text-white mt-4">How NexeraTech Contributes</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              "Technology expertise — pro bono and subsidized technology development for IShara programs",
              "Financial contribution — annual CSR commitment to IShara Foundation programs and operations",
              "Team volunteering — NexeraTech team members volunteer time and skills at IShara events",
              "Digital skills training — NexeraTech engineers deliver digital literacy and coding workshops",
              "Infrastructure support — technology infrastructure donation for IShara community centers",
              "Long-term partnership — multi-year commitment to IShara&apos;s strategic development goals",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#E85D04]/30 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#E85D04] flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-[#FFF4EC] text-[#E85D04] text-xs font-bold uppercase tracking-widest rounded-full mb-6">Our Commitment</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-white mb-6">Social Impact is a Core Value, Not a Campaign</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg leading-relaxed">
              At NexeraTech Solutions, Social Impact is listed alongside Innovation First, Delivery Excellence, and Client Partnership as one of our four defining values. We give back through IShara Foundation, using technology for meaningful social change — because we believe that technology companies have both the capability and the responsibility to do so.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden border-t border-white/05" style={{ backgroundColor: "#070D19" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-15" style={{ background: "radial-gradient(circle, rgba(232,93,4,0.40) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="eyebrow-tag eyebrow-tag-dark mb-6 inline-flex"><span className="dot" />CSR Initiative</span>
          <h2 className="text-4xl font-bold text-white mb-4 mt-4">Want to Learn More or Partner with IShara?</h2>
          <p className="text-white/60 text-lg mb-8">Reach out to the NexeraTech team and we&apos;ll connect you with IShara Foundation directly.</p>
          <Link href="/contact" className="glow-btn">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
