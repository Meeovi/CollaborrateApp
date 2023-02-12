import { DashboardslistWhereInput } from "../inputs/DashboardslistWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DashboardslistWhereUniqueInput {
    id?: bigint | undefined;
    name?: string | undefined;
    AND?: DashboardslistWhereInput[] | undefined;
    OR?: DashboardslistWhereInput[] | undefined;
    NOT?: DashboardslistWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    client_secret?: StringNullableFilter | undefined;
    privacy?: StringNullableFilter | undefined;
    category?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    reports?: StringNullableFilter | undefined;
    tasks?: StringNullableFilter | undefined;
    projects?: StringNullableFilter | undefined;
    tickets?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    checklists?: StringNullableFilter | undefined;
    visits?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    sales?: StringNullableFilter | undefined;
    logo?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    published?: StringNullableFilter | undefined;
}
