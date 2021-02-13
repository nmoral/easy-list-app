import { CarouselItemProps } from '@src/Interfaces/Common';
import * as React from 'react';
import { Paper } from '@material-ui/core';

export default function CarouselItem(props: CarouselItemProps) {
    return (
        <div className="carousel-item-container">
            <Paper elevation={3} className="carousel-item">
                <img src={props.item.img.path} alt={props.item.name} />
                <div className="carousel-item-title">{props.item.name}</div>
            </Paper>
        </div>
    );
}
