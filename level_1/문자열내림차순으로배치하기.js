function solution(s) {
  //문자열을 큰거 -> 작은거
  //대문자<소문자
  const result = s.split("").map((el) => {
    return el.charCodeAt(0);
  });
  result.sort((a, b) => a - b);
  console.log(result);
}

solution("Zbcdefg");
