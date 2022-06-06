"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCasesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCasesArgs_1 = require("./args/UpdateCasesArgs");
const Cases_1 = require("../../../models/Cases");
const helpers_1 = require("../../../helpers");
let UpdateCasesResolver = class UpdateCasesResolver {
    async updateCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cases_1.Cases, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCasesArgs_1.UpdateCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCasesResolver.prototype, "updateCases", null);
UpdateCasesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cases_1.Cases)
], UpdateCasesResolver);
exports.UpdateCasesResolver = UpdateCasesResolver;
