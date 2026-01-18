import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}
export function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
  liveUrl,
  index
}: ProjectCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} className="group relative bg-[#112240] p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="flex justify-between items-start mb-6">
        <Folder className="w-10 h-10 text-accent" />
        <div className="flex gap-4">
          {githubUrl && <a href={githubUrl} className="text-slate-400 hover:text-accent transition-colors" aria-label={`View ${title} source code`} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>}
          {liveUrl && <a href={liveUrl} className="text-slate-400 hover:text-accent transition-colors" aria-label={`Visit ${title} live site`} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5" />
            </a>}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
        {title}
      </h3>

      <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

      <ul className="flex flex-wrap gap-3 mt-auto">
        {tech.map(item => <li key={item} className="text-xs font-mono text-slate-500">
            {item}
          </li>)}
      </ul>
    </motion.div>;
}