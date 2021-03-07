

export interface OptionSelectProps {
    item: OptionSelectItemInterface
    selected: boolean
    onSelect(event:any, item:OptionSelectItemInterface, isAdded: boolean): void
}

export interface SelectFieldState {
    optionContainerClasses: {[key: string]: boolean}
    containerClasses: {}
    labelClasses: {}
    inputContainerClasses: {}
    localValue: OptionSelectItemInterface[]|null
    disabled: boolean
}


export interface OptionSelectListProps {
    items: Array<string|number|OptionSelectItemInterface>
    value: OptionSelectItemInterface[]|null
    onSelect(event:any, item:OptionSelectItemInterface, isAdded: boolean): void
}

export interface OptionSelectState {
    selected: boolean
}


export interface OptionSelectItemInterface {
    toString(): string;
    compare(item:OptionSelectItemInterface): boolean
}

export interface SelectFieldProps {
    readonly label: string;
    readonly type: string
    readonly name: string
    readonly error?: boolean
    readonly helper?: string
    readonly value?: Array<number|string>
    readonly containerClass?: {}
    readonly updateFromOutside?:boolean
    readonly disabled?:boolean

    onBlur?: CallableFunction;
    onFocus?: CallableFunction;
    onKeyDown?: CallableFunction;
    onKeyUp?: CallableFunction;
    onChange?: CallableFunction;
    onKeyPress?: CallableFunction;
}