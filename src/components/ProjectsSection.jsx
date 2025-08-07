import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import React, { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Luxrora Rentals",
    description:
      "Luxora Rentals is a premium car rental platform offering seamless booking experiences with advanced features like real-time availability and secure payments. The application includes user authentication, admin dashboard, and integrated payment processing.",
    image: "/projects/Luxora-rentals.png",
    tags: ["React", "TailwindCSS", "MongoDB", "Express", "Node.js", "Imagekit"],
    demoURL: "https://luxora-rental.vercel.app/",
    githubUrl: "https://github.com/Thefahad674/Luxora-Rental-fullstack",
  },
  {
    id: 2,
    title: "Blogs App",
    description:
      "A modern blogging platform with rich text editing, social sharing, and personalized recommendations. Features include markdown support, user profiles, comments, and responsive design for optimal reading experience on all devices.",
    image: "/projects/My-blogs.png",
    tags: ["React", "Markdown", "Responsive Design"],
    demoURL: "https://blog-app-pi-olive.vercel.app/",
    githubUrl: "https://github.com/Thefahad674/blog-app",
  },
  {
    id: 3,
    title: "Delicious Bites",
    description:
      "Food booking and delivery service with intelligent recommendations based on user preferences.Seamless checkout process with multiple payment options.",
    image: "/projects/FoodHub.png",
    tags: ["React", "Redux", "API Integration", "Geolocation"],
    demoURL: "https://delicious-bites-thefahad674s-projects.vercel.app/",
    githubUrl: "https://github.com/Thefahad674/Food-hub",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 md:px-6">
      <div className="absolute inset-0 overflow-hidden opacity-10 md:opacity-15">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-3 md:mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Digital Experiences
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Each project is a unique journey from concept to deployment,
            blending design, technology and innovation.
          </p>
        </div>

        {/* Desktop-optimized grid (2 columns) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-muted/50 bg-card shadow-lg transition-all hover:shadow-xl hover:border-muted/70"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 dark:text-white/80 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-foreground/80 dark:text-foreground/80 border border-muted-foreground/20 dark:border-muted-foreground/20 transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary dark:text-primary border border-primary/20 hover:bg-primary hover:text-white dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 z-20"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-muted/50 text-foreground/80 dark:text-foreground/80 border border-muted-foreground/20 dark:border-muted-foreground/20 hover:bg-muted hover:text-foreground dark:hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-muted-foreground/30 focus:ring-offset-2 z-20"
                      aria-label={`View source code of ${project.title}`}
                    >
                      View Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => openModal(project)}
                    className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary dark:text-primary border border-primary/20 hover:bg-primary hover:text-white dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 z-20"
                    aria-label={`View details about ${project.title}`}
                  >
                    <span className="text-sm font-medium">Project Details</span>
                    <ArrowRight
                      size={18}
                      className="transform transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-optimized grid (1 column) */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-muted/50 bg-card shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-muted/50 text-foreground/80 dark:text-foreground/80 border border-muted-foreground/20 dark:border-muted-foreground/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center gap-1">
                  <div className="flex space-x-2">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary dark:text-primary border border-primary/20 hover:bg-primary hover:text-white dark:hover:text-white"
                    >
                      Demo
                      <ExternalLink className="ml-1.5 h-3 w-3" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/50 text-foreground/80 dark:text-foreground/80 border border-muted-foreground/20 dark:border-muted-foreground/20 hover:bg-muted hover:text-foreground dark:hover:text-foreground"
                    >
                      Code
                      <Github className="ml-1.5 h-3 w-3" />
                    </a>
                  </div>

                  <button
                    onClick={() => openModal(project)}
                    className="flex-shrink-0 flex items-center space-x-1 px-2 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary border border-primary/20 hover:bg-primary hover:text-white dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 z-20"
                    aria-label={`View details about ${project.title}`}
                  >
                    <span className="text-sm font-medium">Details</span>
                    <ArrowRight
                      size={18}
                      className="transform transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://github.com/Thefahad674"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium shadow-lg hover:shadow-primary/40 hover:scale-[1.02] transition-all"
          >
            Check My Github
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="relative bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-muted/50 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute right-1 p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="h-64 md:h-full rounded-lg overflow-hidden border border-muted/30">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground mb-6 whitespace-pre-line">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-foreground/80 dark:text-foreground/80 border border-muted-foreground/20 dark:border-muted-foreground/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={selectedProject.demoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary dark:text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all"
                  >
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-muted/50 text-foreground/80 dark:text-foreground/80 border border-muted-foreground/20 dark:border-muted-foreground/20 hover:bg-muted/70 hover:text-foreground dark:hover:text-foreground transition-all"
                  >
                    View Code
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
