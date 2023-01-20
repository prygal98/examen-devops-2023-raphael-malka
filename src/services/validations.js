// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function checkGamerTag(tagName) {
    if (tagName.length < 8) {
        return false;
    } else {
        return true;
    }
}

exports.isEmpty = isEmpty;
module.exports.checkGamerTag = checkGamerTag;