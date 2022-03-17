Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/src/hello.json]
{
  "hello": "world"
}

//// [/src/src/index.ts]
import hello from "./hello.json"

export default hello.hello

//// [/src/tsconfig_withFiles.json]
{
  "compilerOptions": {
    "composite": true,
    "moduleResolution": "node",
    "module": "commonjs",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    
    "skipDefaultLibCheck": true
  },
  "files": [
    "src/index.ts", "src/hello.json"
  ]
}

//// [/src/tsconfig_withInclude.json]


//// [/src/tsconfig_withIncludeAndFiles.json]


//// [/src/tsconfig_withIncludeOfJson.json]




Output::
/lib/tsc --b src/tsconfig_withFiles.json --verbose
[[90m12:01:00 AM[0m] Projects in this build: 
    * src/tsconfig_withFiles.json

[[90m12:01:00 AM[0m] Project 'src/tsconfig_withFiles.json' is out of date because output file 'src/src/index.js' does not exist

[[90m12:01:00 AM[0m] Building project '/src/tsconfig_withFiles.json'...

exitCode:: ExitStatus.Success

getModifiedTime:: {
 "/src/src/index.ts": 1,
 "/src/src/hello.json": 1,
 "/src/src/index.js": 1
}

setModifiedTime:: {}

fileExists:: {
 "/src/src/hello.json.ts": 1,
 "/src/src/hello.json.tsx": 1,
 "/src/src/hello.json.d.ts": 1,
 "/src/src/hello.json.js": 1,
 "/src/src/hello.json.jsx": 1,
 "/src/src/hello.json": 1,
 "/src/tsconfig_withFiles.tsbuildinfo": 1
}

directoryExists:: {
 "/src/src": 6,
 "/src/src/hello.json": 1,
 "/src/node_modules/@types": 1
}


//// [/src/src/index.d.ts]
declare const _default: string;
export default _default;


//// [/src/src/index.js]
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var hello_json_1 = __importDefault(require("./hello.json"));
exports["default"] = hello_json_1["default"].hello;


//// [/src/tsconfig_withFiles.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./src/hello.json","./src/index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"6651571919-{\n  \"hello\": \"world\"\n}","-27703454282-import hello from \"./hello.json\"\n\nexport default hello.hello"],"options":{"allowSyntheticDefaultImports":true,"composite":true,"esModuleInterop":true,"module":1,"skipDefaultLibCheck":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3]},"version":"FakeTSVersion"}

//// [/src/tsconfig_withFiles.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./src/hello.json",
      "./src/index.ts"
    ],
    "fileNamesList": [
      [
        "./src/hello.json"
      ]
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/hello.json": {
        "version": "6651571919-{\n  \"hello\": \"world\"\n}",
        "signature": "6651571919-{\n  \"hello\": \"world\"\n}"
      },
      "./src/index.ts": {
        "version": "-27703454282-import hello from \"./hello.json\"\n\nexport default hello.hello",
        "signature": "-27703454282-import hello from \"./hello.json\"\n\nexport default hello.hello"
      }
    },
    "options": {
      "allowSyntheticDefaultImports": true,
      "composite": true,
      "esModuleInterop": true,
      "module": 1,
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "./src/index.ts": [
        "./src/hello.json"
      ]
    },
    "exportedModulesMap": {
      "./src/index.ts": [
        "./src/hello.json"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./src/hello.json",
      "./src/index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 958
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b src/tsconfig_withFiles.json --verbose
[[90m12:04:00 AM[0m] Projects in this build: 
    * src/tsconfig_withFiles.json

[[90m12:04:00 AM[0m] Project 'src/tsconfig_withFiles.json' is up to date because newest input 'src/src/index.ts' is older than oldest output 'src/src/index.js'

exitCode:: ExitStatus.Success

getModifiedTime:: {
 "/src/src/index.ts": 1,
 "/src/src/hello.json": 1,
 "/src/src/index.js": 1,
 "/src/src/index.d.ts": 1,
 "/src/tsconfig_withFiles.tsbuildinfo": 1,
 "/src/tsconfig_withFiles.json": 1
}

setModifiedTime:: {}

fileExists:: {}

directoryExists:: {}


