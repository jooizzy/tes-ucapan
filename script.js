const letterBox = document.getElementById("letter");
const ulangBtn = document.getElementById("ulang");
const targetWord = letterBox.textContent.trim().toLowerCase();

let recognition;
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'id-ID';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
} else {
    alert("Browser kamu tidak mendukung Speech Recognition");
}

letterBox.addEventListener("click", () => {
    letterBox.className = "letter-box blue";
    if (recognition) {
        recognition.start();
    }
});

if (recognition) {
    recognition.onresult = function(event) {
        const userSpeech = event.results[0][0].transcript.toLowerCase().trim();
        if (userSpeech === targetWord) {
            letterBox.className = "letter-box green";
        } else {
            letterBox.className = "letter-box red";
        }
    };

    recognition.onerror = function(event) {
        console.error("Error:", event.error);
    };
}

ulangBtn.addEventListener("click", () => {
    letterBox.className = "letter-box";
});
