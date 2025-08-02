import { meaningOfLife } from "../../src/sample";

describe("Test sample", () => {
    it("Should return the meaning of life", () => {
        expect(meaningOfLife()).toBe(42);
    });
});
