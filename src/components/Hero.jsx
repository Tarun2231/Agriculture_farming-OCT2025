import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=1080&fit=crop&q=80')`
          }}
        />
        <div className={`absolute inset-0 ${isDarkMode ? 'eco-gradient-dark' : 'eco-gradient'} opacity-80`} />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-eco-green-300/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-eco-brown-300/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-eco-cream-300/20 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen py-20"
      >
        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
            Zero Waste • Maximum Yield • Sustainable Farming
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight text-center"
        >
          <span className="block">Building a</span>
          <span className="block text-eco-cream-200">Sustainable Future</span>
          <span className="block">Through Integrated Farming</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed text-center"
        >
          <p className="mb-4">
            A closed-loop ecosystem combining poultry, livestock, aquaculture & organic farming.
          </p>
          <p className="text-eco-cream-200 font-medium">
            Where every resource is reused, every product is natural, and every output adds value.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            size="xl"
            className="bg-white text-eco-green-600 hover:bg-eco-cream-100 hover:text-eco-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 group min-w-[180px]"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="ecoOutline"
            size="xl"
            className="border-white text-white hover:bg-white hover:text-eco-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 group min-w-[180px]"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Contact Us
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '100%', label: 'Organic' },
            { number: '0', label: 'Waste' },
            { number: '6+', label: 'Divisions' },
            { number: '∞', label: 'Sustainability' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
