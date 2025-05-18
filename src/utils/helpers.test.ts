import { getStrTemplate } from "./helpers";
import { expect, test } from 'vitest'

const template = "Hello ${name}, welcome to ${place}!";
test('getStrTemplate should replace placeholders with values', () => {
    const values = { name: "John", place: "Wonderland" };
    const result = getStrTemplate(template, values);
    expect(result).toBe("Hello John, welcome to Wonderland!");
});

test('getStrTemplate should remove missing values', () => {
    const values = { name: "John" }; // Missing 'place'
    const result = getStrTemplate(template, values);
    expect(result).toBe("Hello John, welcome to !");
});

test('getStrTemplate should not remove missing values', () => {
    const values = { name: "John" }; // Missing 'place'
    const result = getStrTemplate(template, values, {replace: false});
    expect(result).toBe("Hello John, welcome to ${place}!");
});


