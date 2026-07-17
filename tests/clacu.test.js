import test from "node:test";
import assert from "node:assert/strict";
import { calcu } from "./calcu.js"

test.only(("calculate two numbers"), () => {
    const number1 = 15;
    const number2 = 20;
    const operator = "+"
    assert.equal(calcu(number1, number2, operator), 35)
});