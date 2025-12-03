import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { 
  Github, 
  Mail, 
  Linkedin, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award,
  Sparkles,
  Cpu,
  Database,
  Globe,
  Layers,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { SkillCard } from "@/components/portfolio/SkillCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export default function Portfolio() {
  const projects = useQuery(api.portfolio.getProjects);
  const skills = useQuery(api.portfolio.getSkills);
  const experience = useQuery(api.portfolio.getExperience);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTop, setShowTop] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const open = () => setResumeOpen(true);
    window.addEventListener("open-resume-modal", open as EventListener);
    return () => window.removeEventListener("open-resume-modal", open as EventListener);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Animated cursor glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <HeroSection />

      {/* About Section */}
      <section className="relative py-24 px-4" id="about">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
              <span className="text-[#00ff88]">About</span> Me
            </h2>
            
            <Card className="bg-[#111111] border-[#00ff88]/20 shadow-[0_0_30px_rgba(0,255,136,0.1)]">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                  I'm a final-year B.Tech student in Computer Science and Engineering, specializing in AI and ML. I have hands-on experience building and refining machine learning models, analyzing large datasets, and enhancing algorithm efficiency. I've delivered AI-driven applications including generative models, chatbots, face-mask detection, semantic text-similarity engines, and text-to-speech systems. During my Data Science internship at Internzvalley, I created insightful visualizations and built scalable software to handle large datasets, improving analysis speed and enabling data‑driven decisions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-4 bg-[#111111]/50" id="skills">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
              <span className="text-[#0088ff]">Skills</span> & Expertise
            </h2>

            {skills && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  icon={<Code2 className="w-6 h-6" />}
                  title="Programming Languages"
                  skills={skills.programming}
                  color="#00ff88"
                />
                <SkillCard
                  icon={<Globe className="w-6 h-6" />}
                  title="Web Technologies"
                  skills={skills.web}
                  color="#0088ff"
                />
                <SkillCard
                  icon={<Database className="w-6 h-6" />}
                  title="Data Analysis & ML"
                  skills={skills.dataScience}
                  color="#ff0080"
                />
                <SkillCard
                  icon={<Layers className="w-6 h-6" />}
                  title="Tools & Platforms"
                  skills={skills.tools}
                  color="#00ff88"
                />
                <SkillCard
                  icon={<Cpu className="w-6 h-6" />}
                  title="CS Fundamentals"
                  skills={skills.cs}
                  color="#0088ff"
                />
                <SkillCard
                  icon={<Sparkles className="w-6 h-6" />}
                  title="Marketing & Analytics"
                  skills={skills.marketing}
                  color="#ff0080"
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 px-4" id="experience">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
              <span className="text-[#ff0080]">Experience</span>
            </h2>

            {experience && experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-[#111111] border-[#ff0080]/20 shadow-[0_0_30px_rgba(255,0,128,0.1)] mb-6">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle className="text-2xl text-[#ff0080] mb-2">
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-300">
                          <Briefcase className="inline w-4 h-4 mr-2" />
                          {exp.role}
                        </CardDescription>
                      </div>
                      <Badge className="bg-[#ff0080]/20 text-[#ff0080] border-[#ff0080]/30">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    {/* GitHub link - centered and prominent with enhanced visual flair */}
                    {exp.githubUrl && (
                      <div className="flex justify-center mt-4">
                        <motion.a
                          href={exp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all relative overflow-hidden"
                          style={{
                            borderColor: "#ff0080",
                            backgroundColor: "#ff008015",
                            color: "#ff0080",
                            boxShadow: "0 0 15px #ff008030"
                          }}
                          whileHover={{ 
                            scale: 1.08,
                            rotate: -1,
                            boxShadow: "0 0 25px #ff008050"
                          }}
                          whileTap={{ scale: 0.95, rotate: 0 }}
                          animate={{
                            boxShadow: [
                              "0 0 15px #ff008030",
                              "0 0 20px #ff008040",
                              "0 0 15px #ff008030"
                            ]
                          }}
                          transition={{
                            boxShadow: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          aria-label="View on GitHub"
                        >
                          {/* Shimmer effect overlay */}
                          <motion.div
                            className="absolute inset-0 opacity-30"
                            style={{
                              background: "linear-gradient(90deg, transparent, #ff008040, transparent)"
                            }}
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                          <Github className="w-5 h-5 relative z-10" />
                          <span className="font-semibold text-sm relative z-10">View on GitHub</span>
                        </motion.a>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-[#ff0080] mt-1">▹</span>
                        <span>Designed optimized data models and documented data flows, improving system architecture efficiency and elevating data quality by reducing errors.</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-[#ff0080] mt-1">▹</span>
                        <span>Directed exploratory analysis across diverse datasets to uncover limitations and enhance data profiling accuracy.</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-[#ff0080] mt-1">▹</span>
                        <span>Developed automation scripts to cleanse, integrate, and evaluate datasets from multiple sources, reducing processing time.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 px-4 bg-[#111111]/50" id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
              <span className="text-[#00ff88]">Featured</span> Projects
            </h2>

            {projects && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-24 px-4" id="education">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
              <span className="text-[#0088ff]">Education</span>
            </h2>

            <Card className="bg-[#111111] border-[#0088ff]/20 shadow-[0_0_30px_rgba(0,136,255,0.1)]">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <CardTitle className="text-2xl text-[#0088ff] mb-2">
                      SRM INSTITUTE OF SCIENCE AND TECHNOLOGY RAMAPURAM
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      <GraduationCap className="inline w-4 h-4 mr-2" />
                      B.Tech Computer Science and Engineering - Artificial Intelligence and Machine Learning
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-[#0088ff]/20 text-[#0088ff] border-[#0088ff]/30 mb-2">
                      2022 - Present
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-24 px-4 bg-[#111111]/50" id="certifications">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
              <span className="text-[#ff0080]">Certifications</span> & Achievements
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#111111] border-[#ff0080]/20 shadow-[0_0_20px_rgba(255,0,128,0.1)]">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-[#ff0080] mb-4" />
                  <p className="text-gray-300">
                    Completed 50+ hours of advanced courses in Data Science, NLP, and Blockchain technologies
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#111111] border-[#ff0080]/20 shadow-[0_0_20px_rgba(255,0,128,0.1)]">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-[#ff0080] mb-4" />
                  <p className="text-gray-300">
                    Selected among the Top 10 projects at HACKVERSE'25 for innovative Blockchain application
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#111111] border-[#ff0080]/20 shadow-[0_0_20px_rgba(255,0,128,0.1)] md:col-span-2">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-[#ff0080] mb-4" />
                  <p className="text-gray-300">
                    Implemented a Blockchain-based Bounty Hunter platform enabling secure bounty posting, 
                    tracking, and validation via decentralized smart contracts
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="relative py-24 px-4" id="volunteering">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
              <span className="text-[#00ff88]">Volunteering</span>
            </h2>

            <Card className="bg-[#111111] border-[#00ff88]/20 shadow-[0_0_30px_rgba(0,255,136,0.1)]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00ff88]">
                  NIZHAL FOUNDATION - NGO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Contributed to urban greening projects and community engagement efforts at Nizhal, 
                  a non-profit dedicated to environmental preservation, demonstrating strong commitment 
                  to sustainability and social responsibility.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-4 bg-[#111111]/50" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold mb-8 tracking-tight">
              <span className="text-[#0088ff]">Let's</span> Connect
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-semibold">
              Interested in collaborating or have a project in mind? Let's talk!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:sudarsananarayanan003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-semibold shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:shadow-[0_0_30px_rgba(0,255,136,0.7)]"
              >
                <Mail className="mr-2 h-5 w-5" />
                sudarsananarayanan003@gmail.com
              </a>
              <a
                href="tel:+918122653433"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#0088ff] text-black hover:bg-[#0088ff]/90 font-semibold shadow-[0_0_20px_rgba(0,136,255,0.5)] hover:shadow-[0_0_30px_rgba(0,136,255,0.7)]"
              >
                <span className="mr-2">📞</span>
                +91 81226 53433
              </a>
              {/* Resume Button in Contact section */}
              <a
                href="https://drive.google.com/file/d/1hCAkN2pvNud6QLglclojTfQxNPbcQBC0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#111111] text-white hover:bg-[#111111]/80 border border-[#00ff88]/40 shadow-[0_0_16px_rgba(0,255,136,0.25)]"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://drive.google.com/file/d/1hCAkN2pvNud6QLglclojTfQxNPbcQBC0/view?usp=sharing", "_blank");
                }}
              >
                📄 View Resume
              </a>
            </div>

            <Separator className="my-12 bg-gray-800" />

            <div className="flex gap-6 justify-center">
              <motion.a
                href="https://github.com/Sudarsan003-max"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#00ff88] transition-colors"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sudarsananarayanan-u-r/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#0088ff] transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="mailto:sudarsananarayanan003@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#ff0080] transition-colors"
              >
                <Mail className="w-8 h-8" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      {resumeOpen && (
        <div
          id="resume-modal-root"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="relative w-[96vw] max-w-6xl max-h-[92vh] bg-[#0c0c0c]/95 rounded-xl border border-[#00ff88]/30 shadow-[0_0_40px_rgba(0,255,136,0.2)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header with actions */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-[#0c0c0c]/95 border-b border-[#00ff88]/20">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
                <h3 className="text-base md:text-lg font-semibold tracking-tight text-[#00ff88]">
                  Resume — SUDARSANA NARAYANAN U R
                </h3>
              </div>

              {/* Actions: zoom -, reset, +, open, close */}
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => {
                    const img = document.getElementById('resume-img') as HTMLImageElement | null;
                    if (!img) return;
                    const current = Number(img.dataset.scale || '1');
                    const next = Math.max(0.75, current - 0.25);
                    img.dataset.scale = String(next);
                    img.style.transform = `scale(${next})`;
                  }}
                  className="h-8 px-3 rounded-md border border-[#00ff88]/30 text-[#00ff88] hover:bg-[#00ff88]/10 transition"
                  aria-label="Zoom out"
                >
                  −
                </button>
                <button
                  onClick={() => {
                    const img = document.getElementById('resume-img') as HTMLImageElement | null;
                    if (!img) return;
                    img.dataset.scale = '1';
                    img.style.transform = 'scale(1)';
                  }}
                  className="h-8 px-3 rounded-md border border-[#00ff88]/30 text-[#00ff88] hover:bg-[#00ff88]/10 transition"
                  aria-label="Reset zoom"
                >
                  100%
                </button>
                <button
                  onClick={() => {
                    const img = document.getElementById('resume-img') as HTMLImageElement | null;
                    if (!img) return;
                    const current = Number(img.dataset.scale || '1');
                    const next = Math.min(3, current + 0.25);
                    img.dataset.scale = String(next);
                    img.style.transform = `scale(${next})`;
                  }}
                  className="h-8 px-3 rounded-md border border-[#00ff88]/30 text-[#00ff88] hover:bg-[#00ff88]/10 transition"
                  aria-label="Zoom in"
                >
                  +
                </button>

                <a
                  href="https://harmless-tapir-303.convex.cloud/api/storage/de4ae814-179e-4fe2-9d34-222a5e63a2a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // ensure current page stays centered on the modal if user doesn't leave
                    const modal = document.getElementById("resume-modal-root");
                    modal?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="h-8 px-3 rounded-md border border-[#00ff88]/30 text-[#00ff88] hover:bg-[#00ff88]/10 transition inline-flex items-center"
                  aria-label="Open resume in new tab"
                >
                  Open
                </a>
                <button
                  onClick={() => setResumeOpen(false)}
                  className="h-8 px-3 rounded-md border border-[#00ff88]/30 text-[#00ff88] hover:bg-[#00ff88]/10 transition"
                  aria-label="Close resume"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="relative p-4 md:p-5 overflow-auto">
              <div className="mx-auto w-full flex items-center justify-center">
                <div className="relative rounded-lg overflow-hidden border border-[#00ff88]/15 bg-[#0d0d0d]">
                  <img
                    id="resume-img"
                    src="https://harmless-tapir-303.convex.cloud/api/storage/de4ae814-179e-4fe2-9d34-222a5e63a2a1"
                    alt="Resume - SUDARSANA NARAYANAN U R"
                    className="mx-auto h-auto w-full max-w-full md:max-w-[82vw] lg:max-w-[70vw] max-h-[76vh] object-contain select-none transition-transform duration-200 ease-out"
                    draggable={false}
                    // initialize scale via dataset
                    data-scale="1"
                  />
                </div>
              </div>
            </div>

            {/* Footer tip */}
            <div className="flex items-center justify-between gap-2 px-5 py-2 border-t border-[#00ff88]/20 text-xs text-gray-400">
              <span>Tip: Use +/−/100% to zoom. You can also pinch or browser-zoom. Scroll to pan when zoomed.</span>
              <a
                href="https://harmless-tapir-303.convex.cloud/api/storage/de4ae814-179e-4fe2-9d34-222a5e63a2a1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#00ff88]"
              >
                Open original
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Sudarsana Narayanan U R. Built with React, Convex & Framer Motion.</p>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={showTop ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full border bg-[#0b0b0b]/80 backdrop-blur-md border-[#00ff88]/30 text-[#00ff88] shadow-[0_0_18px_rgba(0,255,136,0.18)] hover:shadow-[0_0_28px_rgba(0,255,136,0.35)] hover:bg-[#0b0b0b]/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff88]/50 transition-all"
        whileHover={{ scale: 1.06, rotate: -3 }}
        whileTap={{ scale: 0.98, rotate: 0 }}
      >
        <span className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: "0 0 0 0 rgba(0,255,136,0.15)" }} />
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
}