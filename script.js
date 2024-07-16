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
        <a href="/stage">STAGE</a>
        <a href="/blog">BLOG</a>
        <a href="/faq">FAQ</a>
        <a href="http://www.osakaseiko.ac.jp/">大阪星光学院公式ホームページ</a>
      </div>
      &copy; School Fair Steering Committee
      <div id="footerCoolLogo">SEIKO SF '24</div>`;



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".details").forEach(function (el) {
    const summary = el.querySelector(".summary");
    const answer = el.querySelector(".answer");
    summary.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();
      // detailsのopen属性を判定
      if (el.getAttribute("open") !== null) {
        // アコーディオンを閉じるときの処理
        const closingAnim = answer.animate(
          closingAnimation(answer),
          animTiming
        );

        closingAnim.onfinish = () => {
          // アニメーションの完了後にopen属性を取り除く
          el.removeAttribute("open");
        };
      } else {
        // open属性を付与
        el.setAttribute("open", "true");
        // アコーディオンを開くときの処理
        const openingAnim = answer.animate(
          openingAnimation(answer),
          animTiming
        );
      }
    });
  });
});

// アニメーションの時間とイージング
const animTiming = {
  duration: 300,
  easing: "ease-in-out",
};
// アコーディオンを閉じるときのキーフレーム
const closingAnimation = (answer) => [
  {
    height: answer.offsetHeight + "px",
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0,
  },
];
// アコーディオンを開くときのキーフレーム
const openingAnimation = (answer) => [
  {
    height: 0,
    opacity: 0,
  },
  {
    height: answer.offsetHeight + "px",
    opacity: 1,
  },
];
