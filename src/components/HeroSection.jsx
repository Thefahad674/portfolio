import { FlipWords } from "../components/ui/flip-words";

const HeroSection = () => {
  const words = ["Full-Stack Developer", "MERN Stack Developer", "Web Developer"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto z-10 text-left sm:text-left">
        <div className="space-y-6">
          
          <div className="whitespace-nowrap">
            <h1 className="font-bold tracking-tight inline-block">
              <span className="opacity-0 animate-fade-in text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] min-w-max">
                Hello, I'm a
              </span>{" "}

              {/* On small screens: show static text */}
              <span className="text-primary inline-block text-[6vw] sm:hidden whitespace-nowrap opacity-0 animate-fade-in">
                Web Developer
              </span>

              {/* On medium+ screens: show FlipWords */}
              <span className="hidden sm:inline-block">
                <FlipWords
                  className="opacity-0 text-[5vw] md:text-[4vw] lg:text-[3vw] whitespace-nowrap"
                  words={words}
                />
              </span>
            </h1>
          </div>

          {/* About section */}
          <div className="w-[90vw] max-w-2xl opacity-0 animate-fade-in-delay-3">
            <h2 className="font-bold text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-3xl pb-[2vw]">
              My name is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Fahad
              </span>
            </h2>

            <p className="text-[4vw] sm:text-[3.5vw] md:text-[2.8vw] lg:text-[2vw] xl:text-xl text-muted-foreground leading-[1.6]">
              Passionate about building full-stack{" "}
              <span className="text-primary font-medium">web applications</span>.
              Constantly striving to improve my{" "}
              <span className="text-primary font-medium">skills</span> through
              hands-on projects and continuous{" "}
              <span className="text-primary font-medium">learning</span>.
            </p>
          </div>

          {/* Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-start">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
