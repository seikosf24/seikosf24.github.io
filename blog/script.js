let aside = document.getElementById("aside");
aside.innerHTML = "横に書く文章。おそらくリンクリストとかタグとか、そう言うのを並べる。";

const blogUrl = Number(location.pathname.replace(/\/+$/, "").split('/').pop().slice(0, 2));
let before = ("00" + (blogUrl - 1)).slice(-2);
let after = ("00" + (blogUrl + 1)).slice(-2);
document.getElementById("channel").innerHTML =
    `<a href='./${before}.html'>前のブログ</a>
    <a href = '../'> ブログトップ</a>
    <a href='./${after}.html'>次のブログ</a>`;