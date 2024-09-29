import React, { useState } from "react";
import "./CardGrid.css";

const CardGrid = ({ cardsData }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Handle card click to expand
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // Handle close button click to collapse
  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-container">
      <div className="card-wrapper">
        {/* Left Side: List of cards */}
        <div className={`card-list ${selectedCard ? "shrink" : ""}`}>
          {cardsData.map((card, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(card)}
            >
              <img
                src={card.image}
                alt={`Card ${index}`}
                className="card-image"
              />
              <div className="card-content">
                <p className="card-description">{card.description}</p>
                <a
                  href={card.link}
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Expanded Selected Card */}
        {selectedCard && (
          <div className="card-expanded">
            <span className="close-button" onClick={handleClose}>
              ✕
            </span>
            <img
              src={selectedCard.image}
              alt="Selected Card"
              className="card-image-large"
            />
            <div className="card-content">
              <h2>Selected Card</h2>
              <p className="card-description-large">
                {selectedCard.description}
              </p>
              <a
                href={selectedCard.link}
                className="card-link-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGrid;
