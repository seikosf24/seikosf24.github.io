let aside = document.getElementById("aside");
aside.innerHTML = "横に書く文章。おそらくリンクリストとかタグとか、そう言うのを並べる。";

let blogUrl = location.pathname.replace(/\/+$/, "").split('/').pop();
console.log(blogUrl.slice(0,1));