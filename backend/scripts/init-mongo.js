// MongoDB initialization script
db = db.getSiblingDB('f1_website');

// Create collections and insert initial data
print('Initializing Formula 1 database...');

// Teams data
const teams = [
  {
    name: "Red Bull Racing",
    constructor: "Red Bull Racing Honda RBPT",
    nationality: "Austrian",
    drivers: ["Max Verstappen", "Sergio Pérez"],
    points: 451,
    position: 1,
    color: "#3671C6",
    logo: "🐂",
    wins: 19,
    podiums: 21
  },
  {
    name: "Mercedes",
    constructor: "Mercedes",
    nationality: "German",
    drivers: ["Lewis Hamilton", "George Russell"],
    points: 409,
    position: 2,
    color: "#00D2BE",
    logo: "⭐",
    wins: 0,
    podiums: 6
  },
  {
    name: "Ferrari",
    constructor: "Ferrari",
    nationality: "Italian",
    drivers: ["Charles Leclerc", "Carlos Sainz"],
    points: 406,
    position: 3,
    color: "#DC143C",
    logo: "🐎",
    wins: 1,
    podiums: 5
  },
  {
    name: "McLaren",
    constructor: "McLaren Mercedes",
    nationality: "British",
    drivers: ["Lando Norris", "Oscar Piastri"],
    points: 302,
    position: 4,
    color: "#FF8700",
    logo: "🏎️",
    wins: 0,
    podiums: 7
  },
  {
    name: "Aston Martin",
    constructor: "Aston Martin Aramco Mercedes",
    nationality: "British",
    drivers: ["Fernando Alonso", "Lance Stroll"],
    points: 280,
    position: 5,
    color: "#006F62",
    logo: "🦅",
    wins: 0,
    podiums: 8
  }
];

// Drivers data
const drivers = [
  {
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
    name: "Charles Leclerc",
    number: 16,
    team: "Ferrari",
    nationality: "Monegasque",
    points: 206,
    position: 5,
    wins: 0,
    podiums: 5,
    photo: "👨‍💼"
  }
];

// Races data
const races = [
  {
    name: "Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    location: "Sakhir, Bahrain",
    date: new Date("2024-03-02"),
    time: "15:00",
    round: 1,
    status: "completed",
    winner: "Max Verstappen"
  },
  {
    name: "Saudi Arabian Grand Prix",
    circuit: "Jeddah Corniche Circuit",
    location: "Jeddah, Saudi Arabia",
    date: new Date("2024-03-09"),
    time: "20:00",
    round: 2,
    status: "completed",
    winner: "Max Verstappen"
  },
  {
    name: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    location: "Melbourne, Australia",
    date: new Date("2024-03-24"),
    time: "05:00",
    round: 3,
    status: "completed",
    winner: "Carlos Sainz"
  },
  {
    name: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    location: "Suzuka, Japan",
    date: new Date("2024-04-07"),
    time: "06:00",
    round: 4,
    status: "completed",
    winner: "Max Verstappen"
  },
  {
    name: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    location: "Shanghai, China",
    date: new Date("2024-04-21"),
    time: "08:00",
    round: 5,
    status: "upcoming"
  }
];

// Insert data
db.teams.insertMany(teams);
db.drivers.insertMany(drivers);
db.races.insertMany(races);

print('Database initialized successfully!');
print('Teams: ' + db.teams.countDocuments());
print('Drivers: ' + db.drivers.countDocuments());
print('Races: ' + db.races.countDocuments());
