import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -6 }}
    >
      <Card 
        className="bg-[#111111] border-opacity-20 h-full flex flex-col relative overflow-hidden"
        style={{ 
          borderColor: color,
          boxShadow: `0 0 20px ${color}20`
        }}
      >
        {/* Add: animated gradient glow for AR project */}
        {isArProject && (
          <motion.div
            aria-hidden
            className="absolute -inset-1 opacity-20"
            style={{
              background: "conic-gradient(from 0deg, #00ff88, #0088ff, #ff0080, #00ff88)",
              filter: "blur(24px)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Header: float subtly for AR, pulse accent for others */}
        <motion.div
          animate={
            isArProject 
              ? { y: [0, -3, 0] } 
              : { opacity: [1, 0.95, 1] }
          }
          transition={
            isArProject 
              ? { duration: 4, repeat: Infinity, ease: "easeInOut" } 
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
          {/* Description: shimmer underline only for AR; subtle fade for all */}
          <motion.p
            className="text-gray-300 mb-4 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
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

          {/* Highlights: staggered reveal for ALL projects; AR keeps slide-in */}
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
                whileHover={{ scale: 1.01 }}
              >
                <span style={{ color }}>▹</span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tech badges: interactive hover for ALL projects; AR has stronger scale */}
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
                whileHover={{ scale: isArProject ? 1.06 : 1.04 }}
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