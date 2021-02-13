import Subscription from '@src/Model/Subscription/Subscription';
import { Option } from '@src/Model/Subscription/Option';

/**
 * Subscription
 */
export interface SubscriptionProps {
    subscription: Subscription;
}

export interface SubscriptionOptionsProps {
    options: Option[];
}

export interface SubscriptionOptionProps {
    option: Option;
}
