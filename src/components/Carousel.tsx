import DomIdGenerator from "../services/DomIdGenerator";
import * as React from "react";
import {Grid} from "@material-ui/core";

function carousel (props: any) {
    let intervalId: any = 0;
    let carouselId = DomIdGenerator();
    let position = 0;
    let speed = 1000;
    let width = 120;
    let element:HTMLElement|null = null;
    let nbImg = props.img.length;
    let limit = props.img.length - 1;
    let launchCarousel: boolean = true;
    function intervalFunc () {
        element = document.getElementById(carouselId);
        console.log(element?.offsetWidth, width * nbImg);
        if (null === element || element.offsetWidth > width * nbImg) {
            return;
        }
        element.style.transform = 'translateX(-'+(position * width)+'px)';
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
            intervalId = setInterval(intervalFunc, speed)
        }
    }

    function onMouseOver() {
        clearInterval(intervalId);
    }

    function onMouseLeave() {
        intervalId = setInterval(intervalFunc, speed)
    }

    setTimeout(function (){
        init(speed);
    }, 1000);

    let imgItem = props.img.map((img: any, key:number) =>
        <div key={key} className="carousel-item">
            <img src={img.src} alt={img.alt}/>
        </div>
    )

    return <Grid item className="carousel-container" xs={8} onMouseLeave={onMouseLeave} onMouseOver={onMouseOver}>
        <div id={carouselId} className="carousel">
            {imgItem}
        </div>
    </Grid>;
}

export default carousel;