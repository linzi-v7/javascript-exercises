const removeFromArray = function (array, position, secondPosition = -1)
{
    if (position - 1 < array.length)
    {
        array.splice(position - 1, 1);

        if (secondPosition != -1)
        {
            array.splice(secondPosition - 1, 1);
        }

    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
