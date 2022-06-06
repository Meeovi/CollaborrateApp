"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCurrency_ratesArgs_1 = require("./args/AggregateCurrency_ratesArgs");
const CreateCurrency_ratesArgs_1 = require("./args/CreateCurrency_ratesArgs");
const CreateManyCurrency_ratesArgs_1 = require("./args/CreateManyCurrency_ratesArgs");
const DeleteCurrency_ratesArgs_1 = require("./args/DeleteCurrency_ratesArgs");
const DeleteManyCurrency_ratesArgs_1 = require("./args/DeleteManyCurrency_ratesArgs");
const FindFirstCurrency_ratesArgs_1 = require("./args/FindFirstCurrency_ratesArgs");
const FindManyCurrency_ratesArgs_1 = require("./args/FindManyCurrency_ratesArgs");
const FindUniqueCurrency_ratesArgs_1 = require("./args/FindUniqueCurrency_ratesArgs");
const GroupByCurrency_ratesArgs_1 = require("./args/GroupByCurrency_ratesArgs");
const UpdateCurrency_ratesArgs_1 = require("./args/UpdateCurrency_ratesArgs");
const UpdateManyCurrency_ratesArgs_1 = require("./args/UpdateManyCurrency_ratesArgs");
const UpsertCurrency_ratesArgs_1 = require("./args/UpsertCurrency_ratesArgs");
const helpers_1 = require("../../../helpers");
const Currency_rates_1 = require("../../../models/Currency_rates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCurrency_rates_1 = require("../../outputs/AggregateCurrency_rates");
const Currency_ratesGroupBy_1 = require("../../outputs/Currency_ratesGroupBy");
let Currency_ratesCrudResolver = class Currency_ratesCrudResolver {
    async findUniqueCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCurrency_rates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCurrency_rates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCurrency_rates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency_rates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currency_rates_1.Currency_rates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCurrency_ratesArgs_1.FindUniqueCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "findUniqueCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currency_rates_1.Currency_rates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCurrency_ratesArgs_1.FindFirstCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "findFirstCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currency_rates_1.Currency_rates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCurrency_ratesArgs_1.FindManyCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "findManyCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_rates_1.Currency_rates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCurrency_ratesArgs_1.CreateCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "createCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCurrency_ratesArgs_1.CreateManyCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "createManyCurrency_rates", null);
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
], Currency_ratesCrudResolver.prototype, "deleteCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_rates_1.Currency_rates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCurrency_ratesArgs_1.UpdateCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "updateCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCurrency_ratesArgs_1.DeleteManyCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "deleteManyCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCurrency_ratesArgs_1.UpdateManyCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "updateManyCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_rates_1.Currency_rates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCurrency_ratesArgs_1.UpsertCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "upsertCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCurrency_rates_1.AggregateCurrency_rates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCurrency_ratesArgs_1.AggregateCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "aggregateCurrency_rates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currency_ratesGroupBy_1.Currency_ratesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCurrency_ratesArgs_1.GroupByCurrency_ratesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Currency_ratesCrudResolver.prototype, "groupByCurrency_rates", null);
Currency_ratesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_rates_1.Currency_rates)
], Currency_ratesCrudResolver);
exports.Currency_ratesCrudResolver = Currency_ratesCrudResolver;
