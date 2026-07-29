'use client'

import { useState } from 'react'

export default function ShortguyeditPortfolio() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null)
  
  const projects = [
  {
    title: 'Story Driven Cut 01',
    embed: 'https://www.youtube.com/embed/4XtmDfHChVE?si=$1',
  },
  {
    title: 'Travel Vlog Cut 01',
    embed: 'https://www.youtube.com/embed/KRg6MhpFKro?si=$1',
  },
  {
    title: 'Comedy Cut 01',
    embed: 'https://www.youtube.com/embed/hFifqwCc8ms?si=$1',
  },
  {
    title: 'Family Vlog Cut 01',
    embed: 'https://www.youtube.com/embed/uC9S_nJGFyU?si=OBDr6U3wwXPApjUu',
  },
  {
    title: 'Documentary Cut 01',
    embed: 'https://www.youtube.com/embed/UbQfLszApoU?si=CVdi6_zahpCs0DOw',
  },
  {
    title: 'Motion Graphics 01',
    embed: 'https://www.youtube.com/embed/rAk12Cj4wro?si=$1',
  },
]
const topTestimonials = [
  "/testimonial-1.jpg",
  "/testimonial-2.jpg",
  "/testimonial-3.png",
]

const bottomTestimonials = [
  "/testimonial-4.png",
  "/testimonial-5.png",
  "/testimonial-6.png",
]

const videoTestimonial =
  "https://www.youtube.com/embed/dQw4w9WgXcQ"

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(90,90,90,0.05),transparent_30%),radial-gradient(circle_at_bottom,rgba(40,40,40,0.08),transparent_30%),linear-gradient(to_bottom,#0A0A0A,#050505,#000000)] text-white overflow-x-hidden scroll-smooth">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none">
  <div
    className="w-full h-full"
    style={{
      backgroundImage:
        "url('https://grainy-gradients.vercel.app/noise.svg')",
    }}
  />
</div>
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#3E3E3E]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#8A8A8A]/10 blur-3xl" />
      </div>

      <section className="min-h-[58vh] flex items-center justify-center px-6 pt-28 pb-2">
        <div className="relative max-w-5xl text-center space-y-4">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-[#3E3E3E]/20 px-4 py-2 text-sm backdrop-blur mb-[45px]">
            Video Editor • Motion Graphics • Storytelling
          </div>

          <h1 className="font-dico text-5xl md:text-7xl font-black tracking-tight leading-none">
            ShortGuyEdit
          </h1>

          <p className="max-w-4xl mx-auto text-[#8A8A8A] text-base md:text-lg leading-relaxed">
            your personal storyteller, your vision our vision, let's make your work worth it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a
              href="#portfolio"
              className="w-full sm:w-auto max-w-[260px] rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.03)] px-8 py-4 font-semibold hover:bg-[#ADADAD] hover:text-[#1A1A1A] transition duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto max-w-[260px] rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.03)] px-8 py-4 font-semibold hover:bg-[#ADADAD] hover:text-[#1A1A1A] transition duration-300 hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <section id="portfolio" className="px-6 py-10 max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-[#ADADAD] uppercase tracking-[0.2em] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="font-dico text-4xl md:text-6xl font-black">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 shadow-[0_0_40px_rgba(255,255,255,0.03)] transition duration-500"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={project.embed}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="p-6 space-y-3">
                

                <h3 className="text-2xl font-bold group-hover:text-[#ADADAD] transition">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <section id="about" className="px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="flex justify-center">
          <div className="space-y-4 max-w-3xl">
            <p className="text-[#ADADAD] uppercase tracking-[0.2em] text-sm">
              About Me
            </p>

            <h2 className="font-dico text-4xl md:text-5xl font-black leading-tight">
              Editing That Makes
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ADADAD] to-[#8A8A8A]">
                People Watch Longer
              </span>
            </h2>

            <p className="text-[#8A8A8A] text-lg leading-relaxed">
              I specialize in story-driven editing, motion graphics, pacing, sound design, and cinematic visuals for creators who want high-retention content.
            </p>
          </div>

          </div>
      </section>

    <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <section id="testimonials" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-[#ADADAD] uppercase tracking-[0.2em] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="font-dico text-4xl md:text-5xl font-black">
            Client Feedback
          </h2>
        </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

  {/* LEFT COLUMN */}
  <div className="space-y-8">
    <button
      onClick={() => setSelectedTestimonial(topTestimonials[0])}
      className="group w-full mt-0 lg:mt-60 rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 transition duration-500"
    >
      <img
        src={topTestimonials[0]}
        className="w-full object-cover group-hover:scale-105 transition duration-500"
      />
    </button>

    <button
      onClick={() => setSelectedTestimonial(bottomTestimonials[0])}
      className="group w-full mt-8 lg:mt-14 rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 transition duration-500"
    >
      <img
        src={bottomTestimonials[0]}
        className="w-full object-cover group-hover:scale-105 transition duration-500"
      />
    </button>
  </div>

  {/* MIDDLE COLUMN */}
  <div className="space-y-8">

    <button
      onClick={() => setSelectedTestimonial(topTestimonials[1])}
      className="group w-full rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 transition duration-500"
    >
      <img
        src={topTestimonials[1]}
        className="w-full object-cover group-hover:scale-105 transition duration-500"
      />
    </button>

    <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur shadow-[0_0_40px_rgba(255,255,255,0.03)]">
      <iframe
        className="w-full aspect-[9/16]"
        src={videoTestimonial}
        title="Video Testimonial"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>

    <button
      onClick={() => setSelectedTestimonial(bottomTestimonials[1])}
      className="group w-full rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 transition duration-500"
    >
      <img
        src={bottomTestimonials[1]}
        className="w-full object-cover group-hover:scale-105 transition duration-500"
      />
    </button>

  </div>

  {/* RIGHT COLUMN */}
  <div className="space-y-8">

    <button
      onClick={() => setSelectedTestimonial(topTestimonials[2])}
      className="group w-full mt-0 lg:mt-59 rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 transition duration-500"
    >
      <img
        src={topTestimonials[2]}
        className="w-full object-cover group-hover:scale-105 transition duration-500"
      />
    </button>

    <button
      onClick={() => setSelectedTestimonial(bottomTestimonials[2])}
      className="group w-full mt-8 lg:mt-10 rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 transition duration-500"
    >
      <img
        src={bottomTestimonials[2]}
        className="w-full object-cover group-hover:scale-105 transition duration-500"
      />
    </button>

  </div>

</div>
        
      </section>

    <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

{selectedTestimonial && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/80 backdrop-blur-md px-4"
    onClick={() => setSelectedTestimonial(null)}
  >
    <img
      src={selectedTestimonial}
      alt="Full Testimonial"
      className="max-w-5xl w-full max-h-[90vh] rounded-3xl border border-white/10 shadow-2xl"
    />
  </div>
)}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur p-10 md:p-16 text-center">
          <p className="text-[#ADADAD] uppercase tracking-[0.2em] text-sm mb-6">
            Contact
          </p>

          <h2 className="font-dico text-4xl md:text-6xl font-black mb-6">
            <>
  <span className="block md:inline">Your Vision</span>{" "}
  <span className="block md:inline">Our Vision</span>
</>
          </h2>

          <p className="text-[#8A8A8A] text-lg mb-10">
            Available for freelance projects, creator collaborations, and brand work.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://x.com/shortguyedit"
              className="rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.03)] px-6 py-4 font-semibold hover:bg-[#ADADAD] hover:text-[#1A1A1A] transition duration-300 hover:-translate-y-1"
            >
              X (Twitter)
            </a>

            <a
              href="https://www.instagram.com/shortguyedit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.03)] px-6 py-4 font-semibold hover:bg-[#ADADAD] hover:text-[#1A1A1A] transition duration-300 hover:-translate-y-1"
            >
              Instagram
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shortguyedit@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.03)] px-6 py-4 font-semibold hover:bg-[#ADADAD] hover:text-[#1A1A1A] transition duration-300 hover:-translate-y-1"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      </div>
  )
}
