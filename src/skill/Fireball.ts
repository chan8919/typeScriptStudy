import { Skill } from './Skill';
import { Character } from '../character/Character';

export class Fireball implements Skill {
  name = 'Fireball';
  damage = 30;

  use(user: Character, target: Character): string {
    target.takeDamage(this.damage);
    return `${user.name}가 ${target.name}에게 ${this.damage}의 파이어볼 데미지를 입혔습니다.`;
  }
}
