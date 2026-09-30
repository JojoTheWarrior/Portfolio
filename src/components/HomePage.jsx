import React from 'react';
import { Link } from 'react-router-dom';
import Name from './Name';
import { projects, links } from '../data/content';
import { ExternalLink, usePageTitle } from './Shared';
export default function HomePage() {
  usePageTitle('Joshua Wang');
  return <div className="home-page">
    <section className="hero"><p className="eyebrow"><span className="pixel-spark" aria-hidden="true">✦</span> hey, i’m</p><Name />
      <div className="hero-bottom"><div className="hero-intro"><p>Studying computer science at Waterloo.<br />Interested in <span className="lavender">quant trading</span> and <span className="lavender">math research</span>.</p><p className="muted">Usually working on a project or getting sidetracked by a good problem.</p></div><div className="hero-links"><Link className="text-link" to="/projects">some things i’ve made <span aria-hidden="true">↗</span></Link><a className="quiet-link" href={links.email}>or just say hi ↗</a></div></div>
    </section>
    <section className="home-projects" aria-labelledby="selected-title"><div className="section-heading"><h2 id="selected-title"><span className="section-index">01</span> A few things I’ve worked on</h2><Link className="quiet-link" to="/projects">all projects ↗</Link></div>
      <div className="home-project-grid">{projects.map(project => <Link key={project.slug} className={`home-project ${project.slug}`} to={`/projects/${project.slug}`}><div className="home-project-image"><img src={project.image} alt={project.alt} loading="lazy" /></div><div className="home-project-title"><h3>{project.name}</h3><span aria-hidden="true">↗</span></div><p>{project.kind} <span aria-hidden="true">/</span> {project.year}</p></Link>)}</div>
    </section>
    <section className="home-notes" aria-label="A little more"><div><p className="eyebrow">lately</p><h2>A few tabs open.</h2><p>Research at Huawei, helping with Waterloo Quant Club’s algo competition, and working on Syllavise with my roommates.</p><Link className="text-link" to="/about">a little more about me ↗</Link></div><div><p className="eyebrow">the algorithm shelf</p><h2>For the next problem.</h2><p>A small collection of my ICPC code and notes. Mostly C++, with a soft spot for geometry.</p><Link className="text-link" to="/library">browse the library ↗</Link></div></section>
    <div className="elsewhere"><span className="eyebrow">also around at</span><ExternalLink href={links.github}>GitHub</ExternalLink><ExternalLink href={links.codeforces}>Codeforces</ExternalLink><ExternalLink href={links.dmoj}>DMOJ</ExternalLink></div>
  </div>;
}
