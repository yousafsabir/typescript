"use strict";
// Types
// Primitive Types
let age = 19;
let profession = "Developer";
let isGoodAtIt;
// 🤔🤔🤔🤔
// 😊😊😉😊
isGoodAtIt = true;
let doingJob = false;
// Any Type
let x = "It could be assigned or re-assigned with any type of data";
x = true;
// Dealing with array
// An array only supporting numbers
let numbers = [1, 2, 3, 1];
// array supporting any type
let arr = [1, true, "hello"];
// Tuples
// types for exact spots
let person = [1, "Yousaf", true];
// Tuples Array
let persons = [
    [1, "Yousaf"],
    [2, "Usman"],
    [3, "Umair"],
    [4, "Numan"],
];
// Union
// A variable holding more than one type
let id = "1";
id = 2;
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// Objects
const user = {
    id: 1,
    name: "Yousaf",
};
const user1 = {
    id: 1,
    name: "Naeem",
};
// Type Assertion
// Copying a variable but also specifying its type
// Two ways to do this
let cid = 1;
let customer1 = cid;
let customer2 = cid;
// Functions
function AddNum(x, y) {
    return x + y;
}
function log(msg) {
    console.log(msg);
}
const user2 = {
    id: 1,
    name: "Naeem",
    phone: 923041317170,
};
const p1 = 3;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is Registered`;
    }
}
const person1 = new Person(1, "Yousaf");
