function greet(name, language) {
  let timeOfDay = "";
  let currentHour = new Date().getHours();
  if (language === "es") {
      timeOfDay = currentHour < 12 ? "Buenos días" : currentHour < 18 ? "Buenas tardes" : "Buenas noches";
  } else if (language === "fr") {
      timeOfDay = currentHour < 12 ? "Bonjour" : currentHour < 18 ? "Bonjour" : "Bonsoir";
  } else {
      timeOfDay = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";
  }
  console.log(timeOfDay + ", " + name + "!");
}

greet("World", "es");
