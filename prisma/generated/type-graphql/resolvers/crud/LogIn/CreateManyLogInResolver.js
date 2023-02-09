"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLogInResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyLogInArgs_1 = require("./args/CreateManyLogInArgs");
const LogIn_1 = require("../../../models/LogIn");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyLogInResolver = class CreateManyLogInResolver {
    async createManyLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLogInArgs_1.CreateManyLogInArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyLogInResolver.prototype, "createManyLogIn", null);
CreateManyLogInResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LogIn_1.LogIn)
], CreateManyLogInResolver);
exports.CreateManyLogInResolver = CreateManyLogInResolver;
