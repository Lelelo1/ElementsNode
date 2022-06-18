const fs = require('fs');
var RemObjectsElements = require("./Bin/Debug/WebAssembly/wasm32/CompileTest");
var CompileTest = require("./Bin/Debug/WebAssembly/wasm32/CompileTest").CompileTest;
var path = require("path");
var source = fs.readFileSync("./Bin/Debug/WebAssembly/wasm32/CompileTest.wasm");



CompileTest.instantiate((source)).then(function (result) {
			console.log("WebAssembly file CompileTest.wasm has been loaded.");
			var program = result.Program();
			program.HelloWorld();
		});