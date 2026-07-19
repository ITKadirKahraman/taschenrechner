import test from "node:test";
import assert from "node:assert/strict";
import { deleteElementFromCalculator } from "./deleteElement.js";

// first number (false)
test("delete the last element from first number", () => {
    assert.equal(deleteElementFromCalculator("893", "245", false), "89");
})

// second number (true)
test.only("deletes the last digit of the second number", () => {
    assert.equal(deleteElementFromCalculator("893", "245", true), "24");
})