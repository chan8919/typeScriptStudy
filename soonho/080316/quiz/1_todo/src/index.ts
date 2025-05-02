interface Todo {
  id: number;
  title: string;
  done: boolean;
}
// Property 'push' does not exist on type 'object'.
// let todoItems: object;
let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];

  return todos;
}

// crud methods
// todos 배열 데이터 가져오기
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

// 객체 추가
function addTodo(todo: Todo): void {
  console.log('객체 추가');
  todoItems.push(todo);
}

// 인덱스로 객체 삭제
function deleteTodo(index: number): void {
  console.log(todoItems[index], '=> 데이터 삭제');
  todoItems.splice(index, 1);
}

function completeTodo(index: number): void {
  console.log(index, '번째 할일 완료');
  // Assignment to property of function parameter 'todo'
  //  매개변수에 지정된 변수를 수정하는 경우 함수에 포함된 arguments 객체도 변경되기 때문이라고 한다.
  // todo.done = true;
  const todo = todoItems[index];
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
// 첫번째 할일을 출력
function logFirstTodo(): Todo {
  return todoItems[0];
}

// 완료된 할일의 목록을 표시
function showCompleted(): Todo[] {
  console.log('완료된 할일 목록 표시');

  return todoItems.filter((item) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  console.log('객체 2개 축가');
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const tod1: Todo = { id: 1, title: 'addTwoTodoItems(1)', done: false };
  const tod2: Todo = { id: 2, title: 'addTwoTodoItems(2)', done: false };

  addTodo(tod1);
  addTodo(tod2);
}

// NOTE: 유틸 함수
// Unexpected console statement
function log(): void {
  console.log(todoItems);
}

// 초기 데이터 삽입
todoItems = fetchTodos();

// 데이터 전체 출력
log();

// 첫번째 할일 출력
console.log(logFirstTodo());

// 데이터 추가
addTodo({ id: 1, title: 'addTodo', done: false });

// 데이터 2개 추가
addTwoTodoItems();

log();

// 데이터 추가: 1번째 추가
completeTodo(1);

// 할일 완료된 객체 출력
console.log(showCompleted());

// 데이터 삭제
deleteTodo(1);

log();
