import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferenceList from './components/ConferenceList';
import ConferenceDetail from './components/ConferenceDetail';

const App = () => {
  return (
    <Router>
      <div>
        {/* Define the routing structure */}
        <Routes>
          {/* Home page showing the list of conferences */}
          <Route path="/" element={<ConferenceList />} />
          
          {/* Conference detail page with downloadable PDFs */}
          <Route path="/conference/:name" element={<ConferenceDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
