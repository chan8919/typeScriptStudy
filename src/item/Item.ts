// 아이템 시스템

import { Character } from '../character/Character';

export interface Item {
  name: string;
  use(user: Character): string;
}
