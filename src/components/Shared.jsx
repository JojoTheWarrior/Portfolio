import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../data/content';
export function usePageTitle(title) { useEffect(() => { document.title = `${title} · JojoTheWarrior`; }, [title]); }
export function ExternalLink({ href, children, className = '' }) { return <a className={`external-link ${className}`} href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>; }
export function PageHeading({ number, title, children }) { return <header className="page-heading"><p className="eyebrow">{number} / {title.toLowerCase()}</p><h1>{title}<span className="pink">.</span></h1><p className="page-intro">{children}</p></header>; }
export function Footer() {
  return <footer className="site-footer"><div><Link to="/" className="footer-signature">jojo<span className="pink">.</span></Link><span className="footer-note">thanks for stopping by.</span></div><div className="footer-links"><a href={links.email}>email ↗</a><ExternalLink href={links.github}>github</ExternalLink><ExternalLink href={links.linkedin}>linkedin</ExternalLink></div></footer>;
}
export function Contact() {
  usePageTitle('Say hi');
  return <div className="page narrow-page"><PageHeading number="04" title="Say hi">Always happy to chat about a project, a puzzle, or whatever you’re working on.</PageHeading><a className="contact-email" href={links.email}>j2975wan@uwaterloo.ca <span aria-hidden="true">↗</span></a><div className="inline-links"><ExternalLink href={links.linkedin}>LinkedIn</ExternalLink><ExternalLink href={links.github}>GitHub</ExternalLink></div></div>;
}
export function NotFound() {
  usePageTitle('Page not found');
  return <div className="page narrow-page"><PageHeading number="404" title="Nothing here">This page seems to have wandered off.</PageHeading><Link className="text-link" to="/">← Back home</Link></div>;
}
