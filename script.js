document.body.setAttribute("ontouchstart", "");

//スマホでメニュー出てくるとこ
document.getElementById("openbtn").addEventListener("click", function () {
  document.getElementById("openbtn").classList.toggle("active");
  document.getElementById("g-nav").classList.toggle("panelactive");
});

//スクロールに応じて
window.onload = (event) => {
  let scrollY = window.scrollY;
  let headerObject = Array.from(document.getElementsByClassName("tops"));
  let gnavObject = Array.from(document.getElementById("g-nav").querySelector("ul").querySelectorAll("li"))
  window.addEventListener("scroll", (event) => {
    for (let i = 0; i < headerObject.length; i++) {
      if (scrollY > window.scrollY + 3) {
        headerObject[i].style.transform = "translateY(0px)";
      } else if (scrollY > 999 && scrollY + 3 < window.scrollY) {
        headerObject[i].style.transform = "translateY(-60px)";
      }
    }
    if(window.innerWidth >= 700){
      for (let i = 0; i < gnavObject.length; i++) {
        if (scrollY > window.scrollY + 3) {
          gnavObject[i].style.transform = "translateY(0px)";
        } else if (scrollY > 999 && scrollY + 3 < window.scrollY) {
          gnavObject[i].style.transform = "translateY(-60px)";
        }
      }
    }
    scrollY = window.scrollY;
  });
};

//フッター
let footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = 
  `<div class="footerGM">
     <div class="footerMom">
       <img src="/assets/icon/icon512.png"
         alt="SF 2024 Official Icon"
           width="192"
         height=192"
         loading="lazy"
         style="margin: 15px;"
        >
      </div>
      <div class="footerMom">
        <div id="footerLink">
          <a href="/">HOME</a>
          <a href="/info">INFO</a>
          <a href="/booth">BOOTH</a>
          <a href="/stage">STAGE</a>
          <a href="/blog">BLOG</a>
          <a href="/maps">MAPS</a>
        </div>
      </div>
      <div class="footerMom">
        <a href="http://www.osakaseiko.ac.jp/" target="_blank" rel="noopener noreferrer">大阪星光学院中学校・高等学校公式</a><br><br>
        &copy; 2024 SF運営委員会 All rights reserved.
      </div>
    </div>
    <div id="footerBottom"></div>`;

//アコーディオンパネル
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

class summon{
  constructor(){
    this.elem = document.createElement("img")
    const setting = {
      side:128,
      rotate:(Math.random() * 360),
      left:(Math.random() * window.innerWidth),
      top:200,
      vy:-700,
      ay:1000
    }
    this.setting = setting
    this.vy = setting.vy
    this.ay = setting.ay
    this.time = Date.now()

    this.top = setting.top

    this.elem.src = "/assets/icon/icon_transparent.svg"
    this.elem.style.position = "fixed"
    this.elem.style.top = setting.top + "px"
    this.elem.style.left = `${setting.left}px`
    this.elem.style.width = `${setting.side}px`
    this.elem.style.height = `${setting.side}px`
    this.elem.style.rotate = `${setting.rotate}deg`
    this.elem.style.zIndex = "2024"
    document.body.appendChild(this.elem)

    const repeat = ()=>{
      this.update()
    }

    this.intervalID = setInterval(repeat,1)
  }
  update(){
    const now = Date.now()
    const dt = now - this.time
    this.time = now
    this.top += this.vy * dt * 0.001
    this.vy += this.ay * dt * 0.001

    this.elem.style.top = this.top + "px"

    if(this.top >= window.innerHeight + this.setting.side * 2){
      clearInterval(this.intervalID)
      this.elem.remove()
    }
  }
}

const keydownhistory = []

document.addEventListener("keydown",(e)=>{
  if(e.key == "S" && e.shiftKey){
    const summ = new summon()
  }
  keydownhistory.push(e.key)

  if(String(keydownhistory.slice(-5)) == 's,e,i,k,o'){
    console.log("CSS消滅!")
    document.querySelectorAll("[rel=stylesheet]").forEach(e=>{
      e.remove()
    })
  }
})