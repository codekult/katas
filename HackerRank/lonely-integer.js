// https://www.hackerrank.com/challenges/lonely-integer/problem

/**
 * 
 HackerRank requires that results should be printed and the solution function should not return a value,
 but I think that having a dedicated function for getting results without side effects is cleaner,
 that's why the exercise is implemented in two separate functions: one for calculation and the other for printing results.
 */

function calculateLonelyInteger(numbers) {}

function lonelyinteger(numbers) {
  const result = calculateLonelyInteger(numbers);
  console.log(result);
}
