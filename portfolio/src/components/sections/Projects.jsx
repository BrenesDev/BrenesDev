import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import projectsData from "../../data/projects.json";
import { generateProjectPlaceholder } from "../../utils/placeholders";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const { projects } = projectsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const ProjectCard = ({ project, featured = false }) => (
    <motion.div
      className={`group relative ${featured ? "lg:col-span-2" : ""}`}
      variants={itemVariants}
      whileHover={{ y: -10 }}
    >
      <div className="bg-secondary/50 rounded-lg overflow-hidden h-full">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = generateProjectPlaceholder(project.title);
            }}
          />
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-textPrimary text-xl font-semibold group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex space-x-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </div>
          </div>

          <p className="text-textSecondary mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="section-margin section-padding" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="heading-secondary mb-4">
            <span className="text-accent font-mono text-lg mr-4">02.</span>
            Proyectos
          </h2>
          <div className="w-32 h-0.5 bg-accent mb-8"></div>
          <p className="text-textSecondary text-lg max-w-2xl">
            Una selección de proyectos que he desarrollado, desde aplicaciones
            web hasta sistemas de gestión, cada uno construido rigurosamente con
            esfuerzo y las mejores prácticas.
          </p>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div variants={itemVariants}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver más en GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
