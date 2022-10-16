"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyGift_certificatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gift_certificatesCreateManyInput_1 = require("../../../inputs/Gift_certificatesCreateManyInput");
let CreateManyGift_certificatesArgs = class CreateManyGift_certificatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Gift_certificatesCreateManyInput_1.Gift_certificatesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyGift_certificatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyGift_certificatesArgs.prototype, "skipDuplicates", void 0);
CreateManyGift_certificatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyGift_certificatesArgs);
exports.CreateManyGift_certificatesArgs = CreateManyGift_certificatesArgs;
