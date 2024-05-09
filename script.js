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

//トップ遷移のやつ表示
let firster = document.body.firstChild;
let new_element = document.createElement("div");
new_element.id = "pagetop";
firster.before(new_element);
//トップ遷移の表示非表示
window.addEventListener("scroll", function () {
  appear();
});
//高さで表示非表示
function appear() {
  if (window.scrollY > 700) {
    document.getElementById("pagetop").style.right = "20px";
  } else {
    document.getElementById("pagetop").style.right = "-60px";
  }
}
appear();
//ページトップへ遷移
document.getElementById("pagetop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Seikoの左上のやつ
let a = document.getElementById("cc1");
window.addEventListener("scroll", function () {
  let h1 = document.getElementById("topImage").offsetHeight - 50;
  let c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c < h1) {
    a.style.color = getComputedStyle(element).getPropertyValue("--light");
  } else {
    a.style.color = getComputedStyle(element).getPropertyValue("--dark");
  }
});

//写真表示
let oElements = document.getElementsByClassName("cellsImage");
window.addEventListener("scroll", function () {
  ap();
});
ap();
function ap() {
  for (let i = 0; i < oElements.length; i++) {
    var tag = oElements[i];
    var scr = tag.getBoundingClientRect();
    var y = window.innerHeight - scr.top;
    if (y < window.innerHeight * 0.3) {
      tag.classList.add("ap");
    } else {
      tag.classList.remove("ap");
    }
  }
}
