/* istanbul ignore file */
try {
    const { isEmpty } = require("./services/validations");
    const { checkGamerTag } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
        if(feedbackMessageText = isEmpty(gamerTagValue)){
            feedbackMessageText = "Gamer tag cannot be empty";
        }
        if(checkGamerTag(gamerTagValue) === true){
            feedbackMessageText = "Gamer tag is valid";
        }else{
            feedbackMessageText = "Gamer tag is invalid";
        }
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
