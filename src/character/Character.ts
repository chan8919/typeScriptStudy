// 캐릭터 공통 로직 (HP, 데미지 계산, isAlive 체크)

export class Character {
  constructor(
    public name: string,
    public hp: number,
    public attack: number,
    public defense: number,
    public speed: number = 10,
    public maxHp: number = hp,
    private maxTurnPoint: number = 30,
    private currentTurnPoint: number = 0,
    
  ) {}

  takeDamage(amount: number): number {
    const damage = Math.max(0, amount - this.defense);
    this.hp = Math.max(0, this.hp - damage);
    return damage;
  }

  isAlive(): boolean {
    return this.hp > 0;
  }

  isTurn(): boolean{
    if(this.currentTurnPoint >= this.maxTurnPoint) return true;
    else return false;
  }
  increaseTurnPoint(){
    this.currentTurnPoint += this.speed;
  }
  initTurn(){
    this.currentTurnPoint = 0;
  }
  getTurnPoint(): number {
  return this.currentTurnPoint;
}

  usePassiveSkill(): string {
    console.log(`[🌀 패시브] ${this.name}의 패시브 스킬 호출됨 (기본: 없음)`);
    return '';
  }
}
