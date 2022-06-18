const fs = require('fs');
var RemObjectsElements = require("./Bin/Debug/WebAssembly/wasm32/CompileTest");
var CompileTest = require("./Bin/Debug/WebAssembly/wasm32/CompileTest").CompileTest;
var path = require("path");
var source = fs.readFileSync("./Bin/Debug/WebAssembly/wasm32/CompileTest.wasm");



CompileTest.instantiate((source)).then(function (result) {
			console.log("WebAssembly file CompileTest.wasm has been loaded.");
			var program = result.Program();
			program.HelloWorld();
            
            console.log(program.Bool);
            console.log(program.Byte);
            console.log(program.SByte);
            console.log(program.Char);
            console.log(program.Decimal);
            console.log(program.Double);
            console.log(program.Float);
            console.log(program.Int);
            console.log(program.UInt);
            console.log(program.Nint);
            console.log(program.NUInt);
            console.log(program.Long);
            console.log(program.ULong);
            console.log(program.Short);
            console.log(program.UShort);

            console.log(program.Object);
            console.log(program.String);
            console.log(program.Dynamic);

            console.log(program.DateTime);
            console.log(program.Dictionary);
		});