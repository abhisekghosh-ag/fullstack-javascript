//first see what is the difference between filter and for-each

const nums = [12, 43, 13, 18, 9, 786, 24, 1, 4, 2, 6];
const newValues = nums.forEach((item) => {
    // console.log(item);
    return item; // for each does not return the value 
})
// console.log(newValues); -undefined

const newValues2 = nums.filter((item) => {
    return item;
})
// console.log(newValues2); //but here filter returns the value

const newValues3 = nums.filter((item) => (item < 10)) // don't need to mention the "return" keyword because of this () syntax.
// console.log(newValues3); // 9, 1, 4, 2, 6

const newValues4 = nums.filter((item) => {
    item < 10 // here return only empty array because of syntax if we use this{}, then we have to mention by giving "return" keyword. for e.x:-
    return (item < 10 ) // now returning the value
}
)
// console.log(newValues4);





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook = books.filter((book)=>{
    return book.genre === "Science" && book.edition > 2015 || book.genre === "History"
})
console.log(userBook);
