
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    } 
    else { factory(function(name){return this;}, this); }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
        
var CompileTest;
(function (CompileTest) {
        var proto = {};
        var instance;
        var imports;
        var module;
        var ElementsWebAssembly = require("./RemObjectsElements").ElementsWebAssembly;
        function instantiate(url) {
            if (url === void 0) { url = 'CompileTest.wasm'; }
            var result = new Promise(function (resolve, reject) {
                ElementsWebAssembly.fetchAndInstantiate(url, {}, 16, 5528)
                    .then(function (inst) {
                    var result = Object.create(proto);
                    result.instance = inst.instance;
                    result.imports = inst.import;
                    result.module = inst.module;
                    resolve(result);
                })['catch'](function (err) {
                    reject(err);
                });
            });
            return result;
        };
        CompileTest.instantiate = instantiate;

      proto.Program = function() { return ElementsWebAssembly.getAndReleaseHandleValue(this.instance.exports.__island_unwrap(this.instance.exports["__new_mi_t15_CompileTest_d_Program3__d_"]()));};
})(CompileTest = exports.CompileTest || (exports.CompileTest = {}));});
