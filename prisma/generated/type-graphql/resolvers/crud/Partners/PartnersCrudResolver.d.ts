import { GraphQLResolveInfo } from "graphql";
import { AggregatePartnersArgs } from "./args/AggregatePartnersArgs";
import { CreateOnePartnersArgs } from "./args/CreateOnePartnersArgs";
import { DeleteManyPartnersArgs } from "./args/DeleteManyPartnersArgs";
import { DeleteOnePartnersArgs } from "./args/DeleteOnePartnersArgs";
import { FindFirstPartnersArgs } from "./args/FindFirstPartnersArgs";
import { FindFirstPartnersOrThrowArgs } from "./args/FindFirstPartnersOrThrowArgs";
import { FindManyPartnersArgs } from "./args/FindManyPartnersArgs";
import { FindUniquePartnersArgs } from "./args/FindUniquePartnersArgs";
import { FindUniquePartnersOrThrowArgs } from "./args/FindUniquePartnersOrThrowArgs";
import { GroupByPartnersArgs } from "./args/GroupByPartnersArgs";
import { UpdateManyPartnersArgs } from "./args/UpdateManyPartnersArgs";
import { UpdateOnePartnersArgs } from "./args/UpdateOnePartnersArgs";
import { UpsertOnePartnersArgs } from "./args/UpsertOnePartnersArgs";
import { Partners } from "../../../models/Partners";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePartners } from "../../outputs/AggregatePartners";
import { PartnersGroupBy } from "../../outputs/PartnersGroupBy";
export declare class PartnersCrudResolver {
    aggregatePartners(ctx: any, info: GraphQLResolveInfo, args: AggregatePartnersArgs): Promise<AggregatePartners>;
    createOnePartners(ctx: any, info: GraphQLResolveInfo, args: CreateOnePartnersArgs): Promise<Partners>;
    deleteManyPartners(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPartnersArgs): Promise<AffectedRowsOutput>;
    deleteOnePartners(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePartnersArgs): Promise<Partners | null>;
    findFirstPartners(ctx: any, info: GraphQLResolveInfo, args: FindFirstPartnersArgs): Promise<Partners | null>;
    findFirstPartnersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPartnersOrThrowArgs): Promise<Partners | null>;
    findManyPartners(ctx: any, info: GraphQLResolveInfo, args: FindManyPartnersArgs): Promise<Partners[]>;
    findUniquePartners(ctx: any, info: GraphQLResolveInfo, args: FindUniquePartnersArgs): Promise<Partners | null>;
    findUniquePartnersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniquePartnersOrThrowArgs): Promise<Partners | null>;
    groupByPartners(ctx: any, info: GraphQLResolveInfo, args: GroupByPartnersArgs): Promise<PartnersGroupBy[]>;
    updateManyPartners(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPartnersArgs): Promise<AffectedRowsOutput>;
    updateOnePartners(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePartnersArgs): Promise<Partners | null>;
    upsertOnePartners(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePartnersArgs): Promise<Partners>;
}
