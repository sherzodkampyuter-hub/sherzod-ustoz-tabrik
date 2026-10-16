const button = document.getElementById("tabrik");
const message = document.getElementById("message");

// Uchib yuradigan sharlar
function createBalloon() {
    const balloon = document.createElement("div");

    balloon.className = "balloon";
    balloon.textContent = ["🎈", "🎉", "💖", "🎊"][
        Math.floor(Math.random() * 4)
    ];

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 8000);
}

setInterval(createBalloon, 600);

// Tabrik tugmasi
button.addEventListener("click", function () {
    message.style.display = "block";

    button.textContent = "❤️ Bayramingiz muborak!";

    // Rangli konfetti
    const colors = [
        "red", "yellow", "lime",
        "cyan", "pink", "orange", "white"
    ];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");

        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 6000);
    }
});
