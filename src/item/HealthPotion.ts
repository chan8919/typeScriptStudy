// 아이템 시스템

import { Item } from "./Item";
import { Character } from "../character/Character";

export class HealthPotion implements Item {
  name = "Health Potion";
  cooldownTurns = 3;
  currentCooldown = 0;

  private getRandomHealAmount(): number {
    const rand = Math.random();
    if (rand < 0.5) return 30; // 50%
    else if (rand < 0.9) return 40; // 45%
    else return 70; // 5%
  }

  use(user: Character): string {
    if (this.currentCooldown > 0) {
      return `헬스 포션은 아직 ${this.currentCooldown}턴 남아 사용할 수 없습니다.`;
    }

    const healAmount = this.getRandomHealAmount();
    const healed = Math.min(user.maxHp - user.hp, healAmount);

    user.hp += healed;
    this.currentCooldown = this.cooldownTurns;

    return `${user.name}가 헬스 포션으로 ${healed}의 HP를 회복했습니다. 다음 사용까지 ${this.cooldownTurns}턴 남았습니다.`;
  }

  isAvailable(): boolean {
    return this.currentCooldown === 0;
  }

  advanceTurn(): void {
    if (this.currentCooldown > 0) {
      this.currentCooldown--;
    }
  }
}
