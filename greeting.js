function greet(name) {
  var currentHour = new Date().getHours();
  var timeOfDay = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";
  console.log("Good " + timeOfDay + ", " + name + "!");
}

greet("World");
