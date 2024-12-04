// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n: number) {
  let answer: number[] = [];

  while (n !== 1) {
    answer.push(n);
    n = (n % 2 === 0) // 삼항 연산자 줄바꿈 컨벤션
      ? n / 2 
      : 3 * n + 1;
  }
  answer.push(n);

  return answer;
}

// test
console.log(solution(10)); // [ 10, 5, 16, 8, 4, 2,  1 ]

