import test from "node:test";
import assert from "node:assert/strict";
import { calcu } from "./calcu.js"

test("calculate two numbers with +"), () => {
    const number1 = 15;
    const number2 = 20;
    const operator = "+"
    assert.equal(calcu(number1, number2, operator), 30);
    console.log(calcu(number1, number2, operator), 30);
};

test("calculate two numbers with -"), () => {
    assert.equal(calcu(10, 9, "-"), 1);
    console.log(assert.equal(calcu(10, 9, "-"), 1));
};

test("calculate tow numbers with *"), () => {
    assert.equal(calcu(10, 20, "*"), 200);
};

test("calculate tow numbers with /"), () => {
    assert.equal(calcu(30, 2, "/"), 15);
};

test("calculate tow numbers with %"), () => {
    assert.equal(calcu(30, 2, "%"), undefined);
};

test("calculate tow numbers with one negativ number and the operator +"), () => {
    assert.equal(calcu(-30, 20, "+"), -10);
};

test("calculate tow numbers decimal numbers with +"), () => {
    assert.equal(calcu(2.5, 4.8, "+"), 7.3);
};

test("calculate tow strings with -"), () => {
    assert.equal(calcu("2.5", "4", "-"), -2.5);
};