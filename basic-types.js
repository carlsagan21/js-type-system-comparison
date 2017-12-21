// // @flow

// // bool
// const isDone: boolean = false

// // number
// const decimal: number = 6

// // string
// const color: string = "blue"

// // array
// const list1: number[] = [1, 2, 3]
// const list2: Array<number> = [1, 2, 3]

// // Declare a tuple type
// const x: [string, number] = ["hello", 10]

// // enum vs union type
// // enum Color1 {Red, Green, Blue}
// type Color2 = "Red" | "Green" | "Blue"

// // any
// const notSure: any = 4
// notSure.ifItExists() // okay, ifItExists might exist at runtime

// // Object
// let prettySure: Object = {};
// // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// // undefined, null vs void, null
// let u: void = undefined;
// let n: null = null;

// // never vs none
// // Function returning never must have unreachable end point
// function error(message: string) {
//     throw new Error(message);
// }

// // maybe
// function acceptsMaybeString(value: ?string) {
//   value
// }
// acceptsMaybeString("bar");     // Works!
// acceptsMaybeString(undefined); // Works!
// acceptsMaybeString(null);      // Works!
// acceptsMaybeString();          // Works!
// function acceptsMaybeNumber(value: ?number) {
//   if (value !== null && value !== undefined) {
//     return value * 2;
//   }
// }
// function acceptsObject(value: { foo?: string }) {
//   value
//   value.foo
// }
// acceptsObject({ foo: "bar" });     // Works!
// acceptsObject({ foo: undefined }); // Works!
// acceptsObject({ foo: null });      // Error!
// acceptsObject({});                 // Works!
// function acceptsOptionalString(value?: string) {
//   // ...
// }
// acceptsOptionalString("bar");     // Works!
// acceptsOptionalString(undefined); // Works!
// acceptsOptionalString(null);      // Error!
// acceptsOptionalString();          // Works!

// // union literal types
// function getColor(name: "success" | "warning" | "danger") {
//   switch (name) {
//     case "success" : return "green";
//     case "warning" : return "yellow";
//     case "danger"  : return "red";
//   }
//   name
// }
// getColor("success"); // Works!
// getColor("danger");  // Works!
// // $ExpectError
// getColor("error");   // Error!

// // mixed
// function stringify(value: mixed) {
//   if (typeof value === 'string') {
//     return "" + value; // Works!
//   } else {
//     value
//     return "";
//   }
// }
// stringify("foo");

// // function
// function concat(a, b) {
//   return a + b;
// }
// concat("foo", "bar"); // Works!
// concat(1, 2);         // Works!
// function method1(func: () => string) {
//   // ...
// }

// // object as map
// var obj: {
//   size: number,
//   [id: number]: string
// } = {
//     size: 0
//   };

// function add(id: number, name: string) {
//   obj[id] = name;
//   obj.size++;
// }

// // disjoint Unions
// type Success = { success: true, value: boolean };
// type Failed = { success: false, error: string };
// type Response1 = Success | Failed;
// function handleResponse(response: Response1) {
//   if (response.success) {
//     var value: boolean = response.value; // Works!
//   } else {
//     var error: string = response.error; // Works!
//   }
// }
