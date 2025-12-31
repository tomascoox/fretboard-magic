export interface ToolConfig {
    slug: string;
    title: string;
    description: string;
    gameSettings: {
        initialNotes?: string[];
        initialStrings?: number[];
    };
}

export const tools: Record<string, ToolConfig> = {
    'learn-all-e-notes-on-fretboard': {
        slug: 'learn-all-e-notes-on-fretboard',
        title: 'Learn All E Notes on the Guitar Fretboard | FretHunt',
        description: 'Master the position of every E note on the guitar neck. Interactive quiz and visualization.',
        gameSettings: {
            initialNotes: ['E'],
        },
    },
};
