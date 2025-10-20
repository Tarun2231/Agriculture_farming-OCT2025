import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Target, 
  Heart, 
  Globe, 
  Users, 
  ArrowRight,
  CheckCircle,
  Leaf,
  Recycle,
  Zap,
  Droplets,
  Shield
} from 'lucide-react';

const BusinessVision = ({ isDarkMode }) => {
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

  const sustainabilityGoals = [
    {
      icon: <CheckCircle className="w-6 h-6 text-eco-green-500" />,
      title: '100% Organic farming',
      description: 'No synthetic chemicals, pesticides, or artificial inputs'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-eco-green-500" />,
      title: 'Zero waste cycle',
      description: 'Every byproduct becomes a valuable resource'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-eco-green-500" />,
      title: 'Self-sufficient feed',
      description: 'Producing our own high-quality feed from farm resources'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-eco-green-500" />,
      title: 'Eco water & waste management',
      description: 'Sustainable water use and complete waste recycling'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-eco-green-500" />,
      title: 'Multi-income stability',
      description: 'Diversified revenue streams for financial resilience'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-eco-green-500" />,
      title: 'Passion for Sustainability',
      description: 'Driven by love for the environment and future generations'
    },
    {
      icon: <Globe className="w-8 h-8 text-eco-green-500" />,
      title: 'Global Impact',
      description: 'Contributing to worldwide sustainable agriculture movement'
    },
    {
      icon: <Users className="w-8 h-8 text-eco-green-500" />,
      title: 'Community Focus',
      description: 'Supporting local communities through ethical practices'
    }
  ];

  return (
    <section id="sustainability" className="py-20 lg:py-32 bg-gradient-to-b from-eco-green-50/30 dark:from-eco-green-900/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-7xl mx-auto"
        >
          {/* Business Vision */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-eco-green-100 dark:bg-eco-green-900/30 rounded-full mb-6">
              <Target className="w-8 h-8 text-eco-green-500" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-eco-green-500">Mission</span>
            </h2>
            
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-background to-eco-green-50/50 dark:to-eco-green-900/20 border-eco-green-200 dark:border-eco-green-800">
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                  To build a fully integrated farm-to-food ecosystem — where every resource is reused, 
                  every product is natural, and every output adds value — creating sustainable profit and zero waste.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-eco-green-100 dark:bg-eco-green-900/30 rounded-full mb-3">
                        {value.icon}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <Button
                  size="xl"
                  variant="eco"
                  className="group"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sustainability Goals */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Sustainability <span className="text-eco-green-500">Goals</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our commitment to environmental stewardship and sustainable practices drives every decision we make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sustainabilityGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full card-hover border-eco-green-200 dark:border-eco-green-800 bg-gradient-to-br from-background to-eco-green-50/50 dark:to-eco-green-900/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {goal.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-eco-green-600 transition-colors">
                            {goal.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {goal.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Summary */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-eco-green-500 to-eco-green-600 border-eco-green-400">
              <CardContent className="p-8 lg:p-12 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Building a Sustainable Future
                </h3>
                <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
                  Through our integrated farming approach, we're not just producing food—we're creating 
                  a model for sustainable agriculture that can be replicated worldwide.
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                  {[
                    { icon: <Leaf className="w-8 h-8" />, label: 'Organic' },
                    { icon: <Recycle className="w-8 h-8" />, label: 'Zero Waste' },
                    { icon: <Zap className="w-8 h-8" />, label: 'Renewable' },
                    { icon: <Droplets className="w-8 h-8" />, label: 'Water Smart' },
                    { icon: <Shield className="w-8 h-8" />, label: 'Protected' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
                        {item.icon}
                      </div>
                      <div className="text-sm font-medium">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessVision;
