import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Leaf, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Divisions', href: '#divisions' },
    { name: 'Integration Cycle', href: '#integration-cycle' },
    { name: 'Income Streams', href: '#income-streams' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', href: '#' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-eco-green-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-eco-green-600 font-bold text-xl">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GreenLoop</h3>
                  <p className="text-eco-green-200 text-sm">Integrated Agro Farm</p>
                </div>
              </div>
              
              <p className="text-eco-green-100 mb-6 leading-relaxed max-w-md">
                Building a sustainable future through integrated farming. Zero waste, maximum yield, 
                and sustainable practices that benefit both the environment and our community.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-eco-green-100 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-eco-green-300" />
                  <a 
                    href="mailto:greenloopfarm@gmail.com"
                    className="text-eco-green-100 hover:text-white transition-colors"
                  >
                    greenloopfarm@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-eco-green-300" />
                  <a 
                    href="tel:+919999999999"
                    className="text-eco-green-100 hover:text-white transition-colors"
                  >
                    +91 99999 99999
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-eco-green-300" />
                  <span className="text-eco-green-100">
                    Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-eco-green-200">
                <span>© 2025 GreenLoop Integrated Agro Farm</span>
              </div>
              
              <div className="flex items-center space-x-2 text-eco-green-200">
                <span>Built with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span>&</span>
                <Leaf className="w-4 h-4 text-eco-green-300" />
                <span>Sustainability</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
