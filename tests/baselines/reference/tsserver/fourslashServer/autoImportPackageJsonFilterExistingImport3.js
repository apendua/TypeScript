currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/index.ts]
readFile

//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/node_modules/@types/node/index.d.ts]
declare module "node:fs" {
    export function readFile(): void;
    export function writeFile(): void;
}

//// [/package.json]
{}


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/node_modules/@types/node/index.d.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /node_modules/@types/node/index.d.ts ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /node_modules/@types/node/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types/node/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /node_modules/@types/node/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/node_modules/@types/node/index.d.ts SVC-1-0 "declare module \"node:fs\" {\n    export function readFile(): void;\n    export function writeFile(): void;\n}"


	../../../lib.d.ts
	  Default library for target 'es5'
	../../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../../lib.d.ts'
	../../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../../lib.d.ts'
	index.d.ts
	  Root file specified for compilation
	  Entry point for implicit type library 'node'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /node_modules/@types/node/index.d.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 0,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/node_modules/@types/node/package.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/node_modules/@types/node/node_modules/@types: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/@types/node/index.d.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /index.ts ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /node_modules/@types/node/package.json 2000 undefined Project: /dev/null/inferredProject2* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/index.ts SVC-1-0 "readFile"
	/node_modules/@types/node/index.d.ts SVC-1-0 "declare module \"node:fs\" {\n    export function readFile(): void;\n    export function writeFile(): void;\n}"


	lib.d.ts
	  Default library for target 'es5'
	lib.decorators.d.ts
	  Library referenced via 'decorators' from file 'lib.d.ts'
	lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file 'lib.d.ts'
	index.ts
	  Root file specified for compilation
	node_modules/@types/node/index.d.ts
	  Entry point for implicit type library 'node'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] `remove Project::
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts
	/lib.decorators.d.ts
	/lib.decorators.legacy.d.ts
	/node_modules/@types/node/index.d.ts


	../../../lib.d.ts
	  Default library for target 'es5'
	../../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../../lib.d.ts'
	../../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../../lib.d.ts'
	index.d.ts
	  Root file specified for compilation
	  Entry point for implicit type library 'node'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /node_modules/@types/node/package.json 2000 undefined Project: /dev/null/inferredProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /node_modules/@types/node/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /node_modules/@types/node/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /node_modules/@types/node/index.d.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] 	FileName: /index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/node_modules/@types/node/package.json:
  {"pollingInterval":2000} *new*
/package.json: *new*
  {"pollingInterval":250}

watchedFiles *deleted*::
/node_modules/@types/node/package.json:
  {"pollingInterval":2000}

watchedDirectoriesRecursive *deleted*::
/node_modules/@types/node/node_modules/@types:
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *deleted*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
    isClosed: true *changed*
    isOrphan: true *changed*
/dev/null/inferredProject2* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/index.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /dev/null/inferredProject2* *new*
        /dev/null/inferredProject1* *deleted*
/lib.decorators.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /dev/null/inferredProject2* *new*
        /dev/null/inferredProject1* *deleted*
/lib.decorators.legacy.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /dev/null/inferredProject2* *new*
        /dev/null/inferredProject1* *deleted*
/node_modules/@types/node/index.d.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 1 *changed*
        /dev/null/inferredProject2* *default* *new*
        /dev/null/inferredProject1* *deleted*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "preferences": {}
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 2,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "includeLinePosition": true
      },
      "command": "syntacticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "syntacticDiagnosticsSync",
      "request_seq": 3,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 4,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "includeLinePosition": true
      },
      "command": "semanticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "semanticDiagnosticsSync",
      "request_seq": 4,
      "success": true,
      "body": [
        {
          "message": "Cannot find name 'readFile'.",
          "start": 0,
          "length": 8,
          "category": "error",
          "code": 2304,
          "startLocation": {
            "line": 1,
            "offset": 1
          },
          "endLocation": {
            "line": 1,
            "offset": 9
          }
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 5,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "includeLinePosition": true
      },
      "command": "suggestionDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "suggestionDiagnosticsSync",
      "request_seq": 5,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 6,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "startLine": 1,
        "startOffset": 1,
        "endLine": 1,
        "endOffset": 9,
        "errorCodes": [
          2304
        ]
      },
      "command": "getCodeFixes"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "getCodeFixes",
      "request_seq": 6,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 7,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": ""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 7,
      "success": true
    }
After Request
Projects::
/dev/null/inferredProject2* (Inferred) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-1 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 8,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "i"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 8,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-2 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 9,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 2,
        "key": "i"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 9,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 10,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 2,
        "endLine": 1,
        "endOffset": 2,
        "insertString": "m"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 10,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-3 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 11,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 3,
        "key": "m"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 11,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 12,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 3,
        "endLine": 1,
        "endOffset": 3,
        "insertString": "p"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 12,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-4 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 13,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 4,
        "key": "p"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 13,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 14,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 4,
        "endLine": 1,
        "endOffset": 4,
        "insertString": "o"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 14,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-5 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 15,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 5,
        "key": "o"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 15,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 16,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 5,
        "endLine": 1,
        "endOffset": 5,
        "insertString": "r"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 16,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-6 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 17,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 6,
        "key": "r"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 17,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 18,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 6,
        "endLine": 1,
        "endOffset": 6,
        "insertString": "t"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 18,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-7 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 19,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 7,
        "key": "t"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 19,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 20,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 7,
        "endLine": 1,
        "endOffset": 7,
        "insertString": " "
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 20,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-8 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 21,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 8,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 21,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 22,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 8,
        "endLine": 1,
        "endOffset": 8,
        "insertString": "{"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 22,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-9 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 23,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 9,
        "key": "{"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 23,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 24,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 9,
        "endLine": 1,
        "endOffset": 9,
        "insertString": " "
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 24,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-10 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 25,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 10,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 25,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 26,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 10,
        "endLine": 1,
        "endOffset": 10,
        "insertString": "w"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 26,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-11 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 27,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 11,
        "key": "w"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 27,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 28,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 11,
        "endLine": 1,
        "endOffset": 11,
        "insertString": "r"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 28,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-12 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 29,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 12,
        "key": "r"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 29,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 30,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 12,
        "endLine": 1,
        "endOffset": 12,
        "insertString": "i"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 30,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-13 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 31,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 13,
        "key": "i"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 31,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 32,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 13,
        "endLine": 1,
        "endOffset": 13,
        "insertString": "t"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 32,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-14 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 33,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 14,
        "key": "t"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 33,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 34,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 14,
        "endLine": 1,
        "endOffset": 14,
        "insertString": "e"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 34,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-15 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 35,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 15,
        "key": "e"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 35,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 36,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 15,
        "endLine": 1,
        "endOffset": 15,
        "insertString": "F"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 36,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-16 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 37,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 16,
        "key": "F"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 37,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 38,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 16,
        "endLine": 1,
        "endOffset": 16,
        "insertString": "i"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 38,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-17 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 39,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 17,
        "key": "i"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 39,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 40,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 17,
        "endLine": 1,
        "endOffset": 17,
        "insertString": "l"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 40,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-18 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 41,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 18,
        "key": "l"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 41,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 42,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 18,
        "endLine": 1,
        "endOffset": 18,
        "insertString": "e"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 42,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-19 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 43,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 19,
        "key": "e"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 43,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 44,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 19,
        "endLine": 1,
        "endOffset": 19,
        "insertString": " "
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 44,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-20 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 45,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 20,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 45,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 46,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 20,
        "endLine": 1,
        "endOffset": 20,
        "insertString": "}"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 46,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-21 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 47,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 21,
        "key": "}"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 47,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 48,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 21,
        "endLine": 1,
        "endOffset": 21,
        "insertString": " "
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 48,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-22 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 49,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 22,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 49,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 50,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 22,
        "endLine": 1,
        "endOffset": 22,
        "insertString": "f"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 50,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-23 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 51,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 23,
        "key": "f"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 51,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 52,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 23,
        "endLine": 1,
        "endOffset": 23,
        "insertString": "r"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 52,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-24 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 53,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 24,
        "key": "r"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 53,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 54,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 24,
        "endLine": 1,
        "endOffset": 24,
        "insertString": "o"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 54,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-25 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 55,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 25,
        "key": "o"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 55,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 56,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 25,
        "endLine": 1,
        "endOffset": 25,
        "insertString": "m"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 56,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-26 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 57,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 26,
        "key": "m"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 57,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 58,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 26,
        "endLine": 1,
        "endOffset": 26,
        "insertString": " "
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 58,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-27 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 59,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 27,
        "key": " "
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 59,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 60,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 27,
        "endLine": 1,
        "endOffset": 27,
        "insertString": "\""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 60,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-28 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 61,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 28,
        "key": "\""
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 61,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 62,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 28,
        "endLine": 1,
        "endOffset": 28,
        "insertString": "n"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 62,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-29 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 63,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 29,
        "key": "n"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 63,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 64,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 29,
        "endLine": 1,
        "endOffset": 29,
        "insertString": "o"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 64,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-30 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 65,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 30,
        "key": "o"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 65,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 66,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 30,
        "endLine": 1,
        "endOffset": 30,
        "insertString": "d"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 66,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-31 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 67,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 31,
        "key": "d"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 67,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 68,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 31,
        "endLine": 1,
        "endOffset": 31,
        "insertString": "e"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 68,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-32 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 69,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 32,
        "key": "e"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 69,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 70,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 32,
        "endLine": 1,
        "endOffset": 32,
        "insertString": ":"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 70,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-33 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 71,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 33,
        "key": ":"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 71,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 72,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 33,
        "endLine": 1,
        "endOffset": 33,
        "insertString": "f"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 72,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-34 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 73,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 34,
        "key": "f"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 73,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 74,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 34,
        "endLine": 1,
        "endOffset": 34,
        "insertString": "s"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 74,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-35 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 75,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 35,
        "key": "s"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 75,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 76,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 35,
        "endLine": 1,
        "endOffset": 35,
        "insertString": "\""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 76,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-36 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 77,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 36,
        "key": "\""
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 77,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 78,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 36,
        "endLine": 1,
        "endOffset": 36,
        "insertString": ";"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 78,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-37 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 79,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 37,
        "key": ";"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 79,
      "success": true,
      "body": [
        {
          "start": {
            "line": 1,
            "offset": 37
          },
          "end": {
            "line": 1,
            "offset": 37
          },
          "newText": " "
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 80,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 37,
        "endLine": 1,
        "endOffset": 37,
        "insertString": " "
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 80,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-38 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 81,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 38,
        "endLine": 1,
        "endOffset": 38,
        "insertString": "\n"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 81,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-39 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 82,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 2,
        "offset": 1,
        "key": "\n"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 82,
      "success": true,
      "body": [
        {
          "start": {
            "line": 1,
            "offset": 37
          },
          "end": {
            "line": 1,
            "offset": 38
          },
          "newText": ""
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 83,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 37,
        "endLine": 1,
        "endOffset": 38,
        "insertString": ""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 83,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-40 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 84,
      "type": "request",
      "arguments": {
        "preferences": {}
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 84,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 85,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "includeLinePosition": true
      },
      "command": "syntacticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject2*
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject2* projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject2*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/index.ts SVC-1-40 "import { writeFile } from \"node:fs\";\nreadFile"
	/node_modules/@types/node/index.d.ts SVC-1-0 "declare module \"node:fs\" {\n    export function readFile(): void;\n    export function writeFile(): void;\n}"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "syntacticDiagnosticsSync",
      "request_seq": 85,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      },
      "body": []
    }
After Request
Projects::
/dev/null/inferredProject2* (Inferred) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 86,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "includeLinePosition": true
      },
      "command": "semanticDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "semanticDiagnosticsSync",
      "request_seq": 86,
      "success": true,
      "body": [
        {
          "message": "Cannot find name 'readFile'.",
          "start": 37,
          "length": 8,
          "category": "error",
          "code": 2304,
          "startLocation": {
            "line": 2,
            "offset": 1
          },
          "endLocation": {
            "line": 2,
            "offset": 9
          }
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 87,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "includeLinePosition": true
      },
      "command": "suggestionDiagnosticsSync"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "suggestionDiagnosticsSync",
      "request_seq": 87,
      "success": true,
      "body": [
        {
          "message": "'writeFile' is declared but its value is never read.",
          "start": 0,
          "length": 36,
          "category": "suggestion",
          "code": 6133,
          "startLocation": {
            "line": 1,
            "offset": 1
          },
          "endLocation": {
            "line": 1,
            "offset": 37
          },
          "reportsUnnecessary": true
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 88,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "startLine": 2,
        "startOffset": 1,
        "endLine": 2,
        "endOffset": 9,
        "errorCodes": [
          2304
        ]
      },
      "command": "getCodeFixes"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "getCodeFixes",
      "request_seq": 88,
      "success": true,
      "body": [
        {
          "fixName": "import",
          "description": "Update import from \"node:fs\"",
          "changes": [
            {
              "fileName": "/index.ts",
              "textChanges": [
                {
                  "start": {
                    "line": 1,
                    "offset": 10
                  },
                  "end": {
                    "line": 1,
                    "offset": 10
                  },
                  "newText": "readFile, "
                }
              ]
            }
          ]
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 89,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "startLine": 1,
        "startOffset": 1,
        "endLine": 1,
        "endOffset": 37,
        "errorCodes": [
          6133
        ]
      },
      "command": "getCodeFixes"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "getCodeFixes",
      "request_seq": 89,
      "success": true,
      "body": [
        {
          "fixName": "unusedIdentifier",
          "description": "Remove import from 'node:fs'",
          "changes": [
            {
              "fileName": "/index.ts",
              "textChanges": [
                {
                  "start": {
                    "line": 1,
                    "offset": 1
                  },
                  "end": {
                    "line": 2,
                    "offset": 1
                  },
                  "newText": ""
                }
              ]
            }
          ]
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 90,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 10,
        "endLine": 1,
        "endOffset": 10,
        "insertString": "readFile, "
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 90,
      "success": true
    }
After Request
Projects::
/dev/null/inferredProject2* (Inferred) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2
    dirty: true *changed*

ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-41 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 91,
      "type": "request",
      "arguments": {
        "file": "/index.ts",
        "line": 1,
        "offset": 10,
        "endLine": 1,
        "endOffset": 20,
        "insertString": ""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 91,
      "success": true
    }
After Request
ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-42 *changed*
    containingProjects: 1
        /dev/null/inferredProject2* *default*
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject2*
/node_modules/@types/node/index.d.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject2* *default*
