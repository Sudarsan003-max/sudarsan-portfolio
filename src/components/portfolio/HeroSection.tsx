import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="hero"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,0,128,0.3) 0%, transparent 70%)" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            <span
              className="bg-clip-text text-transparent whitespace-nowrap"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00ff88 0%, #0088ff 50%, #ff0080 100%)",
                backgroundSize: "200% auto",
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
                textShadow:
                  "0 0 8px rgba(0,255,136,0.15), 0 0 12px rgba(0,136,255,0.12), 0 0 16px rgba(255,0,128,0.12)",
                animation: "goldShimmer 3s linear infinite",
              }}
            >
              SUDARSANA NARAYANAN U R
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-semibold">
            Final-year B.Tech CSE (AI & ML) student specializing in building AI-powered applications, 
            AR experiences, and blockchain solutions
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:sudarsananarayanan003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-semibold shadow-[0_0_20px_rgba(0,255,136,0.5)] hover:shadow-[0_0_30px_rgba(0,255,136,0.7)]"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0088ff] text-[#0088ff] hover:bg-[#0088ff]/10 shadow-[0_0_20px_rgba(0,136,255,0.3)] hover:shadow-[0_0_30px_rgba(0,136,255,0.5)] transition-all"
              onClick={() => {
                const el = document.querySelector("#projects");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <ChevronDown className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#ff0080] text-[#ff0080] hover:bg-[#ff0080]/10 shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:shadow-[0_0_30px_rgba(255,0,128,0.5)] transition-all"
              onClick={() => window.open("https://github.com/Sudarsan003-max", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#ff0080] text-[#ff0080] hover:bg-[#ff0080]/10 shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:shadow-[0_0_30px_rgba(255,0,128,0.5)] transition-all"
              onClick={() => window.open("https://linkedin.com/in/sudarsananarayanan-u-r/", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}