# TinyType RPG 🎮

> 타입스크립트 OOP 실습 프로젝트  
> 버튼을 누르면 누군가 맞습니다.

---

## 👾 프로젝트 소개

**TinyType RPG**는 타입스크립트의 클래스, 상속, 인터페이스, 모듈 시스템을 활용하여 만든  
초간단 턴제 RPG 전투 시뮬레이터입니다.  
플레이어가 버튼을 눌러 적을 공격하고, 로그가 UI에 출력되는 구조입니다.

> 본 프로젝트는 스터디용으로 개발되었으며,  
> 타입스크립트의 기초부터 클래스 기반 OOP 실습에 집중했습니다.

---

## 🧑‍💻 팀 역할 분담

| 팀원 | 담당 시스템              | 코드 책임 예시                                                                | 역할 설명                                                        |
| ---- | ------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| A    | 캐릭터 시스템            | `character/Character.ts`, `character/Player.ts`, `character/Enemy.ts`         | 캐릭터 클래스 설계, 상태 관리, 데미지/힐 처리                    |
| B    | 전투 시스템              | `battle/BattleManager.ts`                                                     | 턴 관리, 전투 흐름, 플레이어 액션 처리                           |
| C    | 스킬/아이템 시스템       | `skill/Skill.ts`, `skill/Fireball.ts`, `item/Item.ts`, `item/HealthPotion.ts` | 스킬/아이템 인터페이스 정의 및 실제 사용 로직                    |
| E    | AI 행동 시스템           | `ai/EnemyAI.ts`                                                               | 적 AI 랜덤 행동, 독침/힐 등 행동 패턴 설계 및 구현               |
| D    | UI/게임 상태 관리 (공통) | `ui/UIManager.ts`, `main.ts`, `index.html`, `style.css`                       | UI 버튼, HP 바, 로그 제어, UI 렌더링, 게임 흐름 연결 (공통 협업) |

---

## 📂 폴더 구조

```plaintext
src/
├── ai/
│   └── EnemyAI.ts            # E (AI 행동 시스템)
├── battle/
│   └── BattleManager.ts      # B (전투 시스템)
├── character/
│   ├── Character.ts          # A (캐릭터 시스템)
│   ├── Player.ts             # A
│   └── Enemy.ts              # A
├── skill/
│   ├── Skill.ts              # C (스킬 시스템)
│   └── Fireball.ts           # C
├── item/
│   ├── Item.ts               # C (아이템 시스템)
│   └── HealthPotion.ts       # C
├── ui/
│   └── UIManager.ts          # D (UI 시스템)
├── main.ts                   # D (게임 흐름 연결)
├── index.html                 # D
└── style.css                  # D
```

## 💡 역할 배분 기준

- 시스템 기반으로 캐릭터, 전투, 스킬/아이템, AI 행동, UI를 명확히 분리하여 효율적인 협업 및 발표 준비
- UI 및 게임 흐름(`main.ts`)은 전체 팀원 리뷰 및 협업 (공통 작업으로 진행)
- 적 AI 랜덤 행동 패턴(`enemyAction`)은 E가 전담하여 확장성과 난이도 조절 가능

---

## 🧩 주요 기술

- **TypeScript (ES6 Module)**
- **OOP 구조화 (클래스, 상속, 인터페이스)**
- **Parcel (빠른 번들링 & 개발 서버)**
- **HTML + CSS (간단 UI)**
- **모듈 기반 구조 관리**

---

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```
