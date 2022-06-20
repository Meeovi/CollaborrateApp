import * as TypeGraphQL from "type-graphql";

export enum CollectionsOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  image = "image",
  product = "product",
  meta_title = "meta_title",
  meta_keywords = "meta_keywords",
  meta_description = "meta_description"
}
TypeGraphQL.registerEnumType(CollectionsOrderByRelevanceFieldEnum, {
  name: "CollectionsOrderByRelevanceFieldEnum",
  description: undefined,
});
