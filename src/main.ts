import { Player } from './character/Player';
import { Enemy } from './character/Enemy';
import { BattleManager } from './battle/BattleManager';
import { Fireball } from './skill/Fireball';
import { HealthPotion } from './item/HealthPotion';
import { UIManager } from './ui/UIManager';

const player = new Player('용사', 255, 15, 3);   // 용사를 200으로 해도 적용 안됨됨
const enemy = new Enemy('슬라임', 400, 10, 2, 15); // 슬라임을 400으로 바꾸고고
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
    battle.stopTurnLoop();
    ui.log('전투 종료');
    return;
  }
  battle.setCurrentTurn();
  setTimeout(() => {}, 1000);
}
function gameLoop() {
  const turn = battle.getCurrentTurn();

  switch (turn) {
    case 'player':
      ui.disableButtons(false);
      break;

    case 'enemy':
      ui.disableButtons(true);
      const enemyMsg = battle.enemyAction();
      ui.log(enemyMsg);
      ui.renderStats(player, enemy);
      if (battle.isBattleOver()) {
        battle.stopTurnLoop();
        ui.log('전투 종료');
        ui.disableButtons(true);
      } else {
        ui.disableButtons(false);
      }
      break;

    case 'nobody':
    default:
      ui.disableButtons(true);
      break;
  }
  requestAnimationFrame(gameLoop);
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
battle.setTurnChangedCallback((turn)=>{
  ui.log('현재'+turn+'님의 턴');
});
battle.startTurnLoop();
requestAnimationFrame(gameLoop);
