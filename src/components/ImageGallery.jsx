import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop&q=80',
      alt: 'Sustainable Farming',
      title: 'Integrated Farm Ecosystem',
      description: 'Aerial view of our sustainable farming practices'
    },
    {
      src: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=600&fit=crop&q=80',
      alt: 'Poultry Farming',
      title: 'Organic Poultry Division',
      description: 'Free-range chickens in natural environment'
    },
    {
      src: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&h=600&fit=crop&q=80',
      alt: 'Aquaculture',
      title: 'Fish Farming Ponds',
      description: 'Clean fish ponds with natural water systems'
    },
    {
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80',
      alt: 'Peanut Processing',
      title: 'Peanut Oil Extraction',
      description: 'Cold press unit for peanut oil production'
    },
    {
      src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop&q=80',
      alt: 'Mushroom Farming',
      title: 'Mushroom Cultivation',
      description: 'Fresh mushrooms growing on organic substrate'
    },
    {
      src: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&h=600&fit=crop&q=80',
      alt: 'Compost Production',
      title: 'Organic Compost',
      description: 'Natural composting process for soil enrichment'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
              <p className="text-sm opacity-90">{image.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
