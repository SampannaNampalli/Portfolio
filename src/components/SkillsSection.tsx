import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Terminal, BookIcon} from 'lucide-react';
const skills = [{
  category: 'Frontend',
  icon: Layout,
  items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'BootStrap']
}, {
  category: 'Backend',
  icon: Server,
  items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST', 'Python', 'Flask', 'WebSockets']
  },
  {
    category: 'Relevant Coursework - NPTEL qualified',
    icon: BookIcon,
    items: ['Operating Systems', 'Object Oriented Programming', 'DBMS']
  }
//   , {
//   category: 'DevOps & Tools',
//   icon: Terminal,
//   items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Terraform']
  // }
];
export function SkillsSection() {
  return <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="skills">
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
          <span className="text-accent font-mono mr-2">02.</span> Technical
          Skills
        </h2>
        <div className="h-px bg-slate-700 w-full max-w-xs" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => <motion.div key={skillGroup.category} initial={{
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
      }} className="bg-[#112240] p-6 rounded-lg border border-slate-800 hover:border-accent/30 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <skillGroup.icon className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-white">
                {skillGroup.category}
              </h3>
            </div>

            <ul className="space-y-3">
              {skillGroup.items.map(item => (
                <motion.li
                  key={item}
                  className="flex items-center font-mono text-sm cursor-pointer group"
                  whileHover={{
                    scale: 1.08,
                    color: '#5df0ce'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:bg-[#5df0ce] transition-colors duration-200" />
                  <span className="transition-colors duration-200 group-hover:text-[#5df0ce]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>)}
      </div>
    </section>;
}