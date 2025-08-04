import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="#hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello, I'm a</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Web
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              Developer
            </span>
          </h1>
          <p className="md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-xl">
            <h2 className="font-bold text-2xl pb-2">
              My name is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Fahad
              </span>
            </h2>
            <p className="text-xl">

            Passionate about building full-stack{" "}
            <span className="text-primary font-bold">web applications</span>. Constantly strive to improve my{" "}
            <span className="text-primary font-bold"> skills </span>through hands-on
            projects and continuous{" "}
            <span className="text-primary font-bold">learning</span>.
            </p>
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
