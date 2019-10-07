const inventors = [
    'Albert Einstein',
    'Issac Newton',
    'Galileo Galilei',
    'Marie Curie',
    'Johannes Kepler',
    'Nicolaus Copernicus',
    'Max Planck',
    'Katherine Blodgett',
    'Ada Lovelace',
    'Sarah E. Goode',
    'Lise Meitner',
    'Hanna Hammarstrom'
  ];
  
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

let inventorsNameStartsWithA = inventors.filter(inventor => inventor.split("")[0] === "A");
console.log("array of invetors names start with A:", inventorsNameStartsWithA);

let inventorsNamesContainN = inventors.filter(inventor => inventor.match(/n/g));
console.log("array of inventors name contain letter n:", inventorsNamesContainN);

let inventorsNamesSameLetterTwice = inventors.filter(inventor => {
let chars = inventor.split("")
let isRepeated = false;
chars.filter((char, i) => {
    let thisCharAndNextCharIsTheSame = char === chars[i + 1]
    if (thisCharAndNextCharIsTheSame) isRepeated = true;
})
return isRepeated
});
console.log("array of inventors whose name has the same letter twice in a row:", inventorsNamesSameLetterTwice);

let oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log("array of the numbers which are odd:",oddNumbers);

let primeNumbers = numbers.filter(number => {
        for(let i = 2; i < number; i++)
          if(number % i === 0) return false;
        return number > 1;
})
console.log("array of the numbers which are prime:",primeNumbers);

let firstnameOfInventors = inventors.map(inventor => inventor.split(" ")[0]);
console.log("the first name of each inventor:", firstnameOfInventors);

let lengthOfInventorsFullName = inventors.map(inventor => inventor.split("").length - 1);
console.log("the length of every inventor's full name:",lengthOfInventorsFullName);

let uppercasedInventorsNames = inventors.map(inventor => inventor.toUpperCase())
console.log("inventors' names in uppercase:", uppercasedInventorsNames);

let initialsOfAllInventors = inventors.map(inventor => (inventor.split("")[0]));
console.log("initials of all inventors:", initialsOfAllInventors);

let multipliedBy100 = numbers.map(number => number * 2);
console.log("array of every number multiplied by 100:", multipliedBy100);

let numbersPowerOfTwo = numbers.map(number => Math.pow(number, 2));
console.log("array of the powers of two:",numbersPowerOfTwo);

let inventorsFromAToZ = inventors.sort();
console.log("sort all the inventors in alphabetical order, A-Z:",inventorsFromAToZ);

let inventorsFromAToZNoReverse = inventorsFromAToZ.sort((a, b) => {
    if(a<b) return 1;
    else if (a>b) return -1
    else return 0;
});
console.log("sort all the inventors in reverse alphabetical order, Z-A - no reverse method:", inventorsFromAToZNoReverse);

let inventorsSortedByLengthOfName = inventorsFromAToZ.sort((a, b) => {
    return a.length - b.length;
});
console.log("sort all the inventors by length of name, shortest name first:", inventorsSortedByLengthOfName);

let inventorsSortedByLengthOfName2 = inventorsFromAToZ.sort((a, b) => {
    return b.length - a.length;
});
console.log("sort all the inventors by length of name, longest name first:", inventorsSortedByLengthOfName2);

let sumOfAllNumbers = numbers.reduce(total);
function total(sum, num) {
    return sum + num;
}
console.log("the sum of all the numbers:", sumOfAllNumbers);

let evenNumber = numbers.filter(number => number % 2 === 0);
let sumOfAllEvenNumbers = evenNumber.reduce(total);
function total(sum, num) {
    return sum + num;
}
console.log("the sum of all the even numbers:", sumOfAllEvenNumbers);

let firstnameOfEachInventors = inventors.map(inventor => inventor.split(" ")[0]);
let stringOfFirstnameOfEachInventors = firstnameOfInventors.reduce(firstname);
function firstname() {
let name = firstnameOfEachInventors.sort().toString();
return name.replace(/,/g, ", ");
}
console.log("a string that has the first name of every inventor:", stringOfFirstnameOfEachInventors);

let inventorHasLetterYInTheirName = inventors.some(inventor => inventor.includes("y"));
if (inventorHasLetterYInTheirName === true) {
    console.log("some inventors have the letter y in their name");
}
else {
    console.log("some inventors do not have the letter y in their name");
}

let everyInventorHasLetterEInTheirName = inventors.every(inventor => inventor.includes("e"));
if (everyInventorHasLetterEInTheirName === true) {
    console.log("every inventor have the letter e in their name");
}
else {
    console.log("not every inventor with the letter e in their name");
}

let checkFirstnameOfInventors = inventors.map(inventor => inventor.split(" ")[0]);
let everyInventorFirstnameLongerThanFourChars = checkFirstnameOfInventors.every(inventor => inventor.length > 4)
if (everyInventorFirstnameLongerThanFourChars === true) {
    console.log("every inventor have first name that's longer than 4 characters");
}
else {
    console.log("not every inventor have first name that's longer than 4 characters");
}

let inventorsNames = inventors.map(inventor => inventor.split(" "));
let inventorsWithMiddleName = inventors.find(inventor => inventor.split(" ").length > 2);
console.log("the inventor that has a middle name:", inventorsWithMiddleName);

let inventorsWithNoMiddleName = inventors.filter(inventor => inventor !== inventorsWithMiddleName);
console.log("a new array without inventor with a middle name:", inventorsWithNoMiddleName);