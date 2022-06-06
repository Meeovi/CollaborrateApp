"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateOrConnectWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrdersCreateWithoutTransactionsInput_1 = require("../inputs/OrdersCreateWithoutTransactionsInput");
const OrdersWhereUniqueInput_1 = require("../inputs/OrdersWhereUniqueInput");
let OrdersCreateOrConnectWithoutTransactionsInput = class OrdersCreateOrConnectWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersWhereUniqueInput_1.OrdersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersWhereUniqueInput_1.OrdersWhereUniqueInput)
], OrdersCreateOrConnectWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrdersCreateWithoutTransactionsInput_1.OrdersCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrdersCreateWithoutTransactionsInput_1.OrdersCreateWithoutTransactionsInput)
], OrdersCreateOrConnectWithoutTransactionsInput.prototype, "create", void 0);
OrdersCreateOrConnectWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrdersCreateOrConnectWithoutTransactionsInput", {
        isAbstract: true
    })
], OrdersCreateOrConnectWithoutTransactionsInput);
exports.OrdersCreateOrConnectWithoutTransactionsInput = OrdersCreateOrConnectWithoutTransactionsInput;
