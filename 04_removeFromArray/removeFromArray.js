const removeFromArray = function (array, ...positions)
{

    for (let i = 0; i < positions.length; i++)
    {
        if (typeof (positions[i]) == "string")
        {
            delete array[array.indexOf(positions[i])];
        }
        else
        {

            valueOfIndex = array[positions[i] - 1];

            if (positions[i] - 1 < array.length) //position is valid -> is in bounds of array
            {
                delete array[positions[i] - 1];

                while (array.indexOf(valueOfIndex) != -1) //remove rest of positions with the same value as the given position
                {
                    delete array[array.indexOf(valueOfIndex)];
                }
            }
        }
    }


    const newArr = [];
    let count = 0;
    for (let index = 0; index < array.length; index++) 
    {

        if (array[index] !== undefined)
        {
            newArr[count] = array[index];
            count++;
        }

    }

    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
