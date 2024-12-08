function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const operations: Array<(a: number, b: number) => number> = [add, subtract]; // Explicit type annotation

for (const operation of operations) {
  const result = operation(5, 3);
  console.log(result); // TypeScript correctly infers the type of result as number
}
