import React from 'react';

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <h3 className="text-2xl font-semibold mb-4">Interactive Stories</h3>
            <p>Create interactive and engaging stories that captivate your audience.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-semibold mb-4">Customizable Themes</h3>
            <p>Choose from a variety of themes and templates to personalize your stories.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-semibold mb-4">Collaboration</h3>
            <p>Collaborate with others to co-author stories and bring your ideas to life.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
