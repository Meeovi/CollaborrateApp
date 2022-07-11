import * as TypeGraphQL from "type-graphql";

export enum ContractsOrderByRelevanceFieldEnum {
  contract_title = "contract_title",
  contract_value = "contract_value",
  start_date = "start_date",
  end_date = "end_date",
  renewal_reminder = "renewal_reminder",
  customer_signed_date = "customer_signed_date",
  company_signed_date = "company_signed_date",
  status = "status",
  contract_manager = "contract_manager",
  account = "account",
  contact = "contact",
  description = "description",
  opportunity = "opportunity",
  contract_type = "contract_type",
  currency = "currency",
  line_items = "line_items",
  total = "total",
  discount = "discount",
  subtotal = "subtotal",
  shipping = "shipping",
  shipping_tax = "shipping_tax",
  tax = "tax",
  grand_total = "grand_total"
}
TypeGraphQL.registerEnumType(ContractsOrderByRelevanceFieldEnum, {
  name: "ContractsOrderByRelevanceFieldEnum",
  description: undefined,
});
