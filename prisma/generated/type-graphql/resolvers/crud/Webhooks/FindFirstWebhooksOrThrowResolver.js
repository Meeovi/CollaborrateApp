"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWebhooksOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstWebhooksOrThrowArgs_1 = require("./args/FindFirstWebhooksOrThrowArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let FindFirstWebhooksOrThrowResolver = class FindFirstWebhooksOrThrowResolver {
    async findFirstWebhooksOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Webhooks_1.Webhooks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWebhooksOrThrowArgs_1.FindFirstWebhooksOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstWebhooksOrThrowResolver.prototype, "findFirstWebhooksOrThrow", null);
FindFirstWebhooksOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], FindFirstWebhooksOrThrowResolver);
exports.FindFirstWebhooksOrThrowResolver = FindFirstWebhooksOrThrowResolver;
