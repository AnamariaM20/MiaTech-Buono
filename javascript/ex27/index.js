let student = {
    name: "Mary",
    age: 12,
    grade: "Elementary",
    school: "New York",
}
for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
  }