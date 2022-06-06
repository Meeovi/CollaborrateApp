import { Credit_memosCreateNestedManyWithoutCustomersInput } from "../inputs/Credit_memosCreateNestedManyWithoutCustomersInput";
import { Customer_groupCreateNestedManyWithoutCustomersInput } from "../inputs/Customer_groupCreateNestedManyWithoutCustomersInput";
import { Customer_paymentCreateNestedOneWithoutCustomersInput } from "../inputs/Customer_paymentCreateNestedOneWithoutCustomersInput";
import { EmailsCreateNestedManyWithoutCustomersInput } from "../inputs/EmailsCreateNestedManyWithoutCustomersInput";
import { Newsletter_subscribersCreateNestedManyWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateNestedManyWithoutCustomersInput";
import { OrdersCreateNestedManyWithoutCustomersInput } from "../inputs/OrdersCreateNestedManyWithoutCustomersInput";
import { QuotesCreateNestedManyWithoutCustomers_customersToquotesInput } from "../inputs/QuotesCreateNestedManyWithoutCustomers_customersToquotesInput";
import { ReturnsCreateNestedManyWithoutCustomersInput } from "../inputs/ReturnsCreateNestedManyWithoutCustomersInput";
export declare class CustomersCreateWithoutCommentsInput {
    thumbnail?: string | undefined;
    name_prefix?: string | undefined;
    first_name: string;
    middle_name?: string | undefined;
    last_name: string;
    email: string;
    customer_group?: string | undefined;
    phone?: string | undefined;
    zipcode?: string | undefined;
    name_suffix?: string | undefined;
    websites?: string | undefined;
    product?: string | undefined;
    country?: string | undefined;
    state?: string | undefined;
    customer_since?: Date | undefined;
    confirmed_email?: string | undefined;
    date_of_birth?: string | undefined;
    tax_vat_number?: string | undefined;
    gender?: string | undefined;
    description?: string | undefined;
    short_description?: string | undefined;
    image?: string | undefined;
    Address?: string | undefined;
    address_two?: string | undefined;
    payment_type?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
    credit_memos?: Credit_memosCreateNestedManyWithoutCustomersInput | undefined;
    customer_group_customer_groupTocustomers?: Customer_groupCreateNestedManyWithoutCustomersInput | undefined;
    customer_payment?: Customer_paymentCreateNestedOneWithoutCustomersInput | undefined;
    emails?: EmailsCreateNestedManyWithoutCustomersInput | undefined;
    newsletter_subscribers?: Newsletter_subscribersCreateNestedManyWithoutCustomersInput | undefined;
    orders?: OrdersCreateNestedManyWithoutCustomersInput | undefined;
    quotes?: QuotesCreateNestedManyWithoutCustomers_customersToquotesInput | undefined;
    returns?: ReturnsCreateNestedManyWithoutCustomersInput | undefined;
}
