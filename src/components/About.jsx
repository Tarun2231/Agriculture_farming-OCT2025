import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight, Leaf, Recycle, Zap } from 'lucide-react';

const About = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: 'easeOut',
      },
    },
  };

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-eco-green-500" />,
      title: 'Zero Waste',
      description: 'Every resource is recycled and reused in our closed-loop system',
    },
    {
      icon: <Recycle className="w-8 h-8 text-eco-green-500" />,
      title: 'Circular Economy',
      description: 'Waste becomes feed, feed becomes food, creating endless cycles',
    },
    {
      icon: <Zap className="w-8 h-8 text-eco-green-500" />,
      title: 'Maximum Efficiency',
      description: 'Integrated systems maximize yield while minimizing environmental impact',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-eco-green-50/30 dark:to-eco-green-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-eco-green-500">GreenLoop</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing agriculture through integrated farming practices that create 
              self-sustaining ecosystems where every output becomes an input for another process.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image/Visual */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat relative"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop&q=80')`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-center p-8">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Leaf className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Integrated Farm Ecosystem</h3>
                      <p className="text-white/90">
                        A visual representation of our interconnected farming systems
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <Recycle className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                How We Integrate Multiple Divisions with Zero Waste
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our farm operates on the principle of circular agriculture, where each division 
                supports and enhances the others. Poultry waste becomes fertilizer for crops, 
                crop residues feed our livestock, and organic matter nurtures our aquaculture systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                This integrated approach not only eliminates waste but also creates multiple 
                revenue streams while maintaining the highest standards of organic and sustainable farming.
              </p>

              <div className="pt-6">
                <Button
                  size="lg"
                  variant="eco"
                  className="group"
                  onClick={() => document.getElementById('divisions').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Our Model
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full card-hover border-eco-green-200 dark:border-eco-green-800 bg-gradient-to-br from-background to-eco-green-50/50 dark:to-eco-green-900/20">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-eco-green-100 dark:bg-eco-green-900/30 rounded-full mb-6 group-hover:bg-eco-green-200 dark:group-hover:bg-eco-green-800/50 transition-colors duration-300"
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
