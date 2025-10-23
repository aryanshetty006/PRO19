@echo off
echo ========================================
echo Formula 1 Website - Development Mode
echo ========================================

echo.
echo [1/4] Starting development environment...
docker-compose -f docker-compose.dev.yml down --remove-orphans

echo.
echo [2/4] Building development images...
docker-compose -f docker-compose.dev.yml build

echo.
echo [3/4] Starting development services...
docker-compose -f docker-compose.dev.yml up -d

echo.
echo [4/4] Checking service status...
docker-compose -f docker-compose.dev.yml ps

echo.
echo ========================================
echo Development Services Status:
echo ========================================
echo MongoDB:     http://localhost:27017
echo Backend API: http://localhost:5000
echo Frontend:    http://localhost:3000
echo ========================================

echo.
echo To view logs: docker-compose -f docker-compose.dev.yml logs -f
echo To stop:      docker-compose -f docker-compose.dev.yml down
echo.

pause
