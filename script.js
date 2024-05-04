document.getElementById("openbtn").addEventListener("click", function () {
    document.getElementById("openbtn").classList.toggle("active");
    document.getElementById("g-nav").classList.toggle("panelactive");
  });

let topImage = 0;
setInterval(function() {
  topImage ++;
  console.log(topImage);
}, 2000);