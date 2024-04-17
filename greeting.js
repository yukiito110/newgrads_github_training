function greet(name, language) {
  var currentHour = new Date().getHours();
  var greeting = "Hello";
  var timeOfDay = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
  var translatedGood = "Good";
  var totalGreeting = greeting + "! " + translatedGood + " " + timeOfDay + ", " + name + "!";
  if (language === "es") {
      greeting = "Hola";
      translatedGood = "Buenas";
      timeOfDay = currentHour < 12 ? "días" : currentHour < 18 ? "tardes" : "noches";
      totalGreeting = greeting + "! " + translatedGood + " " + timeOfDay + ", " + name + "!";
  } else if (language === "fr") {
      greeting = "Bon";
      timeOfDay = currentHour < 12 ? "jour" : currentHour < 18 ? "jour" : "soir";
      totalGreeting = greeting + timeOfDay + ", " + name + "!";
  }
  console.log(totalGreeting);
}

greet("World", "es");
