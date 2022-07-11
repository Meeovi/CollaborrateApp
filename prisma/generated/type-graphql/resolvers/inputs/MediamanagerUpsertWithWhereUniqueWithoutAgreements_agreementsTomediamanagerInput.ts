import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerUpdateWithoutAgreements_agreementsTomediamanagerInput } from "../inputs/MediamanagerUpdateWithoutAgreements_agreementsTomediamanagerInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerUpsertWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerUpsertWithWhereUniqueWithoutAgreements_agreementsTomediamanagerInput {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateWithoutAgreements_agreementsTomediamanagerInput, {
    nullable: false
  })
  update!: MediamanagerUpdateWithoutAgreements_agreementsTomediamanagerInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput, {
    nullable: false
  })
  create!: MediamanagerCreateWithoutAgreements_agreementsTomediamanagerInput;
}
