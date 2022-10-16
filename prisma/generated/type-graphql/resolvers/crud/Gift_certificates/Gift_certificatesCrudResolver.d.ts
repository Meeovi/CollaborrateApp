import { GraphQLResolveInfo } from "graphql";
import { AggregateGift_certificatesArgs } from "./args/AggregateGift_certificatesArgs";
import { CreateManyGift_certificatesArgs } from "./args/CreateManyGift_certificatesArgs";
import { CreateOneGift_certificatesArgs } from "./args/CreateOneGift_certificatesArgs";
import { DeleteManyGift_certificatesArgs } from "./args/DeleteManyGift_certificatesArgs";
import { DeleteOneGift_certificatesArgs } from "./args/DeleteOneGift_certificatesArgs";
import { FindFirstGift_certificatesArgs } from "./args/FindFirstGift_certificatesArgs";
import { FindManyGift_certificatesArgs } from "./args/FindManyGift_certificatesArgs";
import { FindUniqueGift_certificatesArgs } from "./args/FindUniqueGift_certificatesArgs";
import { GroupByGift_certificatesArgs } from "./args/GroupByGift_certificatesArgs";
import { UpdateManyGift_certificatesArgs } from "./args/UpdateManyGift_certificatesArgs";
import { UpdateOneGift_certificatesArgs } from "./args/UpdateOneGift_certificatesArgs";
import { UpsertOneGift_certificatesArgs } from "./args/UpsertOneGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGift_certificates } from "../../outputs/AggregateGift_certificates";
import { Gift_certificatesGroupBy } from "../../outputs/Gift_certificatesGroupBy";
export declare class Gift_certificatesCrudResolver {
    aggregateGift_certificates(ctx: any, info: GraphQLResolveInfo, args: AggregateGift_certificatesArgs): Promise<AggregateGift_certificates>;
    createManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: CreateManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
    createOneGift_certificates(ctx: any, info: GraphQLResolveInfo, args: CreateOneGift_certificatesArgs): Promise<Gift_certificates>;
    deleteManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
    deleteOneGift_certificates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneGift_certificatesArgs): Promise<Gift_certificates | null>;
    findFirstGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindFirstGift_certificatesArgs): Promise<Gift_certificates | null>;
    findManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindManyGift_certificatesArgs): Promise<Gift_certificates[]>;
    findUniqueGift_certificates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGift_certificatesArgs): Promise<Gift_certificates | null>;
    groupByGift_certificates(ctx: any, info: GraphQLResolveInfo, args: GroupByGift_certificatesArgs): Promise<Gift_certificatesGroupBy[]>;
    updateManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
    updateOneGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneGift_certificatesArgs): Promise<Gift_certificates | null>;
    upsertOneGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneGift_certificatesArgs): Promise<Gift_certificates>;
}
