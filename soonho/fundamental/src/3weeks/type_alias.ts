// 타입 별칭
// 타입 설정 후 다른 타입을 할당할 수 없음
type MyName = string;
const capt: MyName = 'captain';

// 타입 설정

type MyMessage = string | number;

const logText = (text: MyMessage): MyMessage => {
  const txt = text;
  return txt;
};

const message: MyMessage = '안녕하세요';

logText(message);

// 인터페이스와 타입_별칭의 차이점

type User = {
  id: string;
  name: string;
};

// 타입: 변수에 타입 정보가 표시됨
let soonho: User;

interface Admin {
  id: string;
  name: string;
}

// 인터페이스: 변수에 타입 정보가 표시되지 않음
let gildong: Admin;

// 타입 혼합

type Person_type = {
  name: string;
  age: number;
};

type Admin_type = {
  skill: string;
};

// 인터셉션 타입으로 합쳐서 사용
type SOONHO = Person_type & Admin_type;

let soonho1: SOONHO;

// =>인터페이스는 extends를 활용해서 타입 혼합

export {};
