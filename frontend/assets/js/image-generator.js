const generateImageBtn = document.getElementById("generateImageBtn");
const imagePrompt = document.getElementById("imagePrompt");
const imageLoading = document.getElementById("imageLoading");
const imageResult = document.getElementById("imageResult");


generateImageBtn.addEventListener("click", async function(){

    const prompt = imagePrompt.value.trim();


    if(prompt === ""){

        imageResult.innerHTML =
            "<p>Please describe the image you want to create.</p>";

        return;

    }


    imageLoading.style.display = "block";

    imageResult.innerHTML = "";


    // Temporary frontend preview
    // Real AI image generation will be connected later.

    setTimeout(function(){

        imageLoading.style.display = "none";

        imageResult.innerHTML = `
            <div class="generated-placeholder">
                <h2>🎨 Image Request Received</h2>
                <p>${prompt}</p>
                <p>
                    AI image generation will be connected to the image API
                    in the next backend step.
                </p>
            </div>
        `;

    }, 1000);

});
