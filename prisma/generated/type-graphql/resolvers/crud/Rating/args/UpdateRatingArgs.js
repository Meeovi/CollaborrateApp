"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingUpdateInput_1 = require("../../../inputs/RatingUpdateInput");
const RatingWhereUniqueInput_1 = require("../../../inputs/RatingWhereUniqueInput");
let UpdateRatingArgs = class UpdateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateInput_1.RatingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingUpdateInput_1.RatingUpdateInput)
], UpdateRatingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], UpdateRatingArgs.prototype, "where", void 0);
UpdateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateRatingArgs);
exports.UpdateRatingArgs = UpdateRatingArgs;
