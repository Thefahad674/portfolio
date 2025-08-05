import React, { useState } from "react";
import { cn } from "../lib/utils";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  // Frontend
  {
    name: "JavaScript",
    category: "frontend",
    logo: <FaJs />,
    color: "#f0db4f",
  },
  { name: "React", category: "frontend", logo: <FaReact />, color: "#61dafb" },
  {
    name: "Tailwind CSS",
    category: "frontend",
    logo: <RiTailwindCssFill />,
    color: "#38bdf8",
  },
  {
    name: "Next.js",
    category: "frontend",
    logo: <RiNextjsLine />,
    color: "#0070F3",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    logo: <FaNodeJs />,
    color: "#3c873a",
  },
  {
    name: "Express",
    category: "backend",
    logo: <SiExpress />,
    color: "#0075C9",
  },
  {
    name: "MongoDB",
    category: "backend",
    logo: <SiMongodb />,
    color: "#47A248",
  },

  // Tools
  {
    name: "Git/GitHub",
    category: "tools",
    logo: <FaGithub />,
    color: "#4078c0",
  },
  { name: "Docker", category: "tools", logo: <FaDocker />, color: "#0db7ed" },
  { name: "Figma", category: "tools", logo: <FaFigma />, color: "#F24E1E" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-xs transition-transform transform hover:scale-[1.03] overflow-hidden"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span
                  className="text-xl sm:text-2xl md:text-3xl flex-shrink-0"
                  style={{ color: skill.color }}
                >
                  {skill.logo}
                </span>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg truncate min-w-0">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
