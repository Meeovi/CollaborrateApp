import { CommentsUpdateManyWithoutCustomersInput } from "../inputs/CommentsUpdateManyWithoutCustomersInput";
import { Credit_memosUpdateManyWithoutCustomersInput } from "../inputs/Credit_memosUpdateManyWithoutCustomersInput";
import { Customer_groupUpdateManyWithoutCustomersInput } from "../inputs/Customer_groupUpdateManyWithoutCustomersInput";
import { EmailsUpdateManyWithoutCustomersInput } from "../inputs/EmailsUpdateManyWithoutCustomersInput";
import { Newsletter_subscribersUpdateManyWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpdateManyWithoutCustomersInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrdersUpdateManyWithoutCustomersInput } from "../inputs/OrdersUpdateManyWithoutCustomersInput";
import { QuotesUpdateManyWithoutCustomers_customersToquotesInput } from "../inputs/QuotesUpdateManyWithoutCustomers_customersToquotesInput";
import { ReturnsUpdateManyWithoutCustomersInput } from "../inputs/ReturnsUpdateManyWithoutCustomersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CustomersUpdateWithoutCustomer_paymentInput {
    thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;
    name_prefix?: NullableStringFieldUpdateOperationsInput | undefined;
    first_name?: StringFieldUpdateOperationsInput | undefined;
    middle_name?: NullableStringFieldUpdateOperationsInput | undefined;
    last_name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    customer_group?: NullableStringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    zipcode?: NullableStringFieldUpdateOperationsInput | undefined;
    name_suffix?: NullableStringFieldUpdateOperationsInput | undefined;
    websites?: NullableStringFieldUpdateOperationsInput | undefined;
    product?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_since?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    confirmed_email?: NullableStringFieldUpdateOperationsInput | undefined;
    date_of_birth?: NullableStringFieldUpdateOperationsInput | undefined;
    tax_vat_number?: NullableStringFieldUpdateOperationsInput | undefined;
    gender?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    short_description?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    Address?: NullableStringFieldUpdateOperationsInput | undefined;
    address_two?: NullableStringFieldUpdateOperationsInput | undefined;
    payment_type?: NullableStringFieldUpdateOperationsInput | undefined;
    username?: NullableStringFieldUpdateOperationsInput | undefined;
    password?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: CommentsUpdateManyWithoutCustomersInput | undefined;
    credit_memos?: Credit_memosUpdateManyWithoutCustomersInput | undefined;
    customer_group_customer_groupTocustomers?: Customer_groupUpdateManyWithoutCustomersInput | undefined;
    emails?: EmailsUpdateManyWithoutCustomersInput | undefined;
    newsletter_subscribers?: Newsletter_subscribersUpdateManyWithoutCustomersInput | undefined;
    orders?: OrdersUpdateManyWithoutCustomersInput | undefined;
    quotes?: QuotesUpdateManyWithoutCustomers_customersToquotesInput | undefined;
    returns?: ReturnsUpdateManyWithoutCustomersInput | undefined;
}
