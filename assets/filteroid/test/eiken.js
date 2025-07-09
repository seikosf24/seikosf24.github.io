// カードめくり
let card = document.getElementById("ja");
document.getElementById("card").onclick = function () {
  card.classList.toggle("hidden");
};

// JSON取得
let alltango = "0";
let jsonurl = "./data/eiken.json";
fetch(jsonurl)
  .then((response) => response.json())
  .then((data) => {
    alltango = data;
  });

// みて分かるやろ。配列やわ
const oyaData = ["one", "two", "three", "four", "all", "koubun1", "koubun2", "koubun3"];
const startData = [1, 501, 1001, 1601, 1, 1, 51, 101];
const endData = [500, 1000, 1600, 1900, 1900, 50, 100, 150];

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
  document.getElementById("en").innerHTML = alltango[taisho - 1].word;
  document.getElementById("ja").innerHTML = alltango[taisho - 1].meaning;
}
