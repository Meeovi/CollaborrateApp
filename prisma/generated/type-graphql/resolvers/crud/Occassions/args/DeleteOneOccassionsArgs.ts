import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccassionsWhereUniqueInput } from "../../../inputs/OccassionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOccassionsArgs {
  @TypeGraphQL.Field(_type => OccassionsWhereUniqueInput, {
    nullable: false
  })
  where!: OccassionsWhereUniqueInput;
}
