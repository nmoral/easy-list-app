import {Component} from "react";
import * as React from "react";
import BaseFieldInterface, {BaseFieldProps} from "@src/Interfaces/Input/BaseFieldInterfaces";

export default class BaseField extends Component<BaseFieldProps, BaseFieldInterface>{
    constructor(props:any) {
        super(props);

        this.state = {
            localValue: null,
            containerClasses: Object.assign({
                field: true,
                error: this.props.error,
                disabled: this.props.disabled
            }, this.props.containerClass ?? {}),
            labelClasses: {
                'field-focused': false,
                shrink: false,
                required: this.props.required
            },
            inputContainerClasses: {
                'field-focused': false,
                'field-content': true
            }
        }

        this.onFocus = this.onFocus.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);

    }

    stringifyClassName(classes: {[key: string] : boolean}): string {
        let stringClasses: string = '';
        for (let keyName in classes) {
            if (!classes[keyName]) {
                continue;
            }

            stringClasses += ' '+keyName;
        }

        return stringClasses.trim()
    }

    onFocus(event: any) {
        if(this.props.onFocus) {
            this.props.onFocus(event);
        }

        if (this.props.disabled) {
            return;
        }

        this.setState(state => ({
            labelClasses: {
                shrink: true,
                'field-focused': true,
                required: this.props.required
            },
            inputContainerClasses: {
                'field-focused': true,
                'field-content': true
            }
        }));
    }

    onChange(event: any) {
        if(this.props.onChange) {
            this.props.onChange(event);
        }
        let localValue: string = event.target.value;
        this.setState(state => ({localValue: localValue}));
    }

    onBlur(event: any) {
        if(this.props.onBlur) {
            this.props.onBlur(event);
        }
        this.setState(state => ({
            labelClasses: {
                shrink: (null !== this.state.localValue && 0 !== this.state.localValue.length),
                'field-focused': false,
                required: this.props.required
            },
            inputContainerClasses: {
                'field-focused': false,
                'field-content': true
            }
        }));
    }

    onKeyUp(event: any) {
        if(this.props.onKeyUp) {
            this.props.onKeyUp(event);
        }
    }

    onKeyDown(event: any) {
        if(this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
    }

    onKeyPress(event: any) {
        if(this.props.onKeyPress) {
            this.props.onKeyPress(event);
        }
    }
    render() {

        return <div className={this.stringifyClassName(this.state.containerClasses)}>
            <label id={this.props.name} className={this.stringifyClassName(this.state.labelClasses)}>{this.props.label}</label>
            <div className={this.stringifyClassName(this.state.inputContainerClasses)} onClick={this.onFocus}>
                <input
                    required={this.props.required}
                    disabled={this.props.disabled}
                    className={'field-input'}
                    name={this.props.name}
                    onFocus={this.onFocus}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onKeyUp={this.onKeyUp}
                    onKeyDown={this.onKeyDown}
                    onKeyPressCapture={this.onKeyPress}
                    aria-invalid={"false"}
                    type={this.props.type}/>
                    <small>{this.props.helper}</small>
                {this.props.children}
            </div>
        </div>;
    }
}