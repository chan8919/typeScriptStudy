export class UIManager {
  private playerStats: HTMLElement;
  private enemyStats: HTMLElement;
  private playerBar: HTMLDivElement;
  private enemyBar: HTMLDivElement;
  private logBox: HTMLElement;
  private buttons: HTMLButtonElement[];

  constructor() {
    this.playerStats = document.getElementById('player-stats')!;
    this.enemyStats = document.getElementById('enemy-stats')!;
    this.playerBar = document.getElementById('player-bar') as HTMLDivElement;
    this.enemyBar = document.getElementById('enemy-bar') as HTMLDivElement;
    this.logBox = document.getElementById('log')!;
    this.buttons = [
      document.getElementById('attack-btn') as HTMLButtonElement,
      document.getElementById('heal-btn') as HTMLButtonElement,
      document.getElementById('skill-btn') as HTMLButtonElement,
      document.getElementById('item-btn') as HTMLButtonElement,
    ];
  }

  renderStats(player: any, enemy: any) {
    this.playerStats.innerText = `${player.name} - HP: ${player.hp}/${player.maxHp}`;
    this.enemyStats.innerText = `${enemy.name} - HP: ${enemy.hp}/${enemy.maxHp}`;
    this.playerBar.style.width = `${(player.hp / player.maxHp) * 100}%`;
    this.enemyBar.style.width = `${(enemy.hp / enemy.maxHp) * 100}%`;
  }

  log(message: string) {
    this.logBox.innerHTML += `<div>${message.replace(/\n/g, '<br>')}</div>`;
    this.logBox.scrollTop = this.logBox.scrollHeight;
  }

  disableButtons(disabled: boolean) {
    this.buttons.forEach((btn) => (btn.disabled = disabled));
  }
}
