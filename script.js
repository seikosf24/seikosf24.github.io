document.body.setAttribute("ontouchstart", "");

//スマホでメニュー出てくるとこ
document.getElementById("openbtn").addEventListener("click", function () {
  document.getElementById("openbtn").classList.toggle("active");
  document.getElementById("g-nav").classList.toggle("panelactive");
});


//フッター
let footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = `<div id="footerLink">
        <a href="/">HOME</a>
        <a href="/info">INFO</a>
        <a href="/booth">BOOTH</a>
        <a href="#">STAGE</a>
        <a href="#">NEWS</a>
        <a href="#">FAQ</a>
      </div>
      &copy; School Fair Steering Committee
      <div id="footerCoolLogo">SEIKO SF '24</div>`;
