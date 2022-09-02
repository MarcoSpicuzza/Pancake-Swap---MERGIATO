function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    document.querySelectorAll(".switch").forEach((element) => {
      element.classList.replace("dark", "light");
    });
  } else {
    document.querySelectorAll(".switch").forEach((element) => {
      element.classList.replace("light", "dark");
    });
  }
}
