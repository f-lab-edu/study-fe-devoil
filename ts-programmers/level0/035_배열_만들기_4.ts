// https://school.programmers.co.kr/learn/courses/30/lessons/181918

// 첫번째 풀이
function solution(arr: number[]): number[] {
  let stk: number[] = [];
  let i: number = 0;

  while(i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if(stk.length > 0 && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }

  return stk;
}

// 두번째 풀이
// 1. 조건 중복 해결 (초기 0도 결국엔 push(item)임 pop만 잡음됨)
function solution2(arr: number[]): number[] {
  const stk: number[] = [];

  for (const item of arr) {
    while (stk.length > 0 && stk[stk.length - 1] >= item) {
      stk.pop();
    }
    stk.push(item);
  }

  return stk; 
}

// test
console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]
console.log(solution2([1, 4, 2, 5, 3])); // [1, 2, 3]