// Array of student objects
const students = [
    {
      firstName: "Torkuma",
      lastName: "Jude",
      age: 19,
      score: 85,
      courses: ["Quantum Computing", "AI-Driven Mathematics"]
    },
    {
      firstName: "Adebayo",
      lastName: "Adekunle",
      age: 21,
      score: 90,
      courses: ["Synthetic Biology", "CRISPR Technology"]
    },
    {
      firstName: "Hauwa",
      lastName: "Garba",
      age: 20,
      score: 78,
      courses: ["Geospatial AI", "Digital Archaeology"]
    },
    {
      firstName: "Tomnadoo",
      lastName: "Tekaa",
      age: 22,
      score: 92,
      courses: ["Synthetic Media", "Extended Reality"]
    },
    {
      firstName: "Chidera",
      lastName: "Obinna",
      age: 18,
      score: 80,
      courses: ["AI in Cybersecurity", "Neuromorphic Computing"]
    }
  ];
  
  // Using destructuring and .map() to create an array of strings description
  const studentDescriptions = students.map(
    ({ firstName, lastName, age, score, courses }) =>
      `${firstName} ${lastName} is ${age} years old and scored ${score}. He is taking: ${courses.join(", ")}`
  );
  
  console.log("Student Descriptions:");
  console.log(studentDescriptions);
  
  // Using .forEach() to log each student's details
  console.log("\nIndividual Student Details:");
  students.forEach(({ firstName, lastName, age, score, courses }) => {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Score: ${score}`);
    console.log(`Courses: ${courses.join(", ")}`);
    console.log("-------------------------");
  });