import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  DollarSign, 
  TrendingUp, 
  ShoppingCart, 
  Package,
  Users,
  Store
} from 'lucide-react';

const IncomeStreams = ({ isDarkMode }) => {
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

  const incomeStreams = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Poultry Contract Income',
      description: 'Long-term contracts with restaurants and retailers',
      category: 'Primary Revenue'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Country Chicken & Egg Sales',
      description: 'Direct sales to local markets and consumers',
      category: 'Direct Sales'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Goat Sales',
      description: 'Premium organic goat meat and breeding stock',
      category: 'Livestock'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Fish Sales',
      description: 'Fresh organic fish from integrated aquaculture',
      category: 'Aquaculture'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Fruits & Vegetables',
      description: 'Organic produce from hydroponic and traditional farming',
      category: 'Agriculture'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Honey & Beeswax',
      description: 'Pure organic honey and natural beeswax products',
      category: 'Apiary'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'BSF Flour',
      description: 'High-protein feed supplement for livestock',
      category: 'Feed Production'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Vermicompost',
      description: 'Premium organic fertilizer for gardens and farms',
      category: 'Soil Products'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Biogas Use',
      description: 'Renewable energy for farm operations and sale',
      category: 'Energy'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Spirulina Powder',
      description: 'Superfood supplement for health-conscious consumers',
      category: 'Health Products'
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Food Truck Sales',
      description: 'Mobile dining serving farm-fresh meals',
      category: 'Food Service'
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: 'Retail Outlet Sales',
      description: 'Branded products sold through retail channels',
      category: 'Retail'
    }
  ];

  const categories = {
    'Primary Revenue': 'bg-green-500',
    'Direct Sales': 'bg-blue-500',
    'Livestock': 'bg-orange-500',
    'Aquaculture': 'bg-cyan-500',
    'Agriculture': 'bg-emerald-500',
    'Apiary': 'bg-yellow-500',
    'Feed Production': 'bg-purple-500',
    'Soil Products': 'bg-brown-500',
    'Energy': 'bg-red-500',
    'Health Products': 'bg-pink-500',
    'Food Service': 'bg-indigo-500',
    'Retail': 'bg-teal-500'
  };

  return (
    <section id="income-streams" className="py-20 lg:py-32 bg-gradient-to-b from-background to-eco-green-50/20 dark:to-eco-green-900/10">
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
              Multiple <span className="text-eco-green-500">Income Streams</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Diversified revenue sources ensure financial stability and growth. 
              From direct sales to value-added products, every aspect of our integrated farm generates income.
            </p>
          </motion.div>

          {/* Income Streams Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {incomeStreams.map((stream, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full card-hover border-eco-green-200 dark:border-eco-green-800 bg-gradient-to-br from-background to-eco-green-50/30 dark:to-eco-green-900/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`w-10 h-10 ${categories[stream.category]} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                        {stream.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-eco-green-600 transition-colors">
                          {stream.title}
                        </h4>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-eco-green-100 dark:bg-eco-green-900/30 text-eco-green-700 dark:text-eco-green-300 rounded-full mt-1">
                          {stream.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stream.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Revenue Summary */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-eco-green-500 to-eco-green-600 border-eco-green-400">
              <CardContent className="p-8 lg:p-12 text-white text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Diversified Revenue Model
                </h3>
                <p className="text-lg lg:text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
                  Our integrated approach creates multiple revenue streams that work together, 
                  reducing risk and maximizing profitability through sustainable practices.
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { number: '12+', label: 'Revenue Streams' },
                    { number: '100%', label: 'Organic Products' },
                    { number: '0', label: 'Waste Output' },
                    { number: '∞', label: 'Sustainability' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-3xl lg:text-4xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm lg:text-base opacity-90">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="xl"
              variant="eco"
              className="group"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Partner With Us
            </Button>
            
            <Button
              size="xl"
              variant="ecoOutline"
              className="group"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <Store className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Buy Our Products
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncomeStreams;
