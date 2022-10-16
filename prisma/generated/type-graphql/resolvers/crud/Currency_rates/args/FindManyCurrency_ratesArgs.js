"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Currency_ratesOrderByWithRelationAndSearchRelevanceInput");
const Currency_ratesWhereInput_1 = require("../../../inputs/Currency_ratesWhereInput");
const Currency_ratesWhereUniqueInput_1 = require("../../../inputs/Currency_ratesWhereUniqueInput");
const Currency_ratesScalarFieldEnum_1 = require("../../../../enums/Currency_ratesScalarFieldEnum");
let FindManyCurrency_ratesArgs = class FindManyCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereInput_1.Currency_ratesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereInput_1.Currency_ratesWhereInput)
], FindManyCurrency_ratesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesOrderByWithRelationAndSearchRelevanceInput_1.Currency_ratesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCurrency_ratesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereUniqueInput_1.Currency_ratesWhereUniqueInput)
], FindManyCurrency_ratesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCurrency_ratesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCurrency_ratesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesScalarFieldEnum_1.Currency_ratesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCurrency_ratesArgs.prototype, "distinct", void 0);
FindManyCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCurrency_ratesArgs);
exports.FindManyCurrency_ratesArgs = FindManyCurrency_ratesArgs;
