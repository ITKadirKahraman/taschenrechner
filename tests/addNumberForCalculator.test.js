import test from "node:test";
import assert from "node:assert/strict";
import { addNumberForCalculator } from "./addNumberForCalculator.js";

test("add two numbers", () => {
    assert.equal(addNumberForCalculator(10, 15), 25);
})

test.only("display is empty the add the firstnumber", () => {
    assert.equal(addNumberForCalculator(0, 2), 2);
})