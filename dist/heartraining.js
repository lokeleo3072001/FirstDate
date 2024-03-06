function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-raining");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 7 + "s";

    const img = document.createElement("img");
    img.src = "./dist/heartbeating.gif";

    const scaleRatio = Math.random() * (0.15 - 0.05) + 0.05;
    img.style.transform = "scale(" + scaleRatio + ")";

    // Thêm thẻ <img> vào thẻ div (heart)
    heart.appendChild(img);

    // heart.innerText = '💗';
    const parent = document.body;
    parent?.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}
setInterval(createHeart, 500);
