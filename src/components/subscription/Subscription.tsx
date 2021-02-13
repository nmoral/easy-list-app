import * as React from 'react';
import { SubscriptionProps } from '@src/Interfaces/Props';
import { Price } from './Price';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import Options from './Options';

export default function Subscription(props: SubscriptionProps) {
    let ribbon = null;
    if (null !== props.subscription.ribbon) {
        ribbon = <div className="ribbon">{props.subscription.ribbon}</div>;
    }

    return (
        <Card className="subscription">
            <CardContent className="header">
                {ribbon}
                <Typography
                    variant="h6"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    {props.subscription.name}
                </Typography>
                <Price subscription={props.subscription} />
                <div className="separator" />
                <Options options={props.subscription.options} />
                <Button
                    className="subscribe"
                    variant="contained"
                    color="secondary"
                >
                    Subscribe
                </Button>
            </CardContent>
        </Card>
    );
}
