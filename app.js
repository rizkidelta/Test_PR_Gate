// app.js

// Intentionally vulnerable + lint-breaking + test-breaking

function add(a, b) {
    const result = a + b;
  
    // ESLint violation (implicit global)
    unusedVar = 999;
  
    // Security vulnerability: CodeQL flags this as JS Code Injection
    eval("console.log('danger: ' + a + b)");
  
    // Wrong output to break Jest unit tests
    return result + 1;
  }
  
  // Another dangerous pattern for CodeQL
  function dangerous(userInput) {
    // More eval for CodeQL injection rules
    eval(userInput);
  }
  
  module.exports = { add, dangerous };