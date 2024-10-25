
const par = document.getElementById('search_input');
const child = document.getElementById('suggest_box');

window.addEventListener("click",(event)=>{
  if(event.target.role == "suggest_items" || hasParentWithId(event.target,"result_a_con") || (event.target.parentElement.role == "suggest_items")){
    child.classList.remove("active")
  }else if(hasParentWithId(event.target,"search_box")){
    child.classList.add("active")
  }else{
    child.classList.remove("active")
  }
})

function hasParentWithId(target, id) {
          while (target) {
              if (target.id === id) {
                  return true;
              }
              target = target.parentElement;
          }
          return false;
      }
//分けて書くのは見やすくするためだにょ
const Full2Half = (input)=>{ //全角文字を半角にする
  return input.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(char) {
      return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
  });
}
const makeLower = (input)=>{
  let answer = ""
  for(var i = 0;i < input.length;i++){
    if(lowerDataSet[input[i]]){
      answer += lowerDataSet[input[i]]
    }else{
      answer += Full2Half(input[i]).toLowerCase()
    }
  }
  return answer
}  
const lowerDataSet={
  "ア": "あ", "イ": "い", "ウ": "う", "エ": "え", "オ": "お",
  "カ": "か", "キ": "き", "ク": "く", "ケ": "け", "コ": "こ",
  "サ": "さ", "シ": "し", "ス": "す", "セ": "せ", "ソ": "そ",
  "タ": "た", "チ": "ち", "ツ": "つ", "テ": "て", "ト": "と",
  "ナ": "な", "ニ": "に", "ヌ": "ぬ", "ネ": "ね", "ノ": "の",
  "ハ": "は", "ヒ": "ひ", "フ": "ふ", "ヘ": "へ", "ホ": "ほ",
  "マ": "ま", "ミ": "み", "ム": "む", "メ": "め", "モ": "も",
  "ヤ": "や", "ユ": "ゆ", "ヨ": "よ",
  "ラ": "ら", "リ": "り", "ル": "る", "レ": "れ", "ロ": "ろ",
  "ワ": "わ", "ヲ": "を", "ン": "ん",
  "ガ": "が", "ギ": "ぎ", "グ": "ぐ", "ゲ": "げ", "ゴ": "ご",
  "ザ": "ざ", "ジ": "じ", "ズ": "ず", "ゼ": "ぜ", "ゾ": "ぞ",
  "ダ": "だ", "ヂ": "ぢ", "ヅ": "づ", "デ": "で", "ド": "ど",
  "バ": "ば", "ビ": "び", "ブ": "ぶ", "ベ": "べ", "ボ": "ぼ",
  "パ": "ぱ", "ピ": "ぴ", "プ": "ぷ", "ペ": "ぺ", "ポ": "ぽ",
  "一":"1","二":"2","三":"3","四":"4","五":"5","六":"6","七":"7","八":"8","九":"9","十":"10"
}

let defoSVG = {};
Promise.all([
  fetch("./svg/fullmap.svg").then(res=>res.text()).then(res=>{defoSVG.f0 = res;}),
  fetch("./svg/f1.svg").then(res=>res.text()).then(res=>{defoSVG.f1 = res;document.getElementById("mapContain_f1").innerHTML = res;}),
  fetch("./svg/f2.svg").then(res=>res.text()).then(res=>{defoSVG.f2 = res;document.getElementById("mapContain_f2").innerHTML = res;}),
  fetch("./svg/f3.svg").then(res=>res.text()).then(res=>{defoSVG.f3 = res;document.getElementById("mapContain_f3").innerHTML = res;}),
  fetch("./svg/f4.svg").then(res=>res.text()).then(res=>{defoSVG.f4 = res;document.getElementById("mapContain_f4").innerHTML = res;}),
  fetch("./svg/f5.svg").then(res=>res.text()).then(res=>{defoSVG.f5 = res;document.getElementById("mapContain_f5").innerHTML = res;})
]).then(()=>{
  if(window.location.hash.substring(1)){
    const DATAID = window.location.hash.substring(6)
    showplace(window.location.hash.substring(1))
    console.log(getf(DATAID))
    Array.from(document.querySelectorAll(".map")).forEach(e=>{
        e.style.display = "none"
        const func = ()=>{
            e.style.display="block"
        }    
        setTimeout(func,300);
    })
  }else{
    arrowable(true,false)
    selectSVGbutton(1)
    initialize(false)
  
    Array.from(document.querySelectorAll(".map")).forEach(e=>{
        if(e.id !== `mapContain_f1`){
            e.style.display = "none"
            const func = ()=>{
                e.style.display="block"
            }
            setTimeout(func,400);
        }
    })
  }
})



const search = ()=>{
  if(document.getElementById("mapContain_f0")){
    selectSVGbutton(1)
  }
  const input = makeLower(document.getElementById("search_input").value);
  if(!input){
    return document.getElementById("result").innerHTML = "";
  };
  let obj = [];//MARK:サジェストに表示するやつをまとめとくリスト
  dataset.forEach((elem,index)=>{
    if(elem.s.includes(input)){
      obj.push(index);
    };
  });
  let ans = "";
  let num = 0
  obj.forEach((index)=>{
    if(num >= 10)return
    num += 1
    //#maps_${dataset[index].i}
    ans += `
      <li class="result_items"  role="suggest_items" data-target="maps_${dataset[index].i}" data-floor="${dataset[index].f}">
        <img src="/assets/logo/${dataset[index].l}.png">
        <div id="result_a_con">
          <span>${dataset[index].d}</span>
        </div>
      </li>
    `;
  });
  document.getElementById("suggest_ul").innerHTML = ans;
  //MARK:ココが検索結果表示、忘れないように
  Array.from(document.querySelectorAll(".result_items")).forEach((elem)=>{
    elem.addEventListener("click",(elem)=>{
      initialize()
      selectSVGbutton(elem.currentTarget.dataset.floor)
      showplace(elem.currentTarget.dataset.target)
      history.replaceState(null, null, `#${elem.currentTarget.dataset.target}`);
      const timeoutFunc = ()=>{
        shownote(document.querySelector(window.location.hash))
        makenote(window.location.hash.substring(6))
      }
      setTimeout(timeoutFunc , 300)
    });
  });
};
document.getElementById("search_input").addEventListener("input",search);

const initialize = (bool)=>{
  if(bool){
    document.getElementById("mapContain_f0").innerHTML = defoSVG.f0;
    return
  }else{
    document.getElementById("mapContain_f1").innerHTML = defoSVG.f1;
    document.getElementById("mapContain_f2").innerHTML = defoSVG.f2;
    document.getElementById("mapContain_f3").innerHTML = defoSVG.f3;
    document.getElementById("mapContain_f4").innerHTML = defoSVG.f4;
    document.getElementById("mapContain_f5").innerHTML = defoSVG.f5;
  }
}

//MARK:ここからは目的の場所を強調表示させつやつ。
const showplace = (hash)=>{
  if(!hash){
    return;
  };
  initialize(false);
  const targetF = getf(hash.substring(5))
  selectSVGbutton(targetF)
  console.log(hash)
  document.getElementById(hash).classList.add("active");
};

const getf = (id)=>{
  for(var i = 0 ; i < dataset.length; i++){
    if(dataset[i].i == id){
      return dataset[i].f
    }
  }
  return null
}

const selectSVGbutton = (f)=>{
    document.querySelector("div.mapContain").dataset.f = f
  if(f != 0){
    if(f == 1){
        arrowable(true,false)
    }else if(f == 5){
        arrowable(false,true)
    }else{
        arrowable(true,true)
    }
    if(document.querySelector(".fullmap")){
        document.querySelector("div.mapContain").innerHTML=`
            <div id="mapContain_f1" role="mapContain" class="map"> 
    
            </div>
            <div id="mapContain_f2" role="mapContain" class="map"> 
    
            </div>
            <div id="mapContain_f3" role="mapContain" class="map">
    
            </div>
            <div id="mapContain_f4" role="mapContain" class="map">
    
            </div>
            <div id="mapContain_f5" role="mapContain" class="map">
    
            </div>`
        initialize(false)
        document.getElementById("north").style.display = "block"
        Array.from(document.querySelectorAll(".map")).forEach(e=>{
            if(e.id !== `mapContain_f${f}`){
                e.style.display = "none"
                const func = ()=>{
                    e.style.display="block"
                }
                setTimeout(func,400);
            }
        })
    }
    document.querySelector("div.mapContain").classList.remove("fullmap")
    var vw = document.getElementById("mapContain_f1").clientWidth
    if(vw <= 500){
      vw = 500
    }
    document.getElementById("mapContain_f1").style.transform = `translateY(${(f - 1)*vw}px)`
    document.getElementById("mapContain_f2").style.transform = `translateY(${(f - 3)*vw}px)`
    document.getElementById("mapContain_f3").style.transform = `translateY(${(f - 5)*vw}px)`
    document.getElementById("mapContain_f4").style.transform = `translateY(${(f - 7)*vw}px)`
    document.getElementById("mapContain_f5").style.transform = `translateY(${(f - 9)*vw}px)`
  }else{
    arrowable(false,false)
    document.getElementById("north").style.display = "none"
    document.querySelector("div.mapContain").innerHTML=`
        <div id="mapContain_f0" role="mapContain" class="map"> 

        </div>`
    document.querySelector("div.mapContain").classList.add("fullmap")
    initialize(true)  
  }
  Array.from(document.querySelectorAll("div.map")).forEach((e)=>{
    e.addEventListener("scroll",()=>{
      document.getElementById("scrollable_img").style.opacity = 0
      document.getElementById("note").style.opacity = 0
      setTimeout(()=>{document.getElementById("note").style.display = "none"},500)
    })
  })
    document.getElementById("note").style.display = "none"
    document.querySelector("span.active").classList.remove("active")
    document.querySelector(`#bf${f}`).classList.add("active")
}
Array.from(document.querySelectorAll("span.bbb")).forEach(el=>{
  el.addEventListener("click",(ev)=>{
    floor = ev.currentTarget.id.slice(2,3)
    selectSVGbutton(floor)
  })
})
window.addEventListener("DOMContentLoaded",(e)=>{
})

//MARK:note

Array.from(document.querySelectorAll("div.map")).forEach((e)=>{
  e.addEventListener("scroll",()=>{
    document.getElementById("scrollable_img").style.opacity = 0
    document.getElementById("note").style.opacity = 0
  })
})

document.addEventListener("scroll",()=>{
  document.getElementById("note").style.opacity = 0
  document.getElementById("note").style.display = "none"
})

document.addEventListener("click",()=>{
  if(window.innerWidth >= 700){
    document.getElementById("note").style.opacity = 0
    document.getElementById("note").style.display = "none"
  }
})

const shownote = (target)=>{
  const noteE = document.getElementById("note")
  const hukiE = document.getElementById("hukidasi")
  noteE.style.opacity = 100
  noteE.style.display = "block"

  var {x,width,y,height} = target.getBoundingClientRect()
  var dx = 0
  var dy = 0

  if((x - 100 + width/2) < 0){
    cx = 10
    dx = (x - 100 + width/2) - 10
  }else if((x - 100 + width/2 + 200) > window.innerWidth){
    cx = window.innerWidth - 210
    dx = (x - 100 + width/2 + 190) - window.innerWidth
  }else{
    cx = x - 100 + width/2
  }

  var bottomY = false

  if((y - 220) < 0){
    cy = y + height + 20
    bottomY = true
  }else{
    cy = y - 220
  }

  noteE.style.left = cx + "px"
  hukiE.style.left = 90 + dx + "px"
  if(bottomY){
    noteE.style.top = cy + "px"

    hukiE.style.borderTop="2px solid var(--dark)"
    hukiE.style.borderLeft="2px solid var(--dark)"

    hukiE.style.borderRight=""
    hukiE.style.borderBottom=""

    hukiE.style.top = "-12px"
  }else{
    noteE.style.top = cy + "px"
    
    hukiE.style.borderRight="2px solid var(--dark)"
    hukiE.style.borderBottom="2px solid var(--dark)"

    hukiE.style.borderTop=""
    hukiE.style.borderLeft=""

    hukiE.style.top = "190px"
  }
}

const makenote = (target)=>{
  document.querySelector("#note_img").src = "/assets/logo/" +  notedata[target][0] + ".png"
  document.querySelector("#note_p1").innerText = notedata[target][1]
  document.querySelector("#note_p2").innerText = notedata[target][4]
  document.querySelector("#note_p3").innerText = notedata[target][3]
  document.querySelector("#note_warp").href = "/booth#"+notedata[target][5]
}

document.addEventListener("click",(e)=>{
  let that
  console.log(e.target)
  if(e.target.id){
    if(notedata[e.target.id.substring(5)]){
      that = e.target.id.substring(5)
    }else{
      return
    }
  }else if(e.target.tagName == "tspan"){
    if(notedata[e.target.parentElement.id.substring(5)]){
      that = e.target.parentElement.id.substring(5)
    }else{
      return
    }
  }else{
    return
  }
  const target = that
  console.log(e.target.id)
  shownote(document.querySelector(`#maps_${target}`))
  makenote(target)
})

//MARK:f arrow
document.querySelector("div#buttonUP img").addEventListener("click",(e)=>{
    const nowF = parseInt(document.querySelector("div.mapContain").dataset.f)
    if(nowF == 5 || nowF == 0){
        return
    }
    selectSVGbutton(nowF + 1)
    if(nowF == 4){
        arrowable(false,true)
    }
})
document.querySelector("div#buttonDOWN img").addEventListener("click",(e)=>{
    const nowF = parseInt(document.querySelector("div.mapContain").dataset.f)
    if(nowF == 1 || nowF == 0){
        return
    }
    selectSVGbutton(nowF - 1)
    if(nowF  == 2){
        arrowable(true,false)
    }
})

const arrowable = (up,down) =>{
    if(up){
        document.querySelector("div#buttonUP img").style.cursor = "pointer"
    }else{
        document.querySelector("div#buttonUP img").style.cursor = "not-allowed"
    }
    if(down){
        document.querySelector("div#buttonDOWN img").style.cursor = "pointer"
    }else{
        document.querySelector("div#buttonDOWN img").style.cursor = "not-allowed"
    }
}