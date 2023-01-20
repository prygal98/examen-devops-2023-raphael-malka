// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function checkGamerTag(tagName) {
    let specialChar = "/[!@#$%^&*()_+={};:|,.<>?]/";

    if (tagName.length < 8 && tagName.test(specialChar)) {
        return false;
    } else {
        return true;
    }
}

exports.isEmpty = isEmpty;
module.exports.checkGamerTag = checkGamerTag;