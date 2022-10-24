// 내 풀이
const solution = (numbers) => {
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) answer += numbers[i];

  return answer / numbers.length;
};

// 가장 많은 좋아요를 받은 풀이

function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}

// for in 문법을 생각하지 못한 나는 미친놈이다
