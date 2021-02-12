import * as React from "react";
import {Grid, Typography, Box, Button, Paper, MuiThemeProvider, Container, Link} from "@material-ui/core";
import Timeline from '@material-ui/lab/Timeline';
import AppHeader from "../../components/AppHeader";
import {
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@material-ui/lab";
import {AddCircle, AddCircleOutline, Fastfood, Laptop, NewReleases, NewReleasesOutlined} from "@material-ui/icons";
import themes from "../../components/themes";
import Carousel from "../../components/Carousel";

function Anonymous() {
    let img = [
        {
            src: '/images/google.png',
            alt: 'google'
        },
        {
            src: '/images/github.png',
            alt: 'github'
        },
        {
            src: '/images/google.png',
            alt: 'google'
        },
        {
            src: '/images/github.png',
            alt: 'github'
        },
        {
            src: '/images/google.png',
            alt: 'google'
        },
        {
            src: '/images/github.png',
            alt: 'github'
        },
        {
            src: '/images/google.png',
            alt: 'google'
        },
        {
            src: '/images/github.png',
            alt: 'github'
        },
        {
            src: '/images/google.png',
            alt: 'google'
        },
        {
            src: '/images/github.png',
            alt: 'github'
        },
        {
            src: '/images/google.png',
            alt: 'google'
        },
        {
            src: '/images/github.png',
            alt: 'github'
        },
        {
            src: '/images/google.png',
            alt: 'google'
        }
    ];

    return <MuiThemeProvider theme={themes}>
        <Container maxWidth={false}>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="stretch"
                className="content"
                spacing={2}
            >
                <Grid item xs={12}>
                    <AppHeader />
                </Grid>
                <Grid container item direction="row" justify="center" alignItems="flex-start" spacing={10} className="firstStep" xs={12}>
                    <Grid item xs={4}>
                        <Typography variant="h2" component="h2" className="primary">Easy-list</Typography>
                        <Box component="div" textAlign="justify">
                            Créer, centraliser, partager vos listes avec vos proches et dans vos applications
                        </Box>
                    </Grid>
                    <Grid item className="signUp" xs={3}>
                        <Grid container direction="row" justify="center" alignItems="stretch" spacing={5}>
                            <Grid item xs={12}>
                                <Box textAlign="center">
                                    <Typography variant="h5" component="span">Sign Up</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box textAlign="center">
                                    <Button variant="contained">Sign up with email</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item direction="row" justify="center" className="secondStep" xs={12}>
                    <Grid item xs={6}>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary" className="inversed-color">
                                        1
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        <NewReleasesOutlined />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="timeline">
                                        <Typography variant="h6" component="h1">
                                            Créer
                                        </Typography>
                                        <Typography>Créer votre liste</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary" className="inversed-color">
                                        2
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        <AddCircleOutline />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="timeline">
                                        <Typography variant="h6" component="h1">
                                            Ajouter
                                        </Typography>
                                        <Typography>Compléter la liste depuis l'application ou l'extension chrome</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        3
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        <AddCircleOutline />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="timeline">
                                        <Typography variant="h6" component="h1">
                                            Partager
                                        </Typography>
                                        <Typography>Partager avec les autres utilisateurs</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        4
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        <AddCircleOutline />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className="timeline">
                                        <Typography variant="h6" component="h1">
                                            Diffuser
                                        </Typography>
                                        <Typography>Envoyer votre liste dans vos applications préférées</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
                <Grid container item direction="row" justify="center" className="thirdStep" xs={12}>
                    <Grid item xs={12}>
                        <Box component="div" textAlign="center">
                            <Typography variant="h5">Partager vos liste dans vos applications. </Typography><Link href="#" color="inherit" className="primaryLight"><Typography variant="h6" component="p">En savoir plus</Typography></Link>
                        </Box>
                    </Grid>
                    <Carousel img={img} />
                </Grid>
                <Grid container item direction="row" justify="center" className="priceStep" xs={12}>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </MuiThemeProvider>;
}

export default Anonymous;