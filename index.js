// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 <= 25 && n2 <= 25 <= 25 && n3 <= 25 && n4;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  // Check if all numbers are divisible by 5. Cache the result in a variable.
  const divisible_by_five = Number.isInteger((n1 / 5) + (n2 / 5) + (n3 / 5) + (n4 / 5));

  //Check if the first number is larger than the last. Cache the result in a variable.
  const is_n1_larger_than_n4 = n1 > n4;

//   Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const math_chain = ((n1-n2) * n3)/n4;

let car_speed = 0;
let miles_per_gallon = 0;
let final_trip_price = 0;
let can_afford = false;
const distance = 1500;
const price_per_gallon = 3;
const budget = 175;

car_speed = 55;
let hours = 1500/car_speed;
miles_per_gallon = 1500/30;
final_trip_price = price_per_gallon * miles_per_gallon;
can_afford = budget >= final_trip_price
console.log("At " + car_speed + "mph, your trip will take " + hours + " hours, require " + miles_per_gallon + " gallons of gas and it's " + can_afford + " that you can afford this trip.")

car_speed = 65;
hours = 1500/car_speed;
miles_per_gallon = 1500/28;
final_trip_price = price_per_gallon * miles_per_gallon;
can_afford = budget >= final_trip_price
console.log("At " + car_speed + "mph, your trip will take " + hours + " hours, require " + miles_per_gallon + " gallons of gas and it's " + can_afford + " that you can afford this trip.")

car_speed = 75;
hours = 1500/car_speed;
miles_per_gallon = 1500/23;
final_trip_price = price_per_gallon * miles_per_gallon;
can_afford = budget >= final_trip_price
console.log("At " + car_speed + "mph, your trip will take " + hours + " hours, require " + miles_per_gallon + " gallons of gas and it's " + can_afford + " that you can afford this trip.")

//Refactoring the trip calculator activity utilizing a function

function trip_checker(speed, distance, gallon_price, car_mph, trip_budget){
let final_travel_price = 0;
let can_afford = false;

let trip_time = distance/speed;
let trip_mph = distance/car_mph;
final_travel_price = gallon_price * trip_mph;
is_trip_in_budget = trip_budget >= final_trip_price
console.log("At " + car_speed + "mph, your trip will take " + trip_time + " hours, require " + trip_mph + " gallons of gas and it's " + is_trip_in_budget + " that you can afford this trip.")

if (is_trip_in_budget == false) {
    console.log("Would you like to reduce or increase your budget?")
}
}
trip_checker(75,1500,3,23,175)