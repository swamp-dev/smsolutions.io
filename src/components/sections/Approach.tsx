import React from 'react';

const Approach: React.FC = () => {
  return (
    <section id="how-we-work" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading">How We Work</h2>
          <p className="subheading">
            We believe in direct collaboration and clear communication. Our approach combines technical excellence with practical business solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-white">Direct Partnership</h3>
              <p className="text-gray-300">
                Work directly with us - no middlemen, no confusion. Clear communication and quick responses every step of the way.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-white">Clear Results</h3>
              <p className="text-gray-300">
                We focus on delivering measurable value through high-quality, maintainable solutions that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach; 