"use client";

import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <ScrollReveal className="portfolio-section projects-section">
      <div className="portfolio-shell">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Selected builds and experiments.</h2>

        <motion.div
          className="section-card-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.projects.map((project, i) => (
            <Tilt
              key={project.title}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={300}
            >
              <motion.article
                className="section-panel"
                variants={itemVariants}
              >
                <h3 style={{ margin: 0 }}>{project.title}</h3>
                <p style={{ margin: "0.75rem 0", lineHeight: 1.7, color: "var(--text-soft)" }}>{project.description}</p>
                <div className="project-tech-wrap" style={{ marginTop: "0.9rem" }}>
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="hero-pill"
                      style={{ fontSize: "0.9rem" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
