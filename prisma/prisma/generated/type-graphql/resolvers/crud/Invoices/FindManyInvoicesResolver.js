"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyInvoicesArgs_1 = require("./args/FindManyInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const helpers_1 = require("../../../helpers");
let FindManyInvoicesResolver = class FindManyInvoicesResolver {
    async findManyInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Invoices_1.Invoices], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInvoicesArgs_1.FindManyInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyInvoicesResolver.prototype, "findManyInvoices", null);
FindManyInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], FindManyInvoicesResolver);
exports.FindManyInvoicesResolver = FindManyInvoicesResolver;
