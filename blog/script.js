let aside = document.getElementById("aside");
aside.innerHTML = "横に書く文章。おそらくリンクリストとかタグとか、そう言うのを並べる。";

const blogUrl = location.pathname.replace(/\/+$/, "").split('/').pop();
let before = ("00" + (Number(blogUrl.slice(0, 2)) - 1)).slice(-2);
let after = ("00" + (Number(blogUrl.slice(0, 2)) + 1)).slice(-2);
alert(blogUrl + "+" + before + "+" + after);