const fibonacci = function (num)
{
    if (num < 0)
    {
        return "OOPS";
    }
    else if (num == 0)
    {
        return 0;
    }

    arr = [1, 1]

    for (i = 2; i <= num - 1; i++)
    {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[num - 1];
};


fibonacci(2);
// Do not edit below this line
module.exports = fibonacci;
