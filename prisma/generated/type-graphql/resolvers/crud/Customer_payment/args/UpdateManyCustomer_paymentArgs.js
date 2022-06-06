"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentUpdateManyMutationInput_1 = require("../../../inputs/Customer_paymentUpdateManyMutationInput");
const Customer_paymentWhereInput_1 = require("../../../inputs/Customer_paymentWhereInput");
let UpdateManyCustomer_paymentArgs = class UpdateManyCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentUpdateManyMutationInput_1.Customer_paymentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Customer_paymentUpdateManyMutationInput_1.Customer_paymentUpdateManyMutationInput)
], UpdateManyCustomer_paymentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereInput_1.Customer_paymentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereInput_1.Customer_paymentWhereInput)
], UpdateManyCustomer_paymentArgs.prototype, "where", void 0);
UpdateManyCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCustomer_paymentArgs);
exports.UpdateManyCustomer_paymentArgs = UpdateManyCustomer_paymentArgs;
