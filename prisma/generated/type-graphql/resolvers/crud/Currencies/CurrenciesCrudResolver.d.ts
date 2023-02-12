import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrenciesArgs } from "./args/AggregateCurrenciesArgs";
import { CreateOneCurrenciesArgs } from "./args/CreateOneCurrenciesArgs";
import { DeleteManyCurrenciesArgs } from "./args/DeleteManyCurrenciesArgs";
import { DeleteOneCurrenciesArgs } from "./args/DeleteOneCurrenciesArgs";
import { FindFirstCurrenciesArgs } from "./args/FindFirstCurrenciesArgs";
import { FindFirstCurrenciesOrThrowArgs } from "./args/FindFirstCurrenciesOrThrowArgs";
import { FindManyCurrenciesArgs } from "./args/FindManyCurrenciesArgs";
import { FindUniqueCurrenciesArgs } from "./args/FindUniqueCurrenciesArgs";
import { FindUniqueCurrenciesOrThrowArgs } from "./args/FindUniqueCurrenciesOrThrowArgs";
import { GroupByCurrenciesArgs } from "./args/GroupByCurrenciesArgs";
import { UpdateManyCurrenciesArgs } from "./args/UpdateManyCurrenciesArgs";
import { UpdateOneCurrenciesArgs } from "./args/UpdateOneCurrenciesArgs";
import { UpsertOneCurrenciesArgs } from "./args/UpsertOneCurrenciesArgs";
import { Currencies } from "../../../models/Currencies";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCurrencies } from "../../outputs/AggregateCurrencies";
import { CurrenciesGroupBy } from "../../outputs/CurrenciesGroupBy";
export declare class CurrenciesCrudResolver {
    aggregateCurrencies(ctx: any, info: GraphQLResolveInfo, args: AggregateCurrenciesArgs): Promise<AggregateCurrencies>;
    createOneCurrencies(ctx: any, info: GraphQLResolveInfo, args: CreateOneCurrenciesArgs): Promise<Currencies>;
    deleteManyCurrencies(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCurrenciesArgs): Promise<AffectedRowsOutput>;
    deleteOneCurrencies(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCurrenciesArgs): Promise<Currencies | null>;
    findFirstCurrencies(ctx: any, info: GraphQLResolveInfo, args: FindFirstCurrenciesArgs): Promise<Currencies | null>;
    findFirstCurrenciesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCurrenciesOrThrowArgs): Promise<Currencies | null>;
    findManyCurrencies(ctx: any, info: GraphQLResolveInfo, args: FindManyCurrenciesArgs): Promise<Currencies[]>;
    findUniqueCurrencies(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCurrenciesArgs): Promise<Currencies | null>;
    findUniqueCurrenciesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCurrenciesOrThrowArgs): Promise<Currencies | null>;
    groupByCurrencies(ctx: any, info: GraphQLResolveInfo, args: GroupByCurrenciesArgs): Promise<CurrenciesGroupBy[]>;
    updateManyCurrencies(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCurrenciesArgs): Promise<AffectedRowsOutput>;
    updateOneCurrencies(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCurrenciesArgs): Promise<Currencies | null>;
    upsertOneCurrencies(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCurrenciesArgs): Promise<Currencies>;
}
