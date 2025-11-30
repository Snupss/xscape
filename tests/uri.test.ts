import { $uri } from "../src/index";
import {describe, expect, test} from '@jest/globals';

describe(`$uri`, () => {
    test(`does not encode when no substitutions`, () => {
        const expected = `https://tempuri.org?test=test`
        const actual = $uri`https://tempuri.org?test=test`
        expect(actual).toBe(expected);
    });

    test(`encodes substritutions`, () => {
        const sub1 = "@$@#$@#&&&+=asdadadadad"
        const sub2 = "plain"
        const sub3 = "mix&&&ed"
        const expected = `https://tempuri.org?${encodeURIComponent(sub1)}=${encodeURIComponent(sub2)}&${encodeURIComponent(sub3)}`
        const actual = $uri`https://tempuri.org?${sub1}=${sub2}&${sub3}`
        expect(actual).toBe(expected);
    });
})