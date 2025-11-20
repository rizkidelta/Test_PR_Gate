// app.js

// Intentionally buggy addition function
function add(a, b) {
    const result = a + b;
  
    // ESLint: 'unusedVar' is not defined
    unusedVar = 123;
  
    // Return wrong result to fail tests
    return result + 1;
  }
  
  // Insecure function for CodeQL to flag
  function insecureEval(userInput) {
    // CodeQL should catch this easily
    eval(userInput);
  }
  
  module.exports = { add, insecureEval };
