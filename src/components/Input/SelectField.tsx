import {Component} from "react";
import * as React from "react";
import {BaseFieldProps, SelectFieldState} from "@src/Interfaces/Input/BaseFieldInterfaces";
import BaseField from "@src/components/Input/BaseField";

export default class SelectField extends Component<BaseFieldProps, SelectFieldState>{
    constructor(props:any) {
        super(props);
        this.state = {
            localValue: null,
            containerClasses: Object.assign({
                field: true,
                error: this.props.error
            }, this.props.containerClass ?? {}),
            labelClasses: {
                'field-focused': false,
                shrink: false
            },
            inputContainerClasses: {
                'field-focused': false,
                'field-content': true
            },
            optionContainerClasses: {
                'select-field-options': true,
                'active': false
            }
        }

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);

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

        this.setState(state => ({
            optionContainerClasses: {
                'select-field-options': true,
                'active': true
            }
        }))

    }


    onBlur(event: any) {
        if(this.props.onFocus) {
            this.props.onFocus(event);
        }

        this.setState(state => ({
            optionContainerClasses: {
                'select-field-options': true,
                'active': false
            }
        }))

    }

    render() {

        return <div className={"select-field"}>
            <BaseField
                label={this.props.label}
                type="text"
                name={this.props.name}
                onBlur={this.onBlur}
                onFocus={this.onFocus} />
            <div className={this.stringifyClassName(this.state.optionContainerClasses)}>
                <ul>
                    <li>opt 1</li>
                    <li>opt 2</li>
                    <li>opt 3</li>
                    <li>opt 4</li>
                </ul>
            </div>
        </div>;
    }
}