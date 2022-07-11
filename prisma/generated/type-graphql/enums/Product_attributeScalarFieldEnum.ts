import * as TypeGraphQL from "type-graphql";

export enum Product_attributeScalarFieldEnum {
  id = "id",
  default_label = "default_label",
  attribute_code = "attribute_code",
  filter_options = "filter_options",
  use_search = "use_search",
  layered_navigation = "layered_navigation",
  search_results_layered_navigation = "search_results_layered_navigation",
  position = "position",
  promo_rule_conditions = "promo_rule_conditions",
  allow_html_tags_storefront = "allow_html_tags_storefront",
  visible_catalog_pages_storefront = "visible_catalog_pages_storefront",
  used_product_listing = "used_product_listing",
  used_sorting_product_listing = "used_sorting_product_listing",
  prod_id = "prod_id",
  attribute_class = "attribute_class",
  attribute_value = "attribute_value",
  column_options = "column_options",
  faceted_navigation = "faceted_navigation",
  isPublic = "isPublic",
  meta_description = "meta_description",
  meta_name = "meta_name",
  meta_url = "meta_url"
}
TypeGraphQL.registerEnumType(Product_attributeScalarFieldEnum, {
  name: "Product_attributeScalarFieldEnum",
  description: undefined,
});
