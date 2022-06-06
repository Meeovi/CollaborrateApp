"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Customer_paymentWhereUniqueInput = class Customer_paymentWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_paymentWhereUniqueInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Customer_paymentWhereUniqueInput.prototype, "account_no", void 0);
Customer_paymentWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentWhereUniqueInput", {
        isAbstract: true
    })
], Customer_paymentWhereUniqueInput);
exports.Customer_paymentWhereUniqueInput = Customer_paymentWhereUniqueInput;
