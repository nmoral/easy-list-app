import DomIdGenerator from '@src/services/DomIdGenerator';
import * as React from 'react';
import { Grid } from '@material-ui/core';
import {
    CarouselItem as CarouselItemInterface,
    CarouselProps,
} from '@src/Interfaces/Common';
import CarouselItem from '@src/components/common/CarouselItem';

function carousel(props: CarouselProps) {
    let intervalId: any = 0;
    let carouselId = DomIdGenerator();
    let position = 0;
    let speed = 1000;
    let width: number = 0;
    let element: HTMLElement | null = null;
    let nbImg = props.items.length;
    let limit = props.items.length - 1;
    let launchCarousel: boolean = true;
    function intervalFunc() {
        element = document.getElementById(carouselId);
        if (
            null === element ||
            (0 !== width && element.offsetWidth > width * nbImg)
        ) {
            return;
        }

        if (0 === width) {
            let items: HTMLCollection = element.getElementsByClassName(
                'carousel-item-container'
            );
            if (0 === items.length) {
                return;
            }
            width = items.item(0)?.clientWidth || 0;
        }

        element.style.transform = 'translateX(-' + position * width + 'px)';
        position += 1;
        if (position > limit) {
            position = 0;
        }
    }

    function init(speed: number) {
        if (!element) {
            return;
        }

        launchCarousel = element?.offsetWidth < width * nbImg;
        if (launchCarousel) {
            intervalId = setInterval(intervalFunc, speed);
        }
    }

    function onMouseOver() {
        clearInterval(intervalId);
    }

    function onMouseLeave() {
        intervalId = setInterval(intervalFunc, speed);
    }

    setTimeout(function() {
        init(speed);
    }, 1000);

    let imgItem = props.items.map(function(
        item: CarouselItemInterface,
        key: number
    ) {
        return <CarouselItem item={item} key={carouselId + '-' + key} />;
    });

    return (
        <Grid
            item
            className="carousel-container"
            xs={8}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
        >
            <div id={carouselId} className="carousel">
                {imgItem}
            </div>
        </Grid>
    );
}

export default carousel;
