

// function printDayOfWeek(dayNumber) {
//     switch (dayNumber) {
//       case 1:
//         console.log("Monday");
//         break;
//       case 2:
//         console.log("Tuesday");
//         break;
//       case 3:
//         console.log("Wednesday");
//         break;
//       case 4:
//         console.log("Thursday");
//         break;
//       case 5:
//         console.log("Friday");
//         break;
//       case 6:
//         console.log("Saturday");
//         break;
//       case 7:
//         console.log("Sunday");
//         break;
//       default:
//         console.log("Invalid day number");
//     }
//   }
  
//   printDayOfWeek(3); // Output: Wednesday










// function printMonthName(monthNumber) {
//     switch (monthNumber) {
//       case 1:
//         console.log("January");
//         break;
//       case 2:
//         console.log("February");
//         break;
//       case 3:
//         console.log("March");
//         break;
//       case 4:
//         console.log("April");
//         break;
//       case 5:
//         console.log("May");
//         break;
//       case 6:
//         console.log("June");
//         break;
//       case 7:
//         console.log("July");
//         break;
//       case 8:
//         console.log("August");
//         break;
//       case 9:
//         console.log("September");
//         break;
//       case 10:
//         console.log("October");
//         break;
//       case 11:
//         console.log("November");
//         break;
//       case 12:
//         console.log("December");
//         break;
//       default:
//         console.log("Invalid month number");
//     }
//   }
  
//   printMonthName(9); // Output: September






// function determineVehicleType(vehicle) {
//     switch (vehicle.toLowerCase()) {
//       case "car":
//         console.log("The vehicle is a car");
//         break;
//       case "truck":
//         console.log("The vehicle is a truck");
//         break;
//       case "motorcycle":
//         console.log("The vehicle is a motorcycle");
//         break;
//       case "bus":
//         console.log("The vehicle is a bus");
//         break;
//       case "train":
//         console.log("The vehicle is a train");
//         break;
//       default:
//         console.log("Unknown vehicle type");
//     }
//   }
  
//   determineVehicleType("Truck"); // Output: The vehicle is a truck






// function calculateShippingCost(weight) {
//     switch (true) {
//       case weight <= 10:
//         console.log(`Shipping cost is $5.00`);
//         break;
//       case weight <= 20:
//         console.log(`Shipping cost is $10.00`);
//         break;
//       case weight <= 30:
//         console.log(`Shipping cost is $15.00`);
//         break;
//       case weight <= 40:
//         console.log(`Shipping cost is $20.00`);
//         break;
//       default:
//         console.log(`Shipping cost is $25.00`);
//     }
//   }
  
//   calculateShippingCost(15); // Output: Shipping cost is $10.00







// function determineStudentGrade(score) {
//     switch (true) {
//       case score >= 90:
//         console.log(`Grade is A`);
//         break;
//       case score >= 80:
//         console.log(`Grade is B`);
//         break;
//       case score >= 70:
//         console.log(`Grade is C`);
//         break;
//       case score >= 60:
//         console.log(`Grade is D`);
//         break;
//       default:
//         console.log(`Grade is F`);
//     }
//   }
  
//   determineStudentGrade(85); // Output: Grade is B






// let num1 = 0;
// let num2 = 1;
// let count = 0;

// while (count < 10) {
//   console.log(num1);
//   let sum = num1 + num2;
//   num1 = num2;
//   num2 = sum;
//   count++;
// }





// // Generate a random number between 1 and 100
// let secretNumber = Math.floor(Math.random() * 100) + 1;


// let guesses = 0;
// while (true) {
//   // Ask the user for their guess
//   let userGuess = prompt("Guess a number between 1 and 100:");

//   // Convert the user's guess to a number
//   userGuess = parseInt(userGuess);

//   // Check if the user's guess is valid
//   if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//     alert("Invalid guess! Please try again.");
//     continue;
//   }

//   // Increment the number of guesses
//   guesses++;

//   // Check if the user's guess is correct
//   if (userGuess === secretNumber) {
//     alert(`Congratulations! You found the secret number in ${guesses} guesses.`);
//     break;
//   } else if (userGuess < secretNumber) {
//     alert("Too low! Try again.");
//   } else {
//     alert("Too high! Try again.");
//   }
// }




// let str = "hello";
// let reversedStr = "";
// let i = str.length - 1;

// while (i >= 0) {
//   reversedStr += str[i];
//   i--;
// }

// console.log(reversedStr); // Output: olleh






// let num = 2;
// let primeNumbers = [];

// while (num <= 100) {
//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     primeNumbers.push(num);
//   }

//   num++;
// }

// console.log(primeNumbers);









// let base = 2;
// let exponent = 3;
// let result = 1;
// let i = 0;

// while (i < exponent) {
//   result *= base;
//   i++;
// }

// console.log(result); // Output: 8









// let str = "madam";
// let reversedStr = "";
// let i = str.length - 1;

// while (i >= 0) {
//   reversedStr += str[i];
//   i--;
// }

// if (str === reversedStr) {
//   console.log("The string is a palindrome.");
// } else {
//   console.log("The string is not a palindrome.");
// }









// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);





// // sumOfNumbers.js

// let i = 1;
// let sum = 0;

// do {
//   sum += i;
//   i++;
// } while (i <= 10);

// console.log("Sum:", sum);





// // Generate a random number between 1 and 100
// let secretNumber = Math.floor(Math.random() * 100) + 1;

// // Initialize the number of guesses
// let guesses = 0;

// // Start the game
// do {
//   // Ask the user for their guess
//   let userGuess = prompt("Guess a number between 1 and 100:");

//   // Convert the user's guess to a number
//   userGuess = parseInt(userGuess);

//   // Check if the user's guess is valid
//   if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//     alert("Invalid guess! Please try again.");
//     continue;
//   }

//   // Increment the number of guesses
//   guesses++;

//   // Check if the user's guess is correct
//   if (userGuess === secretNumber) {
//     alert(`Congratulations! You found the secret number in ${guesses} guesses.`);
//   } else if (userGuess < secretNumber) {
//     alert("Too low! Try again.");
//   } else {
//     alert("Too high! Try again.");
//   }
// } while (userGuess !== secretNumber);






// let num = 5;
// let factorial = 1;
// let i = 1;

// do {
//   factorial *= i;
//   i++;
// } while (i <= num);

// console.log(`Factorial of ${num}:`, factorial);





// multiplicationTable

// let num = 10;
// let i = 1;

// do {
//   console.log(`${num} x ${i} = ${num * i}`);
//   i++;
// } while (i <= 10);





