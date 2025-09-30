import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

export function SkillCard({ icon, title, skills, color }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        className="bg-[#111111] border-opacity-20 h-full"
        style={{ 
          borderColor: color,
          boxShadow: `0 0 20px ${color}20`
        }}
      >
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div style={{ color }}>{icon}</div>
            <CardTitle className="text-lg" style={{ color }}>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="text-xs"
                style={{ 
                  borderColor: `${color}40`,
                  color: color,
                  backgroundColor: `${color}10`
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
