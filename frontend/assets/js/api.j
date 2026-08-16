const API_URL = "http://localhost:5000/api";


// AI Chat

async function sendChatMessage(message){

    const response = await fetch(`${API_URL}/chat`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            message:message
        })

    });


    const data = await response.json();

    return data.aiResponse;

}


// Code Generator

async function requestCodeGeneration(prompt){
    const response = await fetch(`${API_URL}/code`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            prompt:prompt
        })

    });


    const data = await response.json();

    return data.generatedCode;

}

