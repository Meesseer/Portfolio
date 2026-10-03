import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowcase = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card) => {
        const preview = card.querySelector(
          ".project-preview"
        );

        const image = card.querySelector(
          ".preview-placeholder"
        );

        const info = card.querySelector(
          ".project-info"
        );

        gsap.from(preview, {
          y: 100,
          opacity: 0,
          scale: 0.92,

          duration: 1.2,

          ease: "power4.out",

          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });

        gsap.from(info, {
          x: 60,
          opacity: 0,

          duration: 1,

          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
        });

        gsap.to(image, {
          y: -40,

          ease: "none",

          scrollTrigger: {
            trigger: preview,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="projects-section"
      id="work"
      ref={sectionRef}
    >
      <div className="section-intro">

        <p>SELECTED WORK</p>

        <h2>
          Projects that turn
          <span> ideas into products.</span>
        </h2>

      </div>

      <div className="projects-list">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-preview">

              <div className="preview-grid" />

              <div className="preview-placeholder">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.name} preview`}
      className="project-image"
    />
  ) : (
    <div className="project-image-placeholder">
      <span>{project.name}</span>
    </div>
  )}
</div>

              <div className="preview-corner">
                VIEW
                <br />
                PROJECT
              </div>

            </div>

            <div className="project-info">

              <p className="project-category">
                {project.category}
              </p>

              <h3>
                {project.name}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">

                {project.tech.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}

              </div>

              <button className="project-link">
                View Project
                <span>↗</span>
              </button>

            </div>

          </article>

        ))}

      </div>
    </section>
  );
};

export default ProjectShowcase;