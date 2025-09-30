import { query } from "./_generated/server";
import { v } from "convex/values";

export const getProjects = query({
  args: {},
  handler: async () => {
    return [
      {
        id: "ar-fashion",
        title: "AR - Virtual Fashion Try On",
        date: "Apr 2025",
        category: "Augmented Reality (AR)",
        description: "Engineered AR try-on app with Python, Unity, Blender, ARKit & ARCore for 50+ users.",
        highlights: [
          "Innovated an AR virtual try-on app, improving product visualization satisfaction scores by 35%",
          "Utilized Unity and ARKit for 3D modeling and rendering, Compressing integration time by 25%",
          "Architected a cross-platform UI with gesture controls and customization features, Elevating interaction efficiency by 40% across iOS and Android"
        ],
        tech: ["Python", "Unity", "Blender", "ARKit", "ARCore"]
      },
      {
        id: "blockchain-bounty",
        title: "Blockchain - Bounty Hunter",
        date: "Mar 2025",
        category: "Blockchain Technology",
        description: "Created a Solidity-based DApp with HTML/CSS/JS front end, enabling secure data transfer for 500+ users.",
        highlights: [
          "Crafted a Blockchain-based Bounty Hunter platform processing 100+ simulated transactions, with Python backend and Ethereum smart contract integration",
          "Developed a responsive front-end in CSS & JavaScript, increasing task posting speed by 30%",
          "Integrated Blockchain libraries to validate 100% of posted bounties and automate payouts in under 10 seconds"
        ],
        tech: ["Solidity", "HTML", "CSS", "JavaScript", "Python", "Ethereum"]
      },
      {
        id: "face-mask-detection",
        title: "Face Mask Detection",
        date: "Oct 2024",
        category: "Artificial Intelligence (AI)",
        description: "Deployed CNN-based real-time face mask detection with Python, OpenCV, TensorFlow, 95% accuracy.",
        highlights: [
          "Implemented a blockchain-based validation system, achieving 95% consistency across validation data and reducing false positives by 15% in fraud detection",
          "Processed augmented images for training with OpenCV, Limiting lighting-related detection errors by 20%",
          "Streamlined the model to process images in under 0.5 seconds, Refining real-time usability"
        ],
        tech: ["Python", "OpenCV", "TensorFlow", "CNN", "Blockchain"]
      }
    ];
  }
});

export const getSkills = query({
  args: {},
  handler: async () => {
    return {
      programming: ["Python", "C++", "SQL", "Java", "C", "Unity"],
      web: ["React.js", "Node.js", "Express.js", "MongoDB", "Angular", "Django", "Flask", "HTML", "CSS", "REST APIs"],
      dataScience: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "PyTorch", "Deep Learning", "Computer Vision", "Seaborn", "Excel"],
      tools: ["Git", "GitHub", "Postman", "Figma", "Power BI", "Azure", "AWS", "Microservices", "Docker", "Cloud", "Kubernetes"],
      cs: ["Data Structures & Algorithms (DSA)", "OOPS", "DBMS", "Low-Latency Systems", "Debugging & Troubleshooting"],
      marketing: ["Customer Acquisition", "Campaign Performance", "Social Media Marketing", "Content Creation", "Data Analytics", "Project Execution", "Team Collaboration & Communication"]
    };
  }
});

export const getExperience = query({
  args: {},
  handler: async () => {
    return [
      {
        company: "INTERNZVALLEY",
        role: "DATA SCIENCE INTERN",
        period: "May 2024 - Jul 2024",
        achievements: [
          "Designed 3 optimized data models and documented 5+ data flows, boosting system architecture efficiency by 15% and enhancing data quality by preventing errors by 20%",
          "Directed exploratory analysis on 10+ datasets to identify limitations advancing profiling precision by 30%",
          "Developed 4 automation scripts to cleanse, integrate, and evaluate datasets from 6+ sources, reducing processing time by 40%"
        ]
      }
    ];
  }
});
