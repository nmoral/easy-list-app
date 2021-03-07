import {Component, RefObject} from "react";
import * as React from "react";
import {
    OptionSelectProps,
    SelectFieldState,
    OptionSelectListProps,
    OptionSelectState,
    OptionSelectItemInterface,
    SelectFieldProps
} from '@src/Interfaces/Input/SelectInterfaces';
import {ClickAwayListener} from "@material-ui/core";

export default class SelectField extends Component<SelectFieldProps, SelectFieldState>{

    RIGHT_POSITION_CLASS:string = 'select-field-right';
    LEFT_POSITION_CLASS:string = 'select-field-left';
    TOP_POSITION_CLASS:string = 'select-field-top';
    BOTTOM_POSITION_CLASS:string = 'select-field-bottom';


    readonly element: RefObject<any>;
    private xPositionClass: string;
    private yPositionClass: string;

    constructor(props:any) {
        super(props);
        this.xPositionClass = this.RIGHT_POSITION_CLASS;
        this.yPositionClass = this.BOTTOM_POSITION_CLASS;

        this.state = {
            localValue: null,
            containerClasses: Object.assign({
                disabled: !this.props.value || 0 === this.props.value?.length,
                field: true,
                error: this.props.error
            }, this.props.containerClass ?? {}),
            labelClasses: {
                'field-focused': false,
                shrink: false
            },
            inputContainerClasses: {
                'field-focused': false,
                'field-content': true,
                disabled: !this.props.value || 0 === this.props.value?.length,
            },
            optionContainerClasses: {
                'select-field-options': true,
                'active': false,
                [this.xPositionClass]: true,
                [this.yPositionClass]: true
            },
            disabled: !this.props.value || 0 === this.props.value?.length
        }

        this.element = React.createRef();

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onSelectCallback = this.onSelectCallback.bind(this);
        this.stringifyValue = this.stringifyValue.bind(this);
        this.onOptionsBlur = this.onOptionsBlur.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
        window.addEventListener('resize', this.updatePosition);
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

        if (this.state.disabled) {
            return;
        }

        this.setState(state => ({
            optionContainerClasses: {
                'select-field-options': true,
                'active': true,
                [this.xPositionClass]: true,
                [this.yPositionClass]: true
            },
            labelClasses: {
                shrink: true,
                'field-focused': true
            },
            inputContainerClasses: {
                'field-focused': true,
                'field-content': true
            }
        }))

    }


    onBlur(event: any) {
        if(this.props.onBlur) {
            this.props.onBlur(event);
        }
    }


    onOptionsBlur(event: any) {
        if (this.state.optionContainerClasses) {
            this.setState(state => ({
                optionContainerClasses: {
                    'select-field-options': true,
                    'active': false,
                    [this.xPositionClass]: true,
                    [this.yPositionClass]: true
                },
                labelClasses: {
                    shrink: this.state.localValue?.length,
                    'field-focused': this.state.localValue?.length
                },
                inputContainerClasses: {
                    'field-focused': this.state.localValue?.length,
                    'field-content': true
                }
            }))
        }
    }

    stringifyValue() {
            if (!this.state.localValue) {
                return null;
            }

            return this.state.localValue.map(function (item:OptionSelectItemInterface, key:number) {
                return <div className={'bullet'} key={key}>
                    <span>{item.toString()}</span>
                </div>
            })
    }

    componentDidMount() {
       this.updatePosition();
    }

    updatePosition() {
        this.updateXPosition();
        this.updateYPosition();
        this.setState(state => ({
            optionContainerClasses: {
                'select-field-options': state.optionContainerClasses['select-field-options'],
                'active': state.optionContainerClasses['active'],
                [this.xPositionClass]: true,
                [this.yPositionClass]: true
            }
        }))
    }

    updateXPosition() {
        let boundary = this.element.current.getBoundingClientRect()
        let offsetLeft = boundary.left;
        let width = this.element.current.offsetWidth;
        let pageWidth = window.innerWidth;
        if (offsetLeft + width >= pageWidth) {
            this.xPositionClass = this.LEFT_POSITION_CLASS;
        } else if (offsetLeft - width <= 0) {
            this.xPositionClass = this.RIGHT_POSITION_CLASS;
        }
    }

    updateYPosition() {
        let boundary = this.element.current.getBoundingClientRect()
        let offsetTop = boundary.top;
        let height = this.element.current.offsetHeight;
        let pageHeight = window.innerHeight;
        if (offsetTop + height >= pageHeight) {
            this.yPositionClass = this.TOP_POSITION_CLASS;
        } else if (offsetTop - height <= 0) {
            this.yPositionClass = this.BOTTOM_POSITION_CLASS;
        }
    }

    render() {
        return <div className={"select-field"}>
            <ClickAwayListener onClickAway={this.onOptionsBlur}>
                <div>
                    <div className={this.stringifyClassName(this.state.containerClasses)}>
                        <label id={this.props.name} className={this.stringifyClassName(this.state.labelClasses)}>{this.props.label}</label>
                        <div className={this.stringifyClassName(this.state.inputContainerClasses)} onClick={this.onFocus} >
                            <div className={'field-input'}>{this.stringifyValue()}</div>
                        </div>
                    </div>
                    <div ref={this.element} className={this.stringifyClassName(this.state.optionContainerClasses)}>
                        <div className={'overflow-hidden overflow-top-hidden'} />
                        <OptionSelectList value={this.state.localValue} items={this.props.value ?? []} onSelect={this.onSelectCallback}/>
                        <div className={'overflow-hidden overflow-bottom-hidden'} />
                    </div>
                </div>
            </ClickAwayListener>
        </div>;
    }

    onSelectCallback(event: any, item:OptionSelectItemInterface, isAdded: boolean = true) {
        let localValue = this.state.localValue ?? [];

        if (!localValue.includes(item) && isAdded) {
            localValue.push(item)
        } else {
            let index = -1;

            localValue.map(function (localItem:OptionSelectItemInterface, localIndex: number) {
                if (item.compare(localItem)) {
                    index = localIndex;
                }
            });

            localValue.splice(index, 1);
        }

        this.setState(state => ({
            localValue: localValue,
            optionContainerClasses: {
                'select-field-options': true,
                'active': true,
                [this.xPositionClass]: true,
                [this.yPositionClass]: true
            }
        }))
    }
}

class OptionSelectList extends React.Component<OptionSelectListProps, any> {
    constructor(props: any) {
        super(props);
        this.onItemSelectCallback = this.onItemSelectCallback.bind(this);
    }

    onItemSelectCallback(event:any, item: OptionSelectItemInterface, isAdded:boolean) {
        this.props.onSelect(event, item, isAdded)
    }


    render() {
        let that = this;
        let items = this.props.items.map(function(item: string|number|OptionSelectItemInterface, key: number) {
            let localItem:OptionSelectItemInterface;
            if (typeof item === 'string' || typeof item === 'number') {
                localItem = new OptionSelectItemModel(item);
            } else {
                localItem = item;
            }
            let selected = false;
            if(that.props.value) {
                selected = 0 !== that.props.value.filter(function (item:OptionSelectItemInterface) {
                    return item.compare(localItem)
                }).length
            }

            return <OptionSelectItem selected={selected} key={key} item={localItem} onSelect={that.onItemSelectCallback}/>
        })

        return <ul className={'select-option-list'}>
            {items}
        </ul>
    }
}

class OptionSelectItem extends React.Component<OptionSelectProps, OptionSelectState> {
    constructor(props:OptionSelectProps) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.state = {
            selected: this.props.selected
        }
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

    onSelect(event: any) {
        if (this.props.selected) {
            this.setState({
                selected: false
            })
            this.props.onSelect(event, this.props.item, false);
            return;
        }

        this.setState({
            selected: true
        })
        this.props.onSelect(event, this.props.item, true);
    }

    render() {
        let classes = {
            'select-option': true,
            'selected': this.props.selected
        }
        return <li className={this.stringifyClassName(classes)} onClick={this.onSelect} title={this.props.item.toString()}>
            <span>{this.props.item.toString()}</span>
        </li>;
    }
}

class OptionSelectItemModel implements OptionSelectItemInterface {
    readonly value: string|number;
    constructor(value: string|number) {
        this.value = value;
    }

    toString() {
        return String(this.value);
    }

    compare(item:OptionSelectItemInterface): boolean {
        return this.toString() === item.toString();
    }
}