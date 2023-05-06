//약수를 입력받아서 약수의 합을 리턴

function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      sum += 1;
    } else {
      if (n % i === 0) {
        sum += i;
      }
    }
  }
  return sum;
}
