import React, { useState } from 'react';
import './styles/Dashboard.css';

const dances = [
  { id: 1, name: 'Ballet', description: 'Elegant and precise movements characterized by grace and fluidity.', imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.-UzyQcg3je6WwJgTYRFoIQHaEv?rs=1&pid=ImgDetMain' },
  { id: 2, name: 'Hip Hop', description: 'Dynamic and energetic dance style originating from urban culture.', imageUrl: 'https://pixfeeds.com/images/dance/hip-hop/1280-185202476-hip-hop-dancer.jpg' },
  { id: 3, name: 'Salsa', description: 'Lively and rhythmic Latin dance known for its sensual movements.', imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.pzqcEzeOjb_o8NsFcQA6LQHaFj?rs=1&pid=ImgDetMain.jpg' },
  { id: 4, name: 'Tango', description: 'Passionate and dramatic ballroom dance with sharp movements and close embrace.', imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.MRQwpVrVzakU3hD5n8yELQHaLH?rs=1&pid=ImgDetMain.jpg' },
];

const Dashboard = () => {
  const [selectedDance, setSelectedDance] = useState(null);

  const handleDanceClick = (danceId) => {
    const dance = dances.find(dance => dance.id === danceId);
    setSelectedDance(dance);
  };

  return (
    <div className="dashboard-container">
      <div className="header">Dance</div>
      <div className="dashboard">
        <div className="dance-list">
          {dances.map((dance) => (
            <div key={dance.id} className="dance" onClick={() => handleDanceClick(dance.id)}>
              {/* <img src={dance.imageUrl} alt={dance.name} className="dance-image" /> */}
              <span className="dance-name">{dance.name}</span>
              {/* <p>{dance.description}</p> */}
            </div>
          ))}
        </div>
        {selectedDance && (
          <div className="divider"></div>
        )}
        {selectedDance && (
          <div className="dance-details">
            <img src={selectedDance.imageUrl} alt={selectedDance.name} className="selected-dance-image" />
            <h2>{selectedDance.name}</h2>
            <p>{selectedDance.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
