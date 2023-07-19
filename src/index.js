import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!


document.querySelector(".logo-heading").addEventListener("mouseover", e => {e.target.style.color = "blue";});


document.querySelector(".logo-heading").addEventListener("mouseout", e => {e.target.style.color = "black";});


const rota = document.querySelectorAll("h4");
rota.forEach((h4) => {
    h4.addEventListener("mousemove", () => {
        h4.style.color = "red";
    })
});


const headerDOM = document.querySelector(".main-navigation");
const bodyStyle = () => (headerDOM.style.backgroundColor = "pink");
document.body.addEventListener("wheel", bodyStyle);


document.addEventListener("keydown", (e) => {
    if (e.shiftKey) {
        const başlık = document.querySelector("h1");
        başlık.style.color = "purple";
    }
});

document.querySelector(".content-destination img").addEventListener("dblclick", (e) => {
    if (e.target.style.borderRadius === "100%") {
        e.target.style.borderRadius === "";  
    } else {
        e.target.style.borderRadius === "100%";
    }
});


const form = document.querySelectorAll(".nav-link");
const formArr = Array.from(form);
formArr.forEach((element) => {
    element.addEventListener("focus", (e) => {
        e.target.style.background = "navy";
    });
    element.addEventListener("blur", (e) => {
        e.target.style.background = "gray";
    });
});

const loading = document.querySelectorAll("img");
loading[1].addEventListener("load", (e) => {
    alert("Yüklendi");
});

window.addEventListener("scroll", () => {
    console.log("Sayfa kaydırıldı");
});

