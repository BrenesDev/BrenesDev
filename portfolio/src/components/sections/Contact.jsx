import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";
import personalData from "../../data/personal.json";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false); // State for toast visibility

  const { personal } = personalData;

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowToast(true); // Show toast notification

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset estado después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: personal.email,
      link: `mailto:${personal.email}`,
    },
    {
      icon: <Phone size={24} />,
      title: "Teléfono",
      value: personal.phone,
      link: `tel:${personal.phone}`,
    },
    {
      icon: <MapPin size={24} />,
      title: "Ubicación",
      value: personal.location,
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-margin section-padding" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            <span className="text-accent font-mono text-lg mr-4">04.</span>
            Hablemos
          </h2>
          <div className="w-32 h-0.5 bg-accent mx-auto mb-8"></div>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            ¿Deseas contactar mis servicios? ¿Tienes un proyecto en mente?
            ¿Necesitas ayuda con programación? ¡Me encantaría escuchar de ti!
            Estoy siempre abierto a discutir nuevas oportunidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-accent font-mono text-xl mb-8">
              Información de contacto
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="text-accent flex-shrink-0">{info.icon}</div>
                  <div>
                    <div className="text-textPrimary font-semibold text-sm">
                      {info.title}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-textSecondary hover:text-accent transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-textSecondary">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-accent font-mono text-xl mb-8">
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-textPrimary text-sm font-medium mb-2"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-textSecondary/20 rounded-lg text-textPrimary placeholder-textSecondary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors duration-300"
                    placeholder="Tu nombre"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-textPrimary text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-textSecondary/20 rounded-lg text-textPrimary placeholder-textSecondary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors duration-300"
                    placeholder="brenes.dev@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-textPrimary text-sm font-medium mb-2"
                >
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-textSecondary/20 rounded-lg text-textPrimary placeholder-textSecondary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors duration-300"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-textPrimary text-sm font-medium mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-textSecondary/20 rounded-lg text-textPrimary placeholder-textSecondary focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Cuéntame sobre tu proyecto o lo que necesitas..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitted ? "bg-green-600 text-white" : "btn-primary"
                  }`}
                  whileHover={!isSubmitting && !isSubmitted ? { y: -2 } : {}}
                  whileTap={
                    !isSubmitting && !isSubmitted ? { scale: 0.98 } : {}
                  }
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>Enviando...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>¡Mensaje enviado!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 p-8 bg-gradient-to-r from-accent/10 to-blue-400/10 rounded-lg border border-accent/20"
        >
          <h3 className="text-2xl font-bold text-textPrimary mb-4">
            ¿Prefieres una conversación directa?
          </h3>
          <p className="text-textSecondary mb-6">
            Agenda una videollamada para discutir tu proyecto.
          </p>

          <motion.a
            href="https://calendly.com/brenes-dev/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar llamada
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 p-4 bg-gray-600 text-textPrimary rounded-lg shadow-lg">
          Esta funcionalidad está en desarrollo.
        </div>
      )}
    </section>
  );
};

export default Contact;
