import React from 'react';
import { Link } from 'react-router-dom';
import './ConferenceList1.css'; // Import the CSS file

const conferences = [
  {
    name: 'IEEE India Council',
    path: 'ieee',
    description: 'A premier organization for advancing technology for humanity through conferences and publications.',
  },
  {
    name: 'Journal of the Indian Institute of Science',
    path: 'iisc',
    description: 'Multidisciplinary research journal focusing on high-quality original research in science and engineering.',
  },
  {
    name: 'Indian Journal of Engineering and Materials Sciences',
    path: 'ijems',
    description: 'Covers research in engineering materials and their applications across engineering fields.',
  },
  {
    name: 'Indian Journal of Science and Technology',
    path: 'ijst',
    description: 'An interdisciplinary journal publishing research across a wide array of science and technology domains.',
  },
  {
    name: 'Current Science',
    path: 'current-science',
    description: 'A multidisciplinary journal publishing high-impact research across various fields of science and technology.',
  },
  {
    name: 'Economic and Political Weekly (EPW)',
    path: 'epw',
    description: 'A journal publishing scholarly research on economics, sociology, and political science, focusing on contemporary issues.',
  },
];

const ConferenceList = () => {
  return (
    <div className="conference-list">
      <h1>Paper Conferences</h1>
      <div className="card-container">
        {conferences.map((conference) => (
          <Link to={`/conference/${conference.path}`} key={conference.path} style={{ textDecoration: 'none' }}>
            <div className="card">
              <h2>{conference.name}</h2>
              <p>{conference.description}</p> {/* Added description here */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConferenceList;
