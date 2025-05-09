// function getText<T>(text: T): T {
//   return text;
// }
function getText<T>(text: T): T {
  return text;
}

// =>
/*
function getText<string>(text: string):string{
    return text; 
}
 */

// =>
/*
function getText(text:string):string
{
    return text;
}

 */

/*

비교 항목	any	T (제네릭)
타입 추적	❌ 타입 소멸됨	✅ 타입 유지됨
자동완성	❌ 안 뜰 수도 있음	✅ 정확히 뜸
타입 안정성	❌ 실수 발생 가능	✅ 실수 방지 가능
사용 목적	임시 우회, 타입 포기	타입 전달, 유연성과 안정성 둘 다

*/
const result = getText<string>('hi');
console.log(result.toLocaleLowerCase());

interface soonho {
  name: string;
  age: number;
}
// object 타입
const result2 = getText<soonho>({ name: '권순호', age: 20 });
console.log(result2);

// 여러 종류의 드롭다운이 있을 때 제네릭 활용
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

let product: Dropdown<string>;
let stock: Dropdown<number>;

// 제네릭의 타입 제약
// 다양한 타입 중

const embraceEverything = <T extends string>(thing: T): T => {
  const thing1 = thing;
  return thing1;
};

embraceEverything<string>('hello');

// 여러 개의 타입 중 몇개 속성에만 제약조건을 둘 수 있음
const embraceEverything2 = <T extends { length: number }>(value: T): number => {
  const userName = value.length;
  return userName;
};

embraceEverything2({ title: 'abc', length: 123 });

// keyof 타입 제약
const printKeys = <T extends keyof { name4: string; skill4: string }>(value: T): void => {
  console.log(value);
};

printKeys('name4');

// 만약 데이터의 길이를 알고 싶으면?
// length 속성이 있는 데이터 타입만 허용
const printTextLength = <T extends { length: number }>(text: T): void => {
  console.log(text.length);
};

// const printTextLength2 = <T> (text:T[]):void =>{
//     console.log(text.length);
// }

// <T>을 설정하지 않아도 암시적으로 타입을 맞춰줌
printTextLength([1, 2, 3]);
printTextLength('soonho');
printTextLength([true, false]);
