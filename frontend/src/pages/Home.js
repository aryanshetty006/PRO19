import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const fetchLatestNews = async () => {
    try {
      setLoading(true);
      // Mock data for demonstration - in real app, this would come from your API
      const mockNews = [
        {
          id: 1,
          title: "Verstappen Wins Abu Dhabi Grand Prix",
          summary: "Max Verstappen secures victory in the season finale, capping off another dominant year.",
          image: "🏁",
          date: "2024-01-15",
          category: "Race Results"
        },
        {
          id: 2,
          title: "New Regulations for 2024 Season",
          summary: "FIA announces updated technical regulations aimed at improving racing and sustainability.",
          image: "📋",
          date: "2024-01-12",
          category: "Regulations"
        },
        {
          id: 3,
          title: "Hamilton Extends Contract with Mercedes",
          summary: "Seven-time world champion signs multi-year extension with the Silver Arrows.",
          image: "✍️",
          date: "2024-01-10",
          category: "Driver News"
        }
      ];
      
      setLatestNews(mockNews);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch latest news');
      setLoading(false);
    }
  };

  const heroStats = [
    { label: "Races This Season", value: "24" },
    { label: "Teams", value: "10" },
    { label: "Drivers", value: "20" },
    { label: "World Championships", value: "74" }
  ];

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading latest Formula 1 news...</p>
      </div>
    );
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Formula 1</h1>
          <p>Experience the pinnacle of motorsport with the latest news, standings, and race information.</p>
          <div className="hero-actions">
            <Link to="/calendar" className="btn">View Race Calendar</Link>
            <Link to="/standings" className="btn btn-secondary">Current Standings</Link>
          </div>
        </div>
        
        <div className="hero-stats">
          {heroStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
            <p>Stay updated with the most recent Formula 1 developments</p>
          </div>

          {error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="news-grid">
              {latestNews.map((article) => (
                <article key={article.id} className="news-card">
                  <div className="news-image">
                    <span className="news-icon">{article.image}</span>
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <span className="news-category">{article.category}</span>
                      <span className="news-date">{article.date}</span>
                    </div>
                    <h3 className="news-title">{article.title}</h3>
                    <p className="news-summary">{article.summary}</p>
                    <Link to="/news" className="news-link">Read More →</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section quick-links-section">
        <div className="container">
          <div className="section-title">
            <h2>Explore Formula 1</h2>
            <p>Discover everything about the world's premier motorsport series</p>
          </div>

          <div className="quick-links-grid">
            <Link to="/teams" className="quick-link-card">
              <div className="quick-link-icon">🏎️</div>
              <h3>Teams</h3>
              <p>Meet the 10 teams competing in Formula 1</p>
            </Link>

            <Link to="/drivers" className="quick-link-card">
              <div className="quick-link-icon">👨‍💼</div>
              <h3>Drivers</h3>
              <p>Get to know the world's best racing drivers</p>
            </Link>

            <Link to="/calendar" className="quick-link-card">
              <div className="quick-link-icon">📅</div>
              <h3>Race Calendar</h3>
              <p>View the complete 2024 race schedule</p>
            </Link>

            <Link to="/standings" className="quick-link-card">
              <div className="quick-link-icon">🏆</div>
              <h3>Standings</h3>
              <p>Check current driver and constructor standings</p>
            </Link>

            <Link to="/gallery" className="quick-link-card">
              <div className="quick-link-icon">📸</div>
              <h3>Gallery</h3>
              <p>Browse stunning Formula 1 photography</p>
            </Link>

            <Link to="/contact" className="quick-link-card">
              <div className="quick-link-icon">📞</div>
              <h3>Contact</h3>
              <p>Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
