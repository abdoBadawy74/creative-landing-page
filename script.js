document.addEventListener("DOMContentLoaded", function () {
    // DOM is ready
  
    let img = document.querySelector(".image img");
    
    let container = document.querySelector(".container");
    
    let icons = document.querySelectorAll(".icons img");
  
    icons.forEach(function (icon) {
      icon.addEventListener("click", function () {
        change(icon.src);
        changeColor(icon.getAttribute("color"));
      });
    });
  
    function change(i) {
      img.src = i;
    }
  
    function changeColor(c) {
      container.style.background = c;
    }
  });
  