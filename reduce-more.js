const a = [2, 3, 4];
let red = a.map((x) => x + 1);
console.log(red);

let blue = a.reduce((x, y) => (y >= 3 ? [x] + [y] : null));
console.log(blue);

let blue1 = a.filter((y) => y >= 3).reduce((x, y) => [y] + [x]);
let blue2 = a.reduce((x, y) => [x] + y);
console.log(blue1);
console.log(blue2);

const basket = [
  { name: "apple", type: "fruit" },
  { name: "broccoli", type: "vegetable" },
];
const fruits = basket.reduce(
  (acc, food) => (food.type === "fruit" ? acc.concat(food) : acc),
  []
);

const dates = [
  "2019/06/01",
  "2018/06/01",
  "2019/09/01", // This is the most recent date, but how to find it?
  "2018/09/01",
].map((v) => new Date(v));

const maxDate = dates.reduce((max, d) => (d > max ? d : max), dates[0]);
console.log(maxDate);
