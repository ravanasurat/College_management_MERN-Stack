import React from 'react';
import { useParams } from 'react-router-dom';
import ieeeTemplateImg from '../components/ieee1.jpeg'; // Import image for IEEE
import ieeeTemplateImg1 from '../components/ieee.jpeg';
import iiscTemplateImg from '../components/iisc.jpeg'; // Placeholder image for IISC
import iiscExampleImg from '../components/iisc1.jpeg'; // Placeholder image for IISC Example
import ijemsTemplateImg from '../components/ijems1.jpeg'; // Placeholder image for IJEMS
import ijemsExampleImg from '../components/ijems.jpg'; // Placeholder image for IJEMS Example
import ijstTemplateImg from '../components/ijst.jpeg'; // Placeholder image for IJST
import ijstExampleImg from '../components/ijst1.png'; // Placeholder image for IJST Example
import currentScienceTemplateImg from '../components/currentsci.jpeg'; // Placeholder image for Current Science
import currentScienceExampleImg from '../components/currentsci1.jpeg'; // Placeholder image for Current Science Example
import epwTemplateImg from '../components/epw.jpeg'; // Placeholder image for EPW
import epwExampleImg from '../components/epw1.jpeg'; // Placeholder image for EPW Example
import './ConferenceDetails.css'; // Import the CSS file

const conferenceData = {
  ieee: {
    name: 'IEEE India Council',
    files: [
      {
        name: 'Template',
        url: '/pdfs/ieee-template.pdf',
        imageUrl: ieeeTemplateImg, // Use the imported image
      },
      {
        name: 'Example paper',
        url: '/pdfs/ieee-example.pdf',
        imageUrl: ieeeTemplateImg1,
      },
    ],
  },
  iisc: {
    name: 'Journal of the Indian Institute of Science',
    files: [
      {
        name: 'Template',
        url: '/pdfs/iisc-template.pdf',
        imageUrl: iiscTemplateImg,
      },
      {
        name: 'Example paper',
        url: '/pdfs/iisc-example.pdf',
        imageUrl: iiscExampleImg,
      },
    ],
  },
  ijems: {
    name: 'Indian Journal of Engineering and Materials Sciences',
    files: [
      {
        name: 'Template',
        url: '/pdfs/ijems-template.pdf',
        imageUrl: ijemsTemplateImg,
      },
      {
        name: 'Example paper',
        url: '/pdfs/ijems-example.pdf',
        imageUrl: ijemsExampleImg,
      },
    ],
  },
  ijst: {
    name: 'Indian Journal of Science and Technology',
    files: [
      {
        name: 'Template',
        url: '/pdfs/ijst-template.pdf',
        imageUrl: ijstTemplateImg,
      },
      {
        name: 'Example paper',
        url: '/pdfs/ijst-example.pdf',
        imageUrl: ijstExampleImg,
      },
    ],
  },
  'current-science': {
    name: 'Current Science',
    files: [
      {
        name: 'Template',
        url: '/pdfs/current-science-template.pdf',
        imageUrl: currentScienceTemplateImg,
      },
      {
        name: 'Example paper',
        url: '/pdfs/current-science-example.pdf',
        imageUrl: currentScienceExampleImg,
      },
    ],
  },
  epw: {
    name: 'Economic and Political Weekly (EPW)',
    files: [
      {
        name: 'Template',
        url: '/pdfs/epw-template.pdf',
        imageUrl: epwTemplateImg,
      },
      {
        name: 'Example paper',
        url: '/pdfs/epw-example.pdf',
        imageUrl: epwExampleImg,
      },
    ],
  },
};

const ConferenceDetail = () => {
  const { name } = useParams();
  const conference = conferenceData[name];

  if (!conference) {
    return <div>Conference not found</div>;
  }

  return (
    <div className="conference-detail">
      <h1 className="conference-heading">{conference.name}</h1>
      <div className="card-container">
        {conference.files.map((file) => (
          <div className="file-card" key={file.name}>
            <div className="image-container">
              <img src={file.imageUrl} alt={file.name} className="file-image" />
            </div>
            <a href={file.url} download>
              <button className="download-button">{file.name}</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceDetail;
