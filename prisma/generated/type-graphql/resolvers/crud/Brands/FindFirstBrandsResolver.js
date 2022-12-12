"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBrandsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstBrandsArgs_1 = require("./args/FindFirstBrandsArgs");
const Brands_1 = require("../../../models/Brands");
const helpers_1 = require("../../../helpers");
let FindFirstBrandsResolver = class FindFirstBrandsResolver {
    async findFirstBrands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brands.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Brands_1.Brands, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBrandsArgs_1.FindFirstBrandsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBrandsResolver.prototype, "findFirstBrands", null);
FindFirstBrandsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brands_1.Brands)
], FindFirstBrandsResolver);
exports.FindFirstBrandsResolver = FindFirstBrandsResolver;
