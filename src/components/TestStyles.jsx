import React from 'react';

const TestStyles = () => {
  return (
    <div className="min-h-screen bg-eco-green-50 dark:bg-eco-green-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-eco-green-600 mb-4">
          GreenLoop Farm - Styles Test
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-foreground mb-2">Test Card 1</h2>
            <p className="text-muted-foreground">This is a test card to verify Tailwind CSS is working.</p>
          </div>
          <div className="bg-eco-green-100 dark:bg-eco-green-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-eco-green-700 dark:text-eco-green-200 mb-2">Test Card 2</h2>
            <p className="text-eco-green-600 dark:text-eco-green-300">Eco-themed colors should be visible here.</p>
          </div>
          <div className="bg-eco-brown-100 dark:bg-eco-brown-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-eco-brown-700 dark:text-eco-brown-200 mb-2">Test Card 3</h2>
            <p className="text-eco-brown-600 dark:text-eco-brown-300">Brown earth tones should be visible here.</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-eco-green-500 to-eco-green-600 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-2">Gradient Test</h3>
          <p>This should show a green gradient background.</p>
        </div>
      </div>
    </div>
  );
};

export default TestStyles;
