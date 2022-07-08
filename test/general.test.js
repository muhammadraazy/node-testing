import { summarize, truthy, numberTest, asynchronousFunc } from "../src/general.js";

test("addition", () => {
    const result = summarize(20, 30);

    expect(result).toBe(50)
})

test("truthiness", () => {
    const res = truthy(1);

    expect(res).toBeTruthy()
})

test("number test", () => {
    const numResult = numberTest(100);

    expect(numResult).toBeGreaterThan(20)
})

test("async function", async() => {
    const result = await asynchronousFunc();

    expect(result).toMatch("mohammed")
})