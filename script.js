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
let CD = document.getElementById("counterDown");
let theDay = new Date(2024, 11, 3, 9, 0, 0);
    // 現在の「曜日 月 日 年 時 分 秒」を取得
    let nowDate = new Date();
    // 現在が西暦何年か取得 (This Year)
    let tYear = nowDate.getFullYear();
    // 現在が何月か取得 (This Month)
    let tMonth = nowDate.getMonth();
    // 現在が何日か取得 (This Date)
    let tDate = nowDate.getDate();

    // nowDateを「1970年1月1日00時00分00秒」から何ミリ秒経過したかに変換
    let now = new Date(tYear, tMonth, tDate).getTime();
    
    console.log(nowDate);
    console.log(now);
    console.log(tYear);
    // 指定月日の年を指定
    let nYear = tYear;
    // 指定月日の月を指定 -1を忘れない！！！
    let nMonth = 1 - 1;
    // 指定月日の日を指定
    let nDate = 22;
    
    // 指定月日を「曜日 月 日 年 時 分 秒」に変換
    let n = new Date( nYear, nMonth, nDate );
    // nを「1970年1月1日00時00分00秒」から何ミリ秒経過したかに変換
    let nTarget = n.getTime();

    console.log(nYear);
    console.log(n);
    console.log(nTarget);
    // 現在から指定月日まであと何ミリ秒か計算
    let diffDate = nTarget - now;

    // 上で求めたミリ秒を日に変換
    // 指定日までの日数 = 指定月日までのミリ秒 / ( 1000 * 60秒 * 60分 * 24時間 )
    let date = Math.floor( diffDate / ( 1000 * 60 * 60 * 24 ));

    console.log(diffDate);
    console.log(date);

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
