import { Skill } from "./Skill";
import { Character } from "../character/Character";

export class Fireball implements Skill {
  name = "Fireball";
  cooldownTurns = 5;
  currentCooldown = 0;

  private getRandomDamage(): number {
    const rand = Math.random();
    if (rand < 0.7) return 20; // 70%
    else if (rand < 0.9) return 25; // 20%
    else return 40; // 10%
  }

  use(user: Character, target: Character): string {
    if (this.currentCooldown > 0) {
      return `파이어볼은 아직 ${this.currentCooldown}턴 남아 사용할 수 없습니다.`;
    }

    let damage = this.getRandomDamage();
    target.takeDamage(damage);
    this.currentCooldown = this.cooldownTurns;
    return `${user.name}가 ${target.name}에게 ${damage}의 파이어볼 데미지를 입혔습니다. 다음 사용까지 ${this.currentCooldown}턴 남았습니다.`;
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
