// 턴 관리, 플레이어 액션 담당

import { Player } from '../character/Player';
import { Enemy } from '../character/Enemy';
import { Skill } from '../skill/Skill';
import { Item } from '../item/Item';
import { EnemyAI } from '../ai/EnemyAi';

type turnners = 'player' | 'enemy' | 'nobody'

export class BattleManager {
  private currentTurn: turnners = 'nobody';
  private ai: EnemyAI;
  private turnIntervalId: number | null = null;
  private onTurnChanged?: ((turn:turnners) => void) | null = null ;
  private onCooldownChanged?: ((skiilsCooldown:any[]) => void) | null = null ;

  // BattleManager 생성 시 EnemyAI 생성 후 ai 에 연결
  constructor(private player: Player, private enemy: Enemy) {
    this.ai = new EnemyAI(enemy, player);
    this.setCurrentTurn();
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

    // playerAction이 호출 됬을 때 action의 값에 따라 처리 action은 버튼 클릭으로 진행.
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
    //playerAction 후엔 턴을 중립 턴으로 변경 -> player의 턴 포인트를 초기화
    this.currentTurn = 'nobody';
    this.player.initTurn();
    // this.setCurrentTurn();
    //사용한 스킬 쿨다운 카운트 감소 적용
    return msg ;
  }

  enemyAction(): string {
    if (this.currentTurn !== 'enemy' || this.isBattleOver()) return '';
    const msg = this.ai.decideAction();
    //playerAction 후에 턴을 중립턴으로 변경 -> enemy의 턴 포인트를 초기화
    this.currentTurn = 'nobody';
    this.enemy.initTurn();
    this.setCurrentTurn();
    return msg;
  }


  // 플레이어가 선택 가능한 행동들들

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
  // 현재 턴 확인
  getCurrentTurn(): turnners {
    console.log("현재 턴 : " + this.currentTurn);
    return this.currentTurn;
  }

  //
  setCurrentTurn() : string{
    // 전투중인 캐릭터들의 턴 확인 @무조건 player 우선
    if (this.currentTurn !== 'nobody') return '';

    if (this.player.isTurn()) {
      this.currentTurn = 'player';
      if (this.onTurnChanged) this.onTurnChanged(this.currentTurn); //callback이 있으면 실행
      return 'player님의 턴!';
    }
    if (this.enemy.isTurn()) {
      this.currentTurn = 'enemy';
      if (this.onTurnChanged) this.onTurnChanged(this.currentTurn);
      return 'enemy님의 턴!';
    }
    console.log(this.player.getTurnPoint() + " p : e " + this.enemy.getTurnPoint());
    return '턴 결정중';
  }
  // 턴을 관리하는 루프 실행 
  startTurnLoop():string {
    let msg : string = '';
    if (this.turnIntervalId !==null) return msg;
    this.turnIntervalId = window.setInterval(() => {
      if (this.currentTurn === 'nobody') {
        msg += this.setCurrentTurn();
        this.player.increaseTurnPoint();
        this.enemy.increaseTurnPoint();
      }
    }, 500); // 0.1초마다 체크
    return msg;
  }
  // 턴을 관리하는 루프를 중지 
  stopTurnLoop(){
    if(this.turnIntervalId !== null){
      clearInterval(this.turnIntervalId);
      this.turnIntervalId = null;
    }
  }

  // 콜백 함수 생성
  setTurnChangedCallback(callback:(turn:turnners)=>void){
    this.onTurnChanged = callback;
  }

  setSkillCooldownCallback(callback:(skiilsCooldown:any[])=>void){
    this.onCooldownChanged = callback;
  }


  isBattleOver(): boolean {
    return !this.player.isAlive() || !this.enemy.isAlive();
  }

}
