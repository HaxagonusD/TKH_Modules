const weeklyIncome = parseInt(prompt("How much Do you make per week"));
const food = parseInt(prompt("What is the cost of food?"));
const housing = parseInt(prompt("What is the cost of housing?"));
const transportaion = parseInt(prompt("What is the cost of transportaion?"));
const other = parseInt(prompt("What is the cost of other things?"));
const savingRate = parseInt(prompt("How much do you want to save in a year?"));

const weeklySavingRate = savingRate / 52;

const total = food + housing + transportaion + other;
const whatIsLeft = weeklyIncome - total;

if (whatIsLeft >= 0) {
  console.log(`You are on track`);
} else {
  console.log(`You need to save ${whatIsLeft * -1}more per week`);
}
