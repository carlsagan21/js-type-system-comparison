// @flow

// intersection
type A = { a: number };
type B = { b: boolean };
type C = { c: string };

function method(value: A & B & C) {
  // ...
}

// union type guard
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  // type never vs string | number
  padding
  throw new Error(`Expected string or number, got '${padding}'.`);
}
let indentedString = padLeft("Hello world", 'a');
let indentedString2 = padLeft("Hello world", 1);

// string null
let s: string = "foo";
// s = null; // error, 'null' is not assignable to 'string'
let sn: string | null = "bar";
sn = null; // ok
function f(sn: string | null): string {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}

// string literal types
type Easing = "ease-in" | "ease-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      easing
    }
    else if (easing === "ease-out") {
      easing
    }
    else {
      easing
    }
  }
}
let button = new UIElement();
button.animate(0, 0, "ease-in");

// Discriminated Unions
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
type Shape = Square | Rectangle
function area(s: Shape): number {
  switch (s.kind) {
    case "square": return s.size * s.size;
    case "rectangle": return s.height * s.width;
    // case "circle": return Math.PI * s.radius ** 2;
    // default: return assertNever(s); // error here if there are missing cases
  }
}
