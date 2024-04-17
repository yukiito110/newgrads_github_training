function greet(name, language) {
  var greeting = "Hello";
  var currentHour = new Date().getHours();
  if (language === "es") {
    if (currentHour < 12) {
      greeting = "Buenos días";
    }
    else if (currentHour < 18) {
      greeting = "Buenas tardes";
    }
    else {
      greeting = "Buenas noches";
    }
  } else if (language === "fr") {
    if (currentHour < 12) {
      greeting = "Bonjour";
    }
    else if (currentHour < 18) {
      greeting = "Bonjour";
    }
    else {
      greeting = "Bonsoir";
    }
  } else {
    if (currentHour < 12) {
      greeting = "Good morning";
    }
    else if (currentHour < 18) {
      greeting = "Good afternoon";
    }
    else {
      greeting = "Good evening"
    }
  }
  console.log(greeting + ", " + name + "!");
}

greet("World", "es");