'use client';

import { FaCalendar, FaUser, FaBuilding, FaExternalLinkAlt, FaGithub, FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import Modal from './Modal';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  results: Record<string, string>;
  client: {
    name: string;
    industry: string;
    location: string;
    projectManager: string;
  };
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  challenges: string[];
  solutions: string[];
  features: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="p-6">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="text-purple-400 text-sm font-medium mb-2">
              {project.category}
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-zinc-300 leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            {/* Client Info */}
            <div className="bg-zinc-800/50 rounded-xl p-4 mb-6">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <FaBuilding className="mr-2 text-purple-400" />
                Client Information
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-zinc-400">Company:</span>
                  <div className="text-white font-medium">{project.client.name}</div>
                </div>
                <div>
                  <span className="text-zinc-400">Industry:</span>
                  <div className="text-white font-medium">{project.client.industry}</div>
                </div>
                <div>
                  <span className="text-zinc-400">Location:</span>
                  <div className="text-white font-medium">{project.client.location}</div>
                </div>
                <div>
                  <span className="text-zinc-400">Project Manager:</span>
                  <div className="text-white font-medium">{project.client.projectManager}</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-zinc-800/50 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <FaCalendar className="mr-2 text-cyan-400" />
                Project Timeline
              </h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-zinc-400">Start Date:</span>
                  <div className="text-white font-medium">{project.timeline.start}</div>
                </div>
                <div>
                  <span className="text-zinc-400">End Date:</span>
                  <div className="text-white font-medium">{project.timeline.end}</div>
                </div>
                <div>
                  <span className="text-zinc-400">Duration:</span>
                  <div className="text-white font-medium">{project.timeline.duration}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Image 
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-xl"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            
            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <a 
                href={project.liveUrl}
                className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <FaExternalLinkAlt className="mr-2" />
                View Live Site
              </a>
              <a 
                href={project.githubUrl}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center"
              >
                <FaGithub className="mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 text-white text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Project Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(project.results).map(([key, value], index) => (
              <div key={index} className="bg-zinc-800/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-lime-400 mb-1">
                  {value}
                </div>
                <div className="text-zinc-400 text-sm capitalize">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center text-zinc-300">
                <FaCheck className="text-lime-400 mr-3 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Challenges</h3>
            <div className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <p className="text-zinc-300 text-sm">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <div className="space-y-3">
              {project.solutions.map((solution, index) => (
                <div key={index} className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-4">
                  <p className="text-zinc-300 text-sm">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}