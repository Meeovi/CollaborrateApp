"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneCountriesArgs_1 = require("./args/DeleteOneCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let DeleteOneCountriesResolver = class DeleteOneCountriesResolver {
    async deleteOneCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCountriesArgs_1.DeleteOneCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCountriesResolver.prototype, "deleteOneCountries", null);
DeleteOneCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], DeleteOneCountriesResolver);
exports.DeleteOneCountriesResolver = DeleteOneCountriesResolver;
