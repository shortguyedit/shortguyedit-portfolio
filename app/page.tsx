'use client'

import { useState } from 'react'

export default function ShortguyeditPortfolio() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null)
  
  const projects = [
    {
      title: 'Story Driven Video Cut',
      category: 'Storytelling',
      embed: 'https://www.youtube.com/embed/4XtmDfHChVE?si=$1',
    },
    {
      title: 'Vlog Video Cut',
      category: 'Vlog Editing',
      embed: 'https://www.youtube.com/embed/KRg6MhpFKro?si=$1',
    },
    {
      title: 'Funny Video Cut',
      category: 'Comedy Editing',
      embed: 'https://www.youtube.com/embed/hFifqwCc8ms?si=$1',
    },
    {
      title: 'Motion Graphics',
      category: 'Motion Design',
      embed: 'https://www.youtube.com/embed/rAk12Cj4wro?si=$1',
    },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(173,173,173,0.08),transparent_35%),radial-gradient(circle_at_bottom,rgba(62,62,62,0.12),transparent_35%),linear-gradient(to_bottom,#1A1A1A,#111111,#1A1A1A)] text-white overflow-x-hidden scroll-smooth">
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
    <div className="max-w-6xl mx-auto h-px bg-white/5" />
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
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold group-hover:text-[#ADADAD] transition">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-6 py-16 max-w-5xl mx-auto text-center">
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

      <section id="testimonials" className="px-6 py-12 max-w-6xl mx-auto">
        <div className="text-left mb-8">
          <p className="text-[#ADADAD] uppercase tracking-[0.2em] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="font-dico text-4xl md:text-5xl font-black">
            Client Feedback
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group h-fit rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 transition duration-500 cursor-pointer">
            <button onClick={() => setSelectedTestimonial('/testimonial-1.jpg')}>
              <img
                src="/testimonial-1.jpg"
                alt="Testimonial 1"
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </button>
          </div>

          <div className="group h-fit rounded-3xl overflow-hidden border border-white/10 bg-[#3E3E3E]/20 backdrop-blur hover:border-[#ADADAD]/40 transition duration-500 cursor-pointer">
            <button onClick={() => setSelectedTestimonial('/testimonial-2.jpg')}>
              <img
                src="/testimonial-2.jpg"
                alt="Testimonial 2"
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </button>
          </div>
        </div>
      </section>
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
      <section id="contact" className="px-6 py-14">
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
