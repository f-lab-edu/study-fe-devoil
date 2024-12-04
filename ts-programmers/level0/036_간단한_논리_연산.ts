//https://school.programmers.co.kr/learn/courses/30/lessons/181917

function solution(x1: boolean, x2: boolean, x3: boolean, x4: boolean): boolean {
  return (x1 || x2) && (x3 || x4);;
}

// test
console.log(solution(false, true, true, true)); // true
console.log(solution(true, false, false, false)); // false

