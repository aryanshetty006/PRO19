# Formula 1 Website

A comprehensive Formula 1 website built with React.js frontend, Node.js/Express.js backend, and MongoDB database, all containerized with Docker.

## 🏎️ Features

- **Modern F1-themed Design**: Red and black color scheme with responsive layout
- **Dark Mode Toggle**: Switch between light and dark themes
- **Interactive Pages**:
  - Home: Latest race highlights and news
  - Teams & Drivers: Detailed cards with statistics
  - Race Calendar: Complete season schedule
  - Standings: Driver and constructor championship tables
  - Gallery: Photo gallery with filtering
  - Contact: Form submission with backend handling
- **RESTful API**: Complete backend with MongoDB integration
- **Docker Support**: Full containerization with docker-compose
- **Responsive Design**: Works on all device sizes

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development)
- MongoDB (if running locally)

### Using Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd formula1-website
   ```

2. **Start the application**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Local Development

1. **Install dependencies**
   ```bash
   npm run install-all
   ```

2. **Start MongoDB** (if not using Docker)
   ```bash
   # Using Docker for MongoDB
   docker run -d -p 27017:27017 --name mongodb mongo:7.0
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
formula1-website/
├── frontend/                 # React.js frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json
├── backend/                  # Node.js/Express.js backend
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── scripts/             # Database scripts
│   └── server.js            # Server entry point
├── docker-compose.yml       # Docker Compose configuration
├── Dockerfile               # Production Dockerfile
├── Dockerfile.backend      # Backend Dockerfile
├── Dockerfile.frontend     # Frontend Dockerfile
└── README.md
```

## 🛠️ Technology Stack

### Frontend
- **React.js 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **CSS3**: Custom styling with CSS variables
- **Responsive Design**: Mobile-first approach

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API protection

### DevOps
- **Docker**: Containerization
- **Docker Compose**: Multi-container orchestration
- **Nginx**: Reverse proxy (optional)

## 📊 API Endpoints

### Teams
- `GET /api/teams` - Get all teams
- `GET /api/teams/:id` - Get team by ID
- `POST /api/teams` - Create new team
- `PUT /api/teams/:id` - Update team
- `DELETE /api/teams/:id` - Delete team

### Drivers
- `GET /api/drivers` - Get all drivers
- `GET /api/drivers/:id` - Get driver by ID
- `GET /api/drivers/team/:team` - Get drivers by team
- `POST /api/drivers` - Create new driver
- `PUT /api/drivers/:id` - Update driver
- `DELETE /api/drivers/:id` - Delete driver

### Races
- `GET /api/races` - Get all races
- `GET /api/races/:id` - Get race by ID
- `GET /api/races/status/:status` - Get races by status
- `GET /api/races/upcoming` - Get upcoming races
- `POST /api/races` - Create new race
- `PUT /api/races/:id` - Update race
- `DELETE /api/races/:id` - Delete race

### Standings
- `GET /api/standings` - Get both driver and constructor standings
- `GET /api/standings/drivers` - Get driver standings
- `GET /api/standings/constructors` - Get constructor standings

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)
- `GET /api/contact/:id` - Get specific contact message
- `PUT /api/contact/:id` - Update contact message
- `DELETE /api/contact/:id` - Delete contact message

## 🎨 Design Features

### Color Scheme
- **Primary Red**: #e10600 (F1 Red)
- **Primary Black**: #15151e (Dark background)
- **Secondary Black**: #1f1f2a (Card backgrounds)
- **Accent Gold**: #ffd700 (Highlights)
- **Text White**: #ffffff (Primary text)
- **Text Gray**: #cccccc (Secondary text)

### Typography
- **Headings**: Orbitron (Futuristic, F1-inspired)
- **Body**: Roboto (Clean, readable)

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🐳 Docker Configuration

### Services
- **mongodb**: MongoDB database
- **backend**: Node.js/Express.js API
- **frontend**: React.js application
- **nginx**: Reverse proxy (optional)

### Volumes
- **mongodb_data**: Persistent MongoDB data

### Networks
- **f1-network**: Internal Docker network

## 🔧 Environment Variables

Create a `.env` file based on `env.example`:

```bash
# Database
MONGODB_URI=mongodb://admin:password123@localhost:27017/f1_website?authSource=admin

# Server
NODE_ENV=development
PORT=5000

# Frontend
REACT_APP_API_URL=http://localhost:5000
```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first CSS design
- Flexible grid layouts
- Touch-friendly navigation
- Optimized images and fonts
- Progressive enhancement

## 🚀 Deployment

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Docker Production
```bash
# Build production image
docker build -t f1-website .

# Run production container
docker run -p 3000:3000 f1-website
```

## 🧪 Testing

### Manual Testing
1. Navigate through all pages
2. Test responsive design on different screen sizes
3. Verify dark mode toggle
4. Test contact form submission
5. Check API endpoints with tools like Postman

### API Testing
```bash
# Health check
curl http://localhost:5000/api/health

# Get teams
curl http://localhost:5000/api/teams

# Get drivers
curl http://localhost:5000/api/drivers
```

## 📈 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Optimized bundle sizes
- **Caching**: API response caching
- **Compression**: Gzip compression for assets
- **CDN Ready**: Static assets optimized for CDN

## 🔒 Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin protection
- **Rate Limiting**: API abuse prevention
- **Input Validation**: Sanitized user inputs
- **Environment Variables**: Secure configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Formula 1 for inspiration
- React.js community
- Node.js ecosystem
- Docker team
- Open source contributors

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: info@formula1.com
- Documentation: [Link to docs]

---

**Built with ❤️ for Formula 1 fans worldwide**