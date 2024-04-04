import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial-card bg-white p-6 rounded-lg shadow">
            <p className="text-lg mb-4">"Storytelling Experience is amazing! It has transformed the way I create and share stories."</p>
            <p className="font-semibold">- John Doe</p>
          </div>
          <div className="testimonial-card bg-white p-6 rounded-lg shadow">
            <p className="text-lg mb-4">"I love the customizable themes and interactive features. Highly recommended!"</p>
            <p className="font-semibold">- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
