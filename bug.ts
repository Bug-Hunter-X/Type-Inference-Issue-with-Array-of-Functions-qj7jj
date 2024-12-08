function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1 is correctly inferred as number
const result2 = subtract(10, 5); // result2 is correctly inferred as number

const operations = [add, subtract];

for (const operation of operations) {
  const result = operation(5,3);
  console.log(result); // TypeScript can't correctly infer type of 'result'
}
