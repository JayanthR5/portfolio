"use client";

import { portfolioData } from "../data/portfolio";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const highlights = [
    portfolioData.personal.location,
    `CGPA ${portfolioData.personal.cgpa}`,
    "AI / ML + Web Development",
  ];

  const floatingIcons = ["🐍", "⚛️", "🤖", "☕"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="portfolio-section hero-section">
      <div className="portfolio-shell hero-shell">
        {/* Floating Icons Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
            borderRadius: "1rem",
            opacity: 0.2,
          }}
        >
          {floatingIcons.map((icon, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                fontSize: "2.25rem",
                left: `${20 + i * 18}%`,
                top: `${30 + (i % 2) * 20}%`,
              }}
              initial={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="hero-copy"
          style={{ position: "relative", zIndex: 10 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-kicker" variants={itemVariants}>
            Hi, I am
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            {portfolioData.personal.name}
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                "AI & ML Engineer",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline" }}
            />
          </motion.div>

          <motion.p variants={itemVariants}>
            Final year CSE student focused on AI, ML, and practical web applications.
          </motion.p>

          <motion.div className="hero-tags" variants={itemVariants}>
            {highlights.map((item, i) => (
              <motion.span
                key={item}
                className="hero-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            {[
              {
                label: "Download Resume",
                href: portfolioData.personal.resume,
                primary: true,
                download: true,
              },
              {
                label: "View GitHub",
                href: portfolioData.personal.github,
                primary: false,
              },
              {
                label: "LinkedIn",
                href: portfolioData.personal.linkedin,
                primary: false,
              },
              {
                label: "Email Me",
                href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioData.personal.email)}`,
                primary: false,
              },
            ].map((btn, i) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                download={btn.download}
                target={btn.download ? undefined : "_blank"}
                rel={btn.download ? undefined : "noreferrer"}
                className={`hero-action ${btn.primary ? "primary" : "secondary"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{ position: "relative", zIndex: 10 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={portfolioData.personal.image} alt={`${portfolioData.personal.name} profile picture`} />
        </motion.div>
      </div>
    </section>
  );
}