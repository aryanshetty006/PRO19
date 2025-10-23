@echo off
echo ========================================
echo Formula 1 Website - Optimized Startup
echo ========================================

echo.
echo [1/6] Cleaning up previous containers and images...
docker-compose down --remove-orphans
docker system prune -f

echo.
echo [2/6] Removing old images to force rebuild...
docker rmi f1-backend f1-frontend 2>nul
docker rmi pro19_backend pro19_frontend 2>nul

echo.
echo [3/6] Building optimized images...
docker-compose build --no-cache --parallel

echo.
echo [4/6] Starting services with health checks...
docker-compose up -d

echo.
echo [5/6] Waiting for services to be healthy...
timeout /t 30 /nobreak >nul

echo.
echo [6/6] Checking service status...
docker-compose ps

echo.
echo ========================================
echo Services Status:
echo ========================================
echo MongoDB:     http://localhost:27017
echo Backend API:  http://localhost:5000
echo Frontend:     http://localhost:3000
echo Nginx Proxy:  http://localhost:80
echo ========================================

echo.
echo To view logs: docker-compose logs -f
echo To stop:      docker-compose down
echo.

pause
