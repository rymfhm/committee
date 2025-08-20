# Committee Portal

A full-stack web application for managing BC/ROSCA committees with AI assistance.

##  Features

- **User Management**: Admin and member roles
- **Committee Management**: Create and manage committees
- **Payment Tracking**: Monitor monthly payments
- **AI Assistant**: OpenAI-powered chat for committee questions
- **Real-time Updates**: Socket.IO for live updates

##  Tech Stack

### Backend
- **Node.js** + **Express** + **TypeScript**
- **MongoDB** with Mongoose
- **JWT Authentication**
- **OpenAI Integration**
- **Socket.IO**

### Frontend
- **React 18** + **TypeScript**
- **Vite** for fast development
- **TailwindCSS** for styling
- **React Router** for navigation

### Infrastructure
- **Docker** + **Docker Compose**
- **MongoDB 7.0**

##  Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local development)

### 1. Clone and Setup
```bash
git clone <your-repo-url>
cd committee-portal
```

### 2. Environment Configuration
```bash
cp .env.example .env
# Edit .env and add your OpenAI API key
```

### 3. Start Services
```bash
docker compose up --build
```

### 4. Access Applications
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000/api
- **MongoDB**: localhost:27017

##  Default Login Credentials

After seeding the database:

**Admin User:**
- Email: `admin@test.com`
- Password: `password`

**Test Members:**
- Email: `member1@test.com` to `member8@test.com`
- Password: `password`

##  Database Seeding

The application comes with pre-seeded data:
- 1 Admin user
- 8 Member users
- 1 Sample committee

To re-seed the database:
```bash
docker compose exec backend npm run seed
```

##  Project Structure

```
committee-portal/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middlewares/    # Auth middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   ├── Dockerfile
│   └── package.json
├── frontend/               # React application
│   ├── src/
│   │   ├── api/           # API client
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # Entry point
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml      # Service orchestration
└── README.md
```

##  Development

### Backend Development
```bash
cd backend
npm install
npm run dev          # Start with nodemon
npm run build        # Build TypeScript
npm run start        # Run production build
```

### Frontend Development
```bash
cd frontend
npm install
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Hot Reload
Both frontend and backend support hot reload:
- Backend: Nodemon watches for changes
- Frontend: Vite HMR for instant updates

##  API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Committees
- `GET /api/committees` - List committees
- `POST /api/committees` - Create committee (admin only)

### AI Assistant
- `POST /api/ai/chat` - Chat with AI assistant

##  Environment Variables

```env
# Authentication
JWT_SECRET=your-secret-key

# OpenAI
OPENAI_API_KEY=your-openai-api-key

# Database
MONGO_URI=mongodb://localhost:27017/committee_portal

# Client
CLIENT_URL=http://localhost:5173
```

##  Troubleshooting

### Frontend Blank Page
- Check browser console for JavaScript errors
- Verify Vite dev server is running
- Check container logs: `docker compose logs frontend`

### Backend Connection Issues
- Verify MongoDB is running: `docker compose ps`
- Check backend logs: `docker compose logs backend`
- Ensure environment variables are set

### Port Conflicts
- Check if ports 4000, 5173, or 27017 are already in use
- Use `netstat -an | findstr :PORT` to check

## License

This project is licensed under the MIT License.

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support
Author Syed Royem Faheem
For issues and questions:
- Create an issue in the repository
- Check the troubleshooting section above
- Review the logs for error details
