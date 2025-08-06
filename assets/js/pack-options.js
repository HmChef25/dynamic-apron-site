import React from 'react';
import './PackOptions.css'; // Optional: for styling

const packData = [
  {
    id: 'starter',
    title: 'Starter Pack',
    description: 'Perfect for busy weekdays. Includes 3 meals and 1 mocktail.',
    price: '$39',
    perks: ['3 Mediterranean meals', '1 seasonal mocktail', 'Free delivery'],
  },
  {
    id: 'balanced',
    title: 'Balanced Pack',
    description: 'A well-rounded option with variety and flavor.',
    price: '$59',
    perks: ['5 Mediterranean meals', '2 mocktails', 'Priority support'],
  },
  {
    id: 'premium',
    title: 'Premium Pack',
    description: 'For food lovers who want it all.',
    price: '$79',
    perks: ['7 Mediterranean meals', '3 mocktails', 'Exclusive recipes', 'VIP perks'],
  },
];

function PackOptions({ onSelect }) {
  return (
    <section className="pack-options">
      <h2>Choose Your Bundle</h2>
      <div className="pack-grid">
        {packData.map((pack) => (
          <div key={pack.id} className="pack-card">
            <h3>{pack.title}</h3>
            <p className="pack-description">{pack.description}</p>
            <ul className="pack-perks">
              {pack.perks.map((perk, index) => (
                <li key={index}>{perk}</li>
              ))}
            </ul>
            <div className="pack-price">{pack.price}</div>
            <button onClick={() => onSelect(pack.id)} className="select-button">
              Select Pack
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PackOptions;