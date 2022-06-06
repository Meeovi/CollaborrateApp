"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreatePaymentsArgs_1 = require("./args/CreatePaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const helpers_1 = require("../../../helpers");
let CreatePaymentsResolver = class CreatePaymentsResolver {
    async createPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePaymentsArgs_1.CreatePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreatePaymentsResolver.prototype, "createPayments", null);
CreatePaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], CreatePaymentsResolver);
exports.CreatePaymentsResolver = CreatePaymentsResolver;
