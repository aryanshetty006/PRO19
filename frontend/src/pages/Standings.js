import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Standings.css';

const Standings = () => {
  const [driverStandings, setDriverStandings] = useState([]);
  const [constructorStandings, setConstructorStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('drivers');

  useEffect(() => {
    fetchStandings();
  }, []);

  const fetchStandings = async () => {
    try {
      setLoading(true);
      // Mock data for demonstration - in real app, this would come from your API
      const mockDriverStandings = [
        { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 575, wins: 19 },
        { position: 2, driver: "Sergio Pérez", team: "Red Bull Racing", points: 285, wins: 2 },
        { position: 3, driver: "Lewis Hamilton", team: "Mercedes", points: 234, wins: 0 },
        { position: 4, driver: "Fernando Alonso", team: "Aston Martin", points: 206, wins: 0 },
        { position: 5, driver: "Charles Leclerc", team: "Ferrari", points: 206, wins: 0 },
        { position: 6, driver: "Lando Norris", team: "McLaren", points: 205, wins: 0 },
        { position: 7, driver: "Carlos Sainz", team: "Ferrari", points: 200, wins: 1 },
        { position: 8, driver: "George Russell", team: "Mercedes", points: 175, wins: 0 },
        { position: 9, driver: "Oscar Piastri", team: "McLaren", points: 97, wins: 0 },
        { position: 10, driver: "Lance Stroll", team: "Aston Martin", points: 74, wins: 0 }
      ];

      const mockConstructorStandings = [
        { position: 1, team: "Red Bull Racing", points: 860, wins: 21 },
        { position: 2, team: "Mercedes", points: 409, wins: 0 },
        { position: 3, team: "Ferrari", points: 406, wins: 1 },
        { position: 4, team: "McLaren", points: 302, wins: 0 },
        { position: 5, team: "Aston Martin", points: 280, wins: 0 },
        { position: 6, team: "Alpine", points: 120, wins: 0 },
        { position: 7, team: "Williams", points: 28, wins: 0 },
        { position: 8, team: "AlphaTauri", points: 25, wins: 0 },
        { position: 9, team: "Alfa Romeo", points: 16, wins: 0 },
        { position: 10, team: "Haas", points: 12, wins: 0 }
      ];
      
      setDriverStandings(mockDriverStandings);
      setConstructorStandings(mockConstructorStandings);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch standings data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading standings...</p>
      </div>
    );
  }

  return (
    <div className="standings">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>2024 Standings</h1>
            <p>Current driver and constructor championship standings</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              <div className="standings-tabs">
                <button 
                  className={`tab-button ${activeTab === 'drivers' ? 'active' : ''}`}
                  onClick={() => setActiveTab('drivers')}
                >
                  Driver Standings
                </button>
                <button 
                  className={`tab-button ${activeTab === 'constructors' ? 'active' : ''}`}
                  onClick={() => setActiveTab('constructors')}
                >
                  Constructor Standings
                </button>
              </div>

              {activeTab === 'drivers' && (
                <div className="standings-table">
                  <div className="table-header">
                    <div className="header-cell">Position</div>
                    <div className="header-cell">Driver</div>
                    <div className="header-cell">Team</div>
                    <div className="header-cell">Points</div>
                    <div className="header-cell">Wins</div>
                  </div>
                  {driverStandings.map((driver, index) => (
                    <div key={index} className={`table-row ${index < 3 ? 'podium' : ''}`}>
                      <div className="cell position">
                        <span className="position-number">{driver.position}</span>
                        {driver.position <= 3 && (
                          <span className="podium-icon">
                            {driver.position === 1 ? '🥇' : driver.position === 2 ? '🥈' : '🥉'}
                          </span>
                        )}
                      </div>
                      <div className="cell driver">
                        <span className="driver-name">{driver.driver}</span>
                      </div>
                      <div className="cell team">
                        <span className="team-name">{driver.team}</span>
                      </div>
                      <div className="cell points">
                        <span className="points-value">{driver.points}</span>
                      </div>
                      <div className="cell wins">
                        <span className="wins-value">{driver.wins}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'constructors' && (
                <div className="standings-table">
                  <div className="table-header">
                    <div className="header-cell">Position</div>
                    <div className="header-cell">Team</div>
                    <div className="header-cell">Points</div>
                    <div className="header-cell">Wins</div>
                  </div>
                  {constructorStandings.map((constructor, index) => (
                    <div key={index} className={`table-row ${index < 3 ? 'podium' : ''}`}>
                      <div className="cell position">
                        <span className="position-number">{constructor.position}</span>
                        {constructor.position <= 3 && (
                          <span className="podium-icon">
                            {constructor.position === 1 ? '🥇' : constructor.position === 2 ? '🥈' : '🥉'}
                          </span>
                        )}
                      </div>
                      <div className="cell team">
                        <span className="team-name">{constructor.team}</span>
                      </div>
                      <div className="cell points">
                        <span className="points-value">{constructor.points}</span>
                      </div>
                      <div className="cell wins">
                        <span className="wins-value">{constructor.wins}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Standings;
