const sumAll = function (beginning, ending)
{
    if ((beginning < 0) || (ending < 0) || !(Number.isInteger(beginning)) || !(Number.isInteger(ending)))
    {
        return "ERROR";
    }

    let sum = 0;
    if (beginning < ending)
    {
        for (let index = beginning; index <= ending; index++)
        {
            sum += index;
        }
    }
    else 
    {
        for (let index = beginning; index >= ending; index--)
        {
            sum += index;
        }
    }

    return sum;
};

console.log(sumAll(123, 1))

// Do not edit below this line
module.exports = sumAll;
