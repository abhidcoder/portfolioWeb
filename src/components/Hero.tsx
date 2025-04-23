
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Avatar className="h-80 w-60 border-4 border-primary">
              <AvatarImage src={import.meta.env.BASE_URL+"/uploads/abhishekImage.png"} alt="Abhishek Kumar Singh" />
              <AvatarFallback>Hi, I am Abhishek</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Abhishek Kumar Singh
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6">
              Full Stack Developer
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Python</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">JavaScript</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">React</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Node.js</span>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A passionate Full Stack Developer with expertise in MERN stack development. 
              Currently working at Superzop, building scalable web applications and 
              delivering high-performance solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="https://github.com/abhidcoder" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
