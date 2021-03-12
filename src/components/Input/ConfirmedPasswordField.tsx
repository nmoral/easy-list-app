import {Component} from 'react';
import * as React from "react";
import PasswordField from "@src/components/Input/PasswordField";
import {
    PasswordFieldProps,
    ConfirmedPasswordState
} from "@src/Interfaces/Input/BaseFieldInterfaces";
import CreatePasswordField from "@src/components/Input/CreatePasswordField";


export default class ConfirmedPasswordField extends Component<PasswordFieldProps, ConfirmedPasswordState>{
    constructor(props:any) {
        super(props);
        this.state = {
            mainValue: '',
            slaveValue: '',
            slaveHelper: '',
            className: 'confirm-password-field '+(this.props.className || '')
        }

        this.onMainChangeCallBack = this.onMainChangeCallBack.bind(this);
        this.onSlaveChangeCallBack = this.onSlaveChangeCallBack.bind(this);
    }

    onMainChangeCallBack(event: any) {
        let mainValue = event.target.value;
        let slaveHelper = '';
        if (mainValue.length && this.state.slaveValue.length && mainValue != this.state.slaveValue) {
            slaveHelper = 'Les mots de passe ne sont pas identique';
        }
        if(this.props.onChange) {
            this.props.onChange({
                password: mainValue,
                confirmation: this.state.slaveValue
            })
        }
        this.setState(state => ({
            mainValue: mainValue,
            slaveHelper: slaveHelper
        }))
    }

    onSlaveChangeCallBack(event: any) {
        let slaveValue = event.target.value;
        let slaveHelper = '';
        if (slaveValue.length && this.state.mainValue.length && slaveValue != this.state.mainValue) {
            slaveHelper = 'Les mots de passe ne sont pas identique';
        }
        if(this.props.onChange) {
            this.props.onChange({
                password: this.state.mainValue,
                confirmation: slaveValue
            })
        }

        this.setState(state => ({
            slaveValue: slaveValue,
            slaveHelper: slaveHelper
        }))
    }


    render() {
        return <div className={this.state.className}>
            <CreatePasswordField required={this.props.required} label={this.props.label} name={this.props.name} onChange={this.onMainChangeCallBack}/>
            <PasswordField required={this.props.required} label={"confirmer"} name={`${this.props.name}_confirmed`} helper={this.state.slaveHelper} onChange={this.onSlaveChangeCallBack}/>
        </div>
    }
}