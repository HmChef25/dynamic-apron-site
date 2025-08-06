import React, { useState } from 'react';
import './.css';
import Modal from './Modal';

const  = ({ isSelected, onToggle, activeFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tags = [];

  const isVisible = activeFilters.length === 0 || tags.some(tag => activeFilters.includes(tag));
  if (!isVisible) return null;

  return (
    <div className={mocktail-card }>
      <img src="/images/.jpg" alt="" onClick={() => setIsOpen(true)} />
      <h3></h3>
      <p>{tags.join(', ')}</p>
      <button onClick={onToggle}>
        {isSelected ? 'Remove' : 'Add to Bundle'}
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2></h2>
          <p>Description for </p>
          <img src="/images/.jpg" alt="" />
        </Modal>
      )}
    </div>
  );
};

export default ;
