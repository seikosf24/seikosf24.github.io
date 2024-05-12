//スマホでメニュー出てくるとこ
document.getElementById("openbtn").addEventListener("click", function () {
  document.getElementById("openbtn").classList.toggle("active");
  document.getElementById("g-nav").classList.toggle("panelactive");
});



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
