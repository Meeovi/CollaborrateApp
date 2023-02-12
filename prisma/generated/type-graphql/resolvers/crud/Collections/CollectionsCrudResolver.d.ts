import { GraphQLResolveInfo } from "graphql";
import { AggregateCollectionsArgs } from "./args/AggregateCollectionsArgs";
import { CreateOneCollectionsArgs } from "./args/CreateOneCollectionsArgs";
import { DeleteManyCollectionsArgs } from "./args/DeleteManyCollectionsArgs";
import { DeleteOneCollectionsArgs } from "./args/DeleteOneCollectionsArgs";
import { FindFirstCollectionsArgs } from "./args/FindFirstCollectionsArgs";
import { FindFirstCollectionsOrThrowArgs } from "./args/FindFirstCollectionsOrThrowArgs";
import { FindManyCollectionsArgs } from "./args/FindManyCollectionsArgs";
import { FindUniqueCollectionsArgs } from "./args/FindUniqueCollectionsArgs";
import { FindUniqueCollectionsOrThrowArgs } from "./args/FindUniqueCollectionsOrThrowArgs";
import { GroupByCollectionsArgs } from "./args/GroupByCollectionsArgs";
import { UpdateManyCollectionsArgs } from "./args/UpdateManyCollectionsArgs";
import { UpdateOneCollectionsArgs } from "./args/UpdateOneCollectionsArgs";
import { UpsertOneCollectionsArgs } from "./args/UpsertOneCollectionsArgs";
import { Collections } from "../../../models/Collections";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCollections } from "../../outputs/AggregateCollections";
import { CollectionsGroupBy } from "../../outputs/CollectionsGroupBy";
export declare class CollectionsCrudResolver {
    aggregateCollections(ctx: any, info: GraphQLResolveInfo, args: AggregateCollectionsArgs): Promise<AggregateCollections>;
    createOneCollections(ctx: any, info: GraphQLResolveInfo, args: CreateOneCollectionsArgs): Promise<Collections>;
    deleteManyCollections(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCollectionsArgs): Promise<AffectedRowsOutput>;
    deleteOneCollections(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCollectionsArgs): Promise<Collections | null>;
    findFirstCollections(ctx: any, info: GraphQLResolveInfo, args: FindFirstCollectionsArgs): Promise<Collections | null>;
    findFirstCollectionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCollectionsOrThrowArgs): Promise<Collections | null>;
    findManyCollections(ctx: any, info: GraphQLResolveInfo, args: FindManyCollectionsArgs): Promise<Collections[]>;
    findUniqueCollections(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCollectionsArgs): Promise<Collections | null>;
    findUniqueCollectionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCollectionsOrThrowArgs): Promise<Collections | null>;
    groupByCollections(ctx: any, info: GraphQLResolveInfo, args: GroupByCollectionsArgs): Promise<CollectionsGroupBy[]>;
    updateManyCollections(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCollectionsArgs): Promise<AffectedRowsOutput>;
    updateOneCollections(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCollectionsArgs): Promise<Collections | null>;
    upsertOneCollections(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCollectionsArgs): Promise<Collections>;
}
