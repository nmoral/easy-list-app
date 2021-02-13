import * as React from 'react';
import { SubscriptionOptionsProps } from '@src/Interfaces/Props';
import Option from './Option';
import { Option as OptionModel } from '@src/Model/Subscription/Option';

export default function Options(props: SubscriptionOptionsProps) {
    let options = props.options.map((option: OptionModel, key: number) => (
        <Option key={key} option={option} />
    ));

    return <div className="options">{options}</div>;
}
