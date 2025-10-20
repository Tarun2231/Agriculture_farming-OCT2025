import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
  X,
  ChevronRight
} from 'lucide-react';

const DivisionsPage = () => {
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
      id: 'poultry-livestock',
      icon: <Bird className="w-8 h-8 text-white" />,
      title: 'Poultry & Livestock Division',
      emoji: '🐔',
      description: 'Country chicken & broiler farming (organic & antibiotic-free)',
      shortFeatures: [
        'Country chicken & broiler farming (organic & antibiotic-free)',
        'On-farm feed using BSF flour, spirulina, azolla & corn meal',
        'Poultry litter recycled for BSF larvae production',
        'Chicken supply to local markets & retail'
      ],
      fullFeatures: [
        'Country chicken & broiler farming (organic & antibiotic-free)',
        'On-farm feed using BSF flour, spirulina, azolla & corn meal',
        'Poultry litter recycled for BSF larvae production',
        'Chicken supply to local markets & retail',
        'Organic and antibiotic-free farming practices',
        'Premium pricing for organic products'
      ],
      primaryColor: 'bg-orange-500',
      secondaryColor: 'bg-orange-100',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      iconBg: 'bg-orange-500'
    },
    {
      id: 'aquaculture',
      icon: <Fish className="w-8 h-8 text-white" />,
      title: 'Aquaculture Division',
      emoji: '🐟',
      description: 'Small fish ponds integrated with poultry for natural fertilization',
      shortFeatures: [
        'Small fish ponds integrated with poultry',
        'Spirulina & BSF-based feed',
        'Fish: Catla, Rohu, Tilapia, Murrel',
        'Organic fish farming without chemicals'
      ],
      fullFeatures: [
        'Small fish ponds integrated with poultry',
        'Spirulina & BSF-based feed',
        'Fish: Catla, Rohu, Tilapia, Murrel',
        'Organic fish farming without chemicals',
        'Natural fertilization from integrated poultry systems',
        'Diversified income streams'
      ],
      primaryColor: 'bg-blue-500',
      secondaryColor: 'bg-blue-100',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      iconBg: 'bg-blue-500'
    },
    {
      id: 'agriculture-feedstock',
      icon: <Sprout className="w-8 h-8 text-white" />,
      title: 'Agriculture & Feedstock Farming',
      emoji: '🌱',
      description: 'Cultivation of Super Napier, maize & corn for animal feed',
      shortFeatures: [
        'Super Napier, maize & corn cultivation',
        'Spirulina & Azolla farming',
        'Bio-fertilizer from farm waste',
        'Hydroponics & aquaponics'
      ],
      fullFeatures: [
        'Super Napier, maize & corn cultivation',
        'Spirulina & Azolla farming',
        'Bio-fertilizer from farm waste',
        'Hydroponics & aquaponics',
        'Sustainable crop rotation and soil health management',
        'Year-round production capability'
      ],
      primaryColor: 'bg-green-500',
      secondaryColor: 'bg-green-100',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      iconBg: 'bg-green-500'
    },
    {
      id: 'bsf-production',
      icon: <Bug className="w-8 h-8 text-white" />,
      title: 'Waste-to-Wealth: BSF Production',
      emoji: '🪱',
      description: 'Black Soldier Fly larvae from poultry litter & food waste',
      shortFeatures: [
        'BSF larvae from poultry litter',
        'BSF flour for poultry & fish feed',
        'Organic waste recycling',
        'Zero landfill output'
      ],
      fullFeatures: [
        'BSF larvae from poultry litter',
        'BSF flour for poultry & fish feed',
        'Organic waste recycling',
        'Zero landfill output',
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
      id: 'food-retail',
      icon: <Utensils className="w-8 h-8 text-white" />,
      title: 'Food & Retail Division',
      emoji: '🍗',
      description: 'Food Truck: Serving shawarma, chicken kebabs, fries & grilled dishes',
      shortFeatures: [
        'Food Truck: shawarma, kebabs, fries',
        'Fresh farm meat',
        'Retail outlets under own brand',
        'Direct B2B sales'
      ],
      fullFeatures: [
        'Food Truck: shawarma, kebabs, fries',
        'Fresh farm meat',
        'Retail outlets under own brand',
        'Direct B2B sales',
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
      id: 'rd-sustainability',
      icon: <Beaker className="w-8 h-8 text-white" />,
      title: 'R&D & Sustainability',
      emoji: '🧪',
      description: 'Research on sustainable protein sources (Spirulina vs BSF)',
      shortFeatures: [
        'Research on Spirulina vs BSF',
        'Feed formulation optimization',
        'Solar dryers, biogas usage',
        'Sustainable innovations'
      ],
      fullFeatures: [
        'Research on Spirulina vs BSF',
        'Feed formulation optimization',
        'Solar dryers, biogas usage',
        'Sustainable innovations',
        'Renewable energy use (solar dryers, biogas from poultry waste)',
        'Continuous innovation in sustainable farming practices'
      ],
      primaryColor: 'bg-indigo-500',
      secondaryColor: 'bg-indigo-100',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      iconBg: 'bg-indigo-500'
    },
    {
      id: 'peanut-farming',
      icon: <Sprout className="w-8 h-8 text-white" />,
      title: 'Peanut Farming & Processing',
      emoji: '🥜',
      description: 'Peanuts cultivated organically with zero waste processing',
      shortFeatures: [
        'Organic peanut farming',
        'Oil extraction (cold press)',
        'Oil sold directly',
        'Peanut cake reused as feed'
      ],
      fullFeatures: [
        'Organic peanut farming',
        'Oil extraction (cold press)',
        'Oil sold directly',
        'Peanut cake reused as feed',
        'Zero waste: every output is used as either product or feed',
        'Premium oil quality with direct market access'
      ],
      primaryColor: 'bg-orange-600',
      secondaryColor: 'bg-orange-100',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      iconBg: 'bg-orange-600'
    },
    {
      id: 'maize-cultivation',
      icon: <Wheat className="w-8 h-8 text-white" />,
      title: 'Maize Cultivation & Utilization',
      emoji: '🌽',
      description: 'Maize grown for grain sales and feedstock production',
      shortFeatures: [
        'Grain & feedstock production',
        'Maize silage for poultry/goat feed',
        'Market grain sales',
        'Residue used for BSF'
      ],
      fullFeatures: [
        'Grain & feedstock production',
        'Maize silage for poultry/goat feed',
        'Market grain sales',
        'Residue used for BSF',
        'Complete utilization of all plant parts',
        'Dual purpose crop with high yield potential'
      ],
      primaryColor: 'bg-yellow-600',
      secondaryColor: 'bg-yellow-100',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      iconBg: 'bg-yellow-600'
    },
    {
      id: 'rice-farming',
      icon: <Circle className="w-8 h-8 text-white" />,
      title: 'Rice Farming & Resource Reuse',
      emoji: '🌾',
      description: 'Rice grown for sale with complete resource utilization',
      shortFeatures: [
        'Rice grown for sale',
        'Husk used as poultry bedding',
        'Straw used for mushroom cultivation',
        'Zero waste farming'
      ],
      fullFeatures: [
        'Rice grown for sale',
        'Husk used as poultry bedding',
        'Straw used for mushroom cultivation',
        'Zero waste farming',
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
      id: 'mushroom-cultivation',
      icon: <Bug className="w-8 h-8 text-white" />,
      title: 'Mushroom Cultivation',
      emoji: '🍄',
      description: 'High-value mushroom farming using agricultural waste',
      shortFeatures: [
        'Using rice straw, husk & cow dung compost',
        'High-value crop',
        'Sold fresh to market',
        'Compost reused as fertilizer'
      ],
      fullFeatures: [
        'Using rice straw, husk & cow dung compost',
        'High-value crop',
        'Sold fresh to market',
        'Compost reused as fertilizer',
        'High-value, low-space crop cultivation',
        'Complete waste-to-value conversion'
      ],
      primaryColor: 'bg-purple-600',
      secondaryColor: 'bg-purple-100',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-600'
    },
    {
      id: 'cow-dung-compost',
      icon: <Recycle className="w-8 h-8 text-white" />,
      title: 'Cow Dung Compost & Organic Inputs',
      emoji: '🐄',
      description: 'Organic fertilizer production from cow dung and waste',
      shortFeatures: [
        'Organic fertilizer production',
        'Mushroom composting input',
        'Natural nutrient cycling',
        'Soil enrichment'
      ],
      fullFeatures: [
        'Organic fertilizer production',
        'Mushroom composting input',
        'Natural nutrient cycling',
        'Soil enrichment',
        'Reduces chemical input and supports organic cycle',
        'Complete organic farming support'
      ],
      primaryColor: 'bg-brown-600',
      secondaryColor: 'bg-brown-100',
      bgColor: 'bg-brown-50 dark:bg-brown-900/20',
      borderColor: 'border-brown-200 dark:border-brown-800',
      iconBg: 'bg-brown-600'
    },
    {
      id: 'honey-bee-pollination',
      icon: <Hexagon className="w-8 h-8 text-white" />,
      title: 'Honey Bee Pollination Division',
      emoji: '🐝',
      description: 'Honey bee farming for pollination and honey production',
      shortFeatures: [
        'Pollination using bee colonies',
        'Organic honey & beeswax',
        'Improved crop yield',
        'Sustainable pollination'
      ],
      fullFeatures: [
        'Pollination using bee colonies',
        'Organic honey & beeswax',
        'Improved crop yield',
        'Sustainable pollination',
        'Honey bee colonies for natural crop pollination',
        'Beeswax and other bee products for additional income'
      ],
      primaryColor: 'bg-yellow-700',
      secondaryColor: 'bg-yellow-100',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      iconBg: 'bg-yellow-700'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className={`h-full card-hover ${division.borderColor} ${division.bgColor} overflow-hidden transition-all duration-300 hover:shadow-xl`}>
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
                      
                      <ul className="space-y-2 mb-6">
                        {division.shortFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-eco-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        <li className="text-sm text-eco-green-500 font-medium">
                          +{division.fullFeatures.length - division.shortFeatures.length} more features...
                        </li>
                      </ul>
                      
                      <Button
                        onClick={() => setSelectedDivision(division)}
                        className="w-full bg-eco-green-600 hover:bg-eco-green-700 text-white"
                      >
                        Click for details
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* The Power of Integration Section */}
            <motion.div
              variants={itemVariants}
              className="mt-20 text-center"
            >
              <div className="bg-gradient-to-r from-eco-green-500 to-eco-green-600 rounded-2xl p-8 lg:p-12 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  🌿 The Power of Integration
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
      </main>
      <Footer isDarkMode={isDarkMode} />

      {/* Modal for Division Details */}
      <AnimatePresence>
        {selectedDivision && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDivision(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`${selectedDivision.primaryColor} text-white p-6 rounded-t-2xl`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${selectedDivision.iconBg} shadow-lg`}>
                      {selectedDivision.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedDivision.emoji} {selectedDivision.title}
                      </h3>
                      <p className="text-white/90 mt-1">
                        {selectedDivision.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedDivision(null)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">All Features:</h4>
                <ul className="space-y-3">
                  {selectedDivision.fullFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full ${selectedDivision.primaryColor} mt-2 flex-shrink-0`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DivisionsPage;