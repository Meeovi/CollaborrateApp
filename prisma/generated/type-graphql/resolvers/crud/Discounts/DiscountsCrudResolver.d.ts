import { GraphQLResolveInfo } from "graphql";
import { AggregateDiscountsArgs } from "./args/AggregateDiscountsArgs";
import { CreateOneDiscountsArgs } from "./args/CreateOneDiscountsArgs";
import { DeleteManyDiscountsArgs } from "./args/DeleteManyDiscountsArgs";
import { DeleteOneDiscountsArgs } from "./args/DeleteOneDiscountsArgs";
import { FindFirstDiscountsArgs } from "./args/FindFirstDiscountsArgs";
import { FindFirstDiscountsOrThrowArgs } from "./args/FindFirstDiscountsOrThrowArgs";
import { FindManyDiscountsArgs } from "./args/FindManyDiscountsArgs";
import { FindUniqueDiscountsArgs } from "./args/FindUniqueDiscountsArgs";
import { FindUniqueDiscountsOrThrowArgs } from "./args/FindUniqueDiscountsOrThrowArgs";
import { GroupByDiscountsArgs } from "./args/GroupByDiscountsArgs";
import { UpdateManyDiscountsArgs } from "./args/UpdateManyDiscountsArgs";
import { UpdateOneDiscountsArgs } from "./args/UpdateOneDiscountsArgs";
import { UpsertOneDiscountsArgs } from "./args/UpsertOneDiscountsArgs";
import { Discounts } from "../../../models/Discounts";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDiscounts } from "../../outputs/AggregateDiscounts";
import { DiscountsGroupBy } from "../../outputs/DiscountsGroupBy";
export declare class DiscountsCrudResolver {
    aggregateDiscounts(ctx: any, info: GraphQLResolveInfo, args: AggregateDiscountsArgs): Promise<AggregateDiscounts>;
    createOneDiscounts(ctx: any, info: GraphQLResolveInfo, args: CreateOneDiscountsArgs): Promise<Discounts>;
    deleteManyDiscounts(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDiscountsArgs): Promise<AffectedRowsOutput>;
    deleteOneDiscounts(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDiscountsArgs): Promise<Discounts | null>;
    findFirstDiscounts(ctx: any, info: GraphQLResolveInfo, args: FindFirstDiscountsArgs): Promise<Discounts | null>;
    findFirstDiscountsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstDiscountsOrThrowArgs): Promise<Discounts | null>;
    findManyDiscounts(ctx: any, info: GraphQLResolveInfo, args: FindManyDiscountsArgs): Promise<Discounts[]>;
    findUniqueDiscounts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDiscountsArgs): Promise<Discounts | null>;
    findUniqueDiscountsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDiscountsOrThrowArgs): Promise<Discounts | null>;
    groupByDiscounts(ctx: any, info: GraphQLResolveInfo, args: GroupByDiscountsArgs): Promise<DiscountsGroupBy[]>;
    updateManyDiscounts(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDiscountsArgs): Promise<AffectedRowsOutput>;
    updateOneDiscounts(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDiscountsArgs): Promise<Discounts | null>;
    upsertOneDiscounts(ctx: any, info: GraphQLResolveInfo, args: UpsertOneDiscountsArgs): Promise<Discounts>;
}
