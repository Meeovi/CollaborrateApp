import { GraphQLResolveInfo } from "graphql";
import { AggregateTasksArgs } from "./args/AggregateTasksArgs";
import { CreateManyTasksArgs } from "./args/CreateManyTasksArgs";
import { CreateTasksArgs } from "./args/CreateTasksArgs";
import { DeleteManyTasksArgs } from "./args/DeleteManyTasksArgs";
import { DeleteTasksArgs } from "./args/DeleteTasksArgs";
import { FindFirstTasksArgs } from "./args/FindFirstTasksArgs";
import { FindManyTasksArgs } from "./args/FindManyTasksArgs";
import { FindUniqueTasksArgs } from "./args/FindUniqueTasksArgs";
import { GroupByTasksArgs } from "./args/GroupByTasksArgs";
import { UpdateManyTasksArgs } from "./args/UpdateManyTasksArgs";
import { UpdateTasksArgs } from "./args/UpdateTasksArgs";
import { UpsertTasksArgs } from "./args/UpsertTasksArgs";
import { Tasks } from "../../../models/Tasks";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTasks } from "../../outputs/AggregateTasks";
import { TasksGroupBy } from "../../outputs/TasksGroupBy";
export declare class TasksCrudResolver {
    findUniqueTasks(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTasksArgs): Promise<Tasks | null>;
    findFirstTasks(ctx: any, info: GraphQLResolveInfo, args: FindFirstTasksArgs): Promise<Tasks | null>;
    findManyTasks(ctx: any, info: GraphQLResolveInfo, args: FindManyTasksArgs): Promise<Tasks[]>;
    createTasks(ctx: any, info: GraphQLResolveInfo, args: CreateTasksArgs): Promise<Tasks>;
    createManyTasks(ctx: any, info: GraphQLResolveInfo, args: CreateManyTasksArgs): Promise<AffectedRowsOutput>;
    deleteTasks(ctx: any, info: GraphQLResolveInfo, args: DeleteTasksArgs): Promise<Tasks | null>;
    updateTasks(ctx: any, info: GraphQLResolveInfo, args: UpdateTasksArgs): Promise<Tasks | null>;
    deleteManyTasks(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTasksArgs): Promise<AffectedRowsOutput>;
    updateManyTasks(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTasksArgs): Promise<AffectedRowsOutput>;
    upsertTasks(ctx: any, info: GraphQLResolveInfo, args: UpsertTasksArgs): Promise<Tasks>;
    aggregateTasks(ctx: any, info: GraphQLResolveInfo, args: AggregateTasksArgs): Promise<AggregateTasks>;
    groupByTasks(ctx: any, info: GraphQLResolveInfo, args: GroupByTasksArgs): Promise<TasksGroupBy[]>;
}
