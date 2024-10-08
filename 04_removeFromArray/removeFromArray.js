const removeFromArray = function (array, ...positions)
{
    for (let i = 0; i < positions.length; i++)
    {
        valueOfIndex = array[positions[i] - 1];

        if (positions[i] - 1 < array.length) //position is valid -> is in bounds of array
        {
            array.splice(positions[i] - 1, 1);

            while (array.indexOf(valueOfIndex) != -1) //remove rest of positions with the same value as the given position
            {
                array.splice(array.indexOf(valueOfIndex), 1);
            }

            for (let j = i; j < positions.length; j++) //now you need to write code to only decrement indices higher than the removed one
            {
                positions[j]--;
            }
        }

    }
    return array;
};


let myarray = removeFromArray([1, 2, 3, 4], 3, 2)
console.log(myarray.toString())
// Do not edit below this line
module.exports = removeFromArray;
