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
        description: "Engineered an AR try-on app using Unity, Blender, ARKit, and ARCore to deliver immersive virtual try-on experiences across devices.",
        highlights: [
          "Innovated an AR virtual try-on experience, improving product visualization and user satisfaction.",
          "Utilized Unity and ARKit for 3D modeling and rendering, reducing integration time.",
          "Architected a cross-platform UI with gesture controls and customization features, improving interaction efficiency across all devices"
        ],
        tech: ["Python", "Unity", "Blender", "ARKit", "ARCore"],
        githubUrl: undefined
      },
      {
        id: "blockchain-bounty",
        title: "Blockchain - Bounty Hunter",
        date: "Mar 2025",
        category: "Blockchain Technology",
        description: "Created a Solidity-based DApp with an HTML/CSS/JavaScript front end, enabling secure data transfer for a broad user base.",
        highlights: [
          "Created a Solidity-based DApp with an HTML/CSS/JavaScript front end, enabling secure data transfer for a broad user base.",
          "Crafted a Blockchain-based Bounty Hunter platform handling simulated transactions, integrating a Python backend with Ethereum smart contracts.",
          "Developed a responsive front end in CSS and JavaScript, streamlining task posting.",
          "Integrated Blockchain libraries to validate posted bounties and automate payouts in near real time"
        ],
        tech: ["Solidity", "HTML", "CSS", "JavaScript", "Python", "Ethereum"],
        githubUrl: undefined
      },
      {
        id: "face-mask-detection",
        title: "Face Mask Detection",
        date: "Oct 2024",
        category: "Artificial Intelligence (AI)",
        description: "Deployed a CNN-based real-time face mask detection system using Python, OpenCV, and TensorFlow, delivering high accuracy.",
        highlights: [
          "Implemented a blockchain-based validation system to ensure consistent validation across datasets and reduce false positives in fraud detection.",
          "Processed and augmented images with OpenCV to improve robustness to lighting variations.",
          "Streamlined the model for low-latency inference, enhancing real-time usability."
        ],
        tech: ["Python", "OpenCV", "TensorFlow", "CNN", "Blockchain"],
        githubUrl: "https://github.com/Sudarsan003-max/FACE-MASK-DETECTOR"
      }
    ];
  }
});

export const getSkills = query({
  args: {},
  handler: async () => {
    return {
      programming: ["C++", "SQL", "Java", "C", "Unity"],
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
        ],
        githubUrl: "https://github.com/Sudarsan003-max/Major-Project-Internzvalley"
      }
    ];
  }
});