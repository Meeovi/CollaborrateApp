import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessagesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MessagesOrderByWithRelationAndSearchRelevanceInput";
import { MessagesWhereInput } from "../../../inputs/MessagesWhereInput";
import { MessagesWhereUniqueInput } from "../../../inputs/MessagesWhereUniqueInput";
import { MessagesScalarFieldEnum } from "../../../../enums/MessagesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CustomersMessagesArgs {
  @TypeGraphQL.Field(_type => MessagesWhereInput, {
    nullable: true
  })
  where?: MessagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MessagesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MessagesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MessagesWhereUniqueInput, {
    nullable: true
  })
  cursor?: MessagesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MessagesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "from" | "created_at" | "subject" | "content" | "sender" | "cust_id" | "media" | "staff_id"> | undefined;
}
