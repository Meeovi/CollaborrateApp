import { QuotesAvgAggregate } from "../outputs/QuotesAvgAggregate";
import { QuotesCountAggregate } from "../outputs/QuotesCountAggregate";
import { QuotesMaxAggregate } from "../outputs/QuotesMaxAggregate";
import { QuotesMinAggregate } from "../outputs/QuotesMinAggregate";
import { QuotesSumAggregate } from "../outputs/QuotesSumAggregate";
export declare class QuotesGroupBy {
    id: number;
    name: string;
    grand_total: string | null;
    created_at: Date | null;
    categories: string | null;
    valid_until: string | null;
    quote_stage: string | null;
    customers: string | null;
    cust_id: number;
    prod_id: bigint;
    order_id: number;
    invoice_status: string | null;
    payment_terms: string | null;
    assigned_to: string | null;
    approval_status: string | null;
    approval_issues: string | null;
    account: string | null;
    contact: string | null;
    billing_street: string | null;
    billing_city: string | null;
    billing_state: string | null;
    billing_postal: string | null;
    billing_country: string | null;
    shipping_street: string | null;
    shipping_city: string | null;
    shipping_state: string | null;
    shipping_postal: string | null;
    shipping_country: string | null;
    currency: string | null;
    total: string | null;
    subtotal: string | null;
    discount: string | null;
    shipping: string | null;
    shipping_tax: string | null;
    tax: string | null;
    line_item_name: string | null;
    line_item_total: string | null;
    line_item_subtotal: string | null;
    line_item_discount: string | null;
    line_item_tax: string | null;
    line_item_group_total: string | null;
    _count: QuotesCountAggregate | null;
    _avg: QuotesAvgAggregate | null;
    _sum: QuotesSumAggregate | null;
    _min: QuotesMinAggregate | null;
    _max: QuotesMaxAggregate | null;
}
