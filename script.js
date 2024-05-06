//スマホでメニュー出てくるとこ
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
setInterval(function () {
  topImage++;
  if (topImage % 2 == 0) {
    element.style.opacity = (2 - (topImage % 4)) / 2;
  }
  document.getElementById("topImage").style.backgroundImage = `url("${
    arrey[(Math.floor(topImage / 4) * 2 + 1) % arrey.length]
  }"`;
  document.getElementById("topImage2").style.backgroundImage = `url("${
    arrey[(Math.floor((topImage + 2) / 4) * 2) % arrey.length]
  }"`;
}, 1500);

//Seikoの左上のやつ
let a = document.getElementById("cc1");
window.addEventListener("scroll", function () {
  let h1 = document.getElementById("topImage").offsetHeight - 50;
  let c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c < h1) {
    a.style.color = "#fcfcfc";
  } else {
    a.style.color = "#222222";
  }
});

//写真の表示非表示
let oElements = document.getElementsByClassName("cellsImage");
window.addEventListener("scroll", function () {
  for (let i = 0; i < oElements.length; i++) {
    var tag = oElements[i];
    var scr = tag.getBoundingClientRect();
    var y = window.innerHeight - scr.top;
    console.log(y);
    if (y < 250) {
      tag.classList.add("ap");
    } else {
      tag.classList.remove("ap");
    }
  }
});
