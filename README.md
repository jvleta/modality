# Major Keys Reference

An interactive React application for exploring the 12 major keys and their musical properties including scale notes, roman numerals, chord qualities, and more. The app is bundled with Vite for a fast development experience.

## Features

- **Interactive Key Selection** - Choose from all 12 major keys
- **Comprehensive Information** - View scale notes, key signatures, roman numerals, chord qualities, common chords, and relative minors
- **Color-Coded Display** - Visual distinction between major, minor, and diminished chords
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant transitions and hover effects

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the Vite development server:

```bash
npm run dev
```

After running the command, open your browser and navigate to the provided URL (typically `http://localhost:5173`).

### Available Scripts

- **`npm run dev`** - Starts the development server with hot module replacement
- **`npm run build`** - Creates an optimized production build
- **`npm run preview`** - Serves the production build locally
- **`npm test`** - No tests configured yet

## Project Structure

```
keys/
├── index.html          # Vite entry HTML
├── src/
│   ├── App.jsx         # Root React component
│   ├── data.js         # Musical data and helpers
│   ├── index.css       # Styling and responsive design
│   └── main.jsx        # React entry point
├── package.json        # npm configuration and scripts
├── package-lock.json   # Dependency lockfile
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## Usage

1. Open the application in your browser
2. Select a major key from the dropdown menu
3. Explore the displayed information:
   - **Scale Notes** - The seven notes in the major scale
   - **Key Signature** - Number of sharps or flats
   - **Roman Numerals** - Chord degrees with visual coding
   - **Scale Qualities** - Major, minor, and diminished qualities
   - **Common Chords** - The seven diatonic chords
   - **Relative Minor** - The corresponding minor key

## Musical Information Included

For each major key, the application displays:
- All seven scale degrees and their note names
- Key signature (sharps/flats)
- Roman numeral analysis (I, ii, iii, IV, V, vi, vii°)
- Chord qualities for each degree
- Common chord names
- Relative minor key relationship

## Technology Stack

- **React 18** - Component-based UI
- **Vite** - Lightweight dev server and bundler
- **CSS3** - Modern styling with flexbox, grid, and gradients
- **Node.js & npm** - Development tooling and scripts

## Browser Support

This application works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- Modern DOM APIs

## Contributing

Feel free to contribute by:
- Adding new features (audio playback, chord progressions, etc.)
- Improving the user interface
- Adding more musical information
- Fixing bugs or improving performance

## License

MIT License - feel free to use this code for your own projects!
