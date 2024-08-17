/// <reference path="../fourslash.ts"/>

// @jsx: react

// @filename: /a.tsx
//// class Input1<T> {
////     constructor(public props: { value: T }) {}
//// }
//// 
//// function Input2<T>(props: { value: T }): null {
////     return null;
//// }
////
//// const x1 = </*1*/Input1 value={1} />;
//// const x2 = </*2*/Input2 value={2} />;

verify.quickInfos({
    1: "constructor Input1<number>(props: {\n    value: number;\n}): Input1<number>",
    2: "function Input2<number>(props: {\n    value: number;\n}): null",
});
