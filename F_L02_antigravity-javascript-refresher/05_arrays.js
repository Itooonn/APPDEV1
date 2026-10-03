let favoriteFoods = ["Adobo", "Sinigang", "Burger Steak"];
favoriteFoods.push("Fried Chicken sa HOC"); //  Adds "Fried Chicken sa HOC" to the end of the array
favoriteFoods.shift(); // removes the first element of the array (Adobo)
 
for (const food of favoriteFoods) {
  console.log(food);
}
 
const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);
