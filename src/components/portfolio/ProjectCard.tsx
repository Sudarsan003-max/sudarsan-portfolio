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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <Card 
        className="bg-[#111111] border-opacity-20 h-full flex flex-col"
        style={{ 
          borderColor: color,
          boxShadow: `0 0 20px ${color}20`
        }}
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
        <CardContent className="flex-1 flex flex-col">
          <p className="text-gray-300 mb-4">{project.description}</p>
          <ul className="space-y-2 mb-4 flex-1">
            {project.highlights.map((highlight: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <span style={{ color }}>▹</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <Badge 
                key={i} 
                variant="secondary"
                className="text-xs bg-gray-800 text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}