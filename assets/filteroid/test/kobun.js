// カードめくり
let card = document.getElementById("ja");
document.getElementById("card").onclick = function () {
  card.classList.toggle("hidden");
};

// JSON取得
let alltango = "0";
let jsonurl = "./data/kobun.json";
fetch(jsonurl)
  .then((response) => response.json())
  .then((data) => {
    alltango = data;
  console.log(alltango);
  });

// みて分かるやろ。配列やわ
const oyaData = ["koubun1", "koubun2", "koubun3", "koubun4", "kouvun5", "koubunAll"];
const startData = [1, 71, 183, 247, 311, 1];
const endData = [70, 182,246, 310, 325, 325];

//英語と訳表示
function nextCard() {
  card.classList.add("hidden");
  let str = "";
  let num = document.console.sect;
  for (let i = 0; i < num.length; i++) {
    if (num[i].checked) {
      str = num[i].value;
      break;
    }
  }
  let index = oyaData.indexOf(str);
  let first = startData[index];
  let last = endData[index] + 1;
  let taisho = Math.floor(Math.random() * (last - first) + first);
  document.getElementById("en").innerHTML = alltango[taisho - 1].a;
  document.getElementById("ja").innerHTML = alltango[taisho - 1].q;
}
