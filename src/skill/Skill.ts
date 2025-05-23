// 스킬 시스템

import { Character } from '../character/Character';

export interface Skill {
  name: string;
  damage: number;
  use(user: Character, target: Character): string;
}
