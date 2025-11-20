// app.js (intentionally invalid for CodeQL)
function add(a, b) {
    // missing closing parenthesis + broken syntax
    const result = a + b
    
    if (result > 10 {
        console.log("big number")
    }
  
    return result;
  }
  
  // cause more parsing errors
  function insecure() {
    eval("console.log('danger!')")
  }
  
  module.exports = { add, insecure }
