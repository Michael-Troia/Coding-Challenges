//map: transforms each element in the collection.
//filter: filters our values, that is, makes sure each element in the collection meets some criteria or passes some test.
//reduce: reduces a collection to a single value.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]

// const incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const users = [
    {
      name: 'zach',
      email: 'zach@email.com',
      languages: ['javascript', 'bash']
    },
    {
      name: 'ryan',
      email: 'ryan@email.com',
      languages: ['clojure', 'javascript']
    },
    {
      name: 'luis',
      email: 'luis@email.com',
      languages: ['java', 'scala', 'php']
    },
    {
      name: 'fernando',
      email: 'fernando@email.com',
      languages: ['java', 'php', 'sql']
    },
    {
      name: 'justin',
      email: 'justin@email.com',
      languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'michael',
        email: 'michael@email.com',
        languages: ['javascript', 'java']
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
// Use .reduce to get the longest email from the list of users.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.