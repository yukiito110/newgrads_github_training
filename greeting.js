function greet(name) {
  var currentHour = new Date().getHours();
  var timeOfDay = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
  if (language === "es") {
      greeting = "Hola";
  } else if (language === "fr") {
      greeting = "Bonjour";
  } else {
      greeting = "Good " + timeOfDay;
  }
  console.log(greeting + ", " + name + "!");
}

greet("World", "es");
