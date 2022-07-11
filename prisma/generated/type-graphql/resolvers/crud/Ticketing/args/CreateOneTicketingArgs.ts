import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingCreateInput } from "../../../inputs/TicketingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingCreateInput, {
    nullable: false
  })
  data!: TicketingCreateInput;
}
