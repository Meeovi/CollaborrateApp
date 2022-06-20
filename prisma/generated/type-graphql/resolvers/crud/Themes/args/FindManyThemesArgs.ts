import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ThemesOrderByWithRelationAndSearchRelevanceInput";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";
import { ThemesWhereUniqueInput } from "../../../inputs/ThemesWhereUniqueInput";
import { ThemesScalarFieldEnum } from "../../../../enums/ThemesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyThemesArgs {
  @TypeGraphQL.Field(_type => ThemesWhereInput, {
    nullable: true
  })
  where?: ThemesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThemesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ThemesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ThemesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThemesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ThemesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "parent_theme" | "theme_path" | "action" | "website_id"> | undefined;
}
