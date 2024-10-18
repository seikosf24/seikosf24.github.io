let aside = document.getElementById("aside");
aside.innerHTML = "横に書く文章。おそらくリンクリストとかタグとか、そう言うのを並べる。";

const blogUrl = location.pathname.replace(/\/+$/, "").split('/').pop();
let before = ("0" + (blogUrl - 1)).slice(0, 2);
let after = ("0" + (blogUrl + 1)).slice(0, 2);
alert(before + "+" + after);