# Customization Guide

## 1. Background Video
To change the background video:

1. Update `VIDEO_CONFIG` in `src/config/constants.ts`:
```ts
export const VIDEO_CONFIG = {
  enabled: true,
  url: "your-video-url.mp4",
  fallbackColor: "#0f172a",
};
```

2. Video requirements:
   - Format: MP4
   - Resolution: 1920x1080 recommended
   - Duration: 30 seconds or longer (will loop)
   - Size: Optimize for web (< 10MB recommended)

## 2. Countdown Timer
To modify the countdown:

1. Update `EVENT_CONFIG` in `src/config/constants.ts`:
```ts
export const EVENT_CONFIG = {
  startDate: "2024-06-04 09:00:00",
  // ... other settings
};
```

## 3. Adding Content
To add new sections or modify existing ones:

1. Update strings in `src/config/strings.ts`
2. Add new sections to the info modal in `App.tsx`
3. Create new components in `src/components/`

## 4. Theme Customization
To change colors and styles:

1. Update `THEME_CONFIG` in `src/config/constants.ts`
2. Modify `tailwind.config.js` for new color schemes

## 5. Particles Background
To customize the particles animation:

1. Update `PARTICLES_CONFIG` in `src/config/constants.ts`
2. Available options:
   - Enable/disable particles
   - Change colors
   - Modify particle count and behavior
   - Adjust animation speed

## 6. Journey Details
To update journey information:

1. Modify `JOURNEY_CONFIG` in `src/config/constants.ts`
2. Update station list and timings
3. Add new stations as needed

## 7. Adding New Features
To extend functionality:

1. Create new components in `src/components/`
2. Add configuration in `src/config/constants.ts`
3. Update strings in `src/config/strings.ts`
4. Import and use in `App.tsx`
