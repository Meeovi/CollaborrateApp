import { ChannelsWhereInput } from "../inputs/ChannelsWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ChannelsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: ChannelsWhereInput[] | undefined;
    OR?: ChannelsWhereInput[] | undefined;
    NOT?: ChannelsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    currency?: StringNullableFilter | undefined;
    default_lang?: StringNullableFilter | undefined;
    include_tax?: StringNullableFilter | undefined;
    default_zone?: StringNullableFilter | undefined;
    default_shipping?: StringNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    client_secret?: StringNullableFilter | undefined;
}
