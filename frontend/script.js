const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(message, sender) {
    const msg = document.createElement("div");

    if (sender === "user") {
        msg.className = "user-message";
    } else {
        msg.className = "bot-message";
    }

    msg.textContent = message;
    chatBox.appendChild(msg);

    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();

    if (message === "") return;

    addMessage(message, "user");

    userInput.value = "";

    setTimeout(() => {
        addMessage("🤖 AI response will appear here.", "bot");
    }, 500);
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
