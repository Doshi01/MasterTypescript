let helloWorld = "Hello World";
console.log(helloWorld)

// interface User {
//     name: string
//     id: number
//     number: number
// }
//
// const user: User = {
//     name: "Hayes",
//     id: 0,
//     number: 1
// };
// console.log(user)

// Composing Types
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// oop
interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
const user1: User = new UserAccount("Murphy", 1);

// you can make a function return different values
// depending on whether it is passed a string or an array:
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

// Generics
// Generics provide variables to types.
// A common example is an array. An array without generics could contain anything.
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// You can declare your own types that use generics:
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.

// declare const backpack: Backpack<string>;
// backpack.add("hi")
// const object = backpack.get();
// console.log(object)


