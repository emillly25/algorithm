function solution(n) {
  let result = n;
  if (n === 1) {
    return 0;
  }

  for (let i = 1; i <= 500; i++) {
    if (result % 2 === 0) {
      //짝수
      result = result / 2;
    } else {
      //홀수
      result = result * 3 + 1;
    }
    if (result === 1) {
      return i;
    }
  }
  return -1;
}
