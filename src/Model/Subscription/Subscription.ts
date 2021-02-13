import { Price } from 'Model/Common/Price';
import { Option } from './Option';

export default class Subscription {
    public readonly name: string;
    public readonly price: Price;
    public readonly period: String;
    public readonly options: Option[];
    public readonly ribbon: string | null;

    constructor(
        name: string,
        price: Price,
        period: String,
        options: Option[] = [],
        ribbon: string | null = null
    ) {
        this.name = name;
        this.price = price;
        this.period = period;
        this.options = options;
        this.ribbon = ribbon;
    }
}
