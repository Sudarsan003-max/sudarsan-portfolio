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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
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

        {/* Add: floating subtle parallax for header content on AR project */}
        <motion.div
          animate={isArProject ? { y: [0, -3, 0] } : {}}
          transition={isArProject ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
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
          {/* Add: shimmer underline animation for AR description */}
          <p className="text-gray-300 mb-4 relative">
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
          </p>
          <ul className="space-y-2 mb-4 flex-1">
            {project.highlights.map((highlight: string, i: number) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-2 text-sm text-gray-400"
                initial={isArProject ? { opacity: 0, x: -10 } : {}}
                whileInView={isArProject ? { opacity: 1, x: 0 } : {}}
                viewport={{ once: true }}
                transition={isArProject ? { duration: 0.35, delay: 0.05 * i } : {}}
              >
                <span style={{ color }}>▹</span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <motion.div
                key={i}
                whileHover={isArProject ? { scale: 1.06 } : {}}
                whileTap={isArProject ? { scale: 0.98 } : {}}
              >
                <Badge 
                  variant="secondary"
                  className="text-xs bg-gray-800 text-gray-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}