// The key used to start a template literal is called a backtick, it's found on top of the tab key

// The difference between var and let is scope, var has global scope where let has local scope
// If let is defined in the root, it will have global scope
// Const is a variable that doesn't change and will throw an error if you try and change it
// However if a new variable is defined with the same name using the const keyword, that will change the value


// String Literals also known as Template Literals, the better way to concatonate
// let firstName = "Kent"
// let lastName = "Van Heerden"
// let age = 32
// let yearsOfExperience = 1

// let result = `My name is ${firstName} ${lastName}, I am ${age} years old and I have ${yearsOfExperience} year of experience`

// console.log(result)

// let ninjas = ["shaun", "ryu", "chun-li"]
// ninjas[1] = "pickles"
// console.log(ninjas[1])

// let ages = [20, 25, 30, 35]
// console.log(ages.length)


//Type conversion

// let score = "100"
// score = Number(score)

// console.log(score + 1)

// let people = ["Kent","Ben","Chris","Ashleigh"]

// for (let index = 0; index < people.length; index++) {

//     console.log(people[index])
// }


// Break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10]

// for (let index = 0; index < scores.length; index++) {

// Continue returns the flow back to the loop without executing the rest of the code block
//     if (scores[index] == 0){
//         continue;
//     }

// Break ends the loop entirely, even if conditions for the loop are still true

//     console.log('your score is:', scores[index])

//     if (scores[index] >= 100){
//         break;
//     }

// }


// Without the break keyword in a switch, it will run all the code after it, including cases that don't match
// Switch statements use strict equality === checking the data type for equality not just the value

// const grade = 'F'

// switch (grade) {
//     case 'A':
//     gradeMessage(grade)
//     break;

//     case 'B':
//     gradeMessage(grade)
//     break;

//     case 'C':
//     gradeMessage(grade)
//     break;

//     case 'D':
//     gradeMessage(grade)
//     break;

//     case 'E':
//     gradeMessage(grade)
//     break;

//     case 'F':
//     gradeMessage(grade)
//     break;


//     default:
//     console.log("That is not a valid grade")
//     break;
// }

// function gradeMessage(grade){
//     console.log(`You got a ${grade}`)
// }



// Functions vs function expressions
// Functions are hoisted, function expressions are not
// It is similar to scope, function is global function expression is not
// Function expressions are preffered when possible because they limit the code to clean scope and light syntax

// Function
// function greet(){
//     console.log("Hello user")
// }

// // Function expression
// const speak = function(){
//     console.log("Hello user")
// }

// speak()

// const sayhi = function(name, time){
//     console.log(`Good ${time} ${name}`)
// }

// sayhi("Kent","morning")

// It is possible to set a default value to a parameter in a function
// This value will be overridden if another value for that variable exists

// const greet = function(name = 'user',time = 'day'){

//     console.log(`Good ${time} ${name}`)

// }

// greet("Kent","night")


// Returning values from functions

// const randomNumber = function (){
//     return Math.random()
// }

// console.log(randomNumber())

// Arrow functions

// const greet = () =>{
//     console.log(`Hello world`)

// }

// greet()

// Arrow function that only returns something has no curly brackets

// const greet = () => 'hello world'
// console.log(greet())

// Typical arrow function

// const bill = (products, tax) =>{
//     let total = 0
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax
//     }
//     return total
// }

// console.log(bill([10,15,30], 0.2))

// Arrow function practice

// const randomNumber = () => Math.random()

// console.log(randomNumber())

// Methods are essentially functions that is associated with an object
// Methods are invoked with the . notation and then called with ()
// For instance

// Regular arrow function
// Note lack of . notation meaning is not associated with an object
// const myArrowFunction = () => {}
// myArrowFunction()

// // Declaration of variable for use as an object

// let myString = "This is text"

// // Method, take note of . notation, indicating a property of an object
// myString.toLocaleUpperCase()


// Callback functions are when you pass a function as an argument for another function

// const sayBye = (callback) => {
//     callback()
//     console.log("goodbye")

// }

// const sayHi = () => {
//     console.log("Hello, ")
// }

// sayBye(sayHi)

// For each is an easier and more elegant way to work with some arrays
// this is also an example of a callback function

// let people = ["Kent","Ben","Ashleigh","Nathan","Shelley"]

// people.forEach(person =>{
//     console.log(person)
// })

// let people = ["Kent","Ben","Ashleigh","Nathan","Shelley"]

// const logPerson = person =>{
//     console.log(person)
// }

// people.forEach(logPerson)

// Using forEach callback function to inject html from an array


// let people = ["Kent","Ben","Ashleigh","Nathan","Shelley"]
// let html = ``
// let list = document.getElementById("list")

// people.forEach((person) => {
//     html += `<li>${person}</li>`
// })

// list.innerHTML = html

// Fancy Version, shortened document.getElementById to getId using arrow function that returns
// remember that arrow functions without {} return the value 

// const getId = (id) => document.getElementById(id)
// let people = ["Kent","Ben","Ashleigh","Nathan","Shelley"]
// let html = ``
// let list = getId("list")

// people.forEach((person) => {
//     html += `<li>${person}</li>`
// })

// list.innerHTML = html


// Object literals
// The keyword before the : is called the key and the value is called the value
// Together they make a key value pair

// let user = {
//     name: "Kent",
//     age: "32",
//     gender: "Male",
//     favoriteFoods: ["Spaghetti", "Pizza", "Sushi"]
// }

// console.log(user.name)

// // Alternatively, if you want to use a variable as the key, you cannot use . notation and must call it with []

// let key = "gender"

// console.log(user[key])

// Object with methods
// The this keyword will refer to the global object when used within an arrow function
// Use regular functions when creating methods for objects in order to use the this keyword correctly

// let user = {
//     name: "Kent",
//     age: "32",
//     gender: "Male",
//     favoriteFoods: ["Spaghetti", "Pizza", "Sushi"],
//     login: function () {console.log(this.name + " has logged in")},
//     logout: function() {console.log("user has logged out")}
// }

// user.login()
// user.logout()

// Object methods can be shortened by using different shorter syntax
// It looks like an arrow function, but without the => arrow
// Do not be confused by it, it's a regular function, simply shorter syntax

// let user = {
//     drive(){console.log("The user is driving")}
// }

// user.drive()


// let user = {
//     name: "Kent",
//     age: "32",
//     gender: "Male",
//     favoriteFoods: ["Spaghetti", "Pizza", "Sushi"],
//     login: function () { console.log(this.name + " has logged in") },
//     logout: function () { console.log("user has logged out") },
//     logFoods: function () {
//         this.favoriteFoods.forEach(food => { console.log(food) })
//     }
// }

// user.login()
// user.logout()
// user.logFoods()


// let user = {
//     name: "Kent",
//     age: "32",
//     gender: "Male",
//     blogs: [
//         {title: "Beginner CSS course",likes: 40},
//         {title: "Objects in Javascript",likes: 26},
//         {title: "Programmer memes",likes: 74}
//     ],
//     login: function () { console.log(this.name + " has logged in") },
//     logout: function () { console.log("user has logged out") },
//     logBlogs: function () {this.blogs.forEach(blog => 
//         {console.log(`Title: ${blog.title} Likes: ${blog.likes}`)})}

// }

// user.login()
// user.logout()
// user.logBlogs()

// Primitive Types and reference types VERY IMPORTANT
// Primitive types are numbers, strings, booleans, null, undefined and symbols
// Reference types are all objects, object literals, arrays, functions and dates

// See difference between behavior of primitive types vs reference types

// let myNumberOne = 50
// let myNumberTwo = myNumberOne

// console.log(`${myNumberOne} ${myNumberTwo}`)

// myNumberOne = 25


// console.log(`${myNumberOne} ${myNumberTwo}`)

// Notice that after changing myNumberOne to 25, it does not affect the value of myNumberTwo
// Because it is a primitive type, it creates a new variable on the stack and the variable are each unique

// let myObjectOne = {name:"Kent", age:32}
// let myObjectTwo = myObjectOne

// console.log(myObjectOne, myObjectTwo)

// myObjectOne.age= 40

// console.log(myObjectOne, myObjectTwo)

// Notice that both object one and object two are affected by objectone.age
// This is because objects are reference types and objectTwo is simply refering to object one, like a pointer


// Query an element
// This is the most common usage and is most recommended, it can be used to query a tag, class or ID
// const para = document.querySelector("p")
// console.log(para)

// Query an element inside another element (child)
// Selects a paragraph inside a div

// const para = document.querySelector("div > p")
// console.log(para)


// Query an element that has a CSS class

// const paraInsideDiv = document.querySelector("p.para")

// console.log(paraInsideDiv)

// Query all elements (returns an Node list, which acts like an array, which of course start at 0)

// const paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(paragraph => {console.log(paragraph)})

// Query by ID, returns a single element

// const paragraphId = document.getElementById("test")
// paragraphId.innerHTML="Test successful"

// innerText is prefferable when possible

// const paragraphId = document.getElementById("test")
// paragraphId.innerText="Test successful"

// The problem with QuerySelector all is that it does not function like an array

// It is possible to append to innerHTML and innerText with += instead of completely over righting the data

// const para = document.querySelector("p")
// para.innerText += " this string has been added onto the paragraph using query selector and .innerText +="

// Getting and setting HTML and CSS attributes like class, ID, href etc...


// Getting attribute
// const anchor = document.querySelector("a")
// console.log(anchor.getAttribute("href"))

// Setting an attribute

// const anchor = document.querySelector("a")
// anchor.setAttribute("href", "https://www.bing.com")
// anchor.innerText="Bing"

// Most likely use will be assigning a class
const para = document.querySelector("p")
para.setAttribute("class","error")
