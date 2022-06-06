"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsCreateInput_1 = require("../../../inputs/FullfillmentsCreateInput");
const FullfillmentsUpdateInput_1 = require("../../../inputs/FullfillmentsUpdateInput");
const FullfillmentsWhereUniqueInput_1 = require("../../../inputs/FullfillmentsWhereUniqueInput");
let UpsertFullfillmentsArgs = class UpsertFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput)
], UpsertFullfillmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsCreateInput_1.FullfillmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsCreateInput_1.FullfillmentsCreateInput)
], UpsertFullfillmentsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsUpdateInput_1.FullfillmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsUpdateInput_1.FullfillmentsUpdateInput)
], UpsertFullfillmentsArgs.prototype, "update", void 0);
UpsertFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertFullfillmentsArgs);
exports.UpsertFullfillmentsArgs = UpsertFullfillmentsArgs;
