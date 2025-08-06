param([string]$name)

$jsxContent = @"
import React, { useState } from 'react';
import './$name.css';
import Modal from './Modal';

const $name = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className={`mocktail-card ${selected ? 'selected' : ''}`}>
      <img src="/images/$name.jpg" alt="$name" onClick={() => setIsOpen(true)} />
      <h3>$name</h3>
      <button onClick={() => setSelected(!selected)}>
        {selected ? 'Remove' : 'Add to Bundle'}
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>$name</h2>
          <p>Description for $name</p>
          <img src="/images/$name.jpg" alt="$name" />
        </Modal>
      )}
    </div>
  );
};

export default $name;
"@

$cssContent = @"
.mocktail-card {
  border: 1px solid #ccc;
  padding: 1rem;
  transition: transform 0.2s ease;
}
.mocktail-card:hover {
  transform: scale(1.05);
}
.selected {
  border-color: #2ecc71;
}
"@

Set-Content "$name.jsx" $jsxContent
Set-Content "$name.css" $cssContent