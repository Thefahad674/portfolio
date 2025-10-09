 import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-5 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-bold mb-12 text-left md:text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h3 className="font-bold opacity-0 animate-fade-in text-left text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[2vw]">
              Passionate{" "}
              <span className="text-primary text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[2vw]">
                Web Developer
              </span>
            </h3>

            <p className="text-muted-foreground text-xl text-left">
              I'm a self-taught{" "}
              <span className="text-primary font-bold"> MERN </span> stack
              developer. I'm{" "}
              <span className="text-primary font-bold">passionate</span> about
              creating elegant solutions to{" "}
              <span className="text-primary font-bold"> complex </span>
              problems, and I'm constantly learning new{" "}
              <span className="text-primary font-bold"> technologies</span> and
              <span className="text-primary font-bold"> techniques</span> to
              stay at the forefront of the ever-evolving{" "}
              <span className="text-primary font-bold"> web </span>
              landscape.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Fahad(Resume).pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right content - skills cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
