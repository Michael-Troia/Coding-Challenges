// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map: transforms each element in the collection.
// const incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//filter: filters our values, that is, makes sure each element in the collection meets some criteria or passes some test.
// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]

//reduce: reduces a collection to a single value.
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);

// function countWords(sentence) {
//     const words = sentence.split(' '); // transform a sentence into an array of words
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
// }

// countWords('Mary had a little lamb little lamb little lamb');
// // {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}



// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const users = [
    {
      name: 'zach',
      email: 'zach@email.com',
      languages: ['javascript', 'bash'],
      expeeriece: '2'
    },
    {
      name: 'ryan',
      email: 'ryan@email.com',
      languages: ['clojure', 'javascript'],
      expeeriece: '3'
    },
    {
      name: 'luis',
      email: 'luis@email.com',
      languages: ['java', 'scala', 'php'],
      expeeriece: '1'
    },
    {
      name: 'fernando',
      email: 'fernando@email.com',
      languages: ['java', 'php', 'sql'],
      expeeriece: '4'
    },
    {
      name: 'justin',
      email: 'justin@email.com',
      languages: ['html', 'css', 'javascript', 'php'],
      experience: '5'
    },
    {
        name: 'michael',
        email: 'michael@email.com',
        languages: ['javascript', 'java'],
        experience: '3'
    }
  ];

const triLinguals = users.filter(n => {
    return n.languages.length >= 3 ;
});

console.log(triLinguals); //


// Use .map to create an array of strings where each element is a user's email address
const emails = users.map(n => {
    return n.email;
});

console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const reducer = users.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.experience;
});


console.log(reducer);


// Use .reduce to get the longest email from the list of users.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.