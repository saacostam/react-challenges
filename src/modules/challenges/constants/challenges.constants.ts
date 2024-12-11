import { getUuid } from "../../string.utils";
import { DumbFC } from "../components";
import { TChallenge, TChallengeDifficulty } from "../types";

export const CHALLENGES: TChallenge[] = [
    {
        id: getUuid(),
        name: 'Pomodoro Clock',
        component: DumbFC,
        difficulty: TChallengeDifficulty.EASY,
    }
];
