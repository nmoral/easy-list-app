import * as React from 'react';
import { Button, Grid, MuiThemeProvider } from '@material-ui/core';
import themes from 'components/themes';
import {
    Link
} from "react-router-dom";

export default class AppHeader extends React.Component<any, any> {
    render() {
        return (
            <Grid item xs={12}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        className="brand"
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={2}>
                            <Link to="">
                                <img src="/images/easy-app.png" alt="Easy-app" />
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to="">
                                <h1>Easy-list</h1>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={2} />
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <Grid item xs={2}>
                            <Button variant="contained">About</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained">pricing</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained">download</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="secondary">
                                Sign in
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
