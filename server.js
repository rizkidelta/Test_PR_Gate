// server.js
const { add } = require("./app");

function main() {
  const a = 2;
  const b = 3;
  console.log(`${a} + ${b} = ${add(a, b)}`);
}

if (require.main === module) {
  main();
}

module.exports = { main };