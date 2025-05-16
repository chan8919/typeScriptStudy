// 캐릭터 공통 로직 (HP, 데미지 계산, isAlive 체크)

export class Character {
  constructor(
    public name: string,
    public hp: number,
    public attack: number,
    public defense: number,
    public maxHp: number = hp
  ) {}

  takeDamage(amount: number): number {
    const damage = Math.max(0, amount - this.defense);
    this.hp = Math.max(0, this.hp - damage);
    return damage;
  }

  isAlive(): boolean {
    return this.hp > 0;
  }
}
