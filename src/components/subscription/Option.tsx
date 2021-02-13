import * as React from 'react';
import { SubscriptionOptionProps } from '@src/Interfaces/Props';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

export default function Options(props: SubscriptionOptionProps) {
    let icon = <DoneIcon className="icon" />;
    if (!props.option.active) {
        icon = <CloseIcon className="icon" />;
    }

    return (
        <div
            className={
                'option ' + (props.option.active ? 'active' : 'inactive')
            }
        >
            {icon} <span className="mls">{props.option.name}</span>
        </div>
    );
}
