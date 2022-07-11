import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlobalConfigOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/GlobalConfigOrderByWithRelationAndSearchRelevanceInput";
import { GlobalConfigWhereInput } from "../../../inputs/GlobalConfigWhereInput";
import { GlobalConfigWhereUniqueInput } from "../../../inputs/GlobalConfigWhereUniqueInput";
import { GlobalConfigScalarFieldEnum } from "../../../../enums/GlobalConfigScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyGlobalConfigArgs {
  @TypeGraphQL.Field(_type => GlobalConfigWhereInput, {
    nullable: true
  })
  where?: GlobalConfigWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GlobalConfigOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: GlobalConfigOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => GlobalConfigWhereUniqueInput, {
    nullable: true
  })
  cursor?: GlobalConfigWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GlobalConfigScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"objectId" | "params" | "masterKeyOnly"> | undefined;
}
