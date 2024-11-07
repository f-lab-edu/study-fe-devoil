// [3] LexicalEnvironment //
// 2-2. 매개 변수와 변수에 대한 호이스팅(1) 원본코드
/** 
function a(x) { // 수집 대상 1(매개변수)
  console.log(x); // (1)
  var x; // 수집 대상 2(변수 선언)
  console.log(x); // (2)
  var x = 2; // 수집 대상 3(변수 선언)
  console.log(x); // (3)
}
a(1);
*/

/***************************** */

// 2-3. 매개 변수와 변수에 대한 호이스팅(2) - 매개변수를 변수 선언/할당과 같다고 간주해서 변환한 상태
/** 
function a() {
  var x = 1; // 수집 대상 1(매개변수 선언)
  console.log(x); // (1)
  var x; // 수집 대상 2(변수 선언)
  console.log(x); // (2)
  var x = 2; // 수집 대상 3(변수 선언)
  console.log(x); // (3)
}
a();
*/

/***************************** */

// 2-4. 매개 변수와 변수에 대한 호이스팅(3) - 호이스팅을 마친 상태
/** 
function a() {
  var x; // 수집 대상 1의 변수 선언 부분
  var x; // 수집 대상 2의 변수 선언 부분
  var x; // 수집 대상 3의 변수 선언 부분

  x = 1; // 수집 대상 1의 할당 부분
  console.log(x); // (1)
  console.log(x); // (2)

  x = 2; // 수집 대상 3의 할당 부분
  console.log(x); // (3)
}
a(1);
*/

/***************************** */

// 2-5. 함수 선언의 호이스팅(1) - 원본 코드
/** 
function a() {
  console.log(b); // (1)
  var b = 'bbb'; // 수집 대상 1(변수 선언)
  console.log(b); // (2)
  function b() {} // 수집 대상 2(함수 선언)
  console.log(b); // (3)
}
a();
*/

/***************************** */

// 2-6. 함수 선언의 호이스팅(2) - 호이스팅을 마친 상태
/** 
function a() {
  var b; // 수집 대상 1. 변수는 선언부만 끌어올린다.
  function b() {} // 수집 대상 2. 함수 선언은 전체를 끌어올린다.

  console.log(b); // (1)
  b = 'bbb'; // 변수의 할당부는 원래 자리에 남겨둡니다.
  console.log(b); // (2)
  console.log(b); // (3)
}
a();
*/

/***************************** */

// 2-7. 함수 선언의 호이스팅(3) - 함수 선언문을 함수 표현식으로 바꾼 코드
/** 
function a() {
  var b;
  var b = function b() {}; // 바뀐 부분

  console.log(b); // (1)
  b = 'bbb';
  console.log(b); // (2)
  console.log(b); // (3)
}
a();
*/

/***************************** */

// 2-9. 함수 선언문과 함수 표현식(1) - 원본 코드
/** 
console.log(sum(1, 2));
console.log(multiply(3, 4));

// 함수 선언문 sum
function sum(a, b) {
  return a + b;
}

// 함수 표현식 multiply
var multiply = function (a, b) {
  return a * b;
};
*/

/***************************** */

// 2-10. 함수 선언문과 함수 표현식(2) - 호이스팅을 마친 상태
/** 
// 함수 선언문은 전체를 호이스팅합니다.
var sum = function sum(a, b) {
  return a + b;
};

var multiply; // 변수는 선언부만 끌어들입니다.
console.log(sum(1, 2));
console.log(multiply(3, 4));

// 변수의 할당부는 원래 자리에 남겨둡니다.
multiply = function (a, b) {
  return a * b;
};
*/

/***************************** */

// 2-13. 스코프 체인
/** 

*/
var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a);
};
outer();
console.log(a);

/***************************** */
