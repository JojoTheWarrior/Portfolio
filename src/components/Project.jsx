import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/content';
import { ExternalLink, NotFound, usePageTitle } from './Shared';
export default function Project() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  usePageTitle(project?.name || 'Page not found');
  if (!project) return <NotFound />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <article className={`page project-detail ${slug}`}><Link className="back-link" to="/projects">← all projects</Link><header className="detail-heading"><p className="eyebrow">{project.kind} / {project.year}</p><h1>{project.name}<span className="pink">.</span></h1><p>{project.intro}</p><div className="inline-links">{project.links.map(link => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}</div></header><figure className="detail-figure"><img src={project.image} alt={project.alt} /><figcaption>{project.note}</figcaption></figure><div className="detail-body"><aside><p className="eyebrow">made with</p><ul className="detail-tools">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></aside><div className="project-prose">{project.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<h2>{project.detailTitle}</h2><p>{project.detail}</p></div></div><Link className="next-project" to={`/projects/${next.slug}`}><span className="eyebrow">another project</span><span>{next.name} <span aria-hidden="true">↗</span></span></Link></article>;
}
