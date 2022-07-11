import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsCreateInput } from "../../../inputs/RewardsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsCreateInput, {
    nullable: false
  })
  data!: RewardsCreateInput;
}
