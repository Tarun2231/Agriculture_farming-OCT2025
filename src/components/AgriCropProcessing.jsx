import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  ArrowRight,
  Leaf,
  Droplets,
  Zap,
  Recycle,
  Wheat,
  Sprout,
  Bug,
  Fish,
  Bird,
  TrendingUp,
  CheckCircle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Circle
} from 'lucide-react';

const AgriCropProcessing = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cropProcesses = [
    {
      icon: <Sprout className="w-8 h-8 text-white" />,
      title: 'Peanut Farming & Processing',
      emoji: '🥜',
      description: 'Peanuts cultivated organically with zero waste processing',
      features: [
        'Peanuts cultivated organically',
        'Oil extracted using cold press unit',
        'Peanut oil sold directly (farm-to-market)',
        'Peanut cake reused as high-protein animal feed',
        'Zero waste: every output is used as either product or feed'
      ],
      primaryColor: 'bg-orange-500',
      secondaryColor: 'bg-orange-100',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      iconBg: 'bg-orange-500',
      outputs: ['Peanut Oil', 'Peanut Cake Feed']
    },
    {
      icon: <Wheat className="w-8 h-8 text-white" />,
      title: 'Maize Cultivation & Utilization',
      emoji: '🌽',
      description: 'Maize grown for grain sales and feedstock production',
      features: [
        'Maize grown for both grain sales and feedstock',
        'Maize silage produced for poultry & goat feed',
        'Grain maize sold in market for revenue',
        'Stalks and leftover plant matter reused for BSF feed',
        'Complete utilization of all plant parts'
      ],
      primaryColor: 'bg-yellow-500',
      secondaryColor: 'bg-yellow-100',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      iconBg: 'bg-yellow-500',
      outputs: ['Maize Grain', 'Maize Silage', 'Stalk Feed']
    },
    {
      icon: <Circle className="w-8 h-8 text-white" />,
      title: 'Rice Farming & Resource Reuse',
      emoji: '🌾',
      description: 'Rice grown for sale with complete resource utilization',
      features: [
        'Rice grown for direct sale',
        'Rice husk used as poultry bedding for hygiene',
        'Rice straw collected for mushroom cultivation',
        'Reduces waste and adds income stream',
        'Complete plant utilization cycle'
      ],
      primaryColor: 'bg-green-500',
      secondaryColor: 'bg-green-100',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      iconBg: 'bg-green-500',
      outputs: ['Rice Grain', 'Rice Husk Bedding', 'Rice Straw Substrate']
    },
    {
      icon: <Bug className="w-8 h-8 text-white" />,
      title: 'Mushroom Cultivation',
      emoji: '🍄',
      description: 'High-value mushroom farming using agricultural waste',
      features: [
        'Uses rice straw, rice husk, and cow dung compost as substrate',
        'High-value, low-space crop cultivation',
        'Mushrooms sold fresh to restaurants and markets',
        'After harvest, spent compost reused as organic fertilizer',
        'Complete waste-to-value conversion'
      ],
      primaryColor: 'bg-purple-500',
      secondaryColor: 'bg-purple-100',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-500',
      outputs: ['Fresh Mushrooms', 'Spent Compost Fertilizer']
    },
    {
      icon: <Recycle className="w-8 h-8 text-white" />,
      title: 'Cow Dung Compost & Organic Inputs',
      emoji: '🐄',
      description: 'Organic fertilizer production from cow dung and waste',
      features: [
        'Cow dung and waste composted to make organic fertilizer',
        'Used for mushroom composting and crop farming',
        'Reduces chemical input and supports organic cycle',
        'Soil enrichment and natural nutrient cycling',
        'Complete organic farming support'
      ],
      primaryColor: 'bg-brown-500',
      secondaryColor: 'bg-brown-100',
      bgColor: 'bg-brown-50 dark:bg-brown-900/20',
      borderColor: 'border-brown-200 dark:border-brown-800',
      iconBg: 'bg-brown-500',
      outputs: ['Organic Compost', 'Soil Enrichment']
    }
  ];

  const flowSteps = [
    {
      id: 1,
      title: 'Peanut Farming',
      icon: <Sprout className="w-6 h-6" />,
      color: 'bg-orange-500',
      outputs: ['Peanut Oil', 'Peanut Cake']
    },
    {
      id: 2,
      title: 'Maize Farming',
      icon: <Wheat className="w-6 h-6" />,
      color: 'bg-yellow-500',
      outputs: ['Grain Sale', 'Maize Silage']
    },
    {
      id: 3,
      title: 'Rice Farming',
      icon: <Circle className="w-6 h-6" />,
      color: 'bg-green-500',
      outputs: ['Rice Grain', 'Husk Bedding', 'Straw Substrate']
    },
    {
      id: 4,
      title: 'Mushroom Cultivation',
      icon: <Bug className="w-6 h-6" />,
      color: 'bg-purple-500',
      outputs: ['Fresh Mushrooms', 'Spent Compost']
    },
    {
      id: 5,
      title: 'Compost Production',
      icon: <Recycle className="w-6 h-6" />,
      color: 'bg-brown-500',
      outputs: ['Organic Fertilizer']
    },
    {
      id: 6,
      title: 'Animal Feed',
      icon: <Bird className="w-6 h-6" />,
      color: 'bg-blue-500',
      outputs: ['Poultry Feed', 'Goat Feed', 'Fish Feed']
    },
    {
      id: 7,
      title: 'BSF Processing',
      icon: <Bug className="w-6 h-6" />,
      color: 'bg-red-500',
      outputs: ['Protein Feed']
    },
    {
      id: 8,
      title: 'Crop Fertilization',
      icon: <Leaf className="w-6 h-6" />,
      color: 'bg-green-600',
      outputs: ['Nutrient-Rich Soil']
    }
  ];

  return (
    <section id="agri-crop-processing" className="py-20 lg:py-32 bg-gradient-to-b from-background to-eco-green-50/20 dark:to-eco-green-900/10">
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
              🌱 Agri & <span className="text-eco-green-500">Crop Processing</span> Division
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Complete zero-waste farming system where every crop output becomes input for another process, 
              creating a sustainable closed-loop ecosystem that maximizes yield and minimizes environmental impact.
            </p>
          </motion.div>

          {/* Crop Processing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {cropProcesses.map((crop, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className={`h-full card-hover ${crop.borderColor} ${crop.bgColor} overflow-hidden`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {/* Primary Icon with colored circular background */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${crop.iconBg} shadow-lg`}
                      >
                        {crop.icon}
                      </motion.div>
                      {/* Secondary Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${crop.secondaryColor} shadow-sm`}>
                        <span className="text-2xl">{crop.emoji}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-eco-green-600 transition-colors">
                      {crop.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {crop.description}
                    </p>
                    
                    <ul className="space-y-2 mb-4">
                      {crop.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-eco-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Outputs */}
                    <div className="mt-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Outputs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {crop.outputs.map((output, idx) => (
                          <span key={idx} className="text-xs bg-eco-green-100 dark:bg-eco-green-900/30 text-eco-green-700 dark:text-eco-green-300 px-2 py-1 rounded-full">
                            {output}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Zero-Waste Flow Diagram */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                🔁 Sustainable Zero-Waste Farming Flow
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every output becomes an input for another process, creating a closed-loop zero-waste farm ecosystem
              </p>
            </div>

            {/* Flow Diagram */}
            <div className="bg-gradient-to-br from-eco-green-50 to-eco-green-100 dark:from-eco-green-900/20 dark:to-eco-green-800/20 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center relative"
                  >
                    {/* Flow Arrow */}
                    {index < flowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 z-10">
                        <ArrowRight className="w-6 h-6 text-eco-green-500" />
                      </div>
                    )}
                    
                    {/* Step Card */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white shadow-lg mb-4`}>
                      {step.icon}
                    </div>
                    
                    <h4 className="text-sm lg:text-base font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    
                    <div className="space-y-1">
                      {step.outputs.map((output, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground bg-white/50 dark:bg-black/20 rounded px-2 py-1">
                          {output}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Circular Flow Indicator */}
              <div className="mt-12 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-eco-green-500 rounded-full text-white shadow-xl"
                >
                  <Recycle className="w-10 h-10" />
                </motion.div>
                <p className="mt-4 text-lg font-semibold text-eco-green-600 dark:text-eco-green-400">
                  Continuous Zero-Waste Cycle
                </p>
              </div>
            </div>
          </motion.div>

          {/* Integration Benefits */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-eco-green-500 to-eco-green-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                The Power of Complete Integration
              </h3>
              <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Our Agri & Crop Processing Division doesn't just coexist with other divisions—it actively 
                supports and enhances every other process, creating synergies that multiply our efficiency and sustainability.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Leaf className="w-8 h-8" />, label: '100% Organic' },
                  { icon: <Droplets className="w-8 h-8" />, label: 'Zero Waste' },
                  { icon: <Zap className="w-8 h-8" />, label: 'Max Efficiency' },
                  { icon: <TrendingUp className="w-8 h-8" />, label: 'Multiple Revenue' },
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
              
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-white text-eco-green-600 hover:bg-eco-cream-100 hover:text-eco-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  onClick={() => document.getElementById('integration-cycle').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Our Sustainable Model
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgriCropProcessing;
