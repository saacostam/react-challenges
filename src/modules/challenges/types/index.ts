import { ReactNode } from "react";

export enum TChallengeDifficulty {
    EASY = 'Easy',
    MEDIUM = 'Medium',
    HARD = 'Hard',
}

export interface TChallenge {
    id: string;
    name: string;
    component: ReactNode;
    difficulty: TChallengeDifficulty;
}
