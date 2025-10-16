"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

// --- Icon Components (replaces react-icons) ---
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const AwardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);


export default function App() {
  const canvasRef = useRef(null);

  // This hook runs only on the client to set up the canvas animation
  useEffect(() => {
  const canvas = canvasRef.current as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
      hue: Math.random() * 360
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Draw the particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, 0.8)`;
        ctx.fill();

        // Update particle position and bounce off edges
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Draw lines connecting to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 140) {
            ctx.strokeStyle = `hsla(${p.hue}, 80%, 60%, ${1 - dist / 140})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures this runs only once

  const skills = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "C++", icon: "devicon-cplusplus-plain colored" },
    { name: "C", icon: "devicon-c-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "SQL", icon: "devicon-postgresql-plain colored" },
    { name: "MIPS Assembly", icon: "devicon-linux-plain colored" },
    { name: "HTML/JS", icon: "devicon-javascript-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "GCP", icon: "devicon-googlecloud-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
  ];

  const honors = [
    "David M. Rubenstein Fellow",
    "QuestBridge National College Match Finalist",
    "Jack Kent Cooke Foundation Scholarship Semifinalist",
    "Gates Scholarship Semifinalist",
    "Posse Foundation Scholarship Semifinalist",
  ];
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: easeOut }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white font-sans overflow-x-hidden">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

      {/* Animated background container */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-pink-500/10 animate-gradient"></div>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Main content container */}
      <div className="relative z-10">
        <header className="container mx-auto px-6 py-8 flex justify-between items-center">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold tracking-wide">
            Alain Soto
          </motion.h1>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/alain-soto" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><LinkedinIcon /></a>
            <a href="https://github.com/AlainS7" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><GithubIcon /></a>
          </div>
        </header>

        <main>
          <motion.section 
            className="container mx-auto px-6 py-16 text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Electrical & Computer Engineering + Computer Science
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
              Results-driven student with expertise in scalable cloud-native systems, containerized pipelines, and data engineering — passionate about solving complex problems in systems software and accelerated computing.
            </p>
          </motion.section>

          <motion.section 
            className="container mx-auto px-6 py-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Skills & Technologies</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 text-center">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  initial={{ opacity: 0, scale: 0.5 }} 
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }} 
                  className="flex flex-col items-center hover:scale-110 transition-transform"
                >
                  <i className={`${skill.icon} text-5xl`} />
                  <p className="mt-2 text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className="container mx-auto px-6 py-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Featured Project</h3>
            <div className="max-w-3xl mx-auto">
              <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold mb-2">Hot Durham Environmental Monitoring System</h4>
                <p className="text-gray-300">Built a serverless data pipeline on GCP to collect, process, and analyze environmental data. Deployed via Docker with CI/CD automation, enabling trend analysis and anomaly detection. Integrated Cloud-Native ETL Pipeline for reliable data ingestion from multiple APIs into PostgreSQL.</p>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 items-center justify-center">
                  <a
                    href="https://github.com/AlainS7/durham-environmental-monitoring"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-colors text-sm"
                  >
                    Check it out on GitHub
                  </a>
                  <a
                    href="https://alains7.github.io/durham-environmental-monitoring/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-gray-700 text-yellow-400 font-medium rounded hover:bg-gray-600 transition-colors text-xs border border-yellow-400"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Check out the site!
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section 
            className="container mx-auto px-6 py-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center flex items-center justify-center gap-2"><AwardIcon /> Honors & Awards</h3>
            <ul className="space-y-3 max-w-lg mx-auto text-gray-300">
              {honors.map((award, index) => (
                <motion.li 
                  key={award} 
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }} 
                  className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-yellow-500/20"
                >
                  {award}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </main>

        <footer className="py-6 text-center text-gray-500">&copy; {new Date().getFullYear()} Alain Soto — Built using React, TailwindCSS, and Framer Motion</footer>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
