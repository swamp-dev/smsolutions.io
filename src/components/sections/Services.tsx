import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; emoji: string; index: number }> = ({
  title,
  description,
  emoji,
  index,
}) => (
  <div 
    className="card animate-fade-in"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <div className="text-5xl mb-6 text-center animate-float">{emoji}</div>
    <h3 className="text-xl font-bold mb-4 text-white text-center">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      emoji: "💻",
      title: "Custom Software Development",
      description: "Tailored solutions that perfectly align with your business needs and goals.",
    },
    {
      emoji: "🤖",
      title: "AI & Automation",
      description: "Leverage cutting-edge AI technology to streamline your operations.",
    },
    {
      emoji: "📊",
      title: "Technical Consulting",
      description: "Expert guidance to help you make informed technology decisions.",
    },
  ];

  return (
    <section id="services" className="section bg-gray-950">
      <div className="container">
        <h2 className="heading text-center animate-fade-in">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 