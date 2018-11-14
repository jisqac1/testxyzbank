"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Launch of XYZ Bank'), function () {
    it('verify title', () => {
        protractor_1.browser.actions().mouseMove({ x: 50, Y: 0 }).doubleClick().
            dragAndDrop(element1, element2).
            perform();
    });
};
//# sourceMappingURL=exampletc.js.map