// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string: string, index_list: number[]): string {
  let answer: string[] = [];
  
  index_list.map((value) => {
    answer.push(my_string[value])
  })
  
  return answer.join('');
}

//  return index_list.map(i => my_string[i]).join('') 한줄로 가능 ㅎㅎ

// test
console.log(solution('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])); // programmers
console.log(solution('zpiaz', [1, 2, 0, 0, 3])); // pizza

