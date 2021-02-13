import * as React from 'react';
import {
    Grid,
    Typography,
    Box,
    Button,
    MuiThemeProvider,
} from '@material-ui/core';
import AppHeader from '@src/components/home/AppHeader';
import themes from '@src/components/themes';
import { default as SubscriptionModel } from '@src/Model/Subscription/Subscription';
import { Currency } from '@src/Model/Common/Currency';
import { Price } from '@src/Model/Common/Price';
import { Option } from '@src/Model/Subscription/Option';
import { PriceStep } from '@src/components/home/PriceStep';
import ServiceStep from '@src/components/home/ServiceStep';
import { Service } from '@src/Model/Service/Service';
import { Image } from '@src/Model/Common/Image';
import { TimelineItemProps } from '@src/Interfaces/Home';
import TimelineStep from '@src/components/home/TimelineStep';

function Anonymous() {
    let services = [
        new Service('google', new Image('google', '/images/google.png')),
        new Service('github', new Image('github', '/images/github.png')),
        new Service('google', new Image('google', '/images/google.png')),
        new Service('github', new Image('github', '/images/github.png')),
        new Service('google', new Image('google', '/images/google.png')),
        new Service('github', new Image('github', '/images/github.png')),
        new Service('google', new Image('google', '/images/google.png')),
        new Service('github', new Image('github', '/images/github.png')),
    ];

    let subscriptions: SubscriptionModel[] = [];

    for (let i = 0; i < 3; i++) {
        let currency = new Currency('Euro', '€');
        let price = new Price(currency, 100 * i);
        let option = new Option('nombre illimité de note', true);
        let option2 = new Option('nombre illimité de note', false);
        subscriptions.push(
            new SubscriptionModel(
                'Free',
                price,
                '/month',
                [option, option2],
                'ribbon'
            )
        );
    }

    let timeLineItems = [
        new TimelineItemProps(1, 'Créer', 'Créer votre liste', 'new_releases'),
        new TimelineItemProps(
            2,
            'Ajouter',
            "Compléter la liste depuis l'application ou l'extension chrome",
            'add_circle_outline_outlined'
        ),
        new TimelineItemProps(
            3,
            'Partager',
            'Partager avec les autres utilisateurs',
            'share'
        ),
        new TimelineItemProps(
            4,
            'Diffuser',
            'Envoyer votre liste dans vos applications préférées',
            'import_export'
        ),
    ];

    return (
        <MuiThemeProvider theme={themes}>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="stretch"
                className="content"
            >
                <AppHeader />
                <Grid
                    container
                    item
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={10}
                    className="firstStep"
                    xs={12}
                >
                    <Grid item xs={4}>
                        <Typography
                            variant="h2"
                            component="h2"
                            className="primary"
                        >
                            Easy-list
                        </Typography>
                        <Box component="div" textAlign="justify">
                            Créer, centraliser, partager vos listes avec vos
                            proches et dans vos applications
                        </Box>
                    </Grid>
                    <Grid item className="signUp" xs={3}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="stretch"
                            spacing={5}
                        >
                            <Grid item xs={12}>
                                <Box textAlign="center">
                                    <Typography variant="h5" component="span">
                                        Sign Up
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box textAlign="center">
                                    <Button variant="contained">
                                        Sign up with email
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <TimelineStep items={timeLineItems} />
                <ServiceStep
                    services={services}
                    title="Des services super"
                    description="retrouvé nos services trop bien, centraliser vos tache et partager les partout"
                    path="#"
                />
                <PriceStep subscriptions={subscriptions} title={'test'} />
            </Grid>
        </MuiThemeProvider>
    );
}

export default Anonymous;
