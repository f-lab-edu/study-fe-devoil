// [5] 불변 객체 //
// 1. 객체의 가변성에 따른 문제점
/**
var user = {
  name: 'sonny',
  gender: 'male',
};

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, 'son');

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다!');
}

console.log(user.name, user2.name); // 둘 다 바뀌어 버렸다
console.log(user === user2);
 */

/***************************** */

// 2. 객체의 가변성에 따른 문제점의 해결 방법
/** 
var user = {
  name: 'sonny',
  gender: 'male',
};

var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender, // 변경할 필요가 없는 기존 객체의 프로퍼티를 하드코딩으로 입력
  };
};

var user2 = changeName(user, 'son');

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다!');
}

console.log(user.name, user2.name);
console.log(user === user2);
*/

// 상단 방식보단 프로퍼티 개수에 상관 없이 모든 프로퍼티를 복사하는 함수를 만들자

/***************************** */

// 3. 기존 정보를 복사해서 새로운 객체를 반환하는 함수 (얕은 복사)
/**
var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }

  return result;
};

var user = {
  name: 'sonny',
  gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'son';

if (user !== user2) {
  console.log('유저 정보가 변경되었습니다!');
}

console.log(user.name, user2.name);
console.log(user === user2); // false
*/

/***************************** */

// 4. 중첩된 객체에 대한 얕은 복사
/**
var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }

  return result;
};

var user = {
  name: 'sonny',
  urls: {
    portfolio: 'http://github.com/abc',
    blog: 'http://blog.com',
    facebook: 'http://facebook.com/abc',
  },
};

var user2 = copyObject(user);

user2.name = 'son';
console.log(user.name === user2.name); // false

user.urls.portfolio = 'http://portfolio'; // 아하 한단계 더 들어간건 복사가 안됐군요
console.log(user.urls.portfolio === user2.urls.portfolio); // true
console.log(user.urls.portfolio);
console.log(user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);
*/

/***************************** */

// 5. 중첩된 객체에 대한 깊은 복사
/** 
var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }

  return result;
};

var user = {
  name: 'sonny',
  urls: {
    portfolio: 'http://github.com/abc',
    blog: 'http://blog.com',
    facebook: 'http://facebook.com/abc',
  },
};

var user2 = copyObject(user);
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);
console.log(user.urls.blog);
console.log(user2.urls.blog);
*/

/***************************** */

// 6. 객체의 깊은 복사를 수행하는 범용 함수
/**
var copyObjectDeep = function (target) {
  var result = {};

  // target이 객체인 경우 내부 프로퍼티들을 순회하며 copyObjectDeep 함수를 재귀적으로 호출
  // 객체가 아닌 경우에는 target을 그대로 지정하게 함
  if (typeof target === 'object' && target !== null) {
    // null 추가한 이유는 typeof 명령어가 null에 대해서도 object를 반환하기 때문
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }

  return result;
};

// 결과 확인
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};

var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);
*/

/***************************** */

// 7. json을 활용한 간단한 깊은 복사
/** 
var copyObjectViaJSON = function (target) {
  return JSON.parse(JSON.stringify(target));
};

var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
    func1: function () {
      console.log(3);
    },
    func2: function () {
      console.log(4);
    },
  },
};

var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2); // 다만 메서드 함수나, 숨겨진 프로퍼티 __proto__, getter/setter 등과 같이 json으로 변경할 수 없는 프로퍼티는 무시
*/

/***************************** */ /***************************** */

// [6] undefined와 null
// 1. 자동으로 undefined를 부여하는 경우
/**
// 1-1. 값을 대입하지 않은 변수
var a;
console.log(a);

// 1-2. 객체 내부의 존재하지 않는 프로퍼티에 접근하려고 할 때
var obj = { a: 1 };
console.log(obj.a);
console.log(obj.b); // undefined
// console.log(b); // b is not defined

// 1-3. return 문이 없거나 호출되지 않는 함수의 실행 결과
var func = function () {};
var c = func();
console.log(c);
*/

/***************************** */

// 2. 빈 요소와 배열의 순회
/**
var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

// 2-1. forEach
arr1.forEach(function (v, i) {
  console.log(v, i);
}); // undefined 0 / 1 1

arr2.forEach(function (v, i) {
  console.log(v, i);
}); // 1 1

// 2-2. map
arr1.map(function (v, i) {
  return v + i;
});

arr2.map(function (v, i) {
  return v + i;
});

// 2-3. filter
arr1.filter(function (v) {
  return !v;
});

arr2.filter(function (v) {
  return !v;
});

// 2-4. reduce
arr1.reduce(function (p, c, i) {
  return p + c + i;
}, '');

arr2.reduce(function (p, c, i) {
  return p + c + i;
}, '');
*/

/***************************** */

// // 3. null
// var n = null;
// console.log(typeof n); // object

// // console.log("" == 0); // true
// // console.log(0 == undefined); // true
// // console.log(n == undefined); // true
// //  console.log(n == null); // true

// console.log(n === undefined); // false
// console.log(n === null); // true
// {y : 2}


// 재할당 / 변경
// x.y.z = w (변경)
// z = w (재할당. 이름을 새로줌)

// const x = {a: 1}
// const y = x 
// x.a = 3
// x.a = 4


const xs = [1,2,3,4,5]
const average = sum(xs) / xs.length

function sum(xs) {
  return xs.reduce((x,y)=> x+y,0)
}

..
.
.
.
.

const mean = ....
....
// console.info(f(1))



// let y = 1
// y = 2

// console.info("y = ", y)

// const z = { y : 1 }
// let x = {...z}
// x.y = 3
// // x = { y: 2 };
// console.info(z)

// const x = {
// }
// 1
// 1
// 437
// 437
// const z = x.y  // 2 <- undefined
// w = .
// .
// .
// .
// .
// .
// .
