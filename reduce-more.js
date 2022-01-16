const a = [2, 3, 4];
let red = a.map((x) => x + 1);
console.log(red);

let blue = a.reduce((x, y) => (y >= 3 ? y : null), []);

console.log(blue);

const basket = [
  { name: "apple", type: "fruit" },
  { name: "broccoli", type: "vegetable" },
];
const fruits = basket.reduce(
  (acc, food) => (food.type === "fruit" ? acc.concat(food) : acc),
  []
);
