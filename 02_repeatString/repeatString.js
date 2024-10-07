const repeatString = function (text, times)
{
    if (times < 0)
    {
        return "ERROR";
    }

    let repeatedString = "";

    for (let index = 0; index < times; index++)
    {
        repeatedString += text;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
