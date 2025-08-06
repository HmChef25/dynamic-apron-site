import React, { useState } from 'react';
import './CucumberFizz.css';
import Modal from './Modal';

const CucumberFizz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className={mocktail-card }>
      <img src="/images/CucumberFizz.jpg" alt="CucumberFizz" onClick={() => setIsOpen(true)} />
      <h3>CucumberFizz</h3>
      <button onClick={() => setSelected(!selected)}>
        {selected ? 'Remove' : 'Add to Bundle'}
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>CucumberFizz</h2>
          <p>Description for CucumberFizz</p>
          <img src="/images/CucumberFizz.jpg" alt="CucumberFizz" />
        </Modal>
      )}
    </div>
  );
};

export default CucumberFizz;
