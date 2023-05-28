let nameArray = ["Mike", "James", "Tim", "Greg", "Annie", "Susan", "Jacob"]
let isSusan = false
let isJames = false;
let isDave = false;

for
(
    let i = 0; i < nameArray.length; i++
)
{
    if (nameArray[i] === "Susan")
    {
        isSusan = true;
    }

    if (nameArray[i] === "James")
    {
        isJames = true;
    }

    if (nameArray[i] === "Dave")
    {
        isDave = true;
    }
}

console.log("Is Susan on the list? Answer: " + isSusan)
console.log("Is Susan on the list? Answer: " + isJames)
console.log("Is Susan on the list? Answer: " + isJames)