import { Coupons } from "../models/Coupons";
import { Credit_memos } from "../models/Credit_memos";
import { Orders } from "../models/Orders";
import { Product_attribute } from "../models/Product_attribute";
import { Quotes } from "../models/Quotes";
import { Rating } from "../models/Rating";
import { Returns } from "../models/Returns";
import { Tax_rate } from "../models/Tax_rate";
import { Tax_rule } from "../models/Tax_rule";
import { ProductsCount } from "../resolvers/outputs/ProductsCount";
export declare class Products {
    id: bigint;
    sku: bigint;
    thumbnail?: string | null;
    name: string;
    type?: string | null;
    attribute_set?: string | null;
    price?: string | null;
    quantity_per_source?: string | null;
    salable_quantity?: string | null;
    visibility?: string | null;
    status?: boolean | null;
    websites?: string | null;
    product?: string | null;
    tax_class?: string | null;
    stock_status?: string | null;
    weight?: string | null;
    categories?: string | null;
    created_at?: Date | null;
    country?: string | null;
    size?: string | null;
    format?: string | null;
    height?: string | null;
    content?: string | null;
    short_description?: string | null;
    image?: string | null;
    meta_title?: string | null;
    meta_keywords?: string | null;
    meta_description?: string | null;
    meta_url?: string | null;
    file?: string | null;
    manufacture?: string | null;
    coupons?: Coupons[];
    credit_memos?: Credit_memos[];
    orders?: Orders[];
    product_attribute?: Product_attribute[];
    quotes?: Quotes[];
    rating?: Rating[];
    returns?: Returns[];
    tax_rate?: Tax_rate[];
    tax_rule?: Tax_rule[];
    _count?: ProductsCount | null;
}
