import { GraphQLResolveInfo } from "graphql";
import { AggregateContractsArgs } from "./args/AggregateContractsArgs";
import { CreateContractsArgs } from "./args/CreateContractsArgs";
import { CreateManyContractsArgs } from "./args/CreateManyContractsArgs";
import { DeleteContractsArgs } from "./args/DeleteContractsArgs";
import { DeleteManyContractsArgs } from "./args/DeleteManyContractsArgs";
import { FindFirstContractsArgs } from "./args/FindFirstContractsArgs";
import { FindManyContractsArgs } from "./args/FindManyContractsArgs";
import { FindUniqueContractsArgs } from "./args/FindUniqueContractsArgs";
import { GroupByContractsArgs } from "./args/GroupByContractsArgs";
import { UpdateContractsArgs } from "./args/UpdateContractsArgs";
import { UpdateManyContractsArgs } from "./args/UpdateManyContractsArgs";
import { UpsertContractsArgs } from "./args/UpsertContractsArgs";
import { Contracts } from "../../../models/Contracts";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateContracts } from "../../outputs/AggregateContracts";
import { ContractsGroupBy } from "../../outputs/ContractsGroupBy";
export declare class ContractsCrudResolver {
    findUniqueContracts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueContractsArgs): Promise<Contracts | null>;
    findFirstContracts(ctx: any, info: GraphQLResolveInfo, args: FindFirstContractsArgs): Promise<Contracts | null>;
    findManyContracts(ctx: any, info: GraphQLResolveInfo, args: FindManyContractsArgs): Promise<Contracts[]>;
    createContracts(ctx: any, info: GraphQLResolveInfo, args: CreateContractsArgs): Promise<Contracts>;
    createManyContracts(ctx: any, info: GraphQLResolveInfo, args: CreateManyContractsArgs): Promise<AffectedRowsOutput>;
    deleteContracts(ctx: any, info: GraphQLResolveInfo, args: DeleteContractsArgs): Promise<Contracts | null>;
    updateContracts(ctx: any, info: GraphQLResolveInfo, args: UpdateContractsArgs): Promise<Contracts | null>;
    deleteManyContracts(ctx: any, info: GraphQLResolveInfo, args: DeleteManyContractsArgs): Promise<AffectedRowsOutput>;
    updateManyContracts(ctx: any, info: GraphQLResolveInfo, args: UpdateManyContractsArgs): Promise<AffectedRowsOutput>;
    upsertContracts(ctx: any, info: GraphQLResolveInfo, args: UpsertContractsArgs): Promise<Contracts>;
    aggregateContracts(ctx: any, info: GraphQLResolveInfo, args: AggregateContractsArgs): Promise<AggregateContracts>;
    groupByContracts(ctx: any, info: GraphQLResolveInfo, args: GroupByContractsArgs): Promise<ContractsGroupBy[]>;
}
