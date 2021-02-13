import { Image } from '@src/Model/Common/Image';

export interface CarouselItem {
    readonly name: string;
    readonly img: Image;
}

export interface CarouselProps {
    readonly items: CarouselItem[];
}

export interface CarouselItemProps {
    readonly item: CarouselItem;
}
