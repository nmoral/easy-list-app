
export interface BaseFieldProps {
    readonly label: string;
    readonly type: string
    readonly name: string
    readonly error?: boolean
    readonly helper?: string
    readonly value?: string
    readonly containerClass?: {}

    onBlur?: CallableFunction;
    onFocus?: CallableFunction;
    onKeyDown?: CallableFunction;
    onKeyUp?: CallableFunction;
    onChange?: CallableFunction;
    onKeyPress?: CallableFunction;
}

export interface PasswordFieldProps {
    readonly label: string;
    readonly name: string
    readonly error?: boolean
    readonly helper?: string
    readonly value?: string

    onBlur?: CallableFunction;
    onFocus?: CallableFunction;
    onKeyDown?: CallableFunction;
    onKeyUp?: CallableFunction;
    onChange?: CallableFunction;
    onKeyPress?: CallableFunction;
}

export default interface BaseFieldInterface {
    containerClasses: {}
    labelClasses: {}
    inputContainerClasses: {}
    localValue: string|null
}


export interface PasswordStateComponentInterface {
    type: string
    hidden: boolean
    shrinkClass: string
    focusClass: string
    localValue: string
    shift: boolean
    capsLock: boolean
}


export interface CreatePasswordStateComponentInterface {
    localValue: string
    passwordMeter: PasswordMeterPropsInterface
}


export interface ConfirmedPasswordState {
    mainValue: string
    slaveValue: string
    slaveHelper: string
}


export interface PasswordMeterPropsInterface {
    message: string
    widthClass: string
}

export interface SwitchFieldInterface {
    containerClasses: {}
    labelClasses: {}
    inputContainerClasses: {}
    checked: boolean
    localValue: boolean|string|number|null|undefined
}


export interface SwitchFieldProps {
    readonly name: string
    readonly error?: boolean
    readonly helper?: string
    readonly checked: boolean
    readonly inputValues?: {
        checked: boolean|string|number,
        unchecked: boolean|string|number,
    }

    readonly containerClass?: {}

    onBlur?: CallableFunction;
    onFocus?: CallableFunction;
    onKeyDown?: CallableFunction;
    onKeyUp?: CallableFunction;
    onChange?: CallableFunction;
    onKeyPress?: CallableFunction;
}



export interface SelectFieldState extends BaseFieldInterface {
    optionContainerClasses: {}
}