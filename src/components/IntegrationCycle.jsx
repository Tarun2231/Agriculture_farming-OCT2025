import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { 
  ArrowRight, 
  ArrowDown, 
  ArrowUp,
  Recycle, 
  Leaf, 
  Droplets, 
  Zap,
  Bug,
  Fish,
  Wheat,
  Bird,
  Sprout,
  Circle
} from 'lucide-react';

const IntegrationCycle = ({ isDarkMode }) => {
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

  const cycleSteps = [
    {
      icon: <Bird className="w-6 h-6" />,
      title: 'Poultry & Goat Waste',
      description: 'Organic waste from livestock',
      color: 'bg-orange-500',
      nextArrow: 'right'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Biogas Production',
      description: 'Renewable energy generation',
      color: 'bg-yellow-500',
      nextArrow: 'right'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Fertilizer',
      description: 'Nutrient-rich organic matter',
      color: 'bg-green-500',
      nextArrow: 'down'
    },
    {
      icon: <Wheat className="w-6 h-6" />,
      title: 'Crops & Grass',
      description: 'Feed for animals',
      color: 'bg-emerald-500',
      nextArrow: 'right'
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: 'Peanut Oil Cake',
      description: 'High-protein animal feed',
      color: 'bg-orange-600',
      nextArrow: 'right'
    },
    {
      icon: <Wheat className="w-6 h-6" />,
      title: 'Maize Silage',
      description: 'Poultry & goat feed',
      color: 'bg-yellow-600',
      nextArrow: 'right'
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: 'Rice Husk Bedding',
      description: 'Poultry hygiene improvement',
      color: 'bg-green-600',
      nextArrow: 'right'
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: 'Mushroom Substrate',
      description: 'Rice straw cultivation',
      color: 'bg-purple-500',
      nextArrow: 'right'
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: 'BSF Production',
      description: 'High-protein feed source',
      color: 'bg-purple-600',
      nextArrow: 'right'
    },
    {
      icon: <Fish className="w-6 h-6" />,
      title: 'Fish & Poultry Feed',
      description: 'Nutritious protein source',
      color: 'bg-blue-500',
      nextArrow: 'up'
    }
  ];

  const benefits = [
    {
      icon: <Recycle className="w-8 h-8 text-eco-green-500" />,
      title: 'Self-Sustaining Cycle',
      description: 'Every output becomes an input for another process, creating endless loops of efficiency.'
    },
    {
      icon: <Droplets className="w-8 h-8 text-eco-green-500" />,
      title: 'Zero Waste Output',
      description: 'Nothing goes to landfill. Every byproduct is transformed into valuable resources.'
    },
    {
      icon: <Zap className="w-8 h-8 text-eco-green-500" />,
      title: 'Maximum Efficiency',
      description: 'Integrated systems maximize yield while minimizing environmental impact and costs.'
    }
  ];

  return (
    <section id="integration-cycle" className="py-20 lg:py-32 bg-gradient-to-b from-eco-green-50/30 dark:from-eco-green-900/10 to-background">
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
              Zero-Waste <span className="text-eco-green-500">Integration Cycle</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A self-sustaining cycle that maximizes efficiency and minimizes waste. 
              Every resource flows seamlessly from one process to another, creating value at every step.
            </p>
          </motion.div>

          {/* Cycle Visualization */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-background to-eco-green-50/50 dark:to-eco-green-900/20 border-eco-green-200 dark:border-eco-green-800">
              <CardContent className="p-8 lg:p-12">
                {/* Desktop Cycle */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-3 gap-8 items-center">
                    {/* Row 1 */}
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center space-y-3"
                      >
                        <div className={`w-16 h-16 ${cycleSteps[0].color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {cycleSteps[0].icon}
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-foreground">{cycleSteps[0].title}</h4>
                          <p className="text-sm text-muted-foreground">{cycleSteps[0].description}</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-8 h-8 text-eco-green-500" />
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center space-y-3"
                      >
                        <div className={`w-16 h-16 ${cycleSteps[1].color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {cycleSteps[1].icon}
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-foreground">{cycleSteps[1].title}</h4>
                          <p className="text-sm text-muted-foreground">{cycleSteps[1].description}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex justify-center">
                      <ArrowDown className="w-8 h-8 text-eco-green-500" />
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center space-y-3"
                      >
                        <div className={`w-16 h-16 ${cycleSteps[2].color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {cycleSteps[2].icon}
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-foreground">{cycleSteps[2].title}</h4>
                          <p className="text-sm text-muted-foreground">{cycleSteps[2].description}</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowDown className="w-8 h-8 text-eco-green-500" />
                    </div>

                    {/* Row 3 */}
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center space-y-3"
                      >
                        <div className={`w-16 h-16 ${cycleSteps[3].color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {cycleSteps[3].icon}
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-foreground">{cycleSteps[3].title}</h4>
                          <p className="text-sm text-muted-foreground">{cycleSteps[3].description}</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-8 h-8 text-eco-green-500" />
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center space-y-3"
                      >
                        <div className={`w-16 h-16 ${cycleSteps[4].color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {cycleSteps[4].icon}
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-foreground">{cycleSteps[4].title}</h4>
                          <p className="text-sm text-muted-foreground">{cycleSteps[4].description}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Row 4 */}
                    <div className="flex justify-center">
                      <ArrowRight className="w-8 h-8 text-eco-green-500" />
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center space-y-3"
                      >
                        <div className={`w-16 h-16 ${cycleSteps[5].color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          {cycleSteps[5].icon}
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-foreground">{cycleSteps[5].title}</h4>
                          <p className="text-sm text-muted-foreground">{cycleSteps[5].description}</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowUp className="w-8 h-8 text-eco-green-500" />
                    </div>
                  </div>
                </div>

                {/* Mobile Cycle */}
                <div className="lg:hidden space-y-6">
                  {cycleSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4"
                    >
                      <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      {index < cycleSteps.length - 1 && (
                        <ArrowDown className="w-6 h-6 text-eco-green-500 flex-shrink-0" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
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
                      {benefit.icon}
                    </motion.div>
                    
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
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

export default IntegrationCycle;
