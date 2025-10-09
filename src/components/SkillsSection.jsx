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
import { GlareCard } from "../components/ui/glare-card";

const skills = [
  // Frontend
  { name: "JavaScript", category: "frontend", logo: <FaJs />, color: "#f0db4f" },
  { name: "React", category: "frontend", logo: <FaReact />, color: "#61dafb" },
  { name: "Tailwind CSS", category: "frontend", logo: <RiTailwindCssFill />, color: "#38bdf8" },
  { name: "Next.js", category: "frontend", logo: <RiNextjsLine />, color: "#0070F3" },
  

  // Backend
  { name: "Node.js", category: "backend", logo: <FaNodeJs />, color: "#3c873a" },
  { name: "Express", category: "backend", logo: <SiExpress />, color: "#0075C9" },
  { name: "MongoDB", category: "backend", logo: <SiMongodb />, color: "#47A248" },

  // Tools
  { name: "Git/GitHub", category: "tools", logo: <FaGithub />, color: "#4078c0" },
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
    <section id="skills" className="py-16 sm:py-20 px-3 sm:px-6 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-300 capitalize",
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

        {/* ========== Mobile / Tablet Grid (Simple Cards) ========== */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:hidden">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="w-full flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl bg-secondary/70"
            >
              <div className="flex flex-col items-center">
                <span
                  className="text-lg sm:text-xl md:text-2xl flex-shrink-0"
                  style={{ color: skill.color }}
                >
                  {skill.logo}
                </span>
                <h3 className="font-semibold text-xs sm:text-sm md:text-base mt-1 text-center">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ========== Desktop Grid (Glare Cards) ========== */}
        <div className="hidden lg:grid grid-cols-3 gap-4 md:gap-6">
          {filteredSkills.map((skill, key) => (
            <GlareCard
              key={key}
              className="flex flex-col items-center justify-center rounded-xl w-full  bg-card"
            >
              <div className="flex flex-col items-center">
                <span
                  className="text-xl md:text-2xl flex-shrink-0"
                  style={{ color: skill.color }}
                >
                  {skill.logo}
                </span>
                <h3 className="font-semibold text-sm md:text-base mt-1 text-center">
                  {skill.name}
                </h3>
              </div>
            </GlareCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
