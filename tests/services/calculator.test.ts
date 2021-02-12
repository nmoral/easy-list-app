import Calculator from '../../src/services/calculator';

describe('Example service', () => {
    test('1 + 2 to equal 3', () => {
        expect(Calculator.sum(1, 2)).toBe(3);
    });
});
