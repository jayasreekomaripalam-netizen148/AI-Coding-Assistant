const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, sender) {
    const message = document.createElement("div");

    message.className =
        sender === "user" ? "user-message" : "bot-message";

    message.textContent = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {

    const text = userInput.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    userInput.value = "";

    setTimeout(() => {
        addMessage("🤖 This is a demo AI response.", "bot");
    }, 1000);

});

userInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        sendBtn.click();
    }

});

function sendMessage(){

    let input = document.querySelector(".chat-input input");
    let chatBox = document.querySelector(".chat-box");

    let userText = input.value;


    if(userText.trim() === ""){
        return;
    }


    let userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerHTML = userText;

    chatBox.appendChild(userMessage);


    input.value = "";


    let aiMessage = document.createElement("div");
    aiMessage.className = "message ai";

    chatBox.appendChild(aiMessage);


    let text = "Thinking... 🤖";
    let index = 0;


    let typing = setInterval(()=>{

        aiMessage.innerHTML += text[index];

        index++;


        if(index >= text.length){

            clearInterval(typing);

            setTimeout(()=>{

                aiMessage.innerHTML =
                "I can help you with Python, Java, JavaScript, debugging and coding concepts 🚀";

            },1000);

        }

    },100);


    chatBox.scrollTop = chatBox.scrollHeight;

}
