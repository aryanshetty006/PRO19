import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Drivers.css';

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      setLoading(true);
      // Mock data for demonstration - in real app, this would come from your API
      const mockDrivers = [
        {
          id: 1,
          name: "Max Verstappen",
          number: 1,
          team: "Red Bull Racing",
          nationality: "Dutch",
          points: 575,
          position: 1,
          wins: 19,
          podiums: 21,
          photo: "👨‍💼"
        },
        {
          id: 2,
          name: "Sergio Pérez",
          number: 11,
          team: "Red Bull Racing",
          nationality: "Mexican",
          points: 285,
          position: 2,
          wins: 2,
          podiums: 9,
          photo: "👨‍💼"
        },
        {
          id: 3,
          name: "Lewis Hamilton",
          number: 44,
          team: "Mercedes",
          nationality: "British",
          points: 234,
          position: 3,
          wins: 0,
          podiums: 6,
          photo: "👨‍💼"
        },
        {
          id: 4,
          name: "Fernando Alonso",
          number: 14,
          team: "Aston Martin",
          nationality: "Spanish",
          points: 206,
          position: 4,
          wins: 0,
          podiums: 8,
          photo: "👨‍💼"
        },
        {
          id: 5,
          name: "Charles Leclerc",
          number: 16,
          team: "Ferrari",
          nationality: "Monegasque",
          points: 206,
          position: 5,
          wins: 0,
          podiums: 5,
          photo: "👨‍💼"
        },
        {
          id: 6,
          name: "Lando Norris",
          number: 4,
          team: "McLaren",
          nationality: "British",
          points: 205,
          position: 6,
          wins: 0,
          podiums: 7,
          photo: "👨‍💼"
        },
        {
          id: 7,
          name: "Carlos Sainz",
          number: 55,
          team: "Ferrari",
          nationality: "Spanish",
          points: 200,
          position: 7,
          wins: 1,
          podiums: 3,
          photo: "👨‍💼"
        },
        {
          id: 8,
          name: "George Russell",
          number: 63,
          team: "Mercedes",
          nationality: "British",
          points: 175,
          position: 8,
          wins: 0,
          podiums: 2,
          photo: "👨‍💼"
        },
        {
          id: 9,
          name: "Oscar Piastri",
          number: 81,
          team: "McLaren",
          nationality: "Australian",
          points: 97,
          position: 9,
          wins: 0,
          podiums: 2,
          photo: "👨‍💼"
        },
        {
          id: 10,
          name: "Lance Stroll",
          number: 18,
          team: "Aston Martin",
          nationality: "Canadian",
          points: 74,
          position: 10,
          wins: 0,
          podiums: 0,
          photo: "👨‍💼"
        }
      ];
      
      setDrivers(mockDrivers);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch drivers data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading drivers...</p>
      </div>
    );
  }

  return (
    <div className="drivers">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Formula 1 Drivers</h1>
            <p>Meet the 20 drivers competing in the 2024 Formula 1 World Championship</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="drivers-grid">
              {drivers.map((driver) => (
                <div key={driver.id} className="driver-card">
                  <div className="driver-header">
                    <div className="driver-number">#{driver.number}</div>
                    <div className="driver-position">#{driver.position}</div>
                  </div>
                  
                  <div className="driver-photo">
                    {driver.photo}
                  </div>
                  
                  <div className="driver-info">
                    <h3 className="driver-name">{driver.name}</h3>
                    <p className="driver-team">{driver.team}</p>
                    <p className="driver-nationality">🏁 {driver.nationality}</p>
                  </div>

                  <div className="driver-stats">
                    <div className="stat-row">
                      <span className="stat-label">Points</span>
                      <span className="stat-value">{driver.points}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Wins</span>
                      <span className="stat-value">{driver.wins}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Podiums</span>
                      <span className="stat-value">{driver.podiums}</span>
                    </div>
                  </div>

                  <div className="driver-actions">
                    <button className="btn btn-small">View Profile</button>
                    <button className="btn btn-small btn-secondary">Statistics</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Drivers;
