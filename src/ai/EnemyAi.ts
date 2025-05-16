// 슬라임 행동만 관리

import { Player } from '../character/Player';
import { Enemy } from '../character/Enemy';

export class EnemyAI {
  constructor(private enemy: Enemy, private player: Player) {}

  decideAction(): string {
    let msg = `${this.enemy.name}의 턴! `;

    const rand = Math.random();
    if (rand < 0.3) {
      // 30% 독침
      const poisonDamage = 25;
      this.player.takeDamage(poisonDamage);
      msg += `${this.player.name}가 ${this.enemy.name}의 독침을 맞았습니다! ${poisonDamage}의 피해와 독 상태!`;
    } else if (rand < 0.4 && this.enemy.hp <= 40) {
      // 10% 힐 (HP 40 이하)
      const healed = Math.min(this.enemy.maxHp - this.enemy.hp, 20);
      this.enemy.hp += healed;
      msg += `${this.enemy.name}가 ${healed}의 HP를 회복했습니다.`;
    } else {
      // 평타
      const damage = this.player.takeDamage(this.enemy.attack);
      msg += `${this.player.name}가 ${damage}의 데미지를 받았습니다.`;
    }

    return msg;
  }
}
