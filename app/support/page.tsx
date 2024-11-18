
import React from 'react';

export default function Support() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Support</h1>
      
      
      <section className="text-center mb-8">
        <p className="text-lg">
          Need help? Reach out to us or explore our resources below.
        </p>
      </section>

     
      <div className="flex flex-col items-center space-y-4">
        <p className="text-gray-600">
          <strong>Email:</strong> <a href="mailto:support@coffeeshop.com" className="text-blue-500">support@coffeeshop.com</a>
        </p>
      </div>

     
      <div className="mt-8 text-center">
        <a href="/faq" className="text-blue-500 underline">
          Visit our FAQ page for quick answers
        </a>
      </div>
    </div>
  );
}
