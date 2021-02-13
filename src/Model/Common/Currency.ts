export class Currency {

    public static readonly POSITION_BEFORE = 0;
    public static readonly POSITION_AFTER = 1;

    public readonly name: string;
    public readonly symbol: string;
    public readonly position: number;

    constructor(
        name: string,
        symbol: string,
        position: number | undefined = Currency.POSITION_AFTER
    ) {
        this.name = name;
        this.symbol = symbol;
        this.position = position ? position : Currency.POSITION_AFTER;
    }
}
