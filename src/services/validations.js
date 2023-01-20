// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function checkGamerTag(tagName) {
    let char = "/[!@#$%^&*()_+={};:|,.<>?]/";

    if (tagName.length < 8 || tagName.match('/[!@#$%^&*()_+={};:|,.<>?]/' || ) === false) {
        return false;
    } else {
        return true;
    }
}

exports.isEmpty = isEmpty;
module.exports.checkGamerTag = checkGamerTag;