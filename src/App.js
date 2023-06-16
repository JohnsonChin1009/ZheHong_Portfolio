import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import Introduction from './components/Introduction/Introduction';
import SkillSet from './components/SkillSet/SkillSet';
import Project from './components/Project/Project';

function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const bodyRef = useRef(null);
  const introRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  const handleScroll = (element) => {
    const el = element === "introduction" ? introRef : element === "skills" ? skillRef : projectRef;
    el.current.scrollIntoView();
  }

  const links = [
    <Link to="/" className={activeSection === "introduction" ? "" : '' } onClick={() => handleScroll("introduction")} key="home" >Intro</Link>,
    <Link to="#skills" className={activeSection === "skills" ? "active" : ''} onClick={() => handleScroll("skills")} key="skill" >Skills</Link>,
    <Link to="#projects" className={activeSection === "projects" ? "active" : ''} onClick={() => handleScroll("projects")} key="project">Projects</Link>
  ];

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('data-id'));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { rootMargin: "-300px" });

    const childElements = bodyRef.current?.children;
    Array.from(childElements).forEach(child => {
      observer.observe(child);
    })

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <React.Fragment>
      <Header>
        {links}
      </Header>
      <div className='Container pad-2' ref={bodyRef}>
        <section id='introduction' ref={introRef} data-id="introduction">
          <Introduction />
        </section>
        <section id='skills' ref={skillRef} data-id="skills">
          <SkillSet />
        </section>
        <section id='projects' ref={projectRef} data-id="projects">
          <Project />
        </section>
      </div>
    </React.Fragment>

  );
}

export default App;
