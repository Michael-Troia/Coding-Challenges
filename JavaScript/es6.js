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

  var name = 'your_name_here';
  var email = '';
  var languages = [];
  
  users.push({
    name,
    email,
    languages
  });
  
  let emails = [];
  let names = [];
  
  // arrow functions
  users.forEach((user) => {
    return emails.push(user.email);
  });
  users.forEach((user) => {
    return names.push(user.name);
  });
  
  let developers = [];
  users.forEach((user) => {

    // object destructuring
    const {name, email, languages} = user;
    // console.log(name);
    // console.log(email);
    // console.log(languages);
  
    developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  });
  
  let list = '<ul>';
  
  // for .. of loop
  for (let developer of developers) {
  
    //  template string
    list += `<li>${developer}</li>`;
  };

  list += '</ul>';

  console.log(list)