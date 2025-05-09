interface Avenger {
  name: string;
}

interface Hero {
  skill: string;
}

// 인터섹션(&) 타입
const introduce = (someone: Avenger & Hero): void => {
  console.log(someone.name);
  console.log(someone.skill);
};

// 인터섹션은 두 인터페이스의 속성이 모두 포함되어 있어야 함
introduce({ name: '캡틴', skill: '어셈블' });

export {};
