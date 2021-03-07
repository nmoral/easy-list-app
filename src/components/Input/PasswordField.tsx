import {Component} from 'react';
import {Publish, Visibility} from "@material-ui/icons";
import * as React from "react";
import BaseField from "@src/components/Input/BaseField";
import {PasswordFieldProps, PasswordStateComponentInterface} from "@src/Interfaces/Input/BaseFieldInterfaces";


export default class PasswordField extends Component<PasswordFieldProps, PasswordStateComponentInterface>{
    private initialized: boolean = false;
    constructor(props:any) {
        super(props);
        this.state = {
            type: 'password',
            hidden: true,
            shrinkClass: '',
            focusClass: '',
            localValue: '',
            shift: false,
            capsLock: false
        }

        this.onChangeCallBack = this.onChangeCallBack.bind(this);
        this.onKeyUpCallback = this.onKeyUpCallback.bind(this);
        this.onKeyDownCallback = this.onKeyDownCallback.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.hiddenCallBack = this.hiddenCallBack.bind(this);
    }

    onChangeCallBack(event: any) {
        let localValue: string = event.target.value;
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        this.setState(state => ({localValue: localValue}));
    }

    onKeyUpCallback(event:any) {
        let keyCode: number = event.keyCode
        this.setState(state => ({
            shift: false,
            capsLock: keyCode === 20 ? false : state.capsLock
        }))
    }

    onKeyDownCallback(event:any) {
        let capsState: boolean = this.state.capsLock;
        let shift:boolean = event.shiftKey;
        if (!this.initialized) {
            this.initialized = true;
            capsState = event.getModifierState('CapsLock');
        } else if ('CapsLock' === event.key) {
            capsState = !capsState;
        }

        if (event.shiftKey) {
            shift = true;
        }

        this.setState(state => ({
            capsLock: capsState,
            shift: shift
        }))
    }

    onFocus(event: any) {
        this.setState(state => ({
            shrinkClass: 'shrink',
            focusClass: 'field-focused'
        }));
    }

    onBlur(event: any) {
        this.setState(state => ({
            shrinkClass: this.state.localValue.length ? 'shrink' : '',
            focusClass: ''
        }));
    }

     hiddenCallBack() {
        this.setState(state => ({
            hidden: !this.state.hidden,
            type: !this.state.hidden ? 'password' : 'text'
        }));
    }

    render() {
        let shiftButton: JSX.Element|null = <Publish className="field-icon shift" />;
        if (!this.state.shift && !this.state.capsLock) {
            shiftButton = null;
        }

        return <BaseField
            label={this.props.label}
            helper={this.props.helper}
            error={this.props.error}
            type={this.state.type}
            name={this.props.name}
            containerClass={{'password-field': true}}
            onKeyDown={this.onKeyDownCallback}
            onKeyUp={this.onKeyUpCallback}
            onChange={this.onChangeCallBack}
        >
            {shiftButton}<Visibility className="field-icon interactive" onClick={this.hiddenCallBack}/>
            {this.props.children}
        </BaseField>
    }
}