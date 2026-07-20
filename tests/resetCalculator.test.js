import test from "node:test";
import assert from "node:assert/strict";
import { resetCalculator } from "./resetCalculator.js"

test.only("reset the calculator", () => {
    assert.deepStrictEqual(resetCalculator(),
        {
            display: "", 
            firstNumber: "", 
            secondNumber: "",
            operator: ""
        }
    );
});