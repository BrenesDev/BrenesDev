import { Heart, ArrowUp } from "lucide-react";

import { motion } from "framer-motion";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/50 border-t border-accent/20">
      <div className="section-padding py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Copyright */}
          <motion.div
            className="text-center md:text-left mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-textSecondary text-sm">
              © {new Date().getFullYear()} Diseñado & desarrollado por{" "}
              <span className="text-accent font-mono">Jeffry Brenes</span>
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            className="flex space-x-6 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { name: "Inicio", href: "#hero" },
              { name: "Sobre mí", href: "#about" },
              { name: "Proyectos", href: "#projects" },
              { name: "Contacto", href: "#contact" },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-textSecondary hover:text-accent transition-colors duration-300 text-sm font-mono"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Right side - Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="text-textSecondary hover:text-accent transition-colors duration-300 flex items-center space-x-2 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-mono">Subir</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-6 pt-6 border-t border-accent/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-textSecondary text-xs">
            Construido con React, Tailwind CSS, Framer Motion & desplegado en
            Railway
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
