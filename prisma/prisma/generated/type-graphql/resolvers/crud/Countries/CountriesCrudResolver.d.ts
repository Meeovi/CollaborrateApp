import { GraphQLResolveInfo } from "graphql";
import { AggregateCountriesArgs } from "./args/AggregateCountriesArgs";
import { CreateCountriesArgs } from "./args/CreateCountriesArgs";
import { CreateManyCountriesArgs } from "./args/CreateManyCountriesArgs";
import { DeleteCountriesArgs } from "./args/DeleteCountriesArgs";
import { DeleteManyCountriesArgs } from "./args/DeleteManyCountriesArgs";
import { FindFirstCountriesArgs } from "./args/FindFirstCountriesArgs";
import { FindManyCountriesArgs } from "./args/FindManyCountriesArgs";
import { FindUniqueCountriesArgs } from "./args/FindUniqueCountriesArgs";
import { GroupByCountriesArgs } from "./args/GroupByCountriesArgs";
import { UpdateCountriesArgs } from "./args/UpdateCountriesArgs";
import { UpdateManyCountriesArgs } from "./args/UpdateManyCountriesArgs";
import { UpsertCountriesArgs } from "./args/UpsertCountriesArgs";
import { Countries } from "../../../models/Countries";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCountries } from "../../outputs/AggregateCountries";
import { CountriesGroupBy } from "../../outputs/CountriesGroupBy";
export declare class CountriesCrudResolver {
    findUniqueCountries(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCountriesArgs): Promise<Countries | null>;
    findFirstCountries(ctx: any, info: GraphQLResolveInfo, args: FindFirstCountriesArgs): Promise<Countries | null>;
    findManyCountries(ctx: any, info: GraphQLResolveInfo, args: FindManyCountriesArgs): Promise<Countries[]>;
    createCountries(ctx: any, info: GraphQLResolveInfo, args: CreateCountriesArgs): Promise<Countries>;
    createManyCountries(ctx: any, info: GraphQLResolveInfo, args: CreateManyCountriesArgs): Promise<AffectedRowsOutput>;
    deleteCountries(ctx: any, info: GraphQLResolveInfo, args: DeleteCountriesArgs): Promise<Countries | null>;
    updateCountries(ctx: any, info: GraphQLResolveInfo, args: UpdateCountriesArgs): Promise<Countries | null>;
    deleteManyCountries(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCountriesArgs): Promise<AffectedRowsOutput>;
    updateManyCountries(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCountriesArgs): Promise<AffectedRowsOutput>;
    upsertCountries(ctx: any, info: GraphQLResolveInfo, args: UpsertCountriesArgs): Promise<Countries>;
    aggregateCountries(ctx: any, info: GraphQLResolveInfo, args: AggregateCountriesArgs): Promise<AggregateCountries>;
    groupByCountries(ctx: any, info: GraphQLResolveInfo, args: GroupByCountriesArgs): Promise<CountriesGroupBy[]>;
}
