function greet(name, language) {
  let currentHour = new Date().getHours();
  let greeting;
  if (language === "es") {
    greeting = currentHour < 12 ? "buen día" : currentHour < 18 ? "Hola": "Buenas noches" ;
  } else if (language === "fr") {
    greeting = currentHour < 18 ? "Bonjour" : "Bonne soirée";
  } else {
    greeting = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
  }

  console.log(greeting + ", " + name + "!");
}

greet("World", "es");