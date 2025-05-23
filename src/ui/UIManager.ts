export class UIManager {
  private playerStats: HTMLElement;
  private enemyStats: HTMLElement;
  private playerBar: HTMLDivElement;
  private playerSpeedBar: HTMLDivElement;
  private enemyBar: HTMLDivElement;
  private enemySpeedBar: HTMLDivElement;
  private logBox: HTMLElement;
  private buttons: HTMLButtonElement[];
  private skillCooldown: HTMLElement;
  private itemCooldown: HTMLElement;

  constructor() {
    this.playerStats = document.getElementById("player-stats")!;
    this.enemyStats = document.getElementById("enemy-stats")!;
    this.playerBar = document.getElementById("player-bar") as HTMLDivElement;
    this.playerSpeedBar = document.getElementById(
      "playerSpeed-bar"
    ) as HTMLDivElement;
    this.enemyBar = document.getElementById("enemy-bar") as HTMLDivElement;
    this.enemySpeedBar = document.getElementById(
      "enemySpeed-bar"
    ) as HTMLDivElement;
    this.logBox = document.getElementById("log")!;
    this.buttons = [
      document.getElementById("attack-btn") as HTMLButtonElement,
      document.getElementById("heal-btn") as HTMLButtonElement,
      document.getElementById("skill-btn") as HTMLButtonElement,
      document.getElementById("item-btn") as HTMLButtonElement,
    ];
    this.skillCooldown = document.getElementById("skill-cooldown")!;
    this.itemCooldown = document.getElementById("item-cooldown")!;
  }

  renderStats(player: any, enemy: any) {
    this.playerStats.innerText = `${player.name} - HP: ${player.hp}/${player.maxHp} (공격력: ${player.attack}, 방어력: ${player.defense})`;
    this.enemyStats.innerText = `${enemy.name} - HP: ${enemy.hp}/${enemy.maxHp} (공격력: ${enemy.attack}, 방어력: ${enemy.defense})`;
    this.playerBar.style.width = `${(player.hp / player.maxHp) * 100}%`;
    this.playerSpeedBar.style.width = `${
      (player.getTurnPoint() / player.getMaxTurnPoint()) * 100
    }%`;
    this.enemyBar.style.width = `${(enemy.hp / enemy.maxHp) * 100}%`;
    this.enemySpeedBar.style.width = `${
      (enemy.getTurnPoint() / enemy.getMaxTurnPoint()) * 100
    }%`;
  }

  renderCooldowns(
    skill: { currentCooldown: number },
    item: { currentCooldown: number }
  ) {
    this.skillCooldown.innerText =
      skill.currentCooldown > 0
        ? `쿨타임: ${skill.currentCooldown}턴`
        : "파이어볼 사용 가능!";
    this.itemCooldown.innerText =
      item.currentCooldown > 0
        ? `쿨타임: ${item.currentCooldown}턴`
        : "포션 사용 가능!";
  }

  log(message: string) {
    this.logBox.innerHTML += `<div>${message.replace(/\n/g, "<br>")}</div>`;
    this.logBox.scrollTop = this.logBox.scrollHeight;
  }

  disableButtons(disabled: boolean) {
    this.buttons.forEach((btn) => (btn.disabled = disabled));
  }
}
