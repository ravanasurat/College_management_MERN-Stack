import React, { useState } from "react";
import "./CardGrid.css";

const CardGrid = ({ cardsData }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

 
  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-container">
      <div className="card-wrapper">
        {}
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
                {}
                <p className="card-title">{card.projectTitle}</p>
                <p className="card-event">{card.eventName}</p>
              </div>
            </div>
          ))}
        </div>

        {}
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
              <h2>{selectedCard.projectTitle}</h2>
              {}
              <p className="card-summary">{selectedCard.summary}</p>
              <p><strong>Team Members:</strong> {selectedCard.teamMembers}</p>
              <p><strong>Mentors:</strong> {selectedCard.mentors}</p>
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
