"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
var Spacecraft = /** @class */ (function () {
    // Sintaxe reduzida, ele cria o atributo e o parametros
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        // Sempre que precisamos utilizar os atributos daquela classe utilizamos a palavra this
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
