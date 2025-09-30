import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    highlights: string[];
    tech: string[];
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const colors = ["#00ff88", "#0088ff", "#ff0080"];
  const color = colors[index % colors.length];

  const isArProject = project.id === "ar-fashion"; // Add: target AR project

  // Add: parallax state and refs
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
        // Compute progress of card within viewport (0 at top, 1 at bottom)
        const vh = window.innerHeight || 1;
        const progress = Math.min(1, Math.max(0, (rect.top + rect.height / 2) / vh));
        // Map progress to a small translate range (-8px to +8px)
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

  // Add: flags for specific projects
  const isBlockchain = project.id === "blockchain-bounty";
  const isFaceMask = project.id === "face-mask-detection";

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
        {/* Add: subtle animated accent for Blockchain project (circuit sweep) */}
        {isBlockchain && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(0,136,255,0.25) 0px, rgba(0,136,255,0.25) 1px, transparent 1px, transparent 8px)",
              maskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
            }}
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Add: subtle scan-line pulse for Face Mask project */}
        {isFaceMask && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(0,255,136,0.08) 50%, transparent 100%)"
            }}
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Header: adjust animation based on project */}
        <motion.div
          animate={
            // AR float kept; add gentle tilt for Blockchain; subtle scale pulse for Face Mask; soft pulse default
            isArProject
              ? { y: [0, -3, 0] }
              : isBlockchain
              ? { rotate: [0, 0.4, -0.4, 0] }
              : isFaceMask
              ? { scale: [1, 1.01, 1] }
              : { opacity: [1, 0.95, 1] }
          }
          transition={
            isArProject
              ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
              : isBlockchain
              ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
              : isFaceMask
              ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
              : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-2 mb-2">
              <CardTitle className="text-xl font-bold tracking-tight" style={{ color }}>{project.title}</CardTitle>
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
          </CardHeader>
        </motion.div>

        <CardContent className="flex-1 flex flex-col">
          {/* Description: keep AR shimmer; add brief reveal for others */}
          <motion.p
            className="text-gray-300 mb-4 relative"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            {project.description}
            {isArProject && (
              <motion.span
                className="absolute left-0 -bottom-1 h-px w-1/3"
                style={{ background: color }}
                initial={{ scaleX: 0, opacity: 0.4 }}
                whileInView={{ scaleX: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
            )}
          </motion.p>

          {/* Highlights: existing stagger logic retained; add hover accent per project */}
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
                  hidden: isArProject ? { opacity: 0, x: -10 } : { opacity: 0, y: 6 },
                  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.35 } },
                }}
                whileHover={
                  isBlockchain
                    ? { x: 2, color: "#88c8ff" }
                    : isFaceMask
                    ? { x: 2, color: "#6fffb1" }
                    : { scale: 1.01 }
                }
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
              >
                <span style={{ color }}>▹</span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tech badges: existing spring interactions; add glow per project */}
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
                  scale: isArProject ? 1.06 : 1.04,
                  boxShadow: isBlockchain
                    ? "0 0 16px rgba(0,136,255,0.25)"
                    : isFaceMask
                    ? "0 0 16px rgba(0,255,136,0.22)"
                    : undefined,
                }}
                whileTap={{ scale: isArProject ? 0.98 : 0.99 }}
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