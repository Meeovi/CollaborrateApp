import * as TypeGraphQL from "type-graphql";

export enum CustomizationsOrderByRelevanceFieldEnum {
  site_name = "site_name",
  nav_link = "nav_link",
  notification = "notification",
  banner = "banner",
  footer_link = "footer_link",
  announcement = "announcement",
  email = "email",
  site_url = "site_url",
  allow_signup = "allow_signup"
}
TypeGraphQL.registerEnumType(CustomizationsOrderByRelevanceFieldEnum, {
  name: "CustomizationsOrderByRelevanceFieldEnum",
  description: undefined,
});
