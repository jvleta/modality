# Major Keys Reference

An interactive web application for exploring the 12 major keys and their musical properties including scale notes, roman numerals, chord qualities, and more.

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

Start the local development server using any of these npm scripts:

```bash
# Start server on default port (usually 3000 or 5000)
npm start

# Start server in development mode with single-page app support
npm run dev

# Start server on specific port (3000)
npm run serve
```

After running any of these commands, open your browser and navigate to the provided URL (typically `http://localhost:3000` or `http://localhost:5000`).

### Available Scripts

- **`npm start`** - Starts the local development server
- **`npm run dev`** - Starts the server with single-page app routing support
- **`npm run serve`** - Starts the server on port 3000 specifically
- **`npm run build`** - No build step required (static site)
- **`npm test`** - No tests configured yet

## Project Structure

```
keys/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Interactive JavaScript functionality
├── package.json        # npm configuration and scripts
└── README.md           # This file
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

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox, grid, and gradients
- **Vanilla JavaScript** - Interactive functionality and DOM manipulation
- **Node.js & npm** - Development tooling and local server

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
