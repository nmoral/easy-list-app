import {Price} from "@src/Model/Common/Price";
import {Currency} from "@src/Model/Common/Currency";


describe('price model', () => {
    test('price with euro as currency', () => {
        const price: Price = new Price(new Currency('euro', '€', Currency.POSITION_AFTER), 100);
        expect(price.toString()).toBe('100€')
    });
    test('price with euro as currency and 0 as value', () => {
        const price: Price = new Price(new Currency('euro', '€', Currency.POSITION_AFTER), 0);
        expect(price.toString()).toBe('FREE')
    })

});
