function greet(name, language) {
  var currentHour = new Date().getHours();
  var timeOfDay = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
  var greeting = "Hello";
  if (language){
    if (language === "es") {
        greeting = "Hola";
    } else if (language === "fr") {
        greeting = "Bonjour";
    }
    console.log(greeting + ", " + name + "!");
  }
  else{
    console.log("Good " + timeOfDay + ", " + name + "!");
  }
}
greet("World", "es");
