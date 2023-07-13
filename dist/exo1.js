"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo1 = void 0;
const exo1 = () => {
    let a = 1;
    let b = 1;
    if (a > Math.PI) {
        console.log("a > PI");
    }
    else {
        console.log("a <= PI");
    }
    if (b > Math.PI) {
        console.log("b > PI");
    }
    else {
        console.log("b <= PI");
    }
    if (a > b) {
        console.log("a > b");
    }
    else if (a === b) {
        console.log("a=b");
    }
    else if (a < b) {
        console.log("a est inférieur à b");
    }
};
exports.exo1 = exo1;
