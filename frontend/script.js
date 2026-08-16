const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");


sendBtn.addEventListener("click", async ()=>{


    let message = userInput.value;


    if(message==="") return;


    chatBox.innerHTML +=
    `<div class="user-message">${message}</div>`;


    userInput.value="";


    let reply = await sendChatMessage(message);


    chatBox.innerHTML +=
    `<div class="bot-message">${reply}</div>`;


});
