import { Comments } from "../models/Comments";
import { Credit_memos } from "../models/Credit_memos";
import { Customer_group } from "../models/Customer_group";
import { Customer_payment } from "../models/Customer_payment";
import { Emails } from "../models/Emails";
import { Newsletter_subscribers } from "../models/Newsletter_subscribers";
import { Orders } from "../models/Orders";
import { Quotes } from "../models/Quotes";
import { Returns } from "../models/Returns";
import { CustomersCount } from "../resolvers/outputs/CustomersCount";
export declare class Customers {
    id: number;
    thumbnail?: string | null;
    name_prefix?: string | null;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    email: string;
    customer_group?: string | null;
    phone?: string | null;
    zipcode?: string | null;
    name_suffix?: string | null;
    websites?: string | null;
    product?: string | null;
    country?: string | null;
    state?: string | null;
    customer_since?: Date | null;
    confirmed_email?: string | null;
    date_of_birth?: string | null;
    tax_vat_number?: string | null;
    gender?: string | null;
    description?: string | null;
    short_description?: string | null;
    image?: string | null;
    Address?: string | null;
    address_two?: string | null;
    payment_type?: string | null;
    username?: string | null;
    password?: string | null;
    comments?: Comments[];
    credit_memos?: Credit_memos[];
    customer_group_customer_groupTocustomers?: Customer_group[];
    customer_payment?: Customer_payment | null;
    emails?: Emails[];
    newsletter_subscribers?: Newsletter_subscribers[];
    orders?: Orders[];
    quotes?: Quotes[];
    returns?: Returns[];
    _count?: CustomersCount | null;
}
