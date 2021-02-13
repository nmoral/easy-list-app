export class Option {
    public readonly name: string;
    public readonly help: string | null;
    public readonly active: boolean;

    constructor(name: string, active: boolean, help: string | null = null) {
        this.name = name;
        this.help = help;
        this.active = active;
    }
}
