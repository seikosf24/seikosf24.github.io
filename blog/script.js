let aside = document.getElementById("aside");
// ここら辺に関してはjsonファイル作って自動化させたい。せっかく付けたタグも役立てないとね？
//ただしjsonは読み込み時間もあるからこのファイル内に記述するように。
aside.innerHTML = `<h3>お知らせ</h3>
<a href="./28.html">ご来場いただきありがとうございました！</a><br>
<a href="./10.html">Web版パンフレットが公開されました！</a><br>
<a href="./01.html">Webサイト開設！</a><br>
<h3>アフタートーク</h3>
<a href="./40.html">アフタートーク最終回「後編」</a><br>
<a href="./39.html">アフタートーク最終回「前編」</a><br>
<a href="./38.html">星光アミューズメント課アフタートーク「後編」</a><br>
<a href="./37.html">星光アミューズメント課アフタートーク「中編」</a><br>
<a href="./36.html">星光アミューズメント課アフタートーク「前編」</a><br>
<a href="./35.html">クラス企画アフタートーク「後編」</a><br>
<a href="./34.html">クラス企画アフタートーク「前編」</a><br>
<a href="./33.html">Les Misérablesアフタートーク「後編」</a><br>
<a href="./32.html">Les Misérablesアフタートーク「前編」</a><br>
<a href="./31.html">講堂アフタートーク「後編」</a><br>
<a href="./30.html">講堂アフタートーク「前編」</a><br>
<h3>現場レポート</h3>
<a href="./28.html">SF2024現場レポート(占いの館)</a><br>
<a href="./27.html">SF2024現場レポート(色々な団体)</a><br>
<a href="./26.html">SF2024現場レポート(柔道部)</a><br>
<a href="./25.html">SF2024現場レポート(ESS部)</a><br>
<a href="./24.html">SF2024現場レポート(ライフサイエンスクラブ)</a><br>
<a href="./23.html">SF2024現場レポート(ガネー社)</a><br>
<a href="./22.html">SF2024現場レポート(美術部)</a><br>
<a href="./21.html">SF2024現場レポート(文芸部&カト研)</a><br>
<a href="./18.html">SF2024現場レポート(高1A)</a><br>
<a href="./11.html">SF2024現場レポート(10.28)</a><br>
<h3>同窓会</h3>
<a href="./20.html">SF同窓会第5話(最終回)</a><br>
<a href="./19.html">SF同窓会第4話</a><br>
<a href="./17.html">SF同窓会第3話</a><br>
<a href="./16.html">SF同窓会第2話</a><br>
<a href="./15.html">SF同窓会第1話</a><br>
<h3>インタビュー</h3>
<a href="./14.html">運営委員に聞く(第5回)</a><br>
<a href="./13.html">運営委員に聞く(第4回)</a><br>
<a href="./12.html">運営委員に聞く(第3回)</a><br>
<a href="./09.html">星光アミューズメント課インタビュー(後編)</a><br>
<a href="./08.html">星光アミューズメント課インタビュー(中編)</a><br>
<a href="./07.html">星光アミューズメント課インタビュー(前編)</a><br>
<a href="./06.html">運営委員に聞く(第2回)</a><br>
<a href="./05.html">運営委員に聞く(第1回)</a><br>
<a href="./04.html">ミュージカル「Les Misérables」インタビュー(後編)</a><br>
<a href="./03.html">ミュージカル「Les Misérables」インタビュー(中編)</a><br>
<a href="./02.html">ミュージカル「Les Misérables」インタビュー(前編)</a><br>
`;

const blogUrl = Number(location.pathname.replace(/\/+$/, "").split('/').pop().slice(0, 2));
let before = ("00" + (blogUrl - 1)).slice(-2);
let after = ("00" + (blogUrl + 1)).slice(-2);
if (before != "00") {
    //次の記事が公開されてるかチェック
    fetch(`/blog/article/${after}.html`).then(r=>{
        if(r.status == 200){
            //ある場合
            document.getElementById("channel").innerHTML =
                `<a href='./${after}.html'>次のブログ</a>
                <a href = '../'> ブログトップ</a>
                <a href='./${before}.html'>前のブログ</a>`;
        }else{
            //ない場合
            document.getElementById("channel").innerHTML =
                `<a tabindex="-1"><s>次のブログ</s></a>
                <a href = '../'> ブログトップ</a>
                <a href='./${before}.html'>前のブログ</a>`;
        }
    }).catch(err=>{
        console.log(err)
    })
} else {
    document.getElementById("channel").innerHTML =
        `<a href='./${after}.html'>次のブログ</a>
        <a href = '../'> ブログトップ</a>
        <a tabindex="-1"><s>前のブログ</s></a>`;
}
let data = document.getElementById("letter");
let dataInside = data.innerHTML;
dataInside = dataInside.replaceAll("{{武", `<div class="selif"><div class="selifIcon iinncho">武`);
dataInside = dataInside.replaceAll("{{", `<div class="selif"><div class="selifIcon">`);
dataInside = dataInside.replaceAll("}}", `</div></div>`);
dataInside = dataInside.replaceAll("}{", `</div><div class="selifText">`);
data.innerHTML = dataInside;
