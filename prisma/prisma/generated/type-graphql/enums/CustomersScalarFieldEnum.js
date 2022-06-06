"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CustomersScalarFieldEnum;
(function (CustomersScalarFieldEnum) {
    CustomersScalarFieldEnum["id"] = "id";
    CustomersScalarFieldEnum["thumbnail"] = "thumbnail";
    CustomersScalarFieldEnum["name_prefix"] = "name_prefix";
    CustomersScalarFieldEnum["first_name"] = "first_name";
    CustomersScalarFieldEnum["middle_name"] = "middle_name";
    CustomersScalarFieldEnum["last_name"] = "last_name";
    CustomersScalarFieldEnum["email"] = "email";
    CustomersScalarFieldEnum["customer_group"] = "customer_group";
    CustomersScalarFieldEnum["phone"] = "phone";
    CustomersScalarFieldEnum["zipcode"] = "zipcode";
    CustomersScalarFieldEnum["name_suffix"] = "name_suffix";
    CustomersScalarFieldEnum["websites"] = "websites";
    CustomersScalarFieldEnum["product"] = "product";
    CustomersScalarFieldEnum["country"] = "country";
    CustomersScalarFieldEnum["state"] = "state";
    CustomersScalarFieldEnum["customer_since"] = "customer_since";
    CustomersScalarFieldEnum["confirmed_email"] = "confirmed_email";
    CustomersScalarFieldEnum["date_of_birth"] = "date_of_birth";
    CustomersScalarFieldEnum["tax_vat_number"] = "tax_vat_number";
    CustomersScalarFieldEnum["gender"] = "gender";
    CustomersScalarFieldEnum["description"] = "description";
    CustomersScalarFieldEnum["short_description"] = "short_description";
    CustomersScalarFieldEnum["image"] = "image";
    CustomersScalarFieldEnum["Address"] = "Address";
    CustomersScalarFieldEnum["address_two"] = "address_two";
    CustomersScalarFieldEnum["payment_type"] = "payment_type";
    CustomersScalarFieldEnum["username"] = "username";
    CustomersScalarFieldEnum["password"] = "password";
})(CustomersScalarFieldEnum = exports.CustomersScalarFieldEnum || (exports.CustomersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CustomersScalarFieldEnum, {
    name: "CustomersScalarFieldEnum",
    description: undefined,
});
