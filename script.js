document.getElementById("openbtn").addEventListener("click", function () {
    document.getElementById("openbtn").classList.toggle("active");
    document.getElementById("g-nav").classList.toggle("panelactive");
  });

let topImage = 0;
let element = document.getElementById('topImage');
let style = window.getComputedStyle(element);
setInterval(function() {
  topImage ++;
  element.style.opacity = 0.5 - (style.getPropertyValue('opacity') - 0.5);
}, 3000);