function titleCased() {
  const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  return tutorials.map(title => {
    return title.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
  
}



//
/*function titleCased() {
  const tutorials = [
    "what does the this keyword mean?",
    "what is the constructor oo pattern?",
    "implementing blockchain web api",
    "the test driven development workflow",
    "what is nan and how can we check for it",
    "what is the difference between stoppropagation and preventdefault?",
    "immutable state and pure functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is jsonp?"
  ];

  return tutorials.map(title => {
    return title.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
}*/