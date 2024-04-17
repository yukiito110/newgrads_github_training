function greet(name, language) {
  let d = new Date();
  let hours = d.getHours();
  var greeting = "Hello";
  if (language === "es") {
      if (hours < 12){
        greeting = "Buenos días";
      }
      else if (hours < 18){
        greeting = "Buenas tardes";
      }
      else {
        greeting = "Buenas noches";
      }
  } else if (language === "fr") {
      greeting = "Bonjour";
      if (hours < 12){
        greeting = "Bonjour";
      }
      else if (hours < 18){
        greeting = "Bon après-midi";
      }
      else {
        greeting = "Bonsoir";
      }
  }
  else{
    if (hours < 12){
      greeting = "Good morning";
    }
    else if (hours < 18){
      greeting = "Good afternoon";
    }
    else {
      greeting = "Good evening";
    }
  }
  console.log(greeting + ", " + name + "!");
}

greet("World", "fr");
