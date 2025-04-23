
import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <a
            href="mailto:abhidcoder@gmail.com"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Mail className="w-6 h-6 text-primary mr-2" />
            <span className="text-gray-600">Email</span>
          </a>
          <a
            href="tel:+918105216079"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Phone className="w-6 h-6 text-primary mr-2" />
            <span className="text-gray-600">Phone</span>
          </a>
          <a
            href="https://github.com/abhidcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Github className="w-6 h-6 text-primary mr-2" />
            <span className="text-gray-600">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/abhidcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Linkedin className="w-6 h-6 text-primary mr-2" />
            <span className="text-gray-600">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
