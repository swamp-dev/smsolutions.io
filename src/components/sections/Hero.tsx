import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container text-center">
        <h1 className="heading max-w-4xl mx-auto animate-fade-in">
          Transforming Ideas into
          <span className="block text-primary animate-slide-up" style={{ animationDelay: '200ms' }}>
            Digital Reality
          </span>
        </h1>
        <p className="subheading max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
          We craft innovative software solutions that drive business growth and digital transformation.
        </p>
        <a 
          href="#contact" 
          className="btn animate-fade-in hover:scale-105" 
          style={{ animationDelay: '600ms' }}
        >
          Start Your Project
        </a>
      </div>
      <div className="scroll-indicator animate-fade-in" style={{ animationDelay: '1000ms' }}>
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 