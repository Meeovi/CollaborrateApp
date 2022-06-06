import { GraphQLResolveInfo } from "graphql";
import { AggregateOrdersArgs } from "./args/AggregateOrdersArgs";
import { CreateManyOrdersArgs } from "./args/CreateManyOrdersArgs";
import { CreateOrdersArgs } from "./args/CreateOrdersArgs";
import { DeleteManyOrdersArgs } from "./args/DeleteManyOrdersArgs";
import { DeleteOrdersArgs } from "./args/DeleteOrdersArgs";
import { FindFirstOrdersArgs } from "./args/FindFirstOrdersArgs";
import { FindManyOrdersArgs } from "./args/FindManyOrdersArgs";
import { FindUniqueOrdersArgs } from "./args/FindUniqueOrdersArgs";
import { GroupByOrdersArgs } from "./args/GroupByOrdersArgs";
import { UpdateManyOrdersArgs } from "./args/UpdateManyOrdersArgs";
import { UpdateOrdersArgs } from "./args/UpdateOrdersArgs";
import { UpsertOrdersArgs } from "./args/UpsertOrdersArgs";
import { Orders } from "../../../models/Orders";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOrders } from "../../outputs/AggregateOrders";
import { OrdersGroupBy } from "../../outputs/OrdersGroupBy";
export declare class OrdersCrudResolver {
    findUniqueOrders(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrdersArgs): Promise<Orders | null>;
    findFirstOrders(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrdersArgs): Promise<Orders | null>;
    findManyOrders(ctx: any, info: GraphQLResolveInfo, args: FindManyOrdersArgs): Promise<Orders[]>;
    createOrders(ctx: any, info: GraphQLResolveInfo, args: CreateOrdersArgs): Promise<Orders>;
    createManyOrders(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrdersArgs): Promise<AffectedRowsOutput>;
    deleteOrders(ctx: any, info: GraphQLResolveInfo, args: DeleteOrdersArgs): Promise<Orders | null>;
    updateOrders(ctx: any, info: GraphQLResolveInfo, args: UpdateOrdersArgs): Promise<Orders | null>;
    deleteManyOrders(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrdersArgs): Promise<AffectedRowsOutput>;
    updateManyOrders(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrdersArgs): Promise<AffectedRowsOutput>;
    upsertOrders(ctx: any, info: GraphQLResolveInfo, args: UpsertOrdersArgs): Promise<Orders>;
    aggregateOrders(ctx: any, info: GraphQLResolveInfo, args: AggregateOrdersArgs): Promise<AggregateOrders>;
    groupByOrders(ctx: any, info: GraphQLResolveInfo, args: GroupByOrdersArgs): Promise<OrdersGroupBy[]>;
}
