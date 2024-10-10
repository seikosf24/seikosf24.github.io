window.onload = function() {
        var now = new Date();
        var month = now.getMonth() + 1; // 月は0から始まるため1を足す
        var day = now.getDate();
        var hours = now.getHours();
        var minutes = now.getMinutes();

        // 二桁に揃えるための処理
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        var formattedTime = month + '月' + day + '日 ' + hours + ':' + minutes;
        document.getElementById('m_date').innerText = formattedTime;
    };

const post = () => {
    const title = document.getElementById("m_title").innerText;
    const date = document.getElementById("m_date").innerText;
    var body = document.getElementById("paragraph").innerHTML.replace(/\n/g, "<br>");

    body = body.replace(/<img src=[^>]*data-aftsrc=([^>]+)>/g, (p1, i) => {
        const index = parseFloat(i[1]);
        console.log(index)
        console.log(document.querySelector("#input_img").files)
        const ext = document
            .querySelector("#input_img")
            .files[index].name.split(".")[1];
        return `
            <img id=p${index} src="${index}.${ext}">
          `;
    });

    const formData = new FormData();

    const settingData = {
        title: title,
        date: date,
        body: `<p>${body}</p>`,
    };

    const settingBlob = new Blob([JSON.stringify(settingData)], {
        type: "application/json",
    });
    formData.append("setting", settingBlob, "setting.json");

    const fileInput = document.querySelector("#input_img");
    for (let i = 0; i < fileInput.files.length; i++) {
        formData.append("files", fileInput.files[i]);
    }

    const iconInput = document.querySelector("#iconInput");
    formData.append("icon", iconInput.files[0]);

    fetch("/api/post", {
        method: "POST",
        headers: {
            Authorization: "Basic " + btoa("yourusername:yourpassword"),
        },
        body: formData,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Success:", data);
            alert(`on ${data.location}`);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

class readImgClass {
    constructor() {
        document
            .getElementById("input_img")
            .addEventListener("change", async (event) => {
                document.getElementById("prev").innerHTML = "";
                const img_box = document.getElementById("prev");
                const starti = Array.from(document.querySelectorAll("imgbo")).length;
                Array.from(event.target.files).forEach(async (f, i) => {
                    console.log(f, starti + i);
                    if (f.type.startsWith("image/")) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            img_box.innerHTML += this.makeImg(e, starti + i);
                        };
                        await reader.readAsDataURL(f);
                    }
                });
            });
    }
    makeImg(e, i) {
        return `<imgbo id="${i}"><h2>${i}</h2><img src="${e.target.result}" id="s${i}"><button onclick="readImg.add(${i})" type="button">add to article</button></imgbo>`;
    }
    add(i) {
        const select = window.getSelection()
        if(select.baseNode.parentElement && select.baseNode.parentElement.parentElement.dataset.n != "3"){
            return
        }
        const imgElement = document.createElement("img")
        imgElement.src=document.getElementById(`s${i}`).src
        imgElement.dataset.aftsrc = i
        select.baseNode.parentElement.insertAdjacentElement('afterend',imgElement)
        console.log(select.baseNode.parentElement)
        return null;
    }
    prev() {
        const d = document.getElementById("html_prev");
        const title = document.getElementById("title").value;
        const date = document.getElementById("Idate").value;
        var body = document.getElementById("body").value.replace(/\n/g, "<br>");

        body = body.replace(/{img#.*?}/g, (i, p1) => {
            const index = parseInt(i.slice(5, -1));
            console.log(body, i, i.slice(5, -1));
            const src = document.getElementById(`s${index}`).src;
            return `
            <br><img id=p${index} src=${src}>
          `;
        });

        //why u can do this?
        d.innerHTML = `
        <h1>
          ${title}
        </h1>
        <div id="date">
          ${date}
        </div>
        <p style="font-size:16px">
          ${body}
        </p>
      `;
        return (location.href = "#html_prev");
    }
}
const readImg = new readImgClass();


document.getElementById("iconInput").addEventListener("change", (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById("iconPreview").src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

Array.from(document.querySelectorAll("div[data-line=single]")).forEach(div=>{

    console.log(div.dataset.n)

    div.addEventListener('keydown', function (e) {
      // Enterキーによる改行を防ぐ
      if (e.key === 'Enter') {
        e.preventDefault();
        document.querySelector(`div[data-n="${parseInt(div.dataset.n) + 1}"]`).focus()
      }
    });
})

//入力機構

const ico = ()=>{
    if(document.getElementById("i_form").style.display != "block"){
        document.getElementById("i_form").style.display = "block"
    }else{
        document.getElementById("i_form").style.display = "none"
    }
}
