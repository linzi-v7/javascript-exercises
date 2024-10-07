const reverseString = function (text)
{

    if (text === undefined)
    {
        return "ERROR";
    }

    let textLengthIndex = text.length - 1; //last character index

    let reversedString = "";

    while (textLengthIndex >= 0)
    {
        reversedString += text[textLengthIndex];
        textLengthIndex--;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
