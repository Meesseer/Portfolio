import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(".hero-status", {
          y: 20,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-eyebrow",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.35"
        )
        .from(
          ".hero-title-line",
          {
            yPercent: 120,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-bottom",
          {
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );

      // Hero scroll animation
      gsap.to(".hero-content", {
        y: -100,
        opacity: 0,
        scale: 0.96,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-glow-one", {
        scale: 1.5,
        opacity: 0.35,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!glowRef.current) return;

    const { clientX, clientY } = e;

    gsap.to(glowRef.current, {
      x: clientX - 250,
      y: clientY - 250,
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <section
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className="cursor-glow"
        ref={glowRef}
      />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">

        <div className="hero-status">
          <span className="status-dot" />
          AVAILABLE FOR FREELANCE PROJECTS
        </div>

        <p className="hero-eyebrow">
          FULL-STACK WEB DEVELOPER
        </p>

        <h1 className="hero-title">
          <span className="hero-title-line">
            I BUILD
          </span>

          <span className="hero-title-line hero-title-accent">
            DIGITAL
          </span>

          <span className="hero-title-line">
            EXPERIENCES.
          </span>
        </h1>

        <p className="hero-description">
          I design and build modern web applications,
          business platforms and digital products
          from idea to production.
        </p>

        <div className="hero-actions">

          <button
            className="primary-button magnetic-button"
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            <span>Explore My Work</span>
            <span className="button-arrow">↗</span>
          </button>

          <button
            className="secondary-button magnetic-button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Let's Work Together
          </button>

        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line">
          <span />
        </div>
      </div>
    </section>
  );
};

export default Hero;