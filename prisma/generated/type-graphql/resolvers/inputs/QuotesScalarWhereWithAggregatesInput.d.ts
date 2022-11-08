import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class QuotesScalarWhereWithAggregatesInput {
    AND?: QuotesScalarWhereWithAggregatesInput[] | undefined;
    OR?: QuotesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: QuotesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    grand_total?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    valid_until?: StringNullableWithAggregatesFilter | undefined;
    quote_stage?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
    prod_id?: BigIntWithAggregatesFilter | undefined;
    order_id?: IntWithAggregatesFilter | undefined;
    account?: StringNullableWithAggregatesFilter | undefined;
    approval_issues?: StringNullableWithAggregatesFilter | undefined;
    approval_status?: StringNullableWithAggregatesFilter | undefined;
    assigned_to?: StringNullableWithAggregatesFilter | undefined;
    billing_city?: StringNullableWithAggregatesFilter | undefined;
    billing_country?: StringNullableWithAggregatesFilter | undefined;
    billing_postal?: StringNullableWithAggregatesFilter | undefined;
    billing_state?: StringNullableWithAggregatesFilter | undefined;
    billing_street?: StringNullableWithAggregatesFilter | undefined;
    contact?: StringNullableWithAggregatesFilter | undefined;
    currency?: StringNullableWithAggregatesFilter | undefined;
    discount?: StringNullableWithAggregatesFilter | undefined;
    invoice_status?: StringNullableWithAggregatesFilter | undefined;
    line_item_discount?: StringNullableWithAggregatesFilter | undefined;
    line_item_group_total?: StringNullableWithAggregatesFilter | undefined;
    line_item_name?: StringNullableWithAggregatesFilter | undefined;
    line_item_subtotal?: StringNullableWithAggregatesFilter | undefined;
    line_item_tax?: StringNullableWithAggregatesFilter | undefined;
    line_item_total?: StringNullableWithAggregatesFilter | undefined;
    payment_terms?: StringNullableWithAggregatesFilter | undefined;
    shipping?: StringNullableWithAggregatesFilter | undefined;
    shipping_city?: StringNullableWithAggregatesFilter | undefined;
    shipping_country?: StringNullableWithAggregatesFilter | undefined;
    shipping_postal?: StringNullableWithAggregatesFilter | undefined;
    shipping_state?: StringNullableWithAggregatesFilter | undefined;
    shipping_street?: StringNullableWithAggregatesFilter | undefined;
    shipping_tax?: StringNullableWithAggregatesFilter | undefined;
    subtotal?: StringNullableWithAggregatesFilter | undefined;
    tax?: StringNullableWithAggregatesFilter | undefined;
    total?: StringNullableWithAggregatesFilter | undefined;
    customers_customersToquotes?: StringNullableWithAggregatesFilter | undefined;
    orders?: StringNullableWithAggregatesFilter | undefined;
    products_productsToquotes?: StringNullableWithAggregatesFilter | undefined;
}
