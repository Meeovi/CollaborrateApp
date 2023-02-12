import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ManufacturerWhereInput } from "../inputs/ManufacturerWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ManufacturerWhereUniqueInput {
    id?: bigint | undefined;
    AND?: ManufacturerWhereInput[] | undefined;
    OR?: ManufacturerWhereInput[] | undefined;
    NOT?: ManufacturerWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    isPublic?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    product?: BigIntNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
}
