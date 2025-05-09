// TS 클래스

class Chatgpt {
  // 클래스명은 무조건 대문자로 시작
  // 클래스 속성 타입 설정
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // eslint:메소드에서 this를 안쓰면 Static으로 변경하는 것을 권장
  sum(a: number, b: number): number {
    return a + b;
  }
}

const gpt = new Chatgpt('대화형 AI');
console.log(gpt.sum(10, 20));

// 접근 지정자 public, private, protected

class Person1 {
  private name: string;

  private skill: string;

  constructor(name: string, skill: string) {
    this.name = name;
    this.skill = skill;
  }

  private sayHi1(): void {
    console.log('hi');
  }
}

const hulk = new Person1('hulk', '쿵쾅');
// Property 'name' is private and only accessible within class 'Person1'
// private 설정으로 외부에서 사용할 수 없음
// console.log(hulk.name);

class WaterPurifier {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public wash(): void {
    if (this.amount > 0) {
      console.log('정수기 동작 성공');
    }
  }
}

const purifier = new WaterPurifier(30);
purifier.wash(); // 정수기 동작 성공
// console.log(purifier.amount); // 사용불가
purifier.wash();
export {};
