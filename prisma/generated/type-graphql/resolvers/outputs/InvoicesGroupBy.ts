import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoicesAvgAggregate } from "../outputs/InvoicesAvgAggregate";
import { InvoicesCountAggregate } from "../outputs/InvoicesCountAggregate";
import { InvoicesMaxAggregate } from "../outputs/InvoicesMaxAggregate";
import { InvoicesMinAggregate } from "../outputs/InvoicesMinAggregate";
import { InvoicesSumAggregate } from "../outputs/InvoicesSumAggregate";

@TypeGraphQL.ObjectType("InvoicesGroupBy", {
  isAbstract: true
})
export class InvoicesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  invoice!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  order_number!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  invoice_date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bill_to_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  billing_address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total_base!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total_purchased!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_group!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_method!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_information!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_and_handling!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => InvoicesCountAggregate, {
    nullable: true
  })
  _count!: InvoicesCountAggregate | null;

  @TypeGraphQL.Field(_type => InvoicesAvgAggregate, {
    nullable: true
  })
  _avg!: InvoicesAvgAggregate | null;

  @TypeGraphQL.Field(_type => InvoicesSumAggregate, {
    nullable: true
  })
  _sum!: InvoicesSumAggregate | null;

  @TypeGraphQL.Field(_type => InvoicesMinAggregate, {
    nullable: true
  })
  _min!: InvoicesMinAggregate | null;

  @TypeGraphQL.Field(_type => InvoicesMaxAggregate, {
    nullable: true
  })
  _max!: InvoicesMaxAggregate | null;
}
