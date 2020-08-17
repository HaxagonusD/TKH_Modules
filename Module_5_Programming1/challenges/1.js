const names = [
  "Westly Snipes",
  "Nicholas Cage",
  "Nasir Jones",
  "Sean Carter",
  "Sean Combs",
  "Michael Jordan",
  "Patrick Ewing",
];

let first_names = [];
let last_names = [];

names.forEach((name) => {
  split = name.split(" ");
  first_names.push(split[0]);
  last_names.push(split[1]);
});
