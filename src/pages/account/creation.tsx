import * as React from 'react';
import AppHeader from "@src/components/home/AppHeader";
import {Layout} from "@src/pages/layout";
import {Card, CardContent, Grid} from "@material-ui/core";


export function Creation() {
    return <Layout>
        <AppHeader />
        <Grid item container xs={12}
              direction="row"
              justify="center"
              alignItems="stretch">
            <Grid item xs={6}>
                <Card className="accountCreation">
                    <CardContent />
                </Card>
            </Grid>
        </Grid>
    </Layout>
}