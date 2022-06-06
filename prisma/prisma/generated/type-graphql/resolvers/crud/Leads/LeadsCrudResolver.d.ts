import { GraphQLResolveInfo } from "graphql";
import { AggregateLeadsArgs } from "./args/AggregateLeadsArgs";
import { CreateLeadsArgs } from "./args/CreateLeadsArgs";
import { CreateManyLeadsArgs } from "./args/CreateManyLeadsArgs";
import { DeleteLeadsArgs } from "./args/DeleteLeadsArgs";
import { DeleteManyLeadsArgs } from "./args/DeleteManyLeadsArgs";
import { FindFirstLeadsArgs } from "./args/FindFirstLeadsArgs";
import { FindManyLeadsArgs } from "./args/FindManyLeadsArgs";
import { FindUniqueLeadsArgs } from "./args/FindUniqueLeadsArgs";
import { GroupByLeadsArgs } from "./args/GroupByLeadsArgs";
import { UpdateLeadsArgs } from "./args/UpdateLeadsArgs";
import { UpdateManyLeadsArgs } from "./args/UpdateManyLeadsArgs";
import { UpsertLeadsArgs } from "./args/UpsertLeadsArgs";
import { Leads } from "../../../models/Leads";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLeads } from "../../outputs/AggregateLeads";
import { LeadsGroupBy } from "../../outputs/LeadsGroupBy";
export declare class LeadsCrudResolver {
    findUniqueLeads(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLeadsArgs): Promise<Leads | null>;
    findFirstLeads(ctx: any, info: GraphQLResolveInfo, args: FindFirstLeadsArgs): Promise<Leads | null>;
    findManyLeads(ctx: any, info: GraphQLResolveInfo, args: FindManyLeadsArgs): Promise<Leads[]>;
    createLeads(ctx: any, info: GraphQLResolveInfo, args: CreateLeadsArgs): Promise<Leads>;
    createManyLeads(ctx: any, info: GraphQLResolveInfo, args: CreateManyLeadsArgs): Promise<AffectedRowsOutput>;
    deleteLeads(ctx: any, info: GraphQLResolveInfo, args: DeleteLeadsArgs): Promise<Leads | null>;
    updateLeads(ctx: any, info: GraphQLResolveInfo, args: UpdateLeadsArgs): Promise<Leads | null>;
    deleteManyLeads(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLeadsArgs): Promise<AffectedRowsOutput>;
    updateManyLeads(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLeadsArgs): Promise<AffectedRowsOutput>;
    upsertLeads(ctx: any, info: GraphQLResolveInfo, args: UpsertLeadsArgs): Promise<Leads>;
    aggregateLeads(ctx: any, info: GraphQLResolveInfo, args: AggregateLeadsArgs): Promise<AggregateLeads>;
    groupByLeads(ctx: any, info: GraphQLResolveInfo, args: GroupByLeadsArgs): Promise<LeadsGroupBy[]>;
}
