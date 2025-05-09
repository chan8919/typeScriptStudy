// union 타입

const logText = (text: string | number): void => {
  console.log(text.toString());
};

logText('h1');

//  union 타입
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

const introduce = (someone: Person | Developer): void => {
  // 객체 속성 연산자
  if ('age' in someone) {
    console.log(someone.age);
  }

  if ('skill' in someone) {
    console.log(someone.skill);
  }
};

// 전역 스코프 충돌방지
export {};
