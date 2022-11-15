"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTransactionsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTransactionsOrThrowArgs_1 = require("./args/FindUniqueTransactionsOrThrowArgs");
const Transactions_1 = require("../../../models/Transactions");
const helpers_1 = require("../../../helpers");
let FindUniqueTransactionsOrThrowResolver = class FindUniqueTransactionsOrThrowResolver {
    async findUniqueTransactionsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transactions_1.Transactions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTransactionsOrThrowArgs_1.FindUniqueTransactionsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTransactionsOrThrowResolver.prototype, "findUniqueTransactionsOrThrow", null);
FindUniqueTransactionsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], FindUniqueTransactionsOrThrowResolver);
exports.FindUniqueTransactionsOrThrowResolver = FindUniqueTransactionsOrThrowResolver;
