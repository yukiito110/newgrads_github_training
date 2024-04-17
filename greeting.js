function greet(name, language) {
  var greeting = "Hello";
  if (language === "es") {
      greeting = "Hola";
  } else if (language === "fr") {
      greeting = "Bonjour";
  }
  if (greeting !== "Hello") {
    console.log(greeting + ", " + name + "!");
    return;
  }
  var currentHour = new Date().getHours();
  var timeOfDay = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
  console.log("Good " + timeOfDay + ", " + name + "!");
}

greet("World", "es");
