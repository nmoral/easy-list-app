import { Box, Grid, Link, Typography } from '@material-ui/core';
import Carousel from '@src/components/common/Carousel';
import * as React from 'react';
import { ServiceStepProps } from '@src/Interfaces/Home';

export default function ServiceStep(props: ServiceStepProps) {
    return (
        <Grid
            container
            item
            direction="row"
            justify="center"
            className="thirdStep"
            xs={12}
        >
            <Grid item xs={12}>
                <Box component="div" textAlign="center">
                    <Typography variant="h5">{props.title}</Typography>
                    <Link
                        href={props.path}
                        color="inherit"
                        className="primaryLight"
                    >
                        <Typography variant="h6" component="p">
                            {props.description}
                        </Typography>
                    </Link>
                </Box>
            </Grid>
            <Carousel items={props.services} />
        </Grid>
    );
}
