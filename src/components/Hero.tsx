import React from 'react';
import { motion } from 'framer-motion';
import { ThreeBackground } from './ThreeBackground';
import { ArrowRight } from 'lucide-react';
export function Hero() {
  return <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />

      <div className="relative z-10 max-w-4xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }}>
          <span className="font-mono text-accent text-sm md:text-base mb-5 block">
            Hi, my name is
          </span>
        </motion.div>

        <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          Sampanna Nampalli.
        </motion.h1>

        <motion.h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }}>
          I like to solve problems and build things.
        </motion.h2>

        <motion.p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }}>
        I'm a Computer Science undergraduate with strong foundations in {' '}
        <span className="text-accent">DSA</span> and {' '}
        <span className="text-accent">Backend</span> development
        (as well as full-stack development), focused on building scalable systems and
        high-impact software products.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }}>
          <a href="#projects" className="group inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent font-mono text-sm rounded hover:bg-accent-tint transition-all duration-300">
            Check out my work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>;
}