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
                    <p className="text-sm text-gray-400">CGPA: 8/10</p>
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