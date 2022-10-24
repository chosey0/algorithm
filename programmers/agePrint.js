// getYear 함수가 더이상 사용되지않음

const solution = (age) => {
  const born = new Date();
  return born.getFullYear() - age + 1;
};

console.log(solution(24));
// output -> 1999
