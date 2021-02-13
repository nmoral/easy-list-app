import { Currency } from '@src/Model/Common/Currency';

export class Price {
    public readonly currency: Currency;
    public readonly value: number;

    constructor(currency: Currency, value: number) {
        this.currency = currency;
        this.value = value;
    }

    public toString() {
        const value = this.value === 0 ? 'FREE' : this.value;
        const symbol = this.value === 0 ? '' : this.currency.symbol;

        if (Currency.POSITION_AFTER === this.currency.position) {
            return `${value}${symbol}`;
        }

        return `${symbol}${value}`;
    }
}
