import { Skill } from "./Skill";
import { Character } from "../character/Character";

export class Fireball implements Skill {
  name = "Fireball";
  damage = 30;
  cooldownTurns = 5;
  currentCooldown = 0;

  use(user: Character, target: Character): string {
    if (this.currentCooldown > 0) {
      return `${this.name}은 아직 ${this.currentCooldown}턴 남아 사용할 수 없습니다.`;
    }

    target.takeDamage(this.damage);
    this.currentCooldown = this.cooldownTurns;
    return `${user.name}가 ${target.name}에게 ${this.damage}의 파이어볼 데미지를 입혔습니다.`;
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
