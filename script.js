// PARTICLES

const particleContainer = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 8 + 5) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particleContainer.appendChild(particle);

}


// INTRO TO COUNTDOWN

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.getElementById("intro").classList.add("hidden");

    const countdownScreen =
        document.getElementById("countdownScreen");

    countdownScreen.classList.remove("hidden");

    window.scrollTo(0, 0);

    startCountdown();

});


// COUNTDOWN SETTINGS

const TEST_MODE = false;

const birthdayDate = TEST_MODE
    ? Date.now() + 5000
    : new Date(2026, 10, 12, 0, 0, 0).getTime();


let countdownInterval;

function startCountdown() {

    const totalTime = birthdayDate - Date.now();

    const startTime = Date.now();

    function updateCountdown() {

        const distance = birthdayDate - Date.now();

        const elapsed = Date.now() - startTime;

        const progress = Math.min(
            100,
            (elapsed / totalTime) * 100
        );

        document.getElementById("progressBar").style.width =
            progress + "%";

        if (distance <= 0) {

            clearInterval(countdownInterval);

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            document.getElementById("timerMessage").textContent =
                "HAPPY BIRTHDAY KHUSHBOO DII! ❤️";

            setTimeout(() => {

                document.getElementById("countdownScreen")
                    .classList.add("hidden");

                document.getElementById("mainContent")
                    .classList.remove("hidden");

                window.scrollTo(0, 0);

            }, 2000);

            return;
        }

        document.getElementById("days").textContent =
            Math.floor(distance / 86400000);

        document.getElementById("hours").textContent =
            Math.floor((distance / 3600000) % 24);

        document.getElementById("minutes").textContent =
            Math.floor((distance / 60000) % 60);

        document.getElementById("seconds").textContent =
            Math.ceil((distance % 60000) / 1000);

    }

    updateCountdown();

    countdownInterval = setInterval(updateCountdown, 100);

}


// FIREWORKS

const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

let fireworks = [];

function resizeCanvas() {

    canvas.width = canvas.offsetWidth;

    canvas.height = canvas.offsetHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


function createFirework() {

    const x = Math.random() * canvas.width;

    const y = Math.random() * canvas.height * 0.6;

    const colors = [
        "#00d9ff",
        "#7165ff",
        "#ffffff",
        "#ff5cff"
    ];

    const color = colors[
        Math.floor(Math.random() * colors.length)
    ];

    for (let i = 0; i < 40; i++) {

        const angle = Math.random() * Math.PI * 2;

        const speed = Math.random() * 5 + 1;

        fireworks.push({

            x: x,
            y: y,

            vx: Math.cos(angle) * speed,

            vy: Math.sin(angle) * speed,

            life: 100,

            color: color

        });

    }

}


function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((particle, index) => {

        particle.x += particle.vx;

        particle.y += particle.vy;

        particle.life--;

        ctx.globalAlpha = particle.life / 100;

        ctx.fillStyle = particle.color;

        ctx.beginPath();

        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);

        ctx.fill();

        if (particle.life <= 0) {

            fireworks.splice(index, 1);

        }

    });

    ctx.globalAlpha = 1;

    requestAnimationFrame(animateFireworks);

}

animateFireworks();


document.getElementById("celebrateBtn").addEventListener("click", () => {

    for (let i = 0; i < 7; i++) {

        setTimeout(createFirework, i * 300);

    }

});