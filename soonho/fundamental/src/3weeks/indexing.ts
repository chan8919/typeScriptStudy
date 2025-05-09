// 배열 인덱싱 타입 정의

interface StringArray {
  [index: number]: string;
}

const companies: StringArray = ['삼성', '네이버', '구글'];

console.log(companies[20000]);

// 객체 인덱싱 타입 정의

interface SalaryMap {
  // 키 값을 string value값을 number로 설정
  // level은 아무렇게나 작성할 수 있음 'soonho' 'funny'
  [level: string]: number;
}

const salary: SalaryMap = {
  junior: 100,
};

const money = salary.junior4;

console.log(money);

// 인덱스 시그니처:정확한 속성의 이름을 명시하지 않고 속성의 이름/값 타입을 정의하는 문법 객체의 속성이 100개가 있다면 100개를 다 맞춰야 하는데 시그니처를 사용하면 같은 타입의 속성과 속성값을 설정하면 한 개로 통일됨

interface SalaryInfo {
  [level1: string]: string;
}

const salarman: SalaryInfo = {
  jonior: 'soonho',
  mid: '10000',
  ceo: '20000',
  manager: '30000',
};

// 인덱스 시그니처와 명시적 객체 정의 혼용
interface User {
  [property: string]: string;
  id: string;
  name: string;
}

const soonho: User = {
  id: '1',
  name: '순호',
  address: '판교',
};
