import { GraphQLResolveInfo } from "graphql";
import { AggregateCitiesArgs } from "./args/AggregateCitiesArgs";
import { CreateCitiesArgs } from "./args/CreateCitiesArgs";
import { CreateManyCitiesArgs } from "./args/CreateManyCitiesArgs";
import { DeleteCitiesArgs } from "./args/DeleteCitiesArgs";
import { DeleteManyCitiesArgs } from "./args/DeleteManyCitiesArgs";
import { FindFirstCitiesArgs } from "./args/FindFirstCitiesArgs";
import { FindManyCitiesArgs } from "./args/FindManyCitiesArgs";
import { FindUniqueCitiesArgs } from "./args/FindUniqueCitiesArgs";
import { GroupByCitiesArgs } from "./args/GroupByCitiesArgs";
import { UpdateCitiesArgs } from "./args/UpdateCitiesArgs";
import { UpdateManyCitiesArgs } from "./args/UpdateManyCitiesArgs";
import { UpsertCitiesArgs } from "./args/UpsertCitiesArgs";
import { Cities } from "../../../models/Cities";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCities } from "../../outputs/AggregateCities";
import { CitiesGroupBy } from "../../outputs/CitiesGroupBy";
export declare class CitiesCrudResolver {
    findUniqueCities(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCitiesArgs): Promise<Cities | null>;
    findFirstCities(ctx: any, info: GraphQLResolveInfo, args: FindFirstCitiesArgs): Promise<Cities | null>;
    findManyCities(ctx: any, info: GraphQLResolveInfo, args: FindManyCitiesArgs): Promise<Cities[]>;
    createCities(ctx: any, info: GraphQLResolveInfo, args: CreateCitiesArgs): Promise<Cities>;
    createManyCities(ctx: any, info: GraphQLResolveInfo, args: CreateManyCitiesArgs): Promise<AffectedRowsOutput>;
    deleteCities(ctx: any, info: GraphQLResolveInfo, args: DeleteCitiesArgs): Promise<Cities | null>;
    updateCities(ctx: any, info: GraphQLResolveInfo, args: UpdateCitiesArgs): Promise<Cities | null>;
    deleteManyCities(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCitiesArgs): Promise<AffectedRowsOutput>;
    updateManyCities(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCitiesArgs): Promise<AffectedRowsOutput>;
    upsertCities(ctx: any, info: GraphQLResolveInfo, args: UpsertCitiesArgs): Promise<Cities>;
    aggregateCities(ctx: any, info: GraphQLResolveInfo, args: AggregateCitiesArgs): Promise<AggregateCities>;
    groupByCities(ctx: any, info: GraphQLResolveInfo, args: GroupByCitiesArgs): Promise<CitiesGroupBy[]>;
}
