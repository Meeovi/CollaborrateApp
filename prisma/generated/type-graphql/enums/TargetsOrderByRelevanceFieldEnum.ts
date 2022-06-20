import * as TypeGraphQL from "type-graphql";

export enum TargetsOrderByRelevanceFieldEnum {
  Prefix = "Prefix",
  first_name = "first_name",
  last_name = "last_name",
  department = "department",
  account_name = "account_name",
  address = "address",
  postalcode = "postalcode",
  city = "city",
  state = "state",
  country = "country",
  email = "email",
  description = "description",
  fax = "fax",
  website = "website",
  mobile = "mobile",
  job_title = "job_title",
  alt_address = "alt_address",
  alt_postalcode = "alt_postalcode",
  alt_city = "alt_city",
  alt_state = "alt_state",
  alt_country = "alt_country",
  office_phone = "office_phone",
  customer_name = "customer_name",
  email_opt_out = "email_opt_out",
  donotcall = "donotcall"
}
TypeGraphQL.registerEnumType(TargetsOrderByRelevanceFieldEnum, {
  name: "TargetsOrderByRelevanceFieldEnum",
  description: undefined,
});
