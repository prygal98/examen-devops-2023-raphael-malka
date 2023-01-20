// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function checkGamerTag(tagName) {
    if (
        tagName.length < 8 ||
        tagName.match("^(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]$") === false
    ) {
        return false;
    } else {
        return true;
    }
}

exports.isEmpty = isEmpty;
module.exports.checkGamerTag = checkGamerTag;
