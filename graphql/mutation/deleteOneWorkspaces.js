import gql from 'graphql-tag'
export const deleteOneWorkspaces = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneWorkspaces (
    where: {
    id: $id,
    }
  ) } {
    author
    brands
    brands_brandsToworkspaces
    categories
    category
    code
    created_at
    customers
    customers_customersToworkspaces
    description
    id
    isPublic
    media
    name
    products
    products_productsToworkspaces
    projects
    projects_projectsToworkspaces
    shops
    shops_shopsToworkspaces
    tasks
    tasks_tasksToworkspaces
    users
    users_usersToworkspaces
  }`
