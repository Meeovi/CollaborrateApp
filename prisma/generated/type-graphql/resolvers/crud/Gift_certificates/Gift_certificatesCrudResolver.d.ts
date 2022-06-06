import { GraphQLResolveInfo } from "graphql";
import { AggregateGift_certificatesArgs } from "./args/AggregateGift_certificatesArgs";
import { CreateGift_certificatesArgs } from "./args/CreateGift_certificatesArgs";
import { CreateManyGift_certificatesArgs } from "./args/CreateManyGift_certificatesArgs";
import { DeleteGift_certificatesArgs } from "./args/DeleteGift_certificatesArgs";
import { DeleteManyGift_certificatesArgs } from "./args/DeleteManyGift_certificatesArgs";
import { FindFirstGift_certificatesArgs } from "./args/FindFirstGift_certificatesArgs";
import { FindManyGift_certificatesArgs } from "./args/FindManyGift_certificatesArgs";
import { FindUniqueGift_certificatesArgs } from "./args/FindUniqueGift_certificatesArgs";
import { GroupByGift_certificatesArgs } from "./args/GroupByGift_certificatesArgs";
import { UpdateGift_certificatesArgs } from "./args/UpdateGift_certificatesArgs";
import { UpdateManyGift_certificatesArgs } from "./args/UpdateManyGift_certificatesArgs";
import { UpsertGift_certificatesArgs } from "./args/UpsertGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGift_certificates } from "../../outputs/AggregateGift_certificates";
import { Gift_certificatesGroupBy } from "../../outputs/Gift_certificatesGroupBy";
export declare class Gift_certificatesCrudResolver {
    findUniqueGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGift_certificatesArgs): Promise<Gift_certificates | null>;
    findFirstGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindFirstGift_certificatesArgs): Promise<Gift_certificates | null>;
    findManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindManyGift_certificatesArgs): Promise<Gift_certificates[]>;
    createGift_certificates(ctx: any, info: GraphQLResolveInfo, args: CreateGift_certificatesArgs): Promise<Gift_certificates>;
    createManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: CreateManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
    deleteGift_certificates(ctx: any, info: GraphQLResolveInfo, args: DeleteGift_certificatesArgs): Promise<Gift_certificates | null>;
    updateGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpdateGift_certificatesArgs): Promise<Gift_certificates | null>;
    deleteManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
    updateManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
    upsertGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpsertGift_certificatesArgs): Promise<Gift_certificates>;
    aggregateGift_certificates(ctx: any, info: GraphQLResolveInfo, args: AggregateGift_certificatesArgs): Promise<AggregateGift_certificates>;
    groupByGift_certificates(ctx: any, info: GraphQLResolveInfo, args: GroupByGift_certificatesArgs): Promise<Gift_certificatesGroupBy[]>;
}
