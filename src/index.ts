// Types
// Primitive Types
let age: number = 19;
let profession: string = "Developer";
let isGoodAtIt: boolean;
// 🤔🤔🤔🤔
// 😊😊😉😊
isGoodAtIt = true;
let doingJob: boolean = false;

// Any Type
let x: any = "It could be assigned or re-assigned with any type of data";
x = true;

// Unknown Type (typesafe version of any)
// Works like any, but not assignable to other types of variables other than any
let y: unknown;
y = "abc";
y = true;

// let a: string = y; // gives error
let b: any = y; // all good

const a = (ab: string) => {
    console.log(ab);
};
// a(y); // gives error, bcz unknown isn't assignalble to string
const c = (ab: any) => {
    console.log(ab);
};
c(y); // all good

// Dealing with array
// An array only supporting numbers
let numbers: number[] = [1, 2, 3, 1];
// array supporting any type
let arr: any[] = [1, true, "hello"];

// Tuples
// types for exact spots
let person: [number, string, boolean] = [1, "Yousaf", true];
// Tuples Array
let persons: [number, string][] = [
    [1, "Yousaf"],
    [2, "Usman"],
    [3, "Umair"],
    [4, "Numan"],
];

// Union
// A variable holding more than one type
let id: string | number = "1";
id = 2;

// Enums
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}

// Objects
const user: { id: number; name: string } = {
    id: 1,
    name: "Yousaf",
};
// or we can define types separately
type User1 = {
    id: number;
    name: string;
};
const user1: User1 = {
    id: 1,
    name: "Naeem",
};

// Type Assertion
// Copying a variable but also specifying its type
// Two ways to do this
let cid: any = 1;
let customer1 = <number>cid;
let customer2 = cid as number;

// Functions
function AddNum(x: number, y: number): number /*<- type of its return value */ {
    return x + y;
}

function log(
    msg: number | string
): void /* If its not gonna return anything, then void (returns undefined) */ {
    console.log(msg);
}

function log2(msg: number | string ): never /* won't even return undefined */ {
    throw(Error)
}
// never is used when you have infinite loop or you wanna throw an error

// Interfaces
// Interface is preferred while working with objects
interface User2 {
    id: number;
    name: string;
    // We can't write less or more keys in the object than specified here
    // But if we wanna make a key optional, then put ? after it. Like this
    age?: number;
    // We can also specify read only keys, so that user can't change them later
    readonly phone: number;
}
const user2: User2 = {
    id: 1,
    name: "Naeem",
    phone: 923041317170,
};

// Difference between interfaces and types
// interfaces can't be used with primitives & unions
// while types can be used, for example
type Point = number | string;
const p1: Point = 3;

// Interfaces with functions
interface MathFunc {
    (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}
class Person implements PersonInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is Registered`;
    }
}

const person1 = new Person(1, "Yousaf");

// Generics
// used to build reusable component
function getArr<Type>(items: Type[]): Type[] {
    return new Array().concat(items);
}

let numArr = getArr<number>([1, 2, 3]);
let strArr = getArr<string>(["hello", "how", "are", "you"]);
