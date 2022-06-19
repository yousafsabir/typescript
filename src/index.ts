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
