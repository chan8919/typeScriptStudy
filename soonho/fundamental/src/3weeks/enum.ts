// enum

const enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

// ts에서 enum은 기본 0부터 1씩 증가
// 혼합도 가능
enum Authorization {
  User, // 0
  Admin, // 1
  SuperAdmin = User + Admin, // 1
  God = 'abc'.length, // 3
}

console.log(Authorization.User);
console.log(Authorization.Admin);
console.log(Authorization.SuperAdmin);
console.log(Authorization.God);
