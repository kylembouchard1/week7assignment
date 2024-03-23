// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    
    // a. Declare an array, 
    //          and print it to the console
    let ages = [3,9,23,64,2,8,28,93];
    console.log(ages);

    // b. Subtract the value of the first element from the value of the last element
    //          and print the result to thr console.
    let minusAge = ages[ages.length - 1] - ages[ages.length-ages.length];
    console.log(minusAge);

    // c. Insert a new value (100) into your array, print the array, and repeat step b.
    ages.push(100);
    console.log(ages);
    minusAge = ages[ages.length - 1] - ages[ages.length-ages.length];
    console.log(minusAge);

    // c. Use a loop to iterate through the array and calculate the average age, 
    //          and print the average age out to the console.
    let average = 0;
    for (let i = 0; i < ages.length; i++) {
    average += ages[i];
    }
    console.log(average/ages.length);

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    let names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    console.log(names);

    // a. Use a loop to iterate through the array and calculate the average number of letters per name.
    let sumOfLetters = 0;
    for (let i = 0; i < names.length; i++) {
        sumOfLetters += names[i].length;
    }
    console.log(sumOfLetters/names.length);

    // b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
    let stringOfNames = "";
    for (let i = 0; i < names.length; i++) {
    stringOfNames += names[i] + " ";
    }
    console.log(stringOfNames);

// 3. How do you access the last element of any array?
    // array[array.length - 1]

// 4. How do you access the first element of any array?
    // array[0]

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    
    const newNames = ['Kelly', 'Sam', 'Kate'];

// Create a new array called nameLengths
    const newNamesLengths = [5, 3, 4];

// Write a loop to iterate over the names array and insert the length of each name into the nameLengths array
    for (let i = 0; i < newNames.length; i++) {
    newNamesLengths.push(newNames[i].length);
    }

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all elements
    let sum = 0;
    for (let i = 0; i < newNamesLengths.length; i++) {
    sum += newNamesLengths[i];
    }

// Print the sum to the console
    console.log(sum);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function createString(word, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += word;
    }
	return result;
}

console.log(createString(`Hello`,3));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const fullName = getFullName('John', 'Doe');
console.log(fullName);

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function greaterThanAHundred(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return (sum > 100);
}
const inputArray = [20, 30, 40, 15];
const result = greaterThanAHundred(inputArray);
console.log(greaterThanAHundred(inputArray));

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
    return sum / inputArray.length;
}


let newResult = calculateAverage(inputArray);
console.log(newResult);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverages(arr1, arr2) {
    const averageArr1 = arr1.reduce((acc, curr) => acc + curr, 0) / arr1.length;
    const averageArr2 = arr2.reduce((acc, curr) => acc + curr, 0) / arr2.length;

    return averageArr1 > averageArr2;
}
const inputArrayOne = [20, 30, 40, 15];
const inputArrayTwo = [10, 20, 30, 40, 50];
console.log(compareAverages(inputArrayOne, inputArrayTwo));

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function buyADrink(isHotOutside,moneyInPocket) {
    if (isHotOutside && (moneyInPocket > 10.50)) {
        return true;
    } 
    return false;
}


console.log(buyADrink(true, 10));