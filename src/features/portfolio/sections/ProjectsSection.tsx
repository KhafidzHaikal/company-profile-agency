'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';
import Image from 'next/image';
import ProjectModal from '@/components/ui/ProjectModal';
import { projects, projectFilters, type Project } from '@/data/projects';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  


  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-zinc-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
            Explore our most impactful projects that showcase our expertise and deliver exceptional results for our clients.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <button 
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FaEye />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-purple-400 text-sm font-medium mb-2">
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800">
                  {Object.entries(project.results).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-lime-400 font-bold text-sm">
                        {value}
                      </div>
                      <div className="text-zinc-500 text-xs capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Join our portfolio of successful projects. Let's discuss how we can help you achieve similar outstanding results.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
      
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}