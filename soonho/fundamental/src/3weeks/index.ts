function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(10, 20));

// 객체 인터페이스
interface user {
  name: string;
  age: number;
}

// 반환 티입 number
const age = (someone: user): number => {
  const getAge = someone.age;
  return getAge;
};

// const someone = { name: 'soonho' };

// // name,age 속성이 아닌 name 속성만 있을 경우 에러 밸생
// age(someone);

const someone = { name: 'soonho', age: 10 };

// const userAge: number
const userAge = age(someone);

// optional 속성
// ? 선택적 속성 필수적인 속성이 아닌 선택적 속성이 되는 것
interface user2 {
  name: string;
  age?: number;
}

// 구조적 타입 시스템
const someone1 = { name: 'soonho' };

const name1 = (someoneUser: user2): string => {
  const { name } = someoneUser;
  return name;
};

const userName = name1(someone1);
console.log(userName);
