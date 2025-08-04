import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Home, Menu, PersonStanding, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero"},
  { name: "Skills", href: "#skills", sname: "Skills"},
  { name: "Projects", href: "#projects", sname: "Projects"},
  { name: "About", href: "#about", sname: "About" },
  { name: "Contact", href: "#contact", },
];
 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active item based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          setActiveItem(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-background/90 backdrop-blur-md shadow-sm"
          : "py-3",
        "border-b border-border/50"
      )}
    >
      <div className="container mx-auto px-2 sm:px-4 flex items-center justify-between max-w-7xl">
        <a
          className="text-lg sm:text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="text-glow">Portfolio</span>
        </a>

        {/* Always visible navigation - compact on mobile */}
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "p-2 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all",
                "flex items-center justify-center",
                "hover:bg-primary/10 hover:text-primary",
                activeItem === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80"
              )}
              onClick={() => setActiveItem(item.href)}
            >
              <span className="md:hidden">{item.sname}</span>
              <span className="hidden md:inline">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
