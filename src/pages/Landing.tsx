// TODO: REPLACE THIS LANDING PAGE WITH AN ELEGANT, THEMATIC, AND WELL-DESIGNED LANDING PAGE RELEVANT TO THE PROJECT
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >

      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto relative px-4">
        {/* TODO: landing page goes here; replace with the landing page */}
        <div className="flex items-center justify-center gap-3 text-primary">
          <Loader className="h-8 w-8 animate-spin" />
          <span className="font-semibold tracking-tight">Sudarsan Portfolio is loading...</span>
        </div>
        </div>
      </div>
    </motion.div>
  );
}