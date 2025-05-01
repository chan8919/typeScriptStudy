// 문자열
let userName: string = 'captain';

// 숫자
let age: number = 2;

// true/false
let isLogin: boolean = false;

// 객체 타입 (object)
let hero: object = { name: 'captain', age: 100 };

// 배열 타입
//  문자열 배열
// Array<타입> or 타입[]
let companies: Array<string> = ['네이버','삼성','인프런'];
let companies2: string[] = ['네이버','삼성','인프런'];
// 숫자 배열
let cards: Array<number>= [13,7,2,4];
let cards2: number[] = [13,7,2,4];

// 튜플 타입
// 튜플 타입은 형태가 정해진 배열이다. 구조체랑 비슷할지도?
let items: [string, number] = ['hi',11];


// any 모든 타입. 조커카드.
let data:any = 1;
data = 'data';

//null 과 undefined
let empty: null = null;
let notingAssigned: undefined;
