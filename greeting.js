function greet(name, language) {
  var currentHour = new Date().getHours();
  var greeting = "Hello";
  var greeting_morning = "morning";
  var greeting_afternoon = "afternoon";
  var greeting_evening = "evening"
  if (language === "es") {
    greeting = "Hola"
    greeting_morning = "Buenos días";
    greeting_afternoon = "Buenas tardes";
    greeting_evening = "Buenas noches";
  } else if (language === "fr") {
      greeting = "Bonjour";
      greeting_morning = "Bonjour";
      greeting_afternoon = "Bon après-midi";
      greeting_evening = "Bonne soirée";
  }

  var timeOfDay = currentHour < 12 ? greeting_morning : currentHour < 18 ? greeting_afternoon : greeting_evening;

  console.log(greeting + "! " + timeOfDay + ", " + name + "!");
}

greet("World", "es");
