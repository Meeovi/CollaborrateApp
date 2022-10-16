"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Currency_ratesCreateManyInput = class Currency_ratesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesCreateManyInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Currency_ratesCreateManyInput.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Currency_ratesCreateManyInput.prototype, "id", void 0);
Currency_ratesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesCreateManyInput", {
        isAbstract: true
    })
], Currency_ratesCreateManyInput);
exports.Currency_ratesCreateManyInput = Currency_ratesCreateManyInput;
