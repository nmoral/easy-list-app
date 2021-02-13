import { Grid } from '@material-ui/core';
import * as React from 'react';
import { PriceStepProps } from '@src/Interfaces/Home';
import { default as SubscriptionModel } from '@src/Model/Subscription/Subscription';
import Subscription from '@src/components/subscription/Subscription';

export function PriceStep(props: PriceStepProps) {
    const subscriptions: React.ReactElement[] = [];

    props.subscriptions.map(function(
        subscription: SubscriptionModel,
        key: number
    ) {
        subscriptions.push(
            <Grid
                key={key}
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={2}
                className="priceCardContainer"
            >
                <Subscription subscription={subscription} />
            </Grid>
        );
    });

    return (
        <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            className="priceStep"
            xs={12}
        >
            <Grid item xs={12}>
                <div className="pricingTitle">{props.title}</div>
            </Grid>
            {subscriptions}
        </Grid>
    );
}
