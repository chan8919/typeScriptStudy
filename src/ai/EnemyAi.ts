// 슬라임 행동만 관리

import { Player } from "../character/Player";
import { Enemy } from "../character/Enemy";

export class EnemyAI {
  constructor(private enemy: Enemy, private player: Player) {}

  decideAction(): string {
    let msg = `${this.enemy.name}의 턴! `;

    let rand = Math.random();
    console.log(`확률:${rand * 100}, HP: ${this.enemy.hp}`);

    if (this.enemy.hp < 10 && this.enemy.isFinalSkillUsed === true) {
      // 딸피 스킬 (각 스펙을 전부 2배로 향상)
      msg += strugge(this.enemy, this.player);
      this.enemy.isFinalSkillUsed = false;

      return msg;
    }

    // 패시브
    if (rand < 0.3) {
      // 독침 공격
      msg += poisonActtack(this.enemy, this.player);
    } else if (rand < 0.4 && this.enemy.hp <= 40) {
      //HP 힐
      msg += hillHP(this.enemy, this.player);
    } else {
      // 기본 공격
      msg += autoAttack(this.enemy, this.player);
    }

    // 메인 스킬 확률
    rand = Math.random();

    if (rand < 0.2) {
      // 연속 두번 공격
      msg += doubleAttack(this.enemy, this.player);
    }

    if (rand > 0.3 && rand < 0.5) {
      // 방어력 상승
      msg += enforceDefense(this.enemy, this.player);
    }

    return msg;
  }
}

const poisonActtack = (enemy: Enemy, player: Player): string => {
  // 25 => 30
  const poisonDamage = 30;
  const damage = player.takeDamage(poisonDamage);
  const msg = `${player.name}가 ${enemy.name}의 독침을 맞았습니다! ${damage}의 피해와 독 상태!`;
  return msg;
};

const hillHP = (enemy: Enemy, player: Player): string => {
  // 최대 체력 20
  const healed = Math.min(enemy.maxHp - enemy.hp, 20);
  enemy.hp += healed;
  const msg = `${enemy.name}의 떨어져 나간 액체들이 다시 모여들었습니다. ${healed}의 HP를 회복합니다.`;

  return msg;
};

const autoAttack = (enemy: Enemy, player: Player): string => {
  // 평타
  const damage = player.takeDamage(enemy.attack);
  const msg = `${player.name}가 ${damage}의 데미지를 받았습니다.`;
  return msg;
};

const doubleAttack = (enemy: Enemy, player: Player): string => {
  const doubleDamage = 11;
  const damage = player.takeDamage(doubleDamage);
  const msg = `\n${enemy.name} 스킬: ${enemy.name}이 연속 공격을 하였습니다. ${player.name}가 ${damage}의 추가 데미지를 받았습니다.`;
  return msg;
};

const enforceDefense = (enemy: Enemy, player: Player): string => {
  const DEFENSE_NUMBER = 2;
  const before_defense = enemy.defense;
  enemy.defense += DEFENSE_NUMBER;

  const msg = `\n슬라임 추가 버프: 슬라임의 방어력이 ${DEFENSE_NUMBER}만큼 상승되었습니다. (${before_defense})=> (${enemy.defense})`;
  return msg;
};

const strugge = (enemy: Enemy, player: Player): string => {
  const HILL_HP = 20;
  const INCREASE_HILL = 100;
  let msg = `\n(╬ಠ益ಠ) (ノಠ益ಠ)ノ彡┻━┻`;
  msg += `\n피가 얼마남지 않은 슬라임이 분노하였습니다. 슬라임의 HP가 ${HILL_HP} 상승합니다. 또한 슬라임의 공격력과 방어력이 ${INCREASE_HILL}% 향상됩니다.`;

  const beforeAttack = enemy.attack;
  const beforeDefense = enemy.defense;
  const beforeHp = enemy.hp;

  enemy.attack += enemy.attack;
  enemy.defense += enemy.defense;
  enemy.hp += HILL_HP;

  msg += `\n(${beforeAttack}, ${beforeDefense}, ${beforeHp}) => (${enemy.attack}, ${enemy.defense}, ${enemy.hp})`;

  return msg;
};
