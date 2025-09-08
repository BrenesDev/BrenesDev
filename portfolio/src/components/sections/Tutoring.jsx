import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Clock, Users, Star, Check } from "lucide-react";
import skillsData from "../../data/skills.json";

const Tutoring = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { tutoring } = skillsData;

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

  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Metodología Práctica",
      description:
        "Aprendizaje basado en proyectos reales y casos de uso del mundo laboral.",
    },
    {
      icon: <Users size={32} />,
      title: "Clases Personalizadas",
      description:
        "Tanto individuales como grupales, adaptadas al nivel y ritmo de cada estudiante.",
    },
    {
      icon: <Star size={32} />,
      title: "Experiencia Comprobada",
      description:
        "Más de 3 años ayudando a estudiantes a alcanzar sus metas en programación dentro de la Universidad Nacional De Costa Rica.",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      content:
        "Las clases de React me ayudaron a conseguir mi primera pasantía. Excelente metodología.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      content:
        "Aprendí Laravel desde cero y ahora trabajo como desarrollador full-stack. Muy recomendado.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      content:
        "Me ayudó a entender conceptos complejos de JavaScript de manera muy clara y práctica.",
      rating: 5,
    },
  ];

  return (
    <section
      id="tutoring"
      className="section-margin section-padding bg-secondary/20"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            <span className="text-accent font-mono text-lg mr-4">03.</span>
            Tutorías Personalizadas
          </h2>
          <div className="w-32 h-0.5 bg-accent mx-auto mb-8"></div>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Comparto mi conocimiento y experiencia ayudando a estudiantes y
            profesionales a dominar las tecnologías más demandadas del
            desarrollo web.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-primary/50 rounded-lg hover:bg-primary/70 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-accent mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-textPrimary text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Subjects and Pricing */}
          <motion.div variants={itemVariants}>
            <h3 className="text-accent font-mono text-xl mb-6">
              Materias que enseño
            </h3>

            <div className="space-y-4 mb-8">
              {tutoring.subjects.map((subject, index) => (
                <motion.div
                  key={subject}
                  className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check size={16} className="text-accent flex-shrink-0" />
                  <span className="text-textSecondary">{subject}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={itemVariants}>
            <h3 className="text-accent font-mono text-xl mb-6">
              Lo que dicen mis estudiantes
            </h3>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-primary/50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-accent fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-textSecondary mb-4 italic">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <div className="text-textPrimary font-semibold">
                      {testimonial.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tutoring;
