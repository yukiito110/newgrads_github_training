function greet(name, language) {
  var greeting = "Hello";
  if (language === "es") {
      greeting = "Hola";
  } else if (language === "fr") {
      greeting = "Bonjour";
  }
  console.log(greeting + ", " + name + "!");
}

greet("World", "es");
