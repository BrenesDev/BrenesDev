import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import skillsData from "../../data/skills.json";
import personalData from "../../data/personal.json";
import { motion } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { skills } = skillsData;
  const { social } = personalData;

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

  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding mt-24"
      ref={ref}
    >
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Layout principal de dos columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Columna izquierda - Encabezado + Descripción personal */}
          <motion.div variants={itemVariants}>
            {/* Encabezado movido a la izquierda */}
            <motion.p
              variants={itemVariants}
              className="text-accent font-mono text-sm md:text-base mb-4"
            >
              Jeffry Brenes
            </motion.p>

            <p className="text-textSecondary text-lg leading-relaxed mb-8">
              Apasionado por el aprendizaje constante y el crecimiento personal.
              Disfruto los retos, la competitividad sana y el poder compartir
              conocimientos. <br />
              Como desarrollador de software, estratega de soluciones con buenas
              prácticas, sólidas y sostenibles. He sido testigo de cómo las
              malas prácticas generan deudas técnicas que frenan el crecimiento
              de cualquier empresa, por eso mi compromiso es siempre con la
              calidad.
              <br />
              Llevo mi pasión por aprender al rol de tutor, enseñando ciencias
              exactas como matemáticas, lógica y programación. Siento que
              enseñar es, al mismo tiempo, una de las mejores formas de aprender
              y evolucionar. Mi objetivo es crecer, compartir y aportar valor en
              cada proyecto e interacción.
            </p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-center"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver mis proyectos
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline text-center"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Contáctame
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-6">
              <motion.a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-accent transition-colors duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>

              <motion.a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-accent transition-colors duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>

              <motion.a
                href={social.email}
                className="text-textSecondary hover:text-accent transition-colors duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Cosas de las que estoy orgulloso y creo */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Cosas de las que estoy orgulloso */}
            <div>
              <h3 className="text-accent font-mono text-xl mb-2">
                Cosas de las que estoy orgulloso
              </h3>
              <ul className="space-y-3 text-textSecondary">
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  Ser hijo de padres responsables que me enseñaron el valor del
                  esfuerzo y la perseverancia
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  Esforzarme por ser mejor que ayer
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  Constribuir al aprendizaje y crecimiento de otros
                </li>
              </ul>
            </div>

            {/* Cosas que practico */}
            <div>
              <h3 className="text-accent font-mono text-xl mb-2">
                Cosas que practico
              </h3>
              <ul className="space-y-3 text-textSecondary">
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  Mejorar un 1% cada día
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  Aprender através de la enseñanza
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  Gestionar el tiempo para crear soluciones óptimas y escalables
                </li>
              </ul>
            </div>

            {/* Cosas que creo */}
            <div>
              <h3 className="text-accent font-mono text-xl mb-2">
                Cosas en las que creo
              </h3>
              <ul className="space-y-3 text-textSecondary">
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  La disciplina es el puente entre las metas y los logros
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  No hay nadie más responsable de tu éxito que tú mismo
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">▸</span>
                  Si alguien está por encima de ti, es solo porque ha trabajado
                  más duro que tú
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Tarjetas de estadísticas */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          <div className="text-center p-6 bg-secondary/30 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-textSecondary text-sm">
              Años de experiencia
            </div>
          </div>
          <div className="text-center p-6 bg-secondary/30 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-textSecondary text-sm">
              Estudiantes tutorizados
            </div>
          </div>
          <div className="text-center p-6 bg-secondary/30 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-textSecondary text-sm">
              Tecnologías dominadas
            </div>
          </div>
        </motion.div>

        {/* Grid de tecnologías */}
        <motion.div variants={itemVariants}>
          <h3 className="text-accent font-mono text-xl mb-8 text-center">
            Conocimiento Adquirido
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              ...skills.frontend,
              ...skills.backend,
              ...skills.database,
              ...skills.tools,
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-secondary/30 p-4 rounded-lg text-center hover:bg-secondary/50 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-accent font-medium text-sm">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
