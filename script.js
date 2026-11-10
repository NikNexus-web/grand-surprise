// =================================
// NIKUNJ PRESENTS: KHUSHBOO DII
// =================================


// ELEMENTS

const introScreen = document.getElementById("introScreen");
const countdownScreen = document.getElementById("countdownScreen");
const birthdayScreen = document.getElementById("birthdayScreen");

const openSurprise = document.getElementById("openSurprise");

const birthdaySong = document.getElementById("birthdaySong");


// =================================
// COUNTDOWN SETTINGS
// =================================

// 12 November 2026, 12:00 AM
// JavaScript months start from 0.
// November = 10

const birthdayDate = Date.now() + 5000;


// =================================
// PARTICLES
// =================================

const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 60; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDelay = Math.random() * 5 + "s";

    particle.style.animationDuration = (3 + Math.random() * 5) + "s";

    particlesContainer.appendChild(particle);

}


// =================================
// INTRO BUTTON
// =================================

openSurprise.addEventListener("click", () => {

    introScreen.classList.remove("active");

    countdownScreen.classList.add("active");

    startCountdown();

});


// =================================
// COUNTDOWN
// =================================

let countdownInterval;

let birthdayOpened = false;


function startCountdown() {

    updateCountdown();

    countdownInterval = setInterval(updateCountdown, 1000);

}


function updateCountdown() {

    const now = new Date().getTime();

    const distance = birthdayDate - now;


    if (distance <= 0) {

        clearInterval(countdownInterval);

        if (!birthdayOpened) {

            birthdayOpened = true;

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            setTimeout(() => {

                openBirthdayWebsite();

            }, 2000);

        }

        return;

    }


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").textContent = String(days).padStart(2, "0");

    document.getElementById("hours").textContent = String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}


// =================================
// OPEN BIRTHDAY WEBSITE
// =================================

function openBirthdayWebsite() {

    countdownScreen.classList.remove("active");

    birthdayScreen.classList.add("active");

    window.scrollTo(0, 0);

    playBirthdaySong();

    startFireworks();

}


// =================================
// BIRTHDAY SONG
// =================================

function playBirthdaySong() {

    birthdaySong.currentTime = 0;

    birthdaySong.play().catch(() => {

        showMusicButton();

    });

}


function showMusicButton() {

    if (document.getElementById("musicButton")) return;

    const button = document.createElement("button");

    button.id = "musicButton";

    button.textContent = "🎵 PLAY BIRTHDAY SONG";

    button.style.position = "fixed";
    button.style.bottom = "25px";
    button.style.left = "50%";
    button.style.transform = "translateX(-50%)";
    button.style.zIndex = "10000";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        birthdaySong.play();

        button.remove();

    });

}


// =================================
// FIREWORKS
// =================================

function startFireworks() {

    const emojis = ["🎆", "✨", "🎇", "💙", "❤️"];

    let count = 0;

    const fireworkInterval = setInterval(() => {

        const firework = document.createElement("div");

        firework.classList.add("firework");

        firework.textContent = emojis[
            Math.floor(Math.random() * emojis.length)
        ];

        firework.style.left = Math.random() * 90 + 5 + "%";

        firework.style.top = Math.random() * 70 + 10 + "%";

        document.body.appendChild(firework);

        setTimeout(() => {

            firework.remove();

        }, 1500);


        count++;

        if (count >= 30) {

            clearInterval(fireworkInterval);

        }

    }, 250);

}


// =================================
// CELEBRATE AGAIN BUTTON
// =================================

document.getElementById("celebrateBtn").addEventListener("click", () => {

    startFireworks();

});