import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const DivisionDetail = () => {
  const { divisionId } = useParams();
  const navigate = useNavigate();

  const divisions = {
    'poultry-livestock': {
      title: 'Poultry & Livestock Division',
      emoji: '🐔',
      description: 'Country chicken & broiler farming (organic & antibiotic-free)',
      image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=600&fit=crop&q=80',
      features: [
        'On-farm feed preparation using BSF flour, spirulina, azolla & corn meal',
        'Poultry litter recycled for BSF larvae production',
        'Chicken supply to local markets, restaurants & retail shops',
        'Organic and antibiotic-free farming practices'
      ],
      benefits: [
        'Higher protein content in eggs and meat',
        'Reduced feed costs through on-farm production',
        'Zero waste through litter recycling',
        'Premium pricing for organic products'
      ],
      outputs: ['Fresh Chicken', 'Organic Eggs', 'Poultry Litter', 'BSF Feed'],
      color: 'orange'
    },
    'aquaculture': {
      title: 'Aquaculture Division',
      emoji: '🐟',
      description: 'Small fish ponds integrated with poultry for natural fertilization',
      image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&h=600&fit=crop&q=80',
      features: [
        'Feeding with high-protein spirulina & BSF-based feed',
        'Fish species: Catla, Rohu, Tilapia, Murrel (market-demand based)',
        'Organic fish farming without synthetic feeds or hormones',
        'Natural fertilization from integrated poultry systems'
      ],
      benefits: [
        'Natural water purification through integrated systems',
        'Diversified income streams',
        'Sustainable protein production',
        'Low maintenance cost'
      ],
      outputs: ['Fresh Fish', 'Fish Waste', 'Natural Fertilizer', 'Clean Water'],
      color: 'blue'
    },
    'agriculture-feedstock': {
      title: 'Agriculture & Feedstock Farming',
      emoji: '🌱',
      description: 'Cultivation of Super Napier, maize & corn for animal feed',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop&q=80',
      features: [
        'Spirulina & Azolla cultivation for natural protein supplement',
        'Bio-fertilizer & composting from poultry and farm waste',
        'Hydroponics & aquaponics setups for fresh leafy greens',
        'Sustainable crop rotation and soil health management'
      ],
      benefits: [
        'Year-round production capability',
        'Reduced dependency on external feed sources',
        'Enhanced soil fertility',
        'Multiple crop varieties'
      ],
      outputs: ['Animal Feed', 'Fresh Vegetables', 'Organic Fertilizer', 'Spirulina'],
      color: 'green'
    },
    'bsf-production': {
      title: 'Waste-to-Wealth: BSF Production Unit',
      emoji: '🪱',
      description: 'Black Soldier Fly larvae from poultry litter & food waste',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&h=600&fit=crop&q=80',
      features: [
        'BSF flour processing for poultry & fish feed',
        'Organic waste management with zero landfill output',
        'High-protein alternative to traditional feed sources',
        'Sustainable waste conversion technology'
      ],
      benefits: [
        'Complete waste elimination',
        'High protein content (40-50%)',
        'Low production costs',
        'Environmental sustainability'
      ],
      outputs: ['BSF Larvae', 'BSF Flour', 'Organic Compost', 'Zero Waste'],
      color: 'purple'
    },
    'food-retail': {
      title: 'Food & Retail Division',
      emoji: '🍗',
      description: 'Food Truck: Serving shawarma, chicken kebabs, fries & grilled dishes',
      image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=600&fit=crop&q=80',
      features: [
        'Fresh meat sourced directly from your own farm',
        'Retail outlets for chicken & eggs under your brand',
        'Direct sales to restaurants, caterers, and local vendors',
        'Farm-to-table dining experience'
      ],
      benefits: [
        'Direct market access',
        'Brand recognition',
        'Higher profit margins',
        'Quality control'
      ],
      outputs: ['Processed Food', 'Brand Products', 'Direct Sales', 'Market Presence'],
      color: 'red'
    },
    'rd-sustainability': {
      title: 'R&D & Sustainability',
      emoji: '🧪',
      description: 'Research on sustainable protein sources (Spirulina vs BSF)',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&h=600&fit=crop&q=80',
      features: [
        'Feed formulation optimization for cost reduction & higher yield',
        'Renewable energy use (solar dryers, biogas from poultry waste)',
        'Continuous innovation in sustainable farming practices',
        'Data-driven approach to maximize efficiency'
      ],
      benefits: [
        'Continuous improvement',
        'Cost optimization',
        'Innovation leadership',
        'Sustainability metrics'
      ],
      outputs: ['Research Data', 'Optimized Processes', 'Innovation', 'Sustainability Reports'],
      color: 'indigo'
    },
    'peanut-farming': {
      title: 'Peanut Farming & Processing Division',
      emoji: '🥜',
      description: 'Peanuts cultivated organically with zero waste processing',
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&h=600&fit=crop&q=80',
      features: [
        'Peanuts cultivated organically',
        'Oil extracted using cold press unit',
        'Peanut oil sold directly (farm-to-market)',
        'Peanut cake reused as high-protein animal feed',
        'Zero waste: every output is used as either product or feed'
      ],
      benefits: [
        'Premium oil quality',
        'High-protein animal feed',
        'Zero waste processing',
        'Direct market access'
      ],
      outputs: ['Peanut Oil', 'Peanut Cake Feed', 'Organic Peanuts', 'Zero Waste'],
      color: 'orange'
    },
    'maize-cultivation': {
      title: 'Maize Cultivation & Utilization Division',
      emoji: '🌽',
      description: 'Maize grown for grain sales and feedstock production',
      image:Agriculture_farming-OCT2025/src/components/Divisions.jsx:185:7: error: 'Wheat' is not defined
        'Maize grown for both grain sales and feedstock',
        'Maize silage produced for poultry & goat feed',
        'Grain maize sold in market for revenue',
        'Stalks and leftover plant matter reused for BSF feed',
        'Complete utilization of all plant parts'
      ],
      benefits: [
        'Dual purpose crop (grain + feed)',
        'Complete plant utilization',
        'High yield potential',
        'Market demand'
      ],
      outputs: ['Maize Grain', 'Maize Silage', 'Stalk Feed', 'Complete Utilization'],
      color: 'yellow'
    },
    'rice-farming': {
      title: 'Rice Farming & Resource Reuse Division',
      emoji: '🌾',
      description: 'Rice grown for sale with complete resource utilization',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&q=80',
      features: [
        'Rice grown for direct sale',
        'Rice husk used as poultry bedding for hygiene',
        'Rice straw collected for mushroom cultivation',
        'Reduces waste and adds income stream',
        'Complete plant utilization cycle'
      ],
      benefits: [
        'Multiple income streams',
        'Waste reduction',
        'Improved hygiene',
        'Complete utilization'
      ],
      outputs: ['Rice Grain', 'Rice Husk Bedding', 'Rice Straw Substrate', 'Multiple Products'],
      color: 'green'
    },
    'mushroom-cultivation': {
      title: 'Mushroom Cultivation Division',
      emoji: '🍄',
      description: 'High-value mushroom farming using agricultural waste',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop&q=80',
      features: [
        'Uses rice straw, rice husk, and cow dung compost as substrate',
        'High-value, low-space crop cultivation',
        'Mushrooms sold fresh to restaurants and markets',
        'After harvest, spent compost reused as organic fertilizer',
        'Complete waste-to-value conversion'
      ],
      benefits: [
        'High value per square foot',
        'Waste utilization',
        'Premium pricing',
        'Year-round production'
      ],
      outputs: ['Fresh Mushrooms', 'Spent Compost Fertilizer', 'Premium Products', 'Waste Utilization'],
      color: 'purple'
    },
    'cow-dung-compost': {
      title: 'Cow Dung Compost & Organic Inputs Division',
      emoji: '🐄',
      description: 'Organic fertilizer production from cow dung and waste',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&q=80',
      features: [
        'Cow dung and waste composted to make organic fertilizer',
        'Used for mushroom composting and crop farming',
        'Reduces chemical input and supports organic cycle',
        'Soil enrichment and natural nutrient cycling',
        'Complete organic farming support'
      ],
      benefits: [
        'Natural soil enrichment',
        'Reduced chemical dependency',
        'Cost-effective fertilizer',
        'Environmental sustainability'
      ],
      outputs: ['Organic Compost', 'Soil Enrichment', 'Natural Fertilizer', 'Organic Support'],
      color: 'brown'
    },
    'honey-bee-pollination': {
      title: 'Honey Bee Pollination Division',
      emoji: '🐝',
      description: 'Honey bee farming for pollination and honey production',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop&q=80',
      features: [
        'Honey bee colonies for natural crop pollination',
        'Organic honey production from farm flowers',
        'Improved crop yields through natural pollination',
        'Beeswax and other bee products for additional income',
        'Sustainable pollination supporting all farm crops'
      ],
      benefits: [
        'Natural pollination',
        'Premium honey products',
        'Increased crop yields',
        'Biodiversity support'
      ],
      outputs: ['Organic Honey', 'Beeswax', 'Enhanced Pollination', 'Bee Products'],
      color: 'yellow'
    }
  };

  const division = divisions[divisionId];

  if (!division) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Division Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const colorClasses = {
    orange: 'bg-orange-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    indigo: 'bg-indigo-500',
    yellow: 'bg-yellow-500',
    brown: 'bg-brown-500'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-eco-green-50/20 dark:to-eco-green-900/10">
      {/* Header */}
      <div className={`${colorClasses[division.color]} text-white py-8`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Divisions
              </Button>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold">
                  {division.emoji} {division.title}
                </h1>
                <p className="text-lg opacity-90 mt-2">
                  {division.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={division.image}
              alt={division.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Key Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {division.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full ${colorClasses[division.color]} mt-2 flex-shrink-0`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {division.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full ${colorClasses[division.color]} mt-2 flex-shrink-0`} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Outputs */}
            <Card>
              <CardHeader>
                <CardTitle>Outputs & Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {division.outputs.map((output, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium text-white ${colorClasses[division.color]}`}
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DivisionDetail;
