import {Component} from 'react';
import * as React from "react";
import PasswordField from "@src/components/Input/PasswordField";
import PasswordStrengthCalculator from "@src/services/PasswordStrengthCalculator";
import {
    PasswordFieldProps,
    CreatePasswordStateComponentInterface,
    PasswordMeterPropsInterface
} from "@src/Interfaces/Input/BaseFieldInterfaces";


function PasswordMeter(props:PasswordMeterPropsInterface) {
    return <div className="passwordIndicator">
        <div className={"passwordMeter "+props.widthClass}>
            <span/>
        </div>
        <p>{props.message}</p>
    </div>
}

export default class CreatePasswordField extends Component<PasswordFieldProps, CreatePasswordStateComponentInterface>{
    constructor(props:any) {
        super(props);
        this.state = {
            localValue: '',
            passwordMeter: {
                message: '',
                widthClass: ''
            }
        }

        this.onChangeCallBack = this.onChangeCallBack.bind(this);
    }

    onChangeCallBack(event: any) {
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        let passwordStrengthCalculator = new PasswordStrengthCalculator(event.target.value);
        let passwordMeter = {
            message: passwordStrengthCalculator.getMessage(),
            widthClass: passwordStrengthCalculator.getBaseMeterClass()
        };
        this.setState(state => ({
            passwordMeter: passwordMeter
        }));
    }
    render() {
        return <div>
            <PasswordField required={this.props.required} onChange={this.onChangeCallBack} label={this.props.label} helper={this.props.helper} error={this.props.error} name={this.props.name} />
            <PasswordMeter message={this.state.passwordMeter.message} widthClass={this.state.passwordMeter.widthClass} />
        </div>
    }
}