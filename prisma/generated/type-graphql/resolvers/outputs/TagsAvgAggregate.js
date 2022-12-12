"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagsAvgAggregate = class TagsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TagsAvgAggregate.prototype, "id", void 0);
TagsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagsAvgAggregate", {
        isAbstract: true
    })
], TagsAvgAggregate);
exports.TagsAvgAggregate = TagsAvgAggregate;
