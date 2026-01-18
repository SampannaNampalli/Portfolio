import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { SkillsSection } from '../components/SkillsSection';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { CodeForces, LeetCode } from "../components/icons";

export function PortfolioPage() {
  return <div className="min-h-screen bg-[#0a192f] text-slate-300 selection:bg-teal-300/30 selection:text-teal-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 bg-[#0a192f]/90 backdrop-blur-sm">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }}>
          <a href="#" className="text-accent font-mono font-bold text-xl border-2 border-accent rounded-full w-10 h-10 flex items-center justify-center hover:bg-accent-tint transition-colors">
            S
          </a>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="hidden md:flex items-center gap-8">
          <ol className="flex gap-8 font-mono text-xs text-slate-300">
            <li>
              <a href="#about" className="hover:text-accent transition-colors">
                <span className="text-accent mr-1">01.</span>About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-accent transition-colors">
                <span className="text-accent mr-1">02.</span>Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-accent transition-colors">
                <span className="text-accent mr-1">03.</span>Work
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition-colors">
                <span className="text-accent mr-1">04.</span>Contact
              </a>
            </li>
          </ol>
          <a href='/src/assets/Resume.pdf' className="px-4 py-2 border border-accent text-accent text-xs font-mono rounded hover:bg-accent-tint transition-colors" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </motion.div>
      </nav>

      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="flex items-center text-2xl md:text-3xl font-bold text-white mb-8">
              <span className="text-accent font-mono mr-2">01.</span> About Me
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 text-slate-400 leading-relaxed space-y-4">
                <p>
                Hello! My name is Sampanna, and I enjoy creating things that
                live on the internet. My interest in web development began when I
                started pondering the scale and complexity of the systems that power
                today’s world. This curiosity naturally led me to explore how such
                systems are designed and the foundational principles that hold them
                together.
                </p>
                <p>
                Fast-forward to today, and I've had the privilege of engaging in the art of solving <span className="text-accent">interesting</span> and <span className="text-accent">complex</span> problems,
                while simultaneously learning to build <span className="text-accent">scalable</span> web applications that
                adhere to {' '}
                  <span className="text-accent">industry standards</span>. My primary
                focus these days is building <span className="text-accent">innovative</span>, <span className="text-accent">challenging</span> products
                that help to <span className="text-accent">deepen my understanding</span> of this <span className="text-accent">ever-evolving</span> field.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="relative rounded overflow-hidden bg-accent">
                  <img src="/src/assets/Photo.webp" alt="Profile" className="w-full h-full mix-blend-multiply filter grayscale hover:filter-none transition-all duration-300 opacity-90 hover:opacity-100" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <SkillsSection />
        <ProjectShowcase />

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 text-center max-w-2xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <p className="text-accent font-mono mb-4">04. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-slate-400 text-lg mb-12">
            As a pre-final-year engineering student, I’m currently seeking
            new opportunities at the intern level. That said, my inbox is
            always open. Whether you have a question, an opportunity, or
            just want to say hello, I’ll be happy to get back to you!
            </p>
            <a href="mailto:sampannanampalli11@gmail.com" className="inline-block px-8 py-4 border border-accent text-accent font-mono rounded hover:bg-accent-tint transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              Say Hello
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm font-mono">
        <div className="flex justify-center gap-6 mb-4 md:hidden">
          <a href="#" className="hover:text-accent">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-accent">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-accent">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="hover:text-accent transition-colors cursor-default">
          Designed & Built using MagicPatterns
        </p>
      </footer>

      {/* Social Sidebars */}
      <div className="hidden md:block fixed bottom-0 left-12 z-10">
        <div className="flex flex-col items-center gap-6 text-slate-400">
        
          <a href="https://leetcode.com/u/Indomitable_S/" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            <LeetCode className="w-5 h-5" />
          </a>
          <a href="https://codeforces.com/profile/IndomitableS" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            <CodeForces className="w-5 h-5" />
          </a>
          <a href="https://github.com/SampannaNampalli" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
          {/* <a href="#" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
            <Twitter className="w-5 h-5" />
          </a> */}
          <a href="https://linkedin.com/in/sampanna-nampalli" className="hover:text-accent hover:-translate-y-1 transition-all duration-300" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
          {/* <a href="https://leetcode.com/u/Indomitable_S/" className="hover:text-accent hover:-translate-y-1 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </a> */}
          <div className="w-px h-24 bg-slate-400" />
        </div>
      </div>

      <div className="hidden md:block fixed bottom-0 right-12 z-10">
        <div className="flex flex-col items-center gap-6 text-slate-400">
          <a href="mailto:sampannanampalli11@gmail.com" className="writing-vertical font-mono text-xs hover:text-accent hover:-translate-y-1 transition-all duration-300 tracking-widest" target="_blank" rel="noopener noreferrer">
            sampannanampalli11@gmail.com
          </a>
          <div className="w-px h-24 bg-slate-400" />
        </div>
      </div>
    </div>;
}

/*

                  Fast-forward to today, and I've had the privilege of 
                <span className="text-accent">trying</span> to solve
                <span className="text-accent">interesting</span> and complex problems,
                while at the same time learning to build
                <span className="text-accent">scalable</span>, and a{' '}
                  <span className="text-accent">huge corporation</span>. My main
                  focus these days is building accessible, inclusive products
                  and digital experiences for a variety of clients.
*/