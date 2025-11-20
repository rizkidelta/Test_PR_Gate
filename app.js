// app.js

// Intentionally buggy addition function
function add(a, b) {
    const result = a + b;
  
    // ESLint: 'unusedVar' is not defined (no-undef, no-implicit-globals)
    unusedVar = 123;
  
    // Wrong result on purpose so tests fail
    return result + 1;
  }
  
  // Intentionally insecure function so CodeQL flags it
  function insecureEval(userInput) {
    // CodeQL should flag this as a potential code injection vulnerability
    eval(userInput);
  }
  
  module.exports = { add, insecureEval };