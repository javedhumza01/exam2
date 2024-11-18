// pages/contact.tsx

import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-brown-900 mb-8">Contact Us</h1>
      
      
      <section className="text-center mb-10">
        <p className="text-lg mb-4">We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>
      </section>

     
      

      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:contact@coffeeshop.com" className="text-blue-500">
            contact@coffeeshop.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+1234567890" className="text-blue-500">
            +1 (234) 567-890
          </a>
        </p>
        <p>
          <strong>Address:</strong> 123 Coffee St, Brooklyn, NY
        </p>
      </section>

      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
        <p>Saturday: 9:00 AM - 5:00 PM</p>
        <p>Sunday: Closed</p>
      </section>

      
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <p>Stay connected for updates and promotions:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            Twitter
          </a>
        </div>
      </section>
    </div>
  );
}
