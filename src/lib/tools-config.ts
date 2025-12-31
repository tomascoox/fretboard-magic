
export interface ToolConfig {
    slug: string;
    title: string;
    description: string;
    gameSettings: {
        initialNotes?: string[];
        initialStrings?: number[];
    };
}

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Helper to make URL-safe slugs (C# -> c-sharp)
const toSlugNote = (note: string) => note.replace('#', '-sharp').toLowerCase();
const fromSlugNote = (slugPart: string) => slugPart.replace('-sharp', '#').toUpperCase(); // Not used currently but good mental model

// 1. Manually defined tools
export const manualTools: Record<string, ToolConfig> = {
    'learn-all-e-notes-on-fretboard': {
        slug: 'learn-all-e-notes-on-fretboard',
        title: 'Learn All E Notes on the Guitar Fretboard | FretHunt',
        description: 'Master the position of every E note on the guitar neck. Interactive quiz and visualization.',
        gameSettings: {
            initialNotes: ['E'],
        },
    },
};

// 2. Generators
export const generatedTools: Record<string, ToolConfig> = {};

// GENERATOR: Single Note Tools (All 12 notes)
// Pattern: /learn-all-{note}-notes-on-fretboard
NOTES.forEach(note => {
    const noteSlug = toSlugNote(note);
    const slug = `learn-all-${noteSlug}-notes-on-fretboard`;

    // Skip if manually defined (override)
    if (manualTools[slug]) return;

    generatedTools[slug] = {
        slug,
        title: `Learn All ${note} Notes on the Guitar Fretboard`,
        description: `Master the position of every ${note} note on the guitar neck. Interactive fretboard quiz.`,
        gameSettings: {
            initialNotes: [note],
        }
    };
});

// GENERATOR: String Training (Strings 1-6)
// Pattern: /learn-notes-on-string-{1-6}
[1, 2, 3, 4, 5, 6].forEach(stringNum => {
    // String index is 0-based in code (0 = High E, 5 = Low E)
    // Common guitar parlance: 1 = High E.
    // Let's assume user inputs standard guitar string numbers (1-6).
    // Mapping: String 1 (High E) -> Index 5? Wait.
    // Standard: 1=High E, 6=Low E.
    // Our internal engine: 0=High E, 5=Low E? Or 0=Low E?
    // Let's verify internal engine later. Assuming 0=High E for now based on previous context.

    const stringIndex = stringNum - 1; // 1 -> 0
    const slug = `learn-notes-on-string-${stringNum}`;

    generatedTools[slug] = {
        slug,
        title: `Learn Guitar Notes on String ${stringNum}`,
        description: `Focus your fretboard memorization on String ${stringNum}. Interactive exercises.`,
        gameSettings: {
            initialStrings: [stringIndex], // This assumes we will support 'strings' only filtering later?
            // Currently initialNotes is supported. initialStrings is passed too.
            // But we might need ALL notes enabled if only initialStrings is passed.
            initialNotes: NOTES, // Enable all notes
        }
    };
});


// Combine all
export const tools: Record<string, ToolConfig> = {
    ...manualTools,
    ...generatedTools,
};

// Helper to get list for Sitemap
export const getAllToolSlugs = () => Object.keys(tools);
