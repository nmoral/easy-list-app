import { Grid, Paper, Typography } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@material-ui/lab';
import { AddCircleOutline, NewReleasesOutlined } from '@material-ui/icons';
import * as React from 'react';
import { TimelineItemProps, TimelineStepProps } from '@src/Interfaces/Home';
import TimelineElement from '@src/components/home/TimelineElement';

export default function TimelineStep(props: TimelineStepProps) {
    const items = props.items.map(function(
        item: TimelineItemProps,
        key: number
    ) {
        return (
            <TimelineElement
                place={item.place}
                title={item.title}
                description={item.description}
                icon={item.icon}
            />
        );
    });

    return (
        <Grid
            container
            item
            direction="row"
            justify="center"
            className="secondStep"
            xs={12}
        >
            <Grid item xs={6}>
                <Timeline align="alternate">{items}</Timeline>
            </Grid>
        </Grid>
    );
}
