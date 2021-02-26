import PasswordStrengthCalculator from "@src/services/PasswordStrengthCalculator";


describe('price model', () => {
    test('level must be -1', () => {
        const calculator: PasswordStrengthCalculator = new PasswordStrengthCalculator('');
        expect(calculator.level).toBe(-1);
    });
    test('level must be 0', () => {
        const calculator: PasswordStrengthCalculator = new PasswordStrengthCalculator('00000000');
        expect(calculator.level).toBe(0);
    })

});
