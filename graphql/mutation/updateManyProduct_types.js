import gql from 'graphql-tag'
export const updateManyProduct_types = gql`
mutation (
    data: {
    $filter_options: NullableStringFieldUpdateOperationsInput!,
    $isShippable: NullableStringFieldUpdateOperationsInput!,
    $meta_description: NullableStringFieldUpdateOperationsInput!,
    $meta_url: NullableStringFieldUpdateOperationsInput!,
    $prod_id: BigIntFieldUpdateOperationsInput!,
    $product_type: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $taxes: NullableStringFieldUpdateOperationsInput!,
    $type_name: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [Product_typesWhereInput!]!,
    $NOT: [Product_typesWhereInput!]!,
    $OR: [Product_typesWhereInput!]!,
    $filter_options: StringNullableFilter!,
    $id: IntFilter!,
    $isShippable: StringNullableFilter!,
    $meta_description: StringNullableFilter!,
    $meta_url: StringNullableFilter!,
    $prod_id: BigIntFilter!,
    $product_type: StringNullableFilter!,
    $products: StringNullableFilter!,
    $taxes: StringNullableFilter!,
    $type_name: StringNullableFilter!,
    }
  ) {
updateManyProduct_types (
    data: {
    filter_options: $filter_options,
    isShippable: $isShippable,
    meta_description: $meta_description,
    meta_url: $meta_url,
    prod_id: $prod_id,
    product_type: $product_type,
    products: $products,
    taxes: $taxes,
    type_name: $type_name,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    filter_options: $filter_options,
    id: $id,
    isShippable: $isShippable,
    meta_description: $meta_description,
    meta_url: $meta_url,
    prod_id: $prod_id,
    product_type: $product_type,
    products: $products,
    taxes: $taxes,
    type_name: $type_name,
    }
  ) } {
    count
  }`
