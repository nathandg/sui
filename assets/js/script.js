function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let date = currentDate.toLocaleDateString("pt-BR", dateOptions);
  document.getElementById("header_date").innerHTML = date;
}

function greet() {
  let currentTime = new Date();
  let greet = Math.floor(currentTime.getHours() / 6);
  switch (greet) {
    case 0:
      document.getElementById("header_greet").innerHTML = "Boa noite!";
      break;
    case 1:
      document.getElementById("header_greet").innerHTML = "Bom dia!";
      break;
    case 2:
      document.getElementById("header_greet").innerHTML = "Boa tarde!";
      break;
    case 3:
      document.getElementById("header_greet").innerHTML = "Boa noite!";
      break;
  }
}

function loadFunctions() {
  date();  
  greet();
}


