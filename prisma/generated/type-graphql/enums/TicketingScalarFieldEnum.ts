import * as TypeGraphQL from "type-graphql";

export enum TicketingScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  location = "location",
  date = "date",
  severity = "severity",
  team = "team",
  requester = "requester",
  requester_email = "requester_email",
  content = "content",
  department = "department",
  media = "media",
  projects = "projects",
  ticket_type = "ticket_type",
  comment = "comment",
  products = "products",
  priority = "priority",
  status = "status",
  resolution = "resolution",
  assigned_to = "assigned_to",
  date_modified = "date_modified",
  account_name = "account_name",
  level = "level"
}
TypeGraphQL.registerEnumType(TicketingScalarFieldEnum, {
  name: "TicketingScalarFieldEnum",
  description: undefined,
});
