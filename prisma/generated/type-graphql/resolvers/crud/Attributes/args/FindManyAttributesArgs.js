"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AttributesOrderByWithRelationAndSearchRelevanceInput");
const AttributesWhereInput_1 = require("../../../inputs/AttributesWhereInput");
const AttributesWhereUniqueInput_1 = require("../../../inputs/AttributesWhereUniqueInput");
const AttributesScalarFieldEnum_1 = require("../../../../enums/AttributesScalarFieldEnum");
let FindManyAttributesArgs = class FindManyAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereInput_1.AttributesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesWhereInput_1.AttributesWhereInput)
], FindManyAttributesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttributesOrderByWithRelationAndSearchRelevanceInput_1.AttributesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAttributesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesWhereUniqueInput_1.AttributesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesWhereUniqueInput_1.AttributesWhereUniqueInput)
], FindManyAttributesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAttributesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAttributesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttributesScalarFieldEnum_1.AttributesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAttributesArgs.prototype, "distinct", void 0);
FindManyAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyAttributesArgs);
exports.FindManyAttributesArgs = FindManyAttributesArgs;
