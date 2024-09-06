const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const imgSrc = document.getElementById("imgSrc");
const textLabel = document.getElementById("text");
let point = 0;

noBtn.addEventListener("click", () => {
    if (point == 0) {
        imgSrc.src = "img/fuck-fuck-you.gif";
        textLabel.innerText = "เอาใหม่";
    }
    switch (point) {
        case 1:
            textLabel.innerText = "คิดดีๆ";
            break;
        case 2:
            textLabel.innerText = "ไม่เอาๆกดใหม่";
            break;
        case 3:
            textLabel.innerText = "เตือนละนะ";
            break;
        case 4:
            imgSrc.src = "img/happy.gif";
            textLabel.innerText = "เป็นเพื่อนกับเค้ามั้ย";
            noBtn.style.display = 'none';
            break;
    }
    point += 1;
});

yesBtn.addEventListener("click", () => {
    console.log(point);
    if (point == 0 ) {
        imgSrc.src = "img/milk-and-mocha-bear.gif";  
        textLabel.innerText = "ใจง่ายว่ะ";      
    } 

    if (point > 0) {
        imgSrc.src = "img/fuck-fuck-you.gif";
        textLabel.innerText = "ทำไมไม่กดปุ่มนี่ปุ่มแรก"
    }
});
