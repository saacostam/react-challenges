import { FC } from "react";

export enum TChallengeDifficulty {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

export interface TChallenge {
  id: string;
  name: string;
  description: string;
  component: FC;
  difficulty: TChallengeDifficulty;
  icon?: FC;
}
