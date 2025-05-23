// 플레이어만 가진 힐 메서드

import { Character } from './Character';

export class Player extends Character {
  heal(amount: number): number {
    const healed = Math.min(this.maxHp - this.hp, amount);
    this.hp += healed;
    return healed;
  }
}
