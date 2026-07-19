import test from "node:test";
import assert from "node:assert/strict";
import { deleteFirstFromCalculator } from "./deleteFirstElement.js";

// first number (false)
test.only("delete the first element (first number)", () => {
    assert.equal(deleteFirstFromCalculator("893", "245", false), "93");
})

// second number (true)
test("delete the first digit (second number)", () => {
    assert.equal(deleteFirstFromCalculator("893", "245", true), "45");
})