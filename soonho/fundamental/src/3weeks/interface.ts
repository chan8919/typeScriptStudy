// 인터페이스 상속

interface Person {
  name: string;
  age: number;
}

// extends 인터페이스 상속
interface Developer extends Person {
  skill: string;
}

interface Developer2 extends Developer {
  power: boolean;
}

const ironman: Developer2 = {
  name: '아이언맨',
  age: 59,
  skill: '철통만들기',
  power: true,
};
