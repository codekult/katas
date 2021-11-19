// https://www.hackerrank.com/challenges/mini-max-sum/problem

/**
 * 
 HackerRank requires that results should be printed and the solution function should not return a value,
 but I think that having a dedicated function for getting results without side effects is cleaner,
 that's why the exercise is implemented in two separate functions: one for calculation and the other for printing results.
 */

function calculateMiniMaxSum(numbers) {
  const uniqueValues = [...new Set(numbers).values()];

  return uniqueValues.reduce((minMaxSum, uniqueValue, index) => {
    const currIndex = numbers.indexOf(uniqueValue);
    const start = numbers.slice(0, currIndex);
    const end = numbers.slice(currIndex + 1, numbers.length);
    const currSum = [...start, ...end].reduce((acc, curr) => acc + curr, 0);

    if (index === 0) return [currSum, currSum];
    if (currSum < minMaxSum[0]) return [currSum, minMaxSum[1]];
    if (currSum > minMaxSum[1]) return [minMaxSum[0], currSum];

    return minMaxSum;
  }, []);
}

function miniMaxSum(numbers) {
  const results = calculateMiniMaxSum(numbers);
  const resultsMessage = results.reduce((acc, curr) => `${acc} ${curr}`);
  console.log(resultsMessage);
}
