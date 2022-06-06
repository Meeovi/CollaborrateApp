import { CustomersAvgAggregate } from "../outputs/CustomersAvgAggregate";
import { CustomersCountAggregate } from "../outputs/CustomersCountAggregate";
import { CustomersMaxAggregate } from "../outputs/CustomersMaxAggregate";
import { CustomersMinAggregate } from "../outputs/CustomersMinAggregate";
import { CustomersSumAggregate } from "../outputs/CustomersSumAggregate";
export declare class CustomersGroupBy {
    id: number;
    thumbnail: string | null;
    name_prefix: string | null;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    email: string;
    customer_group: string | null;
    phone: string | null;
    zipcode: string | null;
    name_suffix: string | null;
    websites: string | null;
    product: string | null;
    country: string | null;
    state: string | null;
    customer_since: Date | null;
    confirmed_email: string | null;
    date_of_birth: string | null;
    tax_vat_number: string | null;
    gender: string | null;
    description: string | null;
    short_description: string | null;
    image: string | null;
    Address: string | null;
    address_two: string | null;
    payment_type: string | null;
    username: string | null;
    password: string | null;
    _count: CustomersCountAggregate | null;
    _avg: CustomersAvgAggregate | null;
    _sum: CustomersSumAggregate | null;
    _min: CustomersMinAggregate | null;
    _max: CustomersMaxAggregate | null;
}
