import {Component} from "react";
import * as React from "react";
import {SwitchFieldInterface, SwitchFieldProps} from "@src/Interfaces/Input/BaseFieldInterfaces";


export default class SwitchField extends Component<SwitchFieldProps, SwitchFieldInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            containerClasses: {
                'switch-field': true
            },
            inputContainerClasses: {
                'switch-field-container': true,
            },
            labelClasses: {
                'switch-value': true
            },
            checked: this.props.checked,
            localValue: this.props.checked ? this.props.inputValues?.checked : this.props.inputValues?.unchecked
        }

        this.onChangeCallback = this.onChangeCallback.bind(this)
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

    onChangeCallback(event: any) {
        let localValue = this.props.inputValues?.unchecked ?? null;
        let checked = event.target.checked;
        if (checked) {
            localValue = this.props.inputValues?.checked ?? null;
        }
        if (this.props.onChange) {
            this.props.onChange(localValue, checked);
        }
        this.setState(state => ({
            localValue: localValue,
            checked: checked
        }));
    }

    render() {
        return <div className={this.stringifyClassName(this.state.containerClasses)}>
            <div className={this.stringifyClassName(this.state.inputContainerClasses)}>
                <label id={this.props.name}>
                    <input checked={this.state.checked} type="checkbox" name={this.props.name} onChange={this.onChangeCallback}/>
                    <span />
                </label>
            </div>
            <small className={this.props.error ? 'error' : ''}>{this.props.helper}</small>
        </div>;
    }
}