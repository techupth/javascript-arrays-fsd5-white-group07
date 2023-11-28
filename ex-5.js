const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media", "Watching basketball"],
  },
  {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"],
  },
  {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"],
  },
];

// Start coding here
employees[1].hobbies.pop(2);
console.log(employees[1].hobbies)