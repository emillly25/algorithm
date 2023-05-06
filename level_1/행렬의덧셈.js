function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    const leng = arr1[i].length;
    let sum = [];
    for (let j = 0; j < leng; j++) {
      console.log("hi", arr1[i][j] + arr2[i][j]);
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(sum);
    console.log("result", sum, result[0]);

    return result;
  }
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
