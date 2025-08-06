import React, { useState } from 'react';
import Modal from './Modal';


const MocktailGallery = () => {
  const [selectedMocktails, setSelectedMocktails] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const pricePerMocktail = 5;

  const allTags = ['Low Sugar', 'Caffeine-Free']; // Add more as needed

  const toggleMocktail = (name) => {
    setSelectedMocktails((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const clearBundle = () => setSelectedMocktails([]);

  const toggleFilter = (tag) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const totalPrice = selectedMocktails.length * pricePerMocktail;

  return (
    <div>
      <h2>Build Your Bundle</h2>
      <div style={{ marginBottom: '1rem' }}>
        <h4>Filter by Dietary Tags:</h4>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleFilter(tag)}
            style={{
              backgroundColor: activeFilters.includes(tag) ? '#3498db' : '#bdc3c7',
              marginRight: '0.5rem',
              padding: '0.3rem 0.6rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      <p>Selected: {selectedMocktails.join(', ') || 'None'}</p>
      <p>Total: </p>
      <button onClick={clearBundle}>Clear Bundle</button>
      <div className="mocktail-gallery">

      </div>
      {selectedMocktails.length > 0 && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button onClick={() => setShowCheckout(true)}>
            Review Your Bundle ()
          </button>
        </div>
      )}
      {showCheckout && (
        <Modal onClose={() => setShowCheckout(false)}>
          <h2>Your Mocktail Bundle</h2>
          <ul>
            {selectedMocktails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p><strong>Total:</strong> </p>
          <button onClick={() => setShowCheckout(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default MocktailGallery;
