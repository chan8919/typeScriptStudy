import { Player } from './character/Player';
import { Enemy } from './character/Enemy';
import { BattleManager } from './battle/BattleManager';
import { Fireball } from './skill/Fireball';
import { HealthPotion } from './item/HealthPotion';
import { UIManager } from './ui/UIManager';

const player = new Player('용사', 100, 15, 5);
const enemy = new Enemy('슬라임', 80, 10, 2);
const battle = new BattleManager(player, enemy);
const ui = new UIManager();

function playerTurn(
  action: 'attack' | 'heal' | 'skill' | 'item',
  skillOrItem?: any
) {
  if (battle.getCurrentTurn() !== 'player') return;

  ui.disableButtons(true);

  let msg = '';
  if (action === 'attack') msg = battle.playerAction('attack');
  if (action === 'heal') msg = battle.playerAction('heal');
  if (action === 'skill') msg = battle.playerAction('skill', skillOrItem);
  if (action === 'item')
    msg = battle.playerAction('item', undefined, skillOrItem);

  ui.log(msg);
  ui.renderStats(player, enemy);

  if (battle.isBattleOver()) {
    ui.disableButtons(true);
    ui.log('전투 종료');
    return;
  }

  setTimeout(() => {
    const enemyMsg = battle.enemyAction();
    ui.log(enemyMsg);
    ui.renderStats(player, enemy);

    if (battle.isBattleOver()) {
      ui.log('전투 종료');
      ui.disableButtons(true);
    } else {
      ui.disableButtons(false);
    }
  }, 1000);
}

document
  .getElementById('attack-btn')
  ?.addEventListener('click', () => playerTurn('attack'));
document
  .getElementById('heal-btn')
  ?.addEventListener('click', () => playerTurn('heal'));
document
  .getElementById('skill-btn')
  ?.addEventListener('click', () => playerTurn('skill', new Fireball()));
document
  .getElementById('item-btn')
  ?.addEventListener('click', () => playerTurn('item', new HealthPotion()));

ui.renderStats(player, enemy);
