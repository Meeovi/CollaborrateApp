import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePagesArgs {
  @TypeGraphQL.Field(_type => PagesWhereUniqueInput, {
    nullable: false
  })
  where!: PagesWhereUniqueInput;
}
