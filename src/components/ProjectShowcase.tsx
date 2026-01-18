import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
const projects = [{
  title: 'Stock Trading Simulator',
  description: 'A full-stack stock trading simulator enabling real-time stock quotes, buy/sell execution, and portfolio tracking using Flask.',
  tech: ["Python", "Flask", "Jinja", "Flask-Session", "SQLite", "PostgreSQL", "Bootstrap"],
  githubUrl: 'https://github.com/SampannaNampalli/Stock-Trading-Simulator',
  liveUrl: 'https://stock-trading-simulator-blue.vercel.app/'
}, {
  title: 'Excalidraw Clone',
  description: 'Designed and implemented a real-time collaborative drawing application using WebSockets, enabling multiple users to concurrently create, update, and delete canvas elements while maintaining a consistent shared state across clients',
  tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recoil', 'RoughJS'],
  githubUrl: 'https://github.com/SampannaNampalli/Excalidraw-Clone',
  liveUrl: 'https://excalidraw-clone-flax.vercel.app/'
  }
//   , {
//   title: 'Neural Network Simulator',
//   description: 'Web-based neural network playground allowing users to visualize and adjust parameters of deep learning models in real-time. Built for educational purposes.',
//   tech: ['Python', 'TensorFlow.js', 'React', 'D3.js'],
//   githubUrl: '#',
//   liveUrl: '#'
// }, {
//   title: 'E-commerce Microservices',
//   description: 'Full-stack e-commerce platform built with microservices architecture. Handles high-concurrency traffic with event-driven communication patterns.',
//   tech: ['Go', 'gRPC', 'PostgreSQL', 'Docker', 'Kubernetes'],
//   githubUrl: '#',
//   liveUrl: '#'
  // }
];
export function ProjectShowcase() {
  return <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="projects">
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
    }} className="mb-16">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-white mb-4">
          <span className="text-accent font-mono mr-2">03.</span> Featured
          Projects
        </h2>
        <div className="h-px bg-slate-700 w-full max-w-xs" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => <ProjectCard key={project.title} {...project} index={index} />)}
      </div>

      {/* <div className="mt-16 text-center">
        <a href="#" className="inline-block px-8 py-4 border border-accent text-accent font-mono text-sm rounded hover:bg-accent-tint transition-colors duration-300">
          View Full Project Archive
        </a>
      </div> */}
    </section>;
}