// app.js
// Intentionally failing version

function add(a, b) {
    // ESLint failure: implicit global variable
    unusedVar = 123
  
    // Wrong logic -> Jest test will fail
    return a + b + 1
  }
  
  module.exports = { add }