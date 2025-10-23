import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calendar.css';

const Calendar = () => {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRaces();
  }, []);

  const fetchRaces = async () => {
    try {
      setLoading(true);
      // Mock data for demonstration - in real app, this would come from your API
      const mockRaces = [
        {
          id: 1,
          name: "Bahrain Grand Prix",
          circuit: "Bahrain International Circuit",
          location: "Sakhir, Bahrain",
          date: "2024-03-02",
          time: "15:00",
          round: 1,
          status: "completed",
          winner: "Max Verstappen"
        },
        {
          id: 2,
          name: "Saudi Arabian Grand Prix",
          circuit: "Jeddah Corniche Circuit",
          location: "Jeddah, Saudi Arabia",
          date: "2024-03-09",
          time: "20:00",
          round: 2,
          status: "completed",
          winner: "Max Verstappen"
        },
        {
          id: 3,
          name: "Australian Grand Prix",
          circuit: "Albert Park Circuit",
          location: "Melbourne, Australia",
          date: "2024-03-24",
          time: "05:00",
          round: 3,
          status: "completed",
          winner: "Carlos Sainz"
        },
        {
          id: 4,
          name: "Japanese Grand Prix",
          circuit: "Suzuka International Racing Course",
          location: "Suzuka, Japan",
          date: "2024-04-07",
          time: "06:00",
          round: 4,
          status: "completed",
          winner: "Max Verstappen"
        },
        {
          id: 5,
          name: "Chinese Grand Prix",
          circuit: "Shanghai International Circuit",
          location: "Shanghai, China",
          date: "2024-04-21",
          time: "08:00",
          round: 5,
          status: "upcoming",
          winner: null
        },
        {
          id: 6,
          name: "Miami Grand Prix",
          circuit: "Miami International Autodrome",
          location: "Miami, USA",
          date: "2024-05-05",
          time: "22:00",
          round: 6,
          status: "upcoming",
          winner: null
        },
        {
          id: 7,
          name: "Emilia Romagna Grand Prix",
          circuit: "Autodromo Enzo e Dino Ferrari",
          location: "Imola, Italy",
          date: "2024-05-19",
          time: "15:00",
          round: 7,
          status: "upcoming",
          winner: null
        },
        {
          id: 8,
          name: "Monaco Grand Prix",
          circuit: "Circuit de Monaco",
          location: "Monte Carlo, Monaco",
          date: "2024-05-26",
          time: "15:00",
          round: 8,
          status: "upcoming",
          winner: null
        },
        {
          id: 9,
          name: "Canadian Grand Prix",
          circuit: "Circuit Gilles Villeneuve",
          location: "Montreal, Canada",
          date: "2024-06-09",
          time: "20:00",
          round: 9,
          status: "upcoming",
          winner: null
        },
        {
          id: 10,
          name: "Spanish Grand Prix",
          circuit: "Circuit de Barcelona-Catalunya",
          location: "Barcelona, Spain",
          date: "2024-06-23",
          time: "15:00",
          round: 10,
          status: "upcoming",
          winner: null
        }
      ];
      
      setRaces(mockRaces);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch race calendar');
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'var(--accent-gold)';
      case 'upcoming':
        return 'var(--primary-red)';
      case 'cancelled':
        return 'var(--text-gray)';
      default:
        return 'var(--text-gray)';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'upcoming':
        return 'Upcoming';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading race calendar...</p>
      </div>
    );
  }

  return (
    <div className="calendar">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>2024 Race Calendar</h1>
            <p>Follow the complete Formula 1 season with 24 races around the world</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="races-grid">
              {races.map((race) => (
                <div key={race.id} className="race-card">
                  <div className="race-header">
                    <div className="race-round">Round {race.round}</div>
                    <div 
                      className="race-status"
                      style={{ color: getStatusColor(race.status) }}
                    >
                      {getStatusText(race.status)}
                    </div>
                  </div>
                  
                  <div className="race-info">
                    <h3 className="race-name">{race.name}</h3>
                    <p className="race-circuit">{race.circuit}</p>
                    <p className="race-location">📍 {race.location}</p>
                  </div>

                  <div className="race-details">
                    <div className="race-date">
                      <span className="date-label">Date</span>
                      <span className="date-value">{race.date}</span>
                    </div>
                    <div className="race-time">
                      <span className="time-label">Time</span>
                      <span className="time-value">{race.time} UTC</span>
                    </div>
                  </div>

                  {race.winner && (
                    <div className="race-winner">
                      <span className="winner-label">Winner</span>
                      <span className="winner-name">🏆 {race.winner}</span>
                    </div>
                  )}

                  <div className="race-actions">
                    <button className="btn btn-small">View Details</button>
                    <button className="btn btn-small btn-secondary">Circuit Info</button>
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

export default Calendar;
