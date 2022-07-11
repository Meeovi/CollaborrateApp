import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingCreateInput } from "../../../inputs/SettingsmarketingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSettingsmarketingArgs {
  @TypeGraphQL.Field(_type => SettingsmarketingCreateInput, {
    nullable: false
  })
  data!: SettingsmarketingCreateInput;
}
