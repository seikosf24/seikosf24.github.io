document.getElementById("openbtn").addEventListener("click", function () {
  document.getElementById("openbtn").classList.toggle("active");
  document.getElementById("g-nav").classList.toggle("panelactive");
});

//手作りスライドショー(ガチで時間かかった)
let arrey = [
  "https://cdn.glitch.global/6b229fd4-b092-4044-9cc2-0b306f76df3b/IMG_6340.jpeg?v=1714780045834",
  "https://cdn.glitch.global/6b229fd4-b092-4044-9cc2-0b306f76df3b/IMG_6346.jpeg?v=1714810752604",
  "https://cdn.glitch.global/6b229fd4-b092-4044-9cc2-0b306f76df3b/IMG_3176.jpeg?v=1714810802794",
  "https://cdn.glitch.global/6b229fd4-b092-4044-9cc2-0b306f76df3b/IMG_6345.jpeg?v=1714811796059",
];
let topImage = 0;
let element = document.getElementById("topImage");
let style = window.getComputedStyle(element);
setInterval(function () {
  topImage++;
  if (topImage % 2 == 0) {
    element.style.opacity = 0.5 - (style.getPropertyValue("opacity") - 0.5);
  }
  document.getElementById("topImage").style.backgroundImage = `url("${
    arrey[(Math.floor(topImage / 4) * 2 + 1) % arrey.length]
  }"`;
  document.getElementById("topImage2").style.backgroundImage = `url("${
    arrey[(Math.floor((topImage + 2) / 4) * 2) % arrey.length]
  }"`;
}, 1500);
