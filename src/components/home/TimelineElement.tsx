import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@material-ui/lab';
import { Icon, Paper, Typography } from '@material-ui/core';
import { NewReleasesOutlined } from '@material-ui/icons';
import * as React from 'react';
import { TimelineItemProps } from '@src/Interfaces/Home';

export default function TimelineElement(props: TimelineItemProps) {
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    className="inversed-color"
                >
                    {props.place}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <Icon>{props.icon}</Icon>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className="timeline">
                    <Typography variant="h6" component="h1">
                        {props.title}
                    </Typography>
                    <Typography>{props.description}</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    );
}
