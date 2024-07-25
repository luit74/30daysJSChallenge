// DAY 7 : Objects

// ACTIVITY 1: Object creation and Access

// task 1: create an Object representing a book with properties like title , author, and year and log the result out.
const book1 = {
    title: "Raja Yoga",
    author: "Swami Sivananda",
    year: function(yyyy){
        return this.year = yyyy
    },
    info: function(){ //this line has been added to complete task 3
        return(`${book1.author} is the author of the book ${book1.title}.`);
    },
}
console.log(book1);

// task 2: Access and log the title of the title and author of the book
console.log(`${book1.author} is the author of the book ${book1.title}.`); 


// #######################################################################################################################

// ACTIVITY 2: Object methods

// task 3: add a method to the book object that returns a string with the book's title and author and log the result of calling this method

book1.info()

// task 4: Add a method to the book object that takes parameter (year) and updates the book's year property and log the updated object. 
book1.year(3000)
console.log(book1);

// ###############################################################################################################################

// ACTIVITY 3: Nested Object
// task 5: create a nested object representing a library with properties like name and books (an array of book objects,) and log the library objects to the console.

const librariesOfAssam = {
    library1: "kK handique",
    books: [
        {
            title: "raja Yoga",
            author: "author 1"
        },
        {
            title: "power of money",
            author: "author 2"
        }

    ]
}

console.log(librariesOfAssam);

// task 6 : access and log the name of the library and titles of all the books in the library

librariesOfAssam.books.forEach(book => {
    console.log(book.title);
})

// ########################################################################################################

// ACTIVITY 4: this keyword

// task 7: add a method to the object that uses this keyword to return a string with book's title every year and log the result for calling this method. 
const book3 = {
    name: "Dark Knight rises",
    author: "batman",
    year: 1999,
    method: function(){
        return `${this.name} was written by ${this.author} and it was publish in the year ${this.year}`
    }
}

console.log(book3.method())

// ############################################################################################################################

// ACTIVITY 5: object iteration

// task 8: Use for in loops to iterate over the object and print each items
const fruitsPrice = {
    banana : 99,
    apple: 100,
    mango: 180
}

for (let price in fruitsPrice){
    console.log(`the cost of ${price} is ${fruitsPrice[price]}`)
}

// task 9: Use Obejct.keys and Object.values to log all the values. 
console.log(Object.keys(fruitsPrice));
console.log(Object.values(fruitsPrice));

// tasks 10: destructure an object

const {banana: kela} = fruitsPrice;
console.log(kela);