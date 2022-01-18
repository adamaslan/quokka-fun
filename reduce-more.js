const a = [2, 3, 4];
let blue2 = a.reduce((x, y) =>{
  //[x + y)
  console.log(x)
//return x + y
if (y >= 3){
   x.push(y);
  
 // prev.result.push(next); into prev push next into x push y  -x the thing y the item going into it 
   return x;
}
  return x;}
},[]);

//console.log(blue1);
console.log(blue2)



let blue4 = a.reduce((prev, next) =>{
  //[x + y)
  // console.log(next)
//return x + y
if (next >= 3){
   prev.result.push(next);
   prev.sum+=next
   return prev
}
 return prev
 },{ result: [], sum: 0});

 console.log(blue4)

const secondArray = [1, 2, 3].reduce((acc, item) => {
  acc.push(item >= 2);

  return acc;
}, []);



console.log(secondArray); 



















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
