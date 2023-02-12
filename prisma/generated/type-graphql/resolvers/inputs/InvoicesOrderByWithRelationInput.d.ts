import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class InvoicesOrderByWithRelationInput {
    invoice?: "asc" | "desc" | undefined;
    order_number?: "asc" | "desc" | undefined;
    invoice_date?: SortOrderInput | undefined;
    bill_to_name?: "asc" | "desc" | undefined;
    billing_address?: SortOrderInput | undefined;
    grand_total_base?: SortOrderInput | undefined;
    grand_total_purchased?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    shipping_address?: SortOrderInput | undefined;
    customer_name?: SortOrderInput | undefined;
    email?: SortOrderInput | undefined;
    customer_group?: SortOrderInput | undefined;
    payment_method?: SortOrderInput | undefined;
    shipping_information?: SortOrderInput | undefined;
    subtotal?: SortOrderInput | undefined;
    shipping_and_handling?: SortOrderInput | undefined;
    id?: "asc" | "desc" | undefined;
}
