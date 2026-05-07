//숫자 출력
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 1; i * 2 <= 100; i++) {
  console.log(i * 2);
}

const add = (a, b) => console.log(a + b);
const minus = (a, b) => console.log(a - b);

add(10, 20);
minus(10, 5);

const score = (num) => {
  if (num >= 90) {
    console.log("A");
  } else if (num >= 80) {
    console.log("B");
  }
};

score(95);
score(85);

//객체(Object)
const user = {
  name: "kim",
  age: 20,
  isAdmin: true,
  hobbies: ["게임", "운동"],

  hello: function () {
    console.log("안녕");
  },
};

console.log(user.name);

user.age = 21;
console.log(user.age);
user.email = "test@test.org";
delete user.age;
console.log(user);
user.hello();

// 배열(Array)
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);

fruits.pop(); //마지막 요소 제거
console.log(fruits.length);

//객체 배열
const users = [
  { name: "kim", age: 20 },
  { name: "lee", age: 30 },
  { name: "park", age: 40 },
];

//map(): 배열을 “변환”.
const nums = [1, 2, 3];
const result = nums.map((num) => num * 2);
console.log(result);

const names = ["kim", "lee"];
const result2 = names.map((name) => name + "님");
console.log(result2);

//filter() : 조건 맞는 것만 남김
const nums2 = [1, 2, 3, 4, 5];
const result3 = nums2.filter((num) => num % 2 === 0);
console.log(result3);

//객체 배열 필터링
const users2 = [
  { name: "kim", age: 20 },
  { name: "lee", age: 30 },
];
const result4 = users2.filter((user) => user.age >= 30);
console.log(result4);

//find() : 조건 맞는 것 중 첫 번째 요소 반환
const users3 = [
  { name: "kim", age: 20 },
  { name: "lee", age: 30 },
];

const result5 = users3.find((user) => user.age === 30);
console.log(result5);
//filter 는 배열로 출력, finde는 객체(하나의 값)로 출력

//객체 생성
const ex1 = {
  name: "kim",
  age: 20,
  job: "developer",
};
console.log(ex1.name);
console.log(typeof ex1);

//배열 출력
const fruitsArray = ["사과", "바나나", "포도"];

for (let i = 0; i < fruitsArray.length; i++) {
  console.log(fruitsArray[i]);
}

//map() ex
const numberEx = [1, 2, 3, 4];
const resultEx = numberEx.map((num) => num * 10);
console.log(resultEx);

//filter() ex
const numberEx2 = [1, 2, 3, 4, 5, 6];
const resultEx2 = numberEx2.filter((num) => num % 2 === 1);
console.log(resultEx2);

//find() ex
const usersEx = [
  { name: "kim", age: 20 },
  { name: "lee", age: 30 },
  { name: "park", age: 40 },
];

target = usersEx.find((users) => users.name === "lee");
console.log(target);

const target2 = usersEx
  .filter((user) => user.age >= 30)
  .map((user) => user.name);
console.log(target2);
