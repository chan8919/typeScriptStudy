// 턴 관리, 플레이어 액션 담당

import { Player } from '../character/Player';
import { Enemy } from '../character/Enemy';
import { Skill } from '../skill/Skill';
import { Item } from '../item/Item';
import { EnemyAI } from '../ai/EnemyAi';

export class BattleManager {
  private currentTurn: 'player' | 'enemy' = 'player';
  private ai: EnemyAI;

  // BattleManager 생성 시 EnemyAI 생성 후 ai 에 연결결
  constructor(private player: Player, private enemy: Enemy) {
    this.ai = new EnemyAI(enemy, player);
  }

  playerAction(
    action: 'attack' | 'heal' | 'skill' | 'item',
    skill?: Skill,
    item?: Item
  ): string {
    if (this.currentTurn !== 'player' || this.isBattleOver()) {
      return '플레이어 턴이 아닙니다.';
    }

    let msg = '';

    // playerAction이 호출 됬을 때 action의 값에 따라 처리
    switch (action) {
      case 'attack':
        msg = this.playerAttack();
        break;
      case 'heal':
        msg = this.playerHeal();
        break;
      case 'skill':
        if (skill) msg = this.playerUseSkill(skill);
        break;
      case 'item':
        if (item) msg = this.playerUseItem(item);
        break;
    }
    //playerAction 후엔 턴을 enemy 턴으로 변경경
    this.currentTurn = 'enemy';
    return msg;
  }

  enemyAction(): string {
    if (this.currentTurn !== 'enemy' || this.isBattleOver()) return '';
    const msg = this.ai.decideAction();
    this.currentTurn = 'player';
    return msg;
  }

  private playerAttack(): string {
    const damage = this.enemy.takeDamage(this.player.attack);
    let msg = `${this.player.name}가 ${this.enemy.name}에게 ${damage}의 데미지를 입혔습니다.`;
    if (!this.enemy.isAlive()) msg += ` ${this.enemy.name}가 쓰러졌습니다!`;
    return msg;
  }

  private playerHeal(): string {
    const healed = this.player.heal(20);
    return `${this.player.name}가 ${healed}의 HP를 회복했습니다.`;
  }

  private playerUseSkill(skill: Skill): string {
    let msg = skill.use(this.player, this.enemy);
    if (!this.enemy.isAlive()) msg += ` ${this.enemy.name}가 쓰러졌습니다!`;
    return msg;
  }

  private playerUseItem(item: Item): string {
    return item.use(this.player);
  }

  getCurrentTurn(): 'player' | 'enemy' {
    return this.currentTurn;
  }

  isBattleOver(): boolean {
    return !this.player.isAlive() || !this.enemy.isAlive();
  }
}
