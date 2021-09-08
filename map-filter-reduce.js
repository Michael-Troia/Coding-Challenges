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
        name: 'Mike',
        languages: ['php', 'javascript']
    },
    {
        name: 'Josh',
        languages: ['c#', 'python', 'java']
    },
    {
        name: 'Melanie',
        languages: ['php', 'java', 'c++']
    }
]

const triLinguals = users.filter(n => {
    return n.languages >= 3
});

console.log(triLinguals);
// Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Use .reduce to get the longest email from the list of users.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.