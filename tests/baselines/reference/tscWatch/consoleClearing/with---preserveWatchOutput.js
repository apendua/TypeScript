Input::
//// [/f.ts]


//// [/a/lib/lib.d.ts]
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


fileExists:: {} 

directoryExists:: {} 

getModifiedTimes:: {} 

setModifiedTimes:: {} 

/a/lib/tsc.js --w /f.ts --preserveWatchOutput
Output::
[[90m12:00:11 AM[0m] Starting compilation in watch mode...

[[90m12:00:14 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/f.ts"]
Program options: {"watch":true,"preserveWatchOutput":true}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/f.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/f.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/f.ts (used version)

WatchedFiles::
/f.ts:
  {"fileName":"/f.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/f.js]



fileExists:: {} 

directoryExists:: {
 "/node_modules/@types": 1
} 

getModifiedTimes:: {} 

setModifiedTimes:: {} 

Change:: Comment added to file f

Input::
//// [/f.ts]
//


fileExists:: {} 

directoryExists:: {} 

getModifiedTimes:: {} 

setModifiedTimes:: {} 

Output::
[[90m12:00:17 AM[0m] File change detected. Starting incremental compilation...

[[90m12:00:21 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/f.ts"]
Program options: {"watch":true,"preserveWatchOutput":true}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/f.ts

Semantic diagnostics in builder refreshed for::
/f.ts

Shape signatures in builder refreshed for::
/f.ts (computed .d.ts)

WatchedFiles::
/f.ts:
  {"fileName":"/f.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/f.js]
//



fileExists:: {} 

directoryExists:: {} 

getModifiedTimes:: {} 

setModifiedTimes:: {} 
