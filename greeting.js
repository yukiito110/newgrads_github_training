function greet(name, language="en") {
  let greetingMap = {
    "es": [
      "Buen día",
      "Buenas tardes",
      "Buenas noches",
    ],
    "fr": [
      "Bonjour",
      "Bon après-midi",
      "Bonne soirée",
    ],
    "en": [
      "Good morning",
      "Good afternoom",
      "Good evening",
    ]
  }
  
  var currentHour = new Date().getHours();
  var timeOfDayIndex = currentHour < 12 ? 0 : currentHour < 18 ? 1 : 1;

  console.log(greetingMap[language][timeOfDayIndex] + ", " + name + "!");
}

greet("World");
greet("World", "es");
greet("World", "fr");
