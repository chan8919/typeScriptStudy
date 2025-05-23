// 플레이어만 가진 힐 메서드

import { Character } from './Character';

export class Player extends Character {
  heal(amount: number): number {
    const healed = Math.min(this.maxHp - this.hp, amount);
    this.hp += healed;
    return healed;
  }

  // 체력 30% 이하일 때 자동 회복하는 패시브
  usePassiveSkill(): string {
    if (this.hp / this.maxHp < 0.3) {
      const healed = this.heal(10);
      return `${this.name}의 패시브 스킬 발동! HP ${healed} 회복`;
    }
    return '';
  }
}
