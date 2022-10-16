import { GraphQLResolveInfo } from "graphql";
import { AggregateStatisticsArgs } from "./args/AggregateStatisticsArgs";
import { CreateManyStatisticsArgs } from "./args/CreateManyStatisticsArgs";
import { CreateOneStatisticsArgs } from "./args/CreateOneStatisticsArgs";
import { DeleteManyStatisticsArgs } from "./args/DeleteManyStatisticsArgs";
import { DeleteOneStatisticsArgs } from "./args/DeleteOneStatisticsArgs";
import { FindFirstStatisticsArgs } from "./args/FindFirstStatisticsArgs";
import { FindManyStatisticsArgs } from "./args/FindManyStatisticsArgs";
import { FindUniqueStatisticsArgs } from "./args/FindUniqueStatisticsArgs";
import { GroupByStatisticsArgs } from "./args/GroupByStatisticsArgs";
import { UpdateManyStatisticsArgs } from "./args/UpdateManyStatisticsArgs";
import { UpdateOneStatisticsArgs } from "./args/UpdateOneStatisticsArgs";
import { UpsertOneStatisticsArgs } from "./args/UpsertOneStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStatistics } from "../../outputs/AggregateStatistics";
import { StatisticsGroupBy } from "../../outputs/StatisticsGroupBy";
export declare class StatisticsCrudResolver {
    aggregateStatistics(ctx: any, info: GraphQLResolveInfo, args: AggregateStatisticsArgs): Promise<AggregateStatistics>;
    createManyStatistics(ctx: any, info: GraphQLResolveInfo, args: CreateManyStatisticsArgs): Promise<AffectedRowsOutput>;
    createOneStatistics(ctx: any, info: GraphQLResolveInfo, args: CreateOneStatisticsArgs): Promise<Statistics>;
    deleteManyStatistics(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStatisticsArgs): Promise<AffectedRowsOutput>;
    deleteOneStatistics(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStatisticsArgs): Promise<Statistics | null>;
    findFirstStatistics(ctx: any, info: GraphQLResolveInfo, args: FindFirstStatisticsArgs): Promise<Statistics | null>;
    findManyStatistics(ctx: any, info: GraphQLResolveInfo, args: FindManyStatisticsArgs): Promise<Statistics[]>;
    findUniqueStatistics(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStatisticsArgs): Promise<Statistics | null>;
    groupByStatistics(ctx: any, info: GraphQLResolveInfo, args: GroupByStatisticsArgs): Promise<StatisticsGroupBy[]>;
    updateManyStatistics(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStatisticsArgs): Promise<AffectedRowsOutput>;
    updateOneStatistics(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStatisticsArgs): Promise<Statistics | null>;
    upsertOneStatistics(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStatisticsArgs): Promise<Statistics>;
}
