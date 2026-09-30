import React from 'react';
import { Link } from 'react-router-dom';
import { projects, links } from '../data/content';
import { ExternalLink, PageHeading, usePageTitle } from './Shared';
function ProjectCard({ project, index }) {
  return <article className={`project-card ${project.slug} ${index === 0 ? 'featured-project' : ''}`}>
    <Link className="project-image" to={`/projects/${project.slug}`} aria-label={`Read about ${project.name}`}><img src={project.image} alt={project.alt} loading={index === 0 ? 'eager' : 'lazy'} /><span className="image-link" aria-hidden="true">have a look ↗</span></Link>
    <div className="project-info"><div className="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.kind}</span><span>{project.year}</span></div><Link className="project-title" to={`/projects/${project.slug}`}><h2>{project.name}</h2><span aria-hidden="true">↗</span></Link><p className="project-description">{project.description}</p><p className="project-note"><span aria-hidden="true">✧</span> {project.note}</p><div className="project-bottom"><div className="tool-list">{project.tools.slice(0, 3).map(tool => <span key={tool}>{tool}</span>)}</div><ExternalLink href={project.links[0].href}>{project.links[0].label}</ExternalLink></div></div>
  </article>;
}
export default function Projects() {
  usePageTitle('Projects');
  return <div className="page projects-page"><PageHeading number="01" title="Things I’ve made">Some weekend ideas, some longer projects. Usually with friends.</PageHeading><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div><div className="shelf-callout"><div><span className="eyebrow">and the smaller things</span><h2>Code for the next contest.</h2><p>My ICPC algorithms and notes have a little home of their own.</p></div><Link className="text-link" to="/library">open the library ↗</Link></div><p className="archive-link">More experiments live on <ExternalLink href={links.github}>GitHub</ExternalLink>.</p></div>;
}
