import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VendorsScalarWhereWithAggregatesInput {
    AND?: VendorsScalarWhereWithAggregatesInput[] | undefined;
    OR?: VendorsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VendorsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    website?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    articles?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    comments?: StringNullableWithAggregatesFilter | undefined;
    coupons?: StringNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    polls?: StringNullableWithAggregatesFilter | undefined;
    quotes?: StringNullableWithAggregatesFilter | undefined;
    reviews?: StringNullableWithAggregatesFilter | undefined;
    gift_certificates?: StringNullableWithAggregatesFilter | undefined;
    rating?: StringNullableWithAggregatesFilter | undefined;
    tags?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
    invoices?: StringNullableWithAggregatesFilter | undefined;
    reports?: StringNullableWithAggregatesFilter | undefined;
    reward_points?: StringNullableWithAggregatesFilter | undefined;
    special_discounts?: StringNullableWithAggregatesFilter | undefined;
    statistics?: StringNullableWithAggregatesFilter | undefined;
    stocks?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    physical_store?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    workspaces?: StringNullableWithAggregatesFilter | undefined;
}
