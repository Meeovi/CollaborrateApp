"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurrency_ratesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteCurrency_ratesArgs_1 = require("./args/DeleteCurrency_ratesArgs");
const Currency_rates_1 = require("../../../models/Currency_rates");
const helpers_1 = require("../../../helpers");
let DeleteCurrency_ratesResolver = class DeleteCurrency_ratesResolver {
    async deleteCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_rates_1.Currency_rates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCurrency_ratesArgs_1.DeleteCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteCurrency_ratesResolver.prototype, "deleteCurrency_rates", null);
DeleteCurrency_ratesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], DeleteCurrency_ratesResolver);
exports.DeleteCurrency_ratesResolver = DeleteCurrency_ratesResolver;
