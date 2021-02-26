import {Grid, MuiThemeProvider} from "@material-ui/core";
import themes from "@src/components/themes";
import * as React from "react";

export function Layout(props: any) {

    let elements = props.children;

    return <MuiThemeProvider theme={themes}>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            className="content"
        >
            {elements}
        </Grid>
    </MuiThemeProvider>
}