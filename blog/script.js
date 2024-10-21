let aside = document.getElementById("aside");
// ここら辺に関してはjsonファイル作って自動化させたい。せっかく付けたタグも役立てないとね？
//ただしjsonは読み込み時間もあるからこのファイル内に記述するように。
aside.innerHTML = `<h3>Archive</h3>
<a href="./02.html">ミュージカル「Les Misérables」インタビュー(中編)</a><br>
<a href="./02.html">ミュージカル「Les Misérables」インタビュー(前編)</a><br>
<a href="./01.html">Webサイト開設！</a><br>`;

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
