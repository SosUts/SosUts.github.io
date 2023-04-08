const body = document.querySelector("body");
const toggle = document.querySelector("#darkSwitch");
const sunIcon = document.querySelector(".darkSwitch .bxs-sun");
const moonIcon = document.querySelector(".darkSwitch .bx-moon");

darkSwitch.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});
