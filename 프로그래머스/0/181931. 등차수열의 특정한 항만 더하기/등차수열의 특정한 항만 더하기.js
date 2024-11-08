function solution(a, d, included) {
    let answer = 0;
    let number = a;
    
    for (let i = 0; i < included.length; i++) {
        if(included[i] === true){
            answer += number;
        }
        number +=  + d;
    }
    return answer;
}