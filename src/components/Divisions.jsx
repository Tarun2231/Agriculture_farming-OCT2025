import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Bird, 
  Fish, 
  Bug, 
  ArrowRight,
  Leaf,
  Droplets,
  Zap,
  Users,
  Sprout,
  Utensils,
  Beaker,
  Wheat,
  Circle,
  Recycle,
  Hexagon,
  ExternalLink,
} from 'lucide-react';

const Divisions = ({ isDarkMode }) => {
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

  const divisions = [
    {
      icon: <Bird className="w-8 h-8 text-white" />,
      title: 'Poultry & Livestock Division',
      emoji: '🐔',
      description: 'Country chicken & broiler farming (organic & antibiotic-free)',
      features: [
        'On-farm feed preparation using BSF flour, spirulina, azolla & corn meal',
        'Poultry litter recycled for BSF larvae production',
        'Chicken supply to local markets, restaurants & retail shops',
        'Organic and antibiotic-free farming practices'
      ],
      primaryColor: 'bg-orange-500',
      secondaryColor: 'bg-orange-100',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      iconBg: 'bg-orange-500'
    },
    {
      icon: <Fish className="w-8 h-8 text-white" />,
      title: 'Aquaculture Division',
      emoji: '🐟',
      description: 'Small fish ponds integrated with poultry for natural fertilization',
      features: [
        'Feeding with high-protein spirulina & BSF-based feed',
        'Fish species: Catla, Rohu, Tilapia, Murrel (market-demand based)',
        'Organic fish farming without synthetic feeds or hormones',
        'Natural fertilization from integrated poultry systems'
      ],
      primaryColor: 'bg-blue-500',
      secondaryColor: 'bg-blue-100',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      iconBg: 'bg-blue-500'
    },
    {
      icon: <Sprout className="w-8 h-8 text-white" />,
      title: 'Agriculture & Feedstock Farming',
      emoji: '🌱',
      description: 'Cultivation of Super Napier, maize & corn for animal feed',
      features: [
        'Spirulina & Azolla cultivation for natural protein supplement',
        'Bio-fertilizer & composting from poultry and farm waste',
        'Hydroponics & aquaponics setups for fresh leafy greens',
        'Sustainable crop rotation and soil health management'
      ],
      primaryColor: 'bg-green-500',
      secondaryColor: 'bg-green-100',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      iconBg: 'bg-green-500'
    },
    {
      icon: <Bug className="w-8 h-8 text-white" />,
      title: 'Waste-to-Wealth: BSF Production Unit',
      emoji: '🪱',
      description: 'Black Soldier Fly larvae from poultry litter & food waste',
      features: [
        'BSF flour processing for poultry & fish feed',
        'Organic waste management with zero landfill output',
        'High-protein alternative to traditional feed sources',
        'Sustainable waste conversion technology'
      ],
      primaryColor: 'bg-purple-500',
      secondaryColor: 'bg-purple-100',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-500'
    },
    {
      icon: <Utensils className="w-8 h-8 text-white" />,
      title: 'Food & Retail Division',
      emoji: '🍗',
      description: 'Food Truck: Serving shawarma, chicken kebabs, fries & grilled dishes',
      features: [
        'Fresh meat sourced directly from your own farm',
        'Retail outlets for chicken & eggs under your brand',
        'Direct sales to restaurants, caterers, and local vendors',
        'Farm-to-table dining experience'
      ],
      primaryColor: 'bg-red-500',
      secondaryColor: 'bg-red-100',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
      iconBg: 'bg-red-500'
    },
    {
      icon: <Beaker className="w-8 h-8 text-white" />,
      title: 'R&D & Sustainability',
      emoji: '🧪',
      description: 'Research on sustainable protein sources (Spirulina vs BSF)',
      features: [
        'Feed formulation optimization for cost reduction & higher yield',
        'Renewable energy use (solar dryers, biogas from poultry waste)',
        'Continuous innovation in sustainable farming practices',
        'Data-driven approach to maximize efficiency'
      ],
      primaryColor: 'bg-indigo-500',
      secondaryColor: 'bg-indigo-100',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      iconBg: 'bg-indigo-500'
    },
    {
      icon: <Sprout className="w-8 h-8 text-white" />,
      title: 'Peanut Farming & Processing Division',
      emoji: '🥜',
      description: 'Peanuts cultivated organically with zero waste processing',
      features: [
        'Peanuts cultivated organically',
        'Oil extracted using cold press unit',
        'Peanut oil sold directly (farm-to-market)',
        'Peanut cake reused as high-protein animal feed',
        'Zero waste: every output is used as either product or feed'
      ],
      primaryColor: 'bg-orange-600',
      secondaryColor: 'bg-orange-100',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      iconBg: 'bg-orange-600'
    },
    {
      icon: <Wheat className="w-8 h-8 text-white" />,
      title: 'Maize Cultivation & Utilization Division',
      emoji: '🌽',
      description: 'Maize grown for grain sales and feedstock production',
      features: [
        'Maize grown for both grain sales and feedstock',
        'Maize silage produced for poultry & goat feed',
        'Grain maize sold in market for revenue',
        'Stalks and leftover plant matter reused for BSF feed',
        'Complete utilization of all plant parts'
      ],
      primaryColor: 'bg-yellow-600',
      secondaryColor: 'bg-yellow-100',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      iconBg: 'bg-yellow-600'
    },
    {
      icon: <Circle className="w-8 h-8 text-white" />,
      title: 'Rice Farming & Resource Reuse Division',
      emoji: '🌾',
      description: 'Rice grown for sale with complete resource utilization',
      features: [
        'Rice grown for direct sale',
        'Rice husk used as poultry bedding for hygiene',
        'Rice straw collected for mushroom cultivation',
        'Reduces waste and adds income stream',
        'Complete plant utilization cycle'
      ],
      primaryColor: 'bg-green-600',
      secondaryColor: 'bg-green-100',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      iconBg: 'bg-green-600'
    },
    {
      icon: <Bug className="w-8 h-8 text-white" />,
      title: 'Mushroom Cultivation Division',
      emoji: '🍄',
      description: 'High-value mushroom farming using agricultural waste',
      features: [
        'Uses rice straw, rice husk, and cow dung compost as substrate',
        'High-value, low-space crop cultivation',
        'Mushrooms sold fresh to restaurants and markets',
        'After harvest, spent compost reused as organic fertilizer',
        'Complete waste-to-value conversion'
      ],
      primaryColor: 'bg-purple-600',
      secondaryColor: 'bg-purple-100',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-600'
    },
    {
      icon: <Recycle className="w-8 h-8 text-white" />,
      title: 'Cow Dung Compost & Organic Inputs Division',
      emoji: '🐄',
      description: 'Organic fertilizer production from cow dung and waste',
      features: [
        'Cow dung and waste composted to make organic fertilizer',
        'Used for mushroom composting and crop farming',
        'Reduces chemical input and supports organic cycle',
        'Soil enrichment and natural nutrient cycling',
        'Complete organic farming support'
      ],
      primaryColor: 'bg-brown-600',
      secondaryColor: 'bg-brown-100',
      bgColor: 'bg-brown-50 dark:bg-brown-900/20',
      borderColor: 'border-brown-200 dark:border-brown-800',
      iconBg: 'bg-brown-600'
    },
    {
      icon: <Hexagon className="w-8 h-8 text-white" />,
      title: 'Honey Bee Pollination Division',
      emoji: '🐝',
      description: 'Honey bee farming for pollination and honey production',
      features: [
        'Honey bee colonies for natural crop pollination',
        'Organic honey production from farm flowers',
        'Improved crop yields through natural pollination',
        'Beeswax and other bee products for additional income',
        'Sustainable pollination supporting all farm crops'
      ],
      primaryColor: 'bg-yellow-700',
      secondaryColor: 'bg-yellow-100',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      iconBg: 'bg-yellow-700'
    }
  ];

  return (
    <section id="divisions" className="py-20 lg:py-32 bg-gradient-to-b from-background to-eco-green-50/20 dark:to-eco-green-900/10">
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
              Our <span className="text-eco-green-500">Divisions</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Twelve integrated divisions working together to create a comprehensive sustainable, 
              zero-waste farming ecosystem that maximizes yield and minimizes environmental impact.
            </p>
          </motion.div>

          {/* Divisions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => {
                  const divisionIds = [
                    'poultry-livestock', 'aquaculture', 'agriculture-feedstock', 'bsf-production',
                    'food-retail', 'rd-sustainability', 'peanut-farming', 'maize-cultivation',
                    'rice-farming', 'mushroom-cultivation', 'cow-dung-compost', 'honey-bee-pollination'
                  ];
                  const divisionId = divisionIds[index];
                  window.open(`/division/${divisionId}`, '_blank');
                }}
              >
                <Card className={`h-full card-hover ${division.borderColor} ${division.bgColor} overflow-hidden`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {/* Primary Icon with colored circular background */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${division.iconBg} shadow-lg`}
                      >
                        {division.icon}
                      </motion.div>
                      {/* Secondary Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${division.secondaryColor} shadow-sm`}>
                        <span className="text-2xl">{division.emoji}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-eco-green-600 transition-colors">
                      {division.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {division.description}
                    </p>
                    
                    <ul className="space-y-2 mb-4">
                      {division.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-eco-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {division.features.length > 3 && (
                        <li className="text-sm text-eco-green-500 font-medium">
                          +{division.features.length - 3} more features...
                        </li>
                      )}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-medium text-eco-green-600 group-hover:text-eco-green-700">
                        Click for details
                      </span>
                      <ExternalLink className="w-4 h-4 text-eco-green-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Integration Benefits */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-eco-green-500 to-eco-green-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                The Power of Integration
              </h3>
              <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Each division doesn't just coexist—they actively support and enhance each other, 
                creating synergies that multiply our efficiency and sustainability.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Leaf className="w-8 h-8" />, label: '100% Organic' },
                  { icon: <Droplets className="w-8 h-8" />, label: 'Zero Waste' },
                  { icon: <Zap className="w-8 h-8" />, label: 'Max Efficiency' },
                  { icon: <Users className="w-8 h-8" />, label: 'Community Impact' },
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Divisions;
