import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

   const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Force dark mode if no preference exists
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
     setAnimate(true);
    setIsDarkMode(!isDarkMode);
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "absolute top-16 right-4 z-50 p-2 rounded-full transition-all duration-500",
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        "focus:outline-none focus:ring-primary/50",
        "transform hover:scale-110 active:scale-95" // Added scale effects
      )}
      aria-label="Toggle dark mode"
    >
     {isDarkMode ? (
        <MdOutlineLightMode className={`h-6 w-6 text-primary ${animate ? "animate-[bounceSpin_1s_ease-in-out_1]" : ""}`} />
      ) : (
        <MdOutlineDarkMode className={`h-6 w-6 text-blue-500 ${animate ? "animate-[bounceSpin_1s_ease-in-out_1]" : ""}`} />
      )}
    </button>
  );
};

export default ThemeToggle;

//  <button
//       onClick={toggleTheme}
//       className={cn(
//         "absolute top-16 right-4 z-50 p-2 rounded-full transition-all duration-500",
//         "hover:bg-gray-200 dark:hover:bg-gray-700",
//         "focus:outline-none focus:ring-primary/50",
//         "transform hover:scale-110 active:scale-95" // Added scale effects
//       )}
//       aria-label="Toggle dark mode"
//     >
//       {isDarkMode ? (
//         <MdOutlineLightMode className="h-6 w-6 text-primary animate-bounce" />
//       ) : (
//         <Moon className="h-5 w-5 text-blue-500 animate-bounce" />
//       )}
//     </button>
