import test from "node:test";
import assert from "node:assert/strict";
import { deleteLastElementFromCalculator } from "./deleteLastElement.js"

test("delete the lastElement", () => {
    assert.equal(deleteLastElementFromCalculator("123", "45", "secondNumber"), "4");
})

test.only("delete the firstElement", () => {
    assert.equal(deleteLastElementFromCalculator("341", "876", "firstNumber"), "34");
})