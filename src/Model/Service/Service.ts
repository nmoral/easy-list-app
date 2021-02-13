import { Image } from '@src/Model/Common/Image';
import { CarouselItem } from '@src/Interfaces/Common';

export class Service implements CarouselItem {
    public readonly name: string;
    public readonly img: Image;

    constructor(name: string, img: Image) {
        this.name = name;
        this.img = img;
    }
}
