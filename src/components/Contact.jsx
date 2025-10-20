import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input, Textarea, Label } from './ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
} from 'lucide-react';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'greenloopfarm@gmail.com',
      link: 'mailto:greenloopfarm@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 99999 99999',
      link: 'tel:+919999999999'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Andhra Pradesh, India',
      link: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      value: 'Mon - Sat: 8AM - 6PM',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-background to-eco-green-50/20 dark:to-eco-green-900/10">
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
              Get In <span className="text-eco-green-500">Touch</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to join our sustainable farming revolution? We'd love to hear from you. 
              Whether you're interested in partnerships, products, or learning more about our methods.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Card className="h-full card-hover border-eco-green-200 dark:border-eco-green-800 bg-gradient-to-br from-background to-eco-green-50/30 dark:to-eco-green-900/20">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-eco-green-100 dark:bg-eco-green-900/30 rounded-lg flex items-center justify-center text-eco-green-600 dark:text-eco-green-400 group-hover:bg-eco-green-200 dark:group-hover:bg-eco-green-800/50 transition-colors">
                              {info.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">
                                {info.title}
                              </h4>
                              <a
                                href={info.link}
                                className="text-sm text-muted-foreground hover:text-eco-green-600 transition-colors"
                              >
                                {info.value}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Farm Location
                </h4>
                <Card className="border-eco-green-200 dark:border-eco-green-800 bg-gradient-to-br from-background to-eco-green-50/30 dark:to-eco-green-900/20">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-gradient-to-br from-eco-green-100 to-eco-green-200 dark:from-eco-green-900/30 dark:to-eco-green-800/30 rounded-lg flex items-center justify-center">
                      <div className="text-center text-eco-green-600 dark:text-eco-green-400">
                        <MapPin className="w-12 h-12 mx-auto mb-3" />
                        <p className="font-medium">Andhra Pradesh, India</p>
                        <p className="text-sm opacity-75">Interactive map coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
            >
              <Card className="border-eco-green-200 dark:border-eco-green-800 bg-gradient-to-br from-background to-eco-green-50/30 dark:to-eco-green-900/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    We'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-eco-green-200 dark:border-eco-green-800 focus:border-eco-green-500 focus:ring-eco-green-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-eco-green-200 dark:border-eco-green-800 focus:border-eco-green-500 focus:ring-eco-green-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your interest in sustainable farming..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="border-eco-green-200 dark:border-eco-green-800 focus:border-eco-green-500 focus:ring-eco-green-500"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      variant="eco"
                      className="w-full group"
                    >
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Follow Our Journey
            </h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-eco-green-100 dark:bg-eco-green-900/30 rounded-full flex items-center justify-center text-eco-green-600 dark:text-eco-green-400 hover:bg-eco-green-200 dark:hover:bg-eco-green-800/50 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
