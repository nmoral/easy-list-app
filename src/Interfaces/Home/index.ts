import Subscription from '@src/Model/Subscription/Subscription';
import { Service } from '@src/Model/Service/Service';

export class PriceStepProps {
    public readonly subscriptions: Subscription[];
    public readonly title: string;

    constructor(subscriptions: Subscription[], title: string) {
        this.subscriptions = subscriptions;
        this.title = title;
    }
}

export class ServiceStepProps {
    public readonly services: Service[] = [];
    public readonly title: string;
    public readonly description: string;
    public readonly path: string;

    constructor(
        services: Service[],
        title: string,
        description: string,
        path: string
    ) {
        this.services = services;
        this.title = title;
        this.description = description;
        this.path = path;
    }
}

export class TimelineStepProps {
    public readonly items: TimelineItemProps[] = [];
}

export class TimelineItemProps {
    public readonly place: string | number;
    public readonly title: string;
    public readonly description: string;
    public readonly icon: string;

    constructor(
        place: string | number,
        title: string,
        description: string,
        icon: string
    ) {
        this.place = place;
        this.title = title;
        this.description = description;
        this.icon = icon;
    }
}
