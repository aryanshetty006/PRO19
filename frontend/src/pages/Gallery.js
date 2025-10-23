import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      // Mock data for demonstration - in real app, this would come from your API
      const mockImages = [
        {
          id: 1,
          title: "Red Bull Racing at Monaco",
          description: "Max Verstappen's Red Bull Racing car navigating the famous Monaco circuit",
          image: "🏎️",
          category: "Racing",
          date: "2024-05-26"
        },
        {
          id: 2,
          title: "Ferrari Pit Stop",
          description: "Lightning-fast pit stop for Charles Leclerc's Ferrari",
          image: "🔧",
          category: "Pit Stops",
          date: "2024-04-21"
        },
        {
          id: 3,
          title: "Mercedes Silver Arrow",
          description: "Lewis Hamilton's Mercedes in action at Silverstone",
          image: "🏁",
          category: "Racing",
          date: "2024-07-14"
        },
        {
          id: 4,
          title: "McLaren Orange Livery",
          description: "Lando Norris's McLaren with the stunning orange livery",
          image: "🧡",
          category: "Cars",
          date: "2024-06-23"
        },
        {
          id: 5,
          title: "Aston Martin Green Machine",
          description: "Fernando Alonso's Aston Martin at the Spanish Grand Prix",
          image: "💚",
          category: "Cars",
          date: "2024-06-23"
        },
        {
          id: 6,
          title: "Podium Celebration",
          description: "Victory celebration at the Monaco Grand Prix",
          image: "🏆",
          category: "Celebrations",
          date: "2024-05-26"
        },
        {
          id: 7,
          title: "Grid Formation",
          description: "All 20 cars lined up on the starting grid",
          image: "🚗",
          category: "Grid",
          date: "2024-03-02"
        },
        {
          id: 8,
          title: "Night Racing",
          description: "Spectacular night race under the lights",
          image: "🌙",
          category: "Racing",
          date: "2024-03-09"
        },
        {
          id: 9,
          title: "Wet Weather Racing",
          description: "Drivers navigating through challenging wet conditions",
          image: "🌧️",
          category: "Racing",
          date: "2024-04-07"
        },
        {
          id: 10,
          title: "Fan Zone",
          description: "Passionate fans showing their support",
          image: "👥",
          category: "Fans",
          date: "2024-05-05"
        },
        {
          id: 11,
          title: "Technical Innovation",
          description: "Cutting-edge technology in Formula 1",
          image: "⚙️",
          category: "Technology",
          date: "2024-06-09"
        },
        {
          id: 12,
          title: "Historic Moment",
          description: "A historic moment in Formula 1 history",
          image: "📸",
          category: "History",
          date: "2024-07-21"
        }
      ];
      
      setImages(mockImages);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const categories = ["All", "Racing", "Cars", "Pit Stops", "Celebrations", "Grid", "Fans", "Technology", "History"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className="gallery">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Formula 1 Gallery</h1>
            <p>Experience the beauty and excitement of Formula 1 through stunning photography</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <div className="image-container">
                  <div className="image-placeholder">
                    {image.image}
                  </div>
                  <div className="image-overlay">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                    <span className="image-category">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <div className="modal-image">
              <div className="image-placeholder large">
                {selectedImage.image}
              </div>
            </div>
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <div className="modal-meta">
                <span className="meta-category">{selectedImage.category}</span>
                <span className="meta-date">{selectedImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
