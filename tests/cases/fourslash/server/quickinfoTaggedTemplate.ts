/// <reference path="../fourslash.ts"/>

////function parse1<T>(strings: TemplateStringsArray, ...values: T[]): Record<string, T> {
////    const result: Record<string, T> = {};
////    strings.forEach((key, i) => {
////        if (i < values.length) {
////            result[key] = values[i];
////        }
////    })
////    return result;
////}
////
////const parse2 = function <T>(strings: TemplateStringsArray, ...values: T[]): Record<string, T> {
////    const result: Record<string, T> = {};
////    strings.forEach((key, i) => {
////        if (i < values.length) {
////            result[key] = values[i];
////        }
////    })
////    return result;
////}
////
////const params1 = /*1*/parse1<string>`a=${"1"}b=${"2"}`;
////const params2 = /*2*/parse2<string>`a=${"1"}b=${"2"}`;

verify.quickInfos({
    1: "function parse1<string>(strings: TemplateStringsArray, ...values: string[]): Record<string, string>",
    2: "const parse2: <string>(strings: TemplateStringsArray, ...values: string[]) => Record<string, string>",
});
