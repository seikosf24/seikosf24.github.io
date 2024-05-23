document.body.setAttribute("ontouchstart", "");

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
//カウントダウン
let CD = document.getElementById("countDown");
    // 現在の「曜日 月 日 年 時 分 秒」を取得
    let nowDate = new Date();
    let tYear = nowDate.getFullYear();
    let tMonth = nowDate.getMonth();
    let tDate = nowDate.getDate();
    let now = new Date(tYear, tMonth, tDate).getTime();
    
    // 指定月日の年を指定
    let nYear = tYear;
    let nMonth = 11 - 1;
    let nDate = 3;
    let nTarget = new Date( nYear, nMonth, nDate ).getTime();

    let diffDate = nTarget - now;
    // 指定日までの日数 = 指定月日までのミリ秒 / ( 1000 * 60秒 * 60分 * 24時間 )
    let date = Math.floor( diffDate / ( 1000 * 60 * 60 * 24 ));
    CD.innerHTML = date;
//ここまで


//フッター
let footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = `<div id="footerLink">
        <a href="/">HOME</a>
        <a href="/info">INFO</a>
        <a href="#">BOOTH</a>
        <a href="#">STAGE</a>
        <a href="#">NEWS</a>
        <a href="#">FAQ</a>
      </div>
      &copy; School Fair Steering Committee
      <div id="footerCoolLogo">SEIKO SF '24</div>`;
