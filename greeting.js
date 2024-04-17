function greet(name, language) {
  let currentHour = new Date().getHours();
  let greeting;
  if (language === "es") {
    greeting = currentHour < 12 ? "buen día" : currentHour < 18 ? "Hola": "Buenas noches" ;
  } else if (language === "fr") {
    greeting = currentHour < 18 ? "Bonjour" : "Bonne soirée";
  } else {
    timeOfDay = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
    greeting = "Good " + timeOfDay;

  }
  console.log(greeting + ", " + name + "!");
}

greet("World", "s");
