// https://www.hackerrank.com/challenges/plus-minus/problem

/**
 * 
 HackerRank requires that results should be printed and the solution function should not return a value,
 but I think that having a dedicated function for getting results without side effects is cleaner,
 that's why the exercise is implemented in two separate functions: One for calculation and the other for printing results.
 */

function calculateRatios(numbers) {
  const itemRatio = 1 / numbers.length;
  const ratios = numbers.reduce(
    (acc, number) => {
      let index = 2;

      if (number > 0) {
        index = 0;
      } else if (number < 0) {
        index = 1;
      }

      acc[index] += itemRatio;

      return acc;
    },
    [0, 0, 0]
  );

  return ratios.map((ratio) => ratio.toFixed(6));
}

function plusMinus(numbers) {
  const results = calculateRatios(numbers);
  results.forEach((result) => console.log(result));
}
