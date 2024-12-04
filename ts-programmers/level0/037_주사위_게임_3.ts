// https://school.programmers.co.kr/learn/courses/30/lessons/181916

// 첫번째 풀이 ㅎ
function solution(a: number, b: number, c: number, d: number) {
  if (a === b && a === c && a === d) return 1111 * a

  if (a === b && a === c) return (10 * a + d) ** 2
  if (a === b && a === d) return (10 * a + c) ** 2
  if (a === c && a === d) return (10 * a + b) ** 2
  if (b === c && b === d) return (10 * b + a) ** 2

  if (a === b && c === d) return (a + c) * Math.abs(a - c)
  if (a === c && b === d) return (a + b) * Math.abs(a - b)
  if (a === d && b === c) return (a + b) * Math.abs(a - b)

  if (a === b) return c * d
  if (a === c) return b * d
  if (a === d) return b * c
  if (b === c) return a * d
  if (b === d) return a * c
  if (c === d) return a * b

  return Math.min(a, b, c, d)
}

// 객체를 만들어서 키 밸류로 번호를 받아오는 방법. . . 
  // const arr = [a, b, c, d];
  // const counts: { [key: number]: number } = {};

  // for (const num of arr) {
  //   counts[num] = (counts[num] || 0) + 1; // 등장 횟수 계산
  // }

// test
console.log(solution(2,2,2,2)); // 2222
console.log(solution(4,1,4,4)); // 1681
console.log(solution(6,4,2,5)); // 27

