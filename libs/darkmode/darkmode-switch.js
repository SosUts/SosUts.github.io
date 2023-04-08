(function setupDarkMode() {
  const darkSwitch = document.getElementById("darkSwitch");
  const sunIcon = document.querySelector(".darkSwitch .bxs-sun");
  const moonIcon = document.querySelector(".darkSwitch .bx-moon");
  if (darkSwitch) {
    const isDarkMode = localStorage.getItem("darkSwitch") === "dark";
    darkSwitch.checked = isDarkMode;
    if (isDarkMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
    darkSwitch.addEventListener("change", function (event) {
      if (event.target.checked) {
        console.log("a")
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
      } else {
        console.log("b")
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }
      sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
      moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
    });
  }
})();
