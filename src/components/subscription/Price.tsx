import * as React from 'react';
import { SubscriptionProps } from '@src/Interfaces/Props';

export function Price(props: SubscriptionProps) {
    return (
        <div className="price">
            <span className="amount bolder">
                {props.subscription.price.toString()}
            </span>
            <span className="period mlm">{props.subscription.period}</span>
        </div>
    );
}
