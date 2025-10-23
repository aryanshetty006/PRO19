import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Teams.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      setLoading(true);
      // Mock data for demonstration - in real app, this would come from your API
      const mockTeams = [
        {
          id: 1,
          name: "Red Bull Racing",
          constructor: "Red Bull Racing Honda RBPT",
          nationality: "Austrian",
          drivers: ["Max Verstappen", "Sergio Pérez"],
          points: 451,
          position: 1,
          color: "#3671C6",
          logo: "🐂"
        },
        {
          id: 2,
          name: "Mercedes",
          constructor: "Mercedes",
          nationality: "German",
          drivers: ["Lewis Hamilton", "George Russell"],
          points: 409,
          position: 2,
          color: "#00D2BE",
          logo: "⭐"
        },
        {
          id: 3,
          name: "Ferrari",
          constructor: "Ferrari",
          nationality: "Italian",
          drivers: ["Charles Leclerc", "Carlos Sainz"],
          points: 406,
          position: 3,
          color: "#DC143C",
          logo: "🐎"
        },
        {
          id: 4,
          name: "McLaren",
          constructor: "McLaren Mercedes",
          nationality: "British",
          drivers: ["Lando Norris", "Oscar Piastri"],
          points: 302,
          position: 4,
          color: "#FF8700",
          logo: "🏎️"
        },
        {
          id: 5,
          name: "Aston Martin",
          constructor: "Aston Martin Aramco Mercedes",
          nationality: "British",
          drivers: ["Fernando Alonso", "Lance Stroll"],
          points: 280,
          position: 5,
          color: "#006F62",
          logo: "🦅"
        },
        {
          id: 6,
          name: "Alpine",
          constructor: "Alpine Renault",
          nationality: "French",
          drivers: ["Pierre Gasly", "Esteban Ocon"],
          points: 120,
          position: 6,
          color: "#0090FF",
          logo: "🏔️"
        },
        {
          id: 7,
          name: "Williams",
          constructor: "Williams Mercedes",
          nationality: "British",
          drivers: ["Alex Albon", "Logan Sargeant"],
          points: 28,
          position: 7,
          color: "#005AFF",
          logo: "🏁"
        },
        {
          id: 8,
          name: "AlphaTauri",
          constructor: "AlphaTauri Honda RBPT",
          nationality: "Italian",
          drivers: ["Yuki Tsunoda", "Daniel Ricciardo"],
          points: 25,
          position: 8,
          color: "#2B4562",
          logo: "🐂"
        },
        {
          id: 9,
          name: "Alfa Romeo",
          constructor: "Alfa Romeo Ferrari",
          nationality: "Swiss",
          drivers: ["Valtteri Bottas", "Zhou Guanyu"],
          points: 16,
          position: 9,
          color: "#900000",
          logo: "🍀"
        },
        {
          id: 10,
          name: "Haas",
          constructor: "Haas Ferrari",
          nationality: "American",
          drivers: ["Kevin Magnussen", "Nico Hülkenberg"],
          points: 12,
          position: 10,
          color: "#FFFFFF",
          logo: "🇺🇸"
        }
      ];
      
      setTeams(mockTeams);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch teams data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading teams...</p>
      </div>
    );
  }

  return (
    <div className="teams">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Formula 1 Teams</h1>
            <p>Meet the 10 teams competing in the 2024 Formula 1 World Championship</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="teams-grid">
              {teams.map((team) => (
                <div key={team.id} className="team-card">
                  <div className="team-header">
                    <div className="team-position">#{team.position}</div>
                    <div className="team-logo" style={{ backgroundColor: team.color }}>
                      {team.logo}
                    </div>
                  </div>
                  
                  <div className="team-info">
                    <h3 className="team-name">{team.name}</h3>
                    <p className="team-constructor">{team.constructor}</p>
                    <p className="team-nationality">🇺🇳 {team.nationality}</p>
                  </div>

                  <div className="team-drivers">
                    <h4>Drivers</h4>
                    <div className="drivers-list">
                      {team.drivers.map((driver, index) => (
                        <span key={index} className="driver-name">{driver}</span>
                      ))}
                    </div>
                  </div>

                  <div className="team-stats">
                    <div className="stat">
                      <span className="stat-label">Points</span>
                      <span className="stat-value">{team.points}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Position</span>
                      <span className="stat-value">#{team.position}</span>
                    </div>
                  </div>

                  <div className="team-actions">
                    <button className="btn btn-small">View Details</button>
                    <button className="btn btn-small btn-secondary">Drivers</button>
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

export default Teams;
