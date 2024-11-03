const palindromes = function (text)
{
    text = text.toLowerCase();
    text = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '') //remove punctuation
    text = text.replace(/\s/g, '') //remove whitespace
    //text.replace(/\W/g, '');
    //return text;

    reversed = text.split("").reverse().join("")

    if (reversed == text)
    {
        return true
    }

    return false;

};


// Do not edit below this line
module.exports = palindromes;
