@echo off
echo 🏎️ Starting Formula 1 Website...

REM Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not running. Please start Docker and try again.
    pause
    exit /b 1
)

REM Check if docker-compose is available
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ docker-compose is not installed. Please install docker-compose and try again.
    pause
    exit /b 1
)

echo 🐳 Building and starting containers...
docker-compose up --build -d

echo ⏳ Waiting for services to start...
timeout /t 10 /nobreak >nul

echo 🔍 Checking service health...

REM Check if services are running
curl -f http://localhost:5000/api/health >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Backend API is running
) else (
    echo ❌ Backend API is not responding
)

curl -f http://localhost:3000 >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Frontend is running
) else (
    echo ❌ Frontend is not responding
)

echo.
echo 🎉 Formula 1 Website is now running!
echo.
echo 📍 Access Points:
echo    Frontend: http://localhost:3000
echo    Backend API: http://localhost:5000
echo    MongoDB: localhost:27017
echo.
echo 🛠️ Useful Commands:
echo    View logs: docker-compose logs -f
echo    Stop services: docker-compose down
echo    Restart: docker-compose restart
echo.
echo 📊 API Endpoints:
echo    Health: http://localhost:5000/api/health
echo    Teams: http://localhost:5000/api/teams
echo    Drivers: http://localhost:5000/api/drivers
echo    Races: http://localhost:5000/api/races
echo    Standings: http://localhost:5000/api/standings
echo.
echo 🏁 Enjoy your Formula 1 experience!
pause
