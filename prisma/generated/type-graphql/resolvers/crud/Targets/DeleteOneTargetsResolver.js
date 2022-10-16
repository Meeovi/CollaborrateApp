"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTargetsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneTargetsArgs_1 = require("./args/DeleteOneTargetsArgs");
const Targets_1 = require("../../../models/Targets");
const helpers_1 = require("../../../helpers");
let DeleteOneTargetsResolver = class DeleteOneTargetsResolver {
    async deleteOneTargets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).targets.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Targets_1.Targets, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTargetsArgs_1.DeleteOneTargetsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTargetsResolver.prototype, "deleteOneTargets", null);
DeleteOneTargetsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Targets_1.Targets)
], DeleteOneTargetsResolver);
exports.DeleteOneTargetsResolver = DeleteOneTargetsResolver;
