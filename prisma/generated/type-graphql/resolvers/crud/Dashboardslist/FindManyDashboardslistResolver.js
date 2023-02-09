"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDashboardslistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyDashboardslistArgs_1 = require("./args/FindManyDashboardslistArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const helpers_1 = require("../../../helpers");
let FindManyDashboardslistResolver = class FindManyDashboardslistResolver {
    async dashboardslists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboardslist_1.Dashboardslist], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardslistArgs_1.FindManyDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyDashboardslistResolver.prototype, "dashboardslists", null);
FindManyDashboardslistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], FindManyDashboardslistResolver);
exports.FindManyDashboardslistResolver = FindManyDashboardslistResolver;
