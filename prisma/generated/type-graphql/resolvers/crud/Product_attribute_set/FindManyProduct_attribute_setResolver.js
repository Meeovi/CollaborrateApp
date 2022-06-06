"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProduct_attribute_setResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyProduct_attribute_setArgs_1 = require("./args/FindManyProduct_attribute_setArgs");
const Product_attribute_set_1 = require("../../../models/Product_attribute_set");
const helpers_1 = require("../../../helpers");
let FindManyProduct_attribute_setResolver = class FindManyProduct_attribute_setResolver {
    async product_attribute_sets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute_set.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_attribute_set_1.Product_attribute_set], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProduct_attribute_setArgs_1.FindManyProduct_attribute_setArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyProduct_attribute_setResolver.prototype, "product_attribute_sets", null);
FindManyProduct_attribute_setResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_set_1.Product_attribute_set)
], FindManyProduct_attribute_setResolver);
exports.FindManyProduct_attribute_setResolver = FindManyProduct_attribute_setResolver;
