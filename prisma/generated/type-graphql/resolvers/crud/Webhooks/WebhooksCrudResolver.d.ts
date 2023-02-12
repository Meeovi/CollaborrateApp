import { GraphQLResolveInfo } from "graphql";
import { AggregateWebhooksArgs } from "./args/AggregateWebhooksArgs";
import { CreateOneWebhooksArgs } from "./args/CreateOneWebhooksArgs";
import { DeleteManyWebhooksArgs } from "./args/DeleteManyWebhooksArgs";
import { DeleteOneWebhooksArgs } from "./args/DeleteOneWebhooksArgs";
import { FindFirstWebhooksArgs } from "./args/FindFirstWebhooksArgs";
import { FindFirstWebhooksOrThrowArgs } from "./args/FindFirstWebhooksOrThrowArgs";
import { FindManyWebhooksArgs } from "./args/FindManyWebhooksArgs";
import { FindUniqueWebhooksArgs } from "./args/FindUniqueWebhooksArgs";
import { FindUniqueWebhooksOrThrowArgs } from "./args/FindUniqueWebhooksOrThrowArgs";
import { GroupByWebhooksArgs } from "./args/GroupByWebhooksArgs";
import { UpdateManyWebhooksArgs } from "./args/UpdateManyWebhooksArgs";
import { UpdateOneWebhooksArgs } from "./args/UpdateOneWebhooksArgs";
import { UpsertOneWebhooksArgs } from "./args/UpsertOneWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWebhooks } from "../../outputs/AggregateWebhooks";
import { WebhooksGroupBy } from "../../outputs/WebhooksGroupBy";
export declare class WebhooksCrudResolver {
    aggregateWebhooks(ctx: any, info: GraphQLResolveInfo, args: AggregateWebhooksArgs): Promise<AggregateWebhooks>;
    createOneWebhooks(ctx: any, info: GraphQLResolveInfo, args: CreateOneWebhooksArgs): Promise<Webhooks>;
    deleteManyWebhooks(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWebhooksArgs): Promise<AffectedRowsOutput>;
    deleteOneWebhooks(ctx: any, info: GraphQLResolveInfo, args: DeleteOneWebhooksArgs): Promise<Webhooks | null>;
    findFirstWebhooks(ctx: any, info: GraphQLResolveInfo, args: FindFirstWebhooksArgs): Promise<Webhooks | null>;
    findFirstWebhooksOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstWebhooksOrThrowArgs): Promise<Webhooks | null>;
    findManyWebhooks(ctx: any, info: GraphQLResolveInfo, args: FindManyWebhooksArgs): Promise<Webhooks[]>;
    findUniqueWebhooks(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWebhooksArgs): Promise<Webhooks | null>;
    findUniqueWebhooksOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWebhooksOrThrowArgs): Promise<Webhooks | null>;
    groupByWebhooks(ctx: any, info: GraphQLResolveInfo, args: GroupByWebhooksArgs): Promise<WebhooksGroupBy[]>;
    updateManyWebhooks(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWebhooksArgs): Promise<AffectedRowsOutput>;
    updateOneWebhooks(ctx: any, info: GraphQLResolveInfo, args: UpdateOneWebhooksArgs): Promise<Webhooks | null>;
    upsertOneWebhooks(ctx: any, info: GraphQLResolveInfo, args: UpsertOneWebhooksArgs): Promise<Webhooks>;
}
