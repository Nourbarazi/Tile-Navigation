const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("nav");

toggleBtn.addEventListener("click", function(){
    this.classList.toggle("active");
    navLinks.classList.toggle("hide")
})