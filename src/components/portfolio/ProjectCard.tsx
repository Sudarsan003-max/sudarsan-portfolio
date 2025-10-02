import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    highlights: string[];
    tech: string[];
    githubUrl?: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const colors = ["#00ff88", "#0088ff", "#ff0080"];
  const color = colors[index % colors.length];

  const isArProject = project.id === "ar-fashion";

  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = Math.min(1, Math.max(0, (rect.top + rect.height / 2) / vh));
        const translateY = (progress - 0.5) * 16;
        setOffset(translateY);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -6 }}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <Card
        className="bg-[#111111] border-opacity-20 h-full flex flex-col relative overflow-hidden"
        style={{
          borderColor: color,
          boxShadow: `0 0 20px ${color}20`
        }}
      >
        {/* Unified subtle animated sweep accent for all cards */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 8px)",
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
          }}
          animate={{ x: ["-10%", "110%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Unified header animation (soft pulse) */}
        <motion.div
          animate={{ opacity: [1, 0.96, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 flex-1">
                <CardTitle className="text-xl font-bold tracking-tight" style={{ color }}>{project.title}</CardTitle>
              </div>
              <Badge 
                variant="outline" 
                className="text-xs shrink-0"
                style={{ 
                  borderColor: `${color}40`,
                  color: color,
                  backgroundColor: `${color}10`
                }}
              >
                {project.date}
              </Badge>
            </div>
            <CardDescription className="text-sm text-gray-300 font-semibold">
              {project.category}
            </CardDescription>
            
            {/* GitHub link - centered and prominent with enhanced visual flair */}
            {project.githubUrl && (
              <div className="flex justify-center mt-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all relative overflow-hidden"
                  style={{
                    borderColor: color,
                    backgroundColor: `${color}15`,
                    color: color,
                    boxShadow: `0 0 15px ${color}30`
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    rotate: -1,
                    boxShadow: `0 0 25px ${color}50`
                  }}
                  whileTap={{ scale: 0.95, rotate: 0 }}
                  animate={{
                    boxShadow: [
                      `0 0 15px ${color}30`,
                      `0 0 20px ${color}40`,
                      `0 0 15px ${color}30`
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
                      background: `linear-gradient(90deg, transparent, ${color}40, transparent)`
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
        </motion.div>

        <CardContent className="flex-1 flex flex-col">
          {/* Unified description with shimmer underline */}
          <motion.p
            className="text-gray-300 mb-4 relative"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            {project.description}
            <motion.span
              className="absolute left-0 -bottom-1 h-px w-1/3"
              style={{ background: color }}
              initial={{ scaleX: 0, opacity: 0.4 }}
              whileInView={{ scaleX: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
          </motion.p>

          {/* Unified staggered highlights */}
          <motion.ul
            className="space-y-2 mb-4 flex-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.06 } },
            }}
          >
            {project.highlights.map((highlight: string, i: number) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-400"
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
              >
                <span style={{ color }}>▹</span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Unified interactive tech badges with glow */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {project.tech.map((tech: string, i: number) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 16px rgba(255,255,255,0.18)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Badge
                  variant="secondary"
                  className="text-xs bg-gray-800 text-gray-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}