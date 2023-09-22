const languages = ["javascript", "java", "python", "cpp"];
for (const iterator of languages) {
    // console.log(iterator);
}

languages.forEach(element => {
    // console.log(element + " 2nd time");
});

languages.forEach((element, index, arr) => {
    // console.log(element, " index of ", index, "  ", arr);
})

const myCoding = [
    {
        language: "javascript",
        shortname: "js"
    },
    {
        language: "C++",
        shortname: "cpp"
    },
    {
        language: "python",
        shortname: "py"
    }
]
myCoding.forEach(element => {
    // console.log(element); // gets the object as values
    console.log(element.shortname); //gets the all shortname
});