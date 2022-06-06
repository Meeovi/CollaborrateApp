import { GraphQLResolveInfo } from "graphql";
import { AggregateCart_price_rulesArgs } from "./args/AggregateCart_price_rulesArgs";
import { CreateCart_price_rulesArgs } from "./args/CreateCart_price_rulesArgs";
import { CreateManyCart_price_rulesArgs } from "./args/CreateManyCart_price_rulesArgs";
import { DeleteCart_price_rulesArgs } from "./args/DeleteCart_price_rulesArgs";
import { DeleteManyCart_price_rulesArgs } from "./args/DeleteManyCart_price_rulesArgs";
import { FindFirstCart_price_rulesArgs } from "./args/FindFirstCart_price_rulesArgs";
import { FindManyCart_price_rulesArgs } from "./args/FindManyCart_price_rulesArgs";
import { FindUniqueCart_price_rulesArgs } from "./args/FindUniqueCart_price_rulesArgs";
import { GroupByCart_price_rulesArgs } from "./args/GroupByCart_price_rulesArgs";
import { UpdateCart_price_rulesArgs } from "./args/UpdateCart_price_rulesArgs";
import { UpdateManyCart_price_rulesArgs } from "./args/UpdateManyCart_price_rulesArgs";
import { UpsertCart_price_rulesArgs } from "./args/UpsertCart_price_rulesArgs";
import { Cart_price_rules } from "../../../models/Cart_price_rules";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCart_price_rules } from "../../outputs/AggregateCart_price_rules";
import { Cart_price_rulesGroupBy } from "../../outputs/Cart_price_rulesGroupBy";
export declare class Cart_price_rulesCrudResolver {
    findUniqueCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCart_price_rulesArgs): Promise<Cart_price_rules | null>;
    findFirstCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: FindFirstCart_price_rulesArgs): Promise<Cart_price_rules | null>;
    findManyCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: FindManyCart_price_rulesArgs): Promise<Cart_price_rules[]>;
    createCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: CreateCart_price_rulesArgs): Promise<Cart_price_rules>;
    createManyCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: CreateManyCart_price_rulesArgs): Promise<AffectedRowsOutput>;
    deleteCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: DeleteCart_price_rulesArgs): Promise<Cart_price_rules | null>;
    updateCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: UpdateCart_price_rulesArgs): Promise<Cart_price_rules | null>;
    deleteManyCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCart_price_rulesArgs): Promise<AffectedRowsOutput>;
    updateManyCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCart_price_rulesArgs): Promise<AffectedRowsOutput>;
    upsertCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: UpsertCart_price_rulesArgs): Promise<Cart_price_rules>;
    aggregateCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: AggregateCart_price_rulesArgs): Promise<AggregateCart_price_rules>;
    groupByCart_price_rules(ctx: any, info: GraphQLResolveInfo, args: GroupByCart_price_rulesArgs): Promise<Cart_price_rulesGroupBy[]>;
}
