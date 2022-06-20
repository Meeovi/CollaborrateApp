import * as TypeGraphQL from "type-graphql";

export enum PartnersOrderByRelevanceFieldEnum {
  name = "name",
  address = "address",
  city = "city",
  state = "state",
  country = "country",
  isPublic = "isPublic",
  business_type = "business_type"
}
TypeGraphQL.registerEnumType(PartnersOrderByRelevanceFieldEnum, {
  name: "PartnersOrderByRelevanceFieldEnum",
  description: undefined,
});
