import React from 'react';
import CardGrid from './components/CardGrid'; 
import exampleImage1 from "./components/shutterstock_2071413608-scaled.jpg"; 
import exampleImage2 from "./components/438-30.png"
import exampleImage3 from "./components/1600X900-How-does-blockchain-work.jpg"

const cardsData = [
  {
    image: exampleImage1,
    projectTitle: "Smart City Traffic Monitoring System",
    eventName: "Symposim",
    summary: "A real-time traffic monitoring system that leverages IoT sensors and AI to optimize traffic flow in urban environments. The system collects data from various sensors, processes it using AI algorithms, and dynamically adjusts traffic lights to minimize congestion.",
    teamMembers: "Alice, Bob, Charlie",
    mentors: "Dr. Smith",
    link: "https://example.com/project1"
  },
  {
    image:exampleImage2,
    projectTitle: "AI-Powered Resume Screening Tool",
    eventName: "Dhrona-2024",
    summary: "An AI-based platform designed to streamline the recruitment process by automatically screening and ranking job applicants' resumes. The tool uses NLP and machine learning to match candidates with job descriptions and provides actionable insights for recruiters.",
    teamMembers: "David, Eva, Frank",
    mentors: "Prof. Johnson",
    link: "https://example.com/project2"
  },
  {
    image: exampleImage3,
    projectTitle: "Blockchain-Based Document Authentication",
    eventName: "REVA-HACK24",
    summary: "A blockchain solution to securely authenticate and store important documents, ensuring tamper-proof verification for institutions and individuals. The platform creates a decentralized ledger for document validation and retrieval.",
    teamMembers: "Grace, Henry, Ian",
    mentors: "Dr. Lewis",
    link: "https://example.com/project3"
  },
  {
    image: exampleImage1,
    projectTitle: "Smart City Traffic Monitoring System",
    eventName: "Symposim",
    summary: "A real-time traffic monitoring system that leverages IoT sensors and AI to optimize traffic flow in urban environments. The system collects data from various sensors, processes it using AI algorithms, and dynamically adjusts traffic lights to minimize congestion.",
    teamMembers: "Alice, Bob, Charlie",
    mentors: "Dr. Smith",
    link: "https://example.com/project1"
  }
  
];

function App() {
  return (
    <div className="App">
      <h1>Card Grid Example</h1>
      <CardGrid cardsData={cardsData} />
    </div>
  );
}

export default App;
