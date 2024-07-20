//Day - 7
// Activity- 1 Object creation and access
//Task - 1- create an object representing a bookwith properties like title, author, year and log the object in console.
let book = {
  title: "Sherlock Holmes",
  author: "Sir Arthur Doyle",
  year: 2001,
};
// console.log(book);

// Task 2:- Access and log the title and author proeprty of the book object.
let title = book.title;
let author = book.author;
// console.log(`Title of the book is ${title} and author is ${author}`);

//--------------------------------------------------------------------
// Actitvity 2:- Object Methods
// Task 3:- Add a method to the book object that returns string with the book's title and author.
// book.info = function () {
//   return `Title of the book is ${title} and author is ${author}`;
// };
// console.log(book.info());

// Task 4:- Add a method to the book object that takes parameter(year) and update the book's year property,then log to console.
function updateDate(book, year) {
  return (book.year = year);
}
updateDate(book, 2024);
// console.log(book.year);
// console.log(book);

//--------------------------------------------------------------------
// Activity 3:- Nested Objects
// Task 5:- Create a nested object that represent a library with property like name and books (an array of book object) and log the library object to the console

let library = {
  name: "Central Library",
  books: [
    { bookName: "Ikagai", author: "Hector Gracia" },
    { bookName: "Sherlock Holmes", author: "Sir Arthur Doyle" },
    { bookName: "Harry Potter", author: "J K Rowling" },
  ],
};
// console.log(library);
// Task 6:- Access and log the name of the library and the titles of the books
let name = library.name;
let title1 = library.books.map((book) => book.bookName);
// console.log(`Name of library is ${name} and title of books is ${title1}`);

//--------------------------------------------------------------------
// Activity 4:- The This keyword
// Task -7 -Add method to the book obbject that uses the this keyword to return a string with the book's title and year and log the result of calling this method.
// book.info = function () {
//   return `Title of the book is ${this.title} and author is ${this.author}`;
// };
// console.log(book.info());

//--------------------------------------------------------------------
// Activity 5:- Object Iteration
// Task -8:- use a for in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
  //   console.log(`${key} is ${book[key]}`);
}

//Task- 9 :-Use object.keya nd object.value methods to log all the key and values of the objects
console.log(Object.keys(book));
console.log(Object.values(book));
