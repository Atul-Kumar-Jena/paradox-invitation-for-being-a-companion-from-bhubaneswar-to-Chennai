// Site Configuration
export const SITE_CONFIG = {
  title: "Chennai Express - Student Journey Campaign",
  description: "Join the ultimate student train journey from Bhubaneswar to Chennai Central. Experience the magic of rail travel with your squad!",
};

// Video Background
export const VIDEO_CONFIG = {
  enabled: true,
  url: "https://your-video-url.mp4", // Replace with your video URL
  fallbackColor: "#0f172a", // Background color when video is disabled
};

// External URLs
export const URLS = {
  paradox: "https://paradox.iitm.ac.in",
  registration: "https://your-registration-form-url",
};

// Journey Details
export const JOURNEY_CONFIG = {
  departureDate: "2025-06-01",
  departureTime: "20:00",
  stations: [
    { name: "Bhubaneswar", time: "20:00" },
    { name: "Brahmapur", time: "22:30" },
    { name: "Vizianagaram", time: "01:15" },
    { name: "Vijayawada", time: "06:45" },
    { name: "Chennai Central", time: "16:00" },
  ],
};

// Event Details
export const EVENT_CONFIG = {
  name: "Paradox 2025",
  startDate: "2025-06-04 09:00:00",
  endDate: "2025-06-08 18:00:00",
  venue: "IIT Madras",
  expectedParticipants: "5000+",
};

// Theme Configuration
export const THEME_CONFIG = {
  colors: {
    primary: "#00f7ff", // cyan
    secondary: "#ff6b35", // rail
    background: "#0f172a", // midnight
  },
  fonts: {
    heading: "Orbitron",
    body: "Space Grotesk",
  },
};

// Particles Configuration
export const PARTICLES_CONFIG = {
  enabled: true,
  options: {
    particles: {
      color: {
        value: "#00f7ff",
      },
      links: {
        color: "#00f7ff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  },
};
