// 아이템 시스템

import { Item } from './Item';
import { Character } from '../character/Character';

export class HealthPotion implements Item {
  name = 'Health Potion';

  use(user: Character): string {
    const healed = Math.min(user.maxHp - user.hp, 50);
    user.hp += healed;
    return `${user.name}가 Health Potion으로 ${healed}의 HP를 회복했습니다.`;
  }
}
