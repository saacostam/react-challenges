import { getUuid } from "../../string.utils";
import { DumbFC, TChallenge, TChallengeDifficulty } from "../../challenges";

export const CHALLENGES: TChallenge[] = [
    {
        id: getUuid(),
        name: 'Pomodoro Clock',
        description: "Pomodoro Timer for Productivity with session and break intervals.",
        component: DumbFC,
        difficulty: TChallengeDifficulty.EASY,
    }
];
