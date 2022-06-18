const fs = require('fs');
var RemObjectsElements = require("./RemObjectsElements");
var CompileTest = require("./CompileTest").CompileTest;
var path = require("path");
var source = fs.readFileSync(path.resolve(__dirname, './CompileTest.wasm'));



CompileTest.instantiate((source)).then(function (result) {
			console.log("WebAssembly file CompileTest.wasm has been loaded.");
			var program = result.Program();
			program.HelloWorld();
		});