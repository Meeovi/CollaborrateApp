import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWebsitesArgs {
  @TypeGraphQL.Field(_type => WebsitesWhereUniqueInput, {
    nullable: false
  })
  where!: WebsitesWhereUniqueInput;
}
