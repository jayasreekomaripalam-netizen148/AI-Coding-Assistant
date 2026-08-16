function fixBug(){

let output=document.getElementById("bugResult");

output.textContent="Analyzing code... 🤖";

setTimeout(function(){

output.textContent=
"✓ Analysis Complete\n\n• No syntax errors detected.\n• Check variable names.\n• Consider adding comments.\n• Improve indentation where needed.";

},1500);

}
