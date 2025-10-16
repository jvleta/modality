// Major key data with scale notes, 7th chords, and modes
const keyData = {
    'C': {
        name: 'C Major',
        notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
        seventhChords: ['Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'G7', 'Am7', 'Bm7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: 'No sharps or flats'
    },
    'G': {
        name: 'G Major',
        notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'],
        seventhChords: ['Gmaj7', 'Am7', 'Bm7', 'Cmaj7', 'D7', 'Em7', 'F♯m7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '1 sharp (F♯)'
    },
    'D': {
        name: 'D Major',
        notes: ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯'],
        seventhChords: ['Dmaj7', 'Em7', 'F♯m7', 'Gmaj7', 'A7', 'Bm7', 'C♯m7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '2 sharps (F♯, C♯)'
    },
    'A': {
        name: 'A Major',
        notes: ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯'],
        seventhChords: ['Amaj7', 'Bm7', 'C♯m7', 'Dmaj7', 'E7', 'F♯m7', 'G♯m7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '3 sharps (F♯, C♯, G♯)'
    },
    'E': {
        name: 'E Major',
        notes: ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯'],
        seventhChords: ['Emaj7', 'F♯m7', 'G♯m7', 'Amaj7', 'B7', 'C♯m7', 'D♯m7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '4 sharps (F♯, C♯, G♯, D♯)'
    },
    'B': {
        name: 'B Major',
        notes: ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯'],
        seventhChords: ['Bmaj7', 'C♯m7', 'D♯m7', 'Emaj7', 'F♯7', 'G♯m7', 'A♯m7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '5 sharps (F♯, C♯, G♯, D♯, A♯)'
    },
    'Gb': {
        name: 'F♯/G♭ Major',
        notes: ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F'],
        seventhChords: ['G♭maj7', 'A♭m7', 'B♭m7', 'C♭maj7', 'D♭7', 'E♭m7', 'Fm7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '6 flats (B♭, E♭, A♭, D♭, G♭, C♭)'
    },
    'Db': {
        name: 'D♭ Major',
        notes: ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'],
        seventhChords: ['D♭maj7', 'E♭m7', 'Fm7', 'G♭maj7', 'A♭7', 'B♭m7', 'Cm7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '5 flats (B♭, E♭, A♭, D♭, G♭)'
    },
    'Ab': {
        name: 'A♭ Major',
        notes: ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G'],
        seventhChords: ['A♭maj7', 'B♭m7', 'Cm7', 'D♭maj7', 'E♭7', 'Fm7', 'Gm7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '4 flats (B♭, E♭, A♭, D♭)'
    },
    'Eb': {
        name: 'E♭ Major',
        notes: ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D'],
        seventhChords: ['E♭maj7', 'Fm7', 'Gm7', 'A♭maj7', 'B♭7', 'Cm7', 'Dm7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '3 flats (B♭, E♭, A♭)'
    },
    'Bb': {
        name: 'B♭ Major',
        notes: ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'],
        seventhChords: ['B♭maj7', 'Cm7', 'Dm7', 'E♭maj7', 'F7', 'Gm7', 'Am7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '2 flats (B♭, E♭)'
    },
    'F': {
        name: 'F Major',
        notes: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'],
        seventhChords: ['Fmaj7', 'Gm7', 'Am7', 'B♭maj7', 'C7', 'Dm7', 'Em7♭5'],
        modes: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'],
        keySignature: '1 flat (B♭)'
    }
};

// Mode mapping - which mode degree corresponds to which mode
const modeMapping = {
    'Ionian': 0,
    'Dorian': 1, 
    'Phrygian': 2,
    'Lydian': 3,
    'Mixolydian': 4,
    'Aeolian': 5,
    'Locrian': 6
};

// Note mapping for enharmonic equivalents
const noteMapping = {
    'C': ['C'],
    'C#': ['C♯', 'D♭'], 
    'D': ['D'],
    'D#': ['D♯', 'E♭'],
    'E': ['E'],
    'F': ['F'],
    'F#': ['F♯', 'G♭'],
    'G': ['G'],
    'G#': ['G♯', 'A♭'],
    'A': ['A'],
    'A#': ['A♯', 'B♭'],
    'B': ['B']
};

// Function to find parent key of a mode
function findParentKey(note, mode) {
    const modeIndex = modeMapping[mode];
    const possibleNotes = noteMapping[note];
    
    // Check all keys to find which one has the given note at the given mode position
    for (const [keyName, keyInfo] of Object.entries(keyData)) {
        const keyNotes = keyInfo.notes;
        const noteAtModePosition = keyNotes[modeIndex];
        
        // Check if any of the possible enharmonic spellings match
        if (possibleNotes.some(possibleNote => 
            noteAtModePosition === possibleNote || 
            (possibleNote.includes('♯') && noteAtModePosition.includes('♯')) ||
            (possibleNote.includes('♭') && noteAtModePosition.includes('♭'))
        )) {
            return {
                key: keyInfo.name,
                keySignature: keyInfo.keySignature,
                allNotes: keyInfo.notes,
                modeNotes: generateModeNotes(keyNotes, modeIndex, note)
            };
        }
    }
    
    return null;
}

// Function to generate mode notes starting from the selected note
function generateModeNotes(parentKeyNotes, modeIndex, startingNote) {
    const modeNotes = [];
    for (let i = 0; i < 7; i++) {
        const noteIndex = (modeIndex + i) % 7;
        modeNotes.push(parentKeyNotes[noteIndex]);
    }
    return modeNotes;
}

// Function to get altered notes for a mode
function getModeAlterations(mode) {
    const alterations = {
        'Ionian': [],
        'Dorian': ['♭3', '♭7'],
        'Phrygian': ['♭2', '♭3', '♭6', '♭7'],
        'Lydian': ['♯4'],
        'Mixolydian': ['♭7'],
        'Aeolian': ['♭3', '♭6', '♭7'],
        'Locrian': ['♭2', '♭3', '♭5', '♭6', '♭7']
    };
    
    return alterations[mode] || [];
}

// DOM elements
const keySelect = document.getElementById('keySelect');
const keyInfo = document.getElementById('keyInfo');
const keyTitle = document.getElementById('keyTitle');
const scaleNotes = document.getElementById('scaleNotes');
const keySignature = document.getElementById('keySignature');
const seventhChords = document.getElementById('seventhChords');
const modes = document.getElementById('modes');

// Mode finder elements
const noteSelect = document.getElementById('noteSelect');
const modeSelect = document.getElementById('modeSelect');
const modeResult = document.getElementById('modeResult');

// Event listener for key selection
keySelect.addEventListener('change', function() {
    const selectedKey = this.value;
    
    if (selectedKey === '') {
        keyInfo.classList.add('hidden');
        return;
    }
    
    displayKeyInfo(selectedKey);
});

// Event listeners for mode finder
noteSelect.addEventListener('change', checkModeInputs);
modeSelect.addEventListener('change', checkModeInputs);

function checkModeInputs() {
    const selectedNote = noteSelect.value;
    const selectedMode = modeSelect.value;
    
    if (selectedNote && selectedMode) {
        const result = findParentKey(selectedNote, selectedMode);
        if (result) {
            displayModeResult(selectedNote, selectedMode, result);
        }
    } else {
        modeResult.classList.add('hidden');
    }
}

function displayModeResult(note, mode, result) {
    const modeDisplayName = mode === 'Ionian' ? 'Ionian (Major)' : 
                           mode === 'Aeolian' ? 'Aeolian (Natural Minor)' : mode;
    
    const alterations = getModeAlterations(mode);
    const alterationsText = alterations.length > 0 ? 
        `Altered notes: ${alterations.join(', ')}` : 
        'No altered notes (same as major scale)';
    
    modeResult.innerHTML = `
        <div class="mode-result-content">
            <div class="mode-info">
                <strong>${note} ${modeDisplayName}</strong> comes from <strong>${result.key}</strong>
            </div>
            <div class="mode-details">
                Key signature: ${result.keySignature}
            </div>
            <div class="mode-scale">
                Scale notes: ${result.modeNotes.join(' - ')}
            </div>
            <div class="mode-alterations">
                ${alterationsText}
            </div>
        </div>
    `;
    modeResult.classList.remove('hidden');
}

// Function to display key information
function displayKeyInfo(key) {
    const data = keyData[key];
    
    // Update title
    keyTitle.textContent = data.name;
    
    // Display scale notes
    scaleNotes.innerHTML = '';
    data.notes.forEach(note => {
        const noteElement = document.createElement('span');
        noteElement.className = 'note';
        noteElement.textContent = note;
        scaleNotes.appendChild(noteElement);
    });
    
    // Display key signature
    keySignature.textContent = data.keySignature;
    
    // Display 7th chords
    seventhChords.innerHTML = '';
    data.seventhChords.forEach((chord, index) => {
        const chordElement = document.createElement('div');
        chordElement.className = 'chord-item';
        
        const noteSpan = document.createElement('span');
        noteSpan.className = 'chord-note';
        noteSpan.textContent = data.notes[index];
        
        const chordSpan = document.createElement('span');
        chordSpan.className = 'chord-name';
        chordSpan.textContent = chord;
        
        chordElement.appendChild(noteSpan);
        chordElement.appendChild(chordSpan);
        seventhChords.appendChild(chordElement);
    });
    
    // Display modes
    modes.innerHTML = '';
    data.modes.forEach((mode, index) => {
        const modeElement = document.createElement('div');
        modeElement.className = 'mode-item';
        
        const noteSpan = document.createElement('span');
        noteSpan.className = 'mode-note';
        noteSpan.textContent = data.notes[index];
        
        const modeSpan = document.createElement('span');
        modeSpan.className = 'mode-name';
        modeSpan.textContent = mode;
        
        modeElement.appendChild(noteSpan);
        modeElement.appendChild(modeSpan);
        modes.appendChild(modeElement);
    });
    
    // Show the key info section
    keyInfo.classList.remove('hidden');
    
    // Smooth scroll to the key info
    keyInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to notes and chords
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('note') || 
            e.target.classList.contains('chord-name') || 
            e.target.classList.contains('mode-name')) {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.transition = 'transform 0.2s ease';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('note') || 
            e.target.classList.contains('chord-name') || 
            e.target.classList.contains('mode-name')) {
            e.target.style.transform = 'scale(1)';
        }
    });
    
    // Add keyboard navigation
    keySelect.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            this.click();
        }
    });
});
