import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvitationsWhereUniqueInput } from "../../../inputs/InvitationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueInvitationsArgs {
  @TypeGraphQL.Field(_type => InvitationsWhereUniqueInput, {
    nullable: false
  })
  where!: InvitationsWhereUniqueInput;
}
