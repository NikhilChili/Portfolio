"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile, projects, skills, experience, highlights, industries, interests } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual visual-${project.visual}`}>
      <div className="visual-grid" />
      {project.visual === "journey" && (
        <>
          <div className="journey-line" />
          <div className="journey-card">CUSTOMER<br />JOURNEY</div>
          <div className="visual-steps">{project.visualSteps.map((step) => <span key={step}>{step}</span>)}</div>
        </>
      )}
      {project.visual === "whatsapp" && (
        <>
          <div className="phone-mock">
            <span className="phone-head">Messages</span>
            <span className="bubble bubble-a">Application received ✓</span>
            <span className="bubble bubble-b">Your application is being reviewed.</span>
            <span className="bubble bubble-a">Your next step is ready →</span>
          </div>
          <div className="orbit orbit-a" />
        </>
      )}
      {project.visual === "analytics" && (
        <>
          <div className="analytics-bars"><i/><i/><i/><i/><i/><i/></div>
          <div className="analytics-label">CAMPAIGN<br/>PERFORMANCE</div>
          <div className="analytics-number">CTR</div>
          <div className="visual-steps">{project.visualSteps.map((step) => <span key={step}>{step}</span>)}</div>
        </>
      )}
      {/* {project.visual === "playbook" && (
        <>
          <div className="playbook-title">COMMS<br />SYSTEM</div>
          <div className="playbook-circle">CX</div>
          <div className="playbook-note">MAP → TRIGGER → TEST → MEASURE</div>
        </>
      )} */}
    </div>
  );
}

export default function Portfolio() {
  const root = useRef(null);
  const menu = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".hero-kicker", { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-name-line", { yPercent: 110, duration: 1.25, stagger: 0.08 }, "-=0.45")
        .from(".hero-meta", { y: 20, opacity: 0, duration: 0.7 }, "-=0.7")
        .from(".hero-scroll", { opacity: 0, duration: 0.5 }, "-=0.35");

      gsap.to(".hero-name", {
        y: -80,
        scale: 0.72,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(".hero-orb", {
        scale: 1.8,
        rotate: 35,
        yPercent: 60,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 },
      });

      gsap.to(".hero-meta", {
        y: 100,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "65% top", scrub: true },
      });

      gsap.utils.toArray(".reveal-lines").forEach((el) => {
        gsap.from(el, {
          y: 90,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none reverse" },
        });
      });

      gsap.from(".about-copy", {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about", start: "top 70%" },
      });

      gsap.utils.toArray(".project-card").forEach((card, index) => {
        const image = card.querySelector(".project-visual");
        const copy = card.querySelector(".project-copy");
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.03,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
        });
        gsap.fromTo(image, { y: 45, scale: 0.94 }, { y: -20, scale: 1, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 } });
        gsap.from(copy, { x: index % 2 ? 35 : -35, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 78%" } });
      });

      const marquee = gsap.to(".marquee-track", { xPercent: -30, duration: 18, ease: "none", repeat: -1 });
      gsap.to(".marquee-track", { x: 80, ease: "none", scrollTrigger: { trigger: ".marquee", start: "top bottom", end: "bottom top", scrub: 1 } });
      marquee.pause();
      ScrollTrigger.create({ trigger: ".marquee", start: "top bottom", end: "bottom top", onEnter: () => marquee.play(), onEnterBack: () => marquee.play(), onLeave: () => marquee.pause(), onLeaveBack: () => marquee.pause() });

      gsap.from(".experience-row", { x: 100, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".experience", start: "top 70%" } });

      gsap.from(".highlight-item", { x: -50, opacity: 0, stagger: 0.08, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".highlights", start: "top 70%" } });

      gsap.from(".contact-title span", { yPercent: 110, opacity: 0, stagger: 0.08, duration: 1.1, ease: "power4.out", scrollTrigger: { trigger: ".contact", start: "top 72%" } });

      gsap.to(".footer-orb", { y: -100, rotate: -20, ease: "none", scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom top", scrub: 1 } });
    }, root);

    return () => ctx.revert();
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
    requestAnimationFrame(() => {
      gsap.fromTo(menu.current, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 0.8, ease: "power4.inOut" });
      gsap.fromTo(".menu-link", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, delay: 0.2, ease: "power3.out" });
    });
  };

  const closeMenu = () => {
    gsap.to(menu.current, { clipPath: "inset(0 0 100% 0)", duration: 0.65, ease: "power4.inOut", onComplete: () => setMenuOpen(false) });
  };

  const go = (id) => {
    closeMenu();
    setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }), 650);
  };

  return (
    <main ref={root}>
      <div className="noise" />
      <header className="nav">
        <a href="#home" className="brand">Shivam Yadav</a>
        <button className="menu-button" onClick={openMenu}>Menu <i /></button>
      </header>

      {menuOpen && (
        <div ref={menu} className="menu-overlay">
          <div className="menu-top"><span>Navigation</span><button onClick={closeMenu}>Close ×</button></div>
          <nav className="menu-nav">
            <button className="menu-link" onClick={() => go("#home")}><small>01</small>Home</button>
            <button className="menu-link" onClick={() => go("#work")}><small>02</small>Work</button>
            <button className="menu-link" onClick={() => go("#about")}><small>03</small>About</button>
            <button className="menu-link" onClick={() => go("#contact")}><small>04</small>Contact</button>
          </nav>
        </div>
      )}

      <section id="home" className="hero">
        {/* <div className="hero-orb"><span>COMMS<br/>CX</span></div> */}
        <div className="hero-kicker">{profile.title}</div>
        <div className="hero-name">
          <div className="hero-name-line-wrap"><div className="hero-name-line">{profile.firstName}</div></div>
          <div className="hero-name-line-wrap"><div className="hero-name-line outline">{profile.lastName}</div></div>
        </div>
        <div className="hero-meta">
          <span>Based in Mumbai, India</span>
          <span>01 — 04 / Portfolio 2026</span>
        </div>
        <div className="hero-scroll"><span>Scroll to explore</span><b>↓</b></div>
      </section>

      <section className="statement section-pad">
        <div className="eyebrow">01 / INTRO</div>
        <p className="statement-text reveal-lines">{profile.intro}</p>
        <p className="intro-subtext">{profile.introSubtext}</p>
        <div className="statement-bottom"><span>2 years’ experience</span><span>Marketing / Communications / Customer Journeys</span></div>
      </section>

      <section id="about" className="about section-pad">
        <div className="eyebrow">02 / ABOUT</div>
        <div className="about-grid">
          <Image
            className="about-mark"
            src="/shivamimage-final.png"
            alt="Portrait of Shivam Yadav"
            width={1568}
            height={1680}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="about-copy">
            <h2 className="reveal-lines">Building better conversations <span>between brands and customers.</span></h2>
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="skill-list">
              {skills.map((group) => (
                <div className="skill-group" key={group.category}>
                  <h3>{group.category}</h3>
                  <div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work section-pad">
        <div className="section-heading"><div className="eyebrow">03 / SELECTED WORK</div><span>Scroll / Explore</span></div>
        <p className="work-intro">Proof that I don’t just talk about customer journeys. I build them, for both sides of the table.</p>
        <div className="projects">
          {projects.map((project, i) => (
            <article className={`project-card card-${i + 1}`} key={project.title}>
              <ProjectVisual project={project} />
              <div className="project-copy">
                <div className="project-index">{project.number}</div>
                <h3>{project.title}</h3>
                {project.tagline && <p className="project-tagline">{project.tagline}</p>}
                <div className="project-meta"><span>{project.category}</span></div>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee"><div className="marquee-track">DIGITAL COMMUNICATIONS <i>✳</i> CUSTOMER JOURNEYS <i>✳</i> CAMPAIGN STRATEGY <i>✳</i> CUSTOMER EXPERIENCE <i>✳</i> MARKETING OPERATIONS <i>✳</i></div></section>

      <section className="experience section-pad">
        <div className="section-heading"><div className="eyebrow">04 / EXPERIENCE</div><span>Nov 2025 – Present</span></div>
        <div className="experience-list">
          {experience.map((item) => (
            <div className="experience-row" key={item.role}>
              <span className="exp-period">{item.period}</span>
              <div className="experience-copy">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                {item.tagline && <p className="experience-tagline">{item.tagline}</p>}
                <small>{item.description}</small>
                {item.responsibilities && <ul className="experience-responsibilities">{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="highlights section-pad">
        <div className="eyebrow">05 / IMPACT</div>
        <p className="impact-intro">The scoreboard. Less talk, more results.</p>
        <div className="highlight-list">{highlights.map((item, i) => <div className="highlight-item" key={item.statement}><span>0{i + 1}</span><div><h3>{item.statement}</h3><p>{item.detail}</p></div></div>)}</div>
      </section>

      <section className="focus section-pad">
        <div className="eyebrow">06 / INDUSTRY FOCUS</div>
        <div className="focus-grid">
          {industries.map((group) => (
            <div className="industry-group" key={group.category}>
              <h2>{group.category}</h2>
              {group.intro && <p className="industry-intro">{group.intro}</p>}
              <div className="industry-list">{group.items.map((item) => <article className="industry-item" key={item.name}><h3>{item.name}</h3><p>{item.description}</p><small>{item.note}</small></article>)}</div>
            </div>
          ))}
          <div className="personal-interests">
            <h2>Personal Interests</h2>
            <div className="interest-list">{interests.map((item) => <article key={item.name}><h3>{item.name}</h3><p>{item.description}</p><small>{item.note}</small></article>)}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="eyebrow">07 / CONTACT</div>
        <div className="contact-title"><span>Let’s build</span><span>better conversations</span><span>and experiences.</span></div>
        <p className="contact-note">Open to opportunities across marketing, communications, customer experience and sports. Whether it’s a role, a project, or just a good chat about fan engagement, my inbox is open, and unlike most campaigns, I promise to reply.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="contact-grid">
          <div><span>Based in</span><strong>{profile.location}</strong></div>
          <div><span>Phone</span><strong>{profile.phone}</strong></div>
          <div><span>LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noreferrer">Connect ↗</a></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-orb">SK</div>
        <div className="footer-top"><span>Shivam Yadav</span><span>Marketing / Communications / CX</span></div>
        <div className="footer-bottom"><span>© 2026</span><a href="#home">Back to top</a><span>Mumbai, India</span></div>
      </footer>
    </main>
  );
}
