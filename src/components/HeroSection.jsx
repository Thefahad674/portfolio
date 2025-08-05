import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="#hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 text-left">
          {/* Heading - forced left alignment */}
          <div className="text-left whitespace-nowrap">
            <h1 className="font-bold tracking-tight inline-block">
              <span className="opacity-0 animate-fade-in text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] min-w-max">
                Hello, I'm a
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1 text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] min-w-max">
                {" "}
                Web
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-2 text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] min-w-max">
                {" "}
                Developer
              </span>
            </h1>
          </div>

          {/* About section - already left-aligned */}
          <div className="w-[90vw] max-w-2xl opacity-0 animate-fade-in-delay-3 ">
            <h2 className="font-bold text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-3xl pb-[2vw] text-left">
              My name is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Fahad
              </span>
            </h2>
            <p className="text-[4vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2vw] xl:text-xl text-muted-foreground leading-[1.6] text-left">
              Passionate about building full-stack{" "}
              <span className="text-primary font-medium">web applications</span>
              . Constantly striving to improve my{" "}
              <span className="text-primary font-medium">skills</span> through
              hands-on projects and continuous{" "}
              <span className="text-primary font-medium">learning</span>.
            </p>
          </div>

          {/* Button - centered with custom alignment */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center">
            <a href="#projects" className="cosmic-button mx-auto">
              View My Work
            </a>
          </div>
        </div>
      </div>
 
    </section>
  );
};

export default HeroSection;
