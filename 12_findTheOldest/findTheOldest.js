const findTheOldest = function (arr)
{
    const currentYear = new Date().getFullYear();

    arr = arr.map((element) =>
    {
        if (element.yearOfDeath === undefined)
        {
            element.yearOfDeath = currentYear;
        }

        return element;
    })

    let highestAge = arr.reduce((max, currentElement) =>
    {
        let age = currentElement.yearOfDeath - currentElement.yearOfBirth;
        maxAge = max.yearOfDeath - max.yearOfBirth;

        if (age > maxAge)
        {
            return currentElement;
        }

        return max;
    }, arr[0])

    return highestAge;
};

// Do not edit below this line
module.exports = findTheOldest;
