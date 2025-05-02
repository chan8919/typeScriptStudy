// 함수의 타입 정의
// 함수에서 return값과 입력 파라미터의 값의 타입을 설정한다.
function sayWord(word:string):string {
    return word;
}

// typescript의 함수는 자바스크립트와 다르게 함수가 요구하는 정확한 숫자의
// 파라미터를 받아야 한다. 더 적거나 많으면 오류가 나온다.
sayWord("helloWorld");

// 옵셔널 파라미터 
// 파라미터를 받을수도, 받지 않을 수도 있는 경우 
// 파라미터 변수 뒤에 ? 를 붙이면, 해당 파라미터를 생략할 수 있게 된다.
function sayName(firstName:string,lastName?:string):string{
    return "name is " +firstName + " " + lastName;
}

sayName("hwang");
