let aside = document.getElementById("aside");
aside.innerHTML = `<h3>Article</h3>
<a href="./01.html>Webサイト開設！</a><br>

`;

const blogUrl = Number(location.pathname.replace(/\/+$/, "").split('/').pop().slice(0, 2));
let before = ("00" + (blogUrl - 1)).slice(-2);
let after = ("00" + (blogUrl + 1)).slice(-2);
if (before != "00") {
document.getElementById("channel").innerHTML =
    `<a href='./${after}.html'>次のブログ</a>
    <a href = '../'> ブログトップ</a>
    <a href='./${before}.html'>前のブログ</a>`;
} else {
document.getElementById("channel").innerHTML =
    `<a href='./${after}.html'>次のブログ</a>
    <a href = '../'> ブログトップ</a>
    <a tabindex="-1"><u>前のブログ</u></a>`;
}
let data = document.getElementById("letter");
let dataInside = data.innerHTML;
dataInside = dataInside.replaceAll("{{武", `<div class="selif"><div class="selifIcon iinncho">武`);
dataInside = dataInside.replaceAll("{{", `<div class="selif"><div class="selifIcon">`);
dataInside = dataInside.replaceAll("}}", `</div></div>`);
dataInside = dataInside.replaceAll("}{", `</div><div class="selifText">`);
data.innerHTML = dataInside;
